<template>
  <div class="hot">
    <div class="p-grid">
      <div class="p-col-4">
        <label for="transactionCount"># of Trades: </label>
        <Dropdown
          id="transactionCount"
          v-model="selectedTransactionCount"
          :options="transactionCount"
          optionLabel="name"
          optionValue="code"
          placeholder="# of transactions"
          @change="getTopTrades($event)"
        />
      </div>

      <div class="p-col-4">
        <label for="amountThreshold">Min Trade Amount: </label>
        <InputNumber
          id="amountThreshold"
          v-model="selectedAmountThreshold"
          mode="currency"
          currency="USD"
          locale="en-US"
          @updated="getTopTrades($event)"
        />
      </div>
      <div class="p-col-4">
        <Button label="Refresh" @click="getTopTrades($event)" />
      </div>

      <div v-if="loading" class="p-col-6">
        <ProgressSpinner />
      </div>
      <div v-else class="p-col-6">
        <h1>🔥 Recent big trades:</h1>
        <DataTable :value="bitquery" responsiveLayout="scroll" :paginator="true" :rows="10">
          <Column field="timeInterval.second" header="Time" :sortable="true">
            <template #body="{ data }">
              {{
                new Date(data.timeInterval.second + ' UTC').toLocaleString('en-AU', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })
              }}
            </template>
          </Column>
          <Column field="sellCurrency.symbol" header="Bought" :sortable="true"></Column>
          <Column field="sellAmount" header="Amount #" :sortable="true"></Column>
          <Column field="buyAmountInUsd" header="Amount $" :sortable="true">
            <template #body="{ data }">
              <div :class="amountClass(data)">
                {{
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                    data.buyAmountInUsd
                  )
                }}
              </div>
            </template>
          </Column>
          <Column field="transaction.hash" header="Transaction" :sortable="true">
            <template #body="{ data }">
              <a v-bind:href="'https://bscscan.com/tx/' + data.transaction.hash" target="new">
                <Chip
                  v-bind:label="data.transaction.hash.substring(0, 6) + '...'"
                  icon="pi pi-external-link"
              /></a>
            </template>
          </Column>
        </DataTable>
      </div>
      <div v-if="loading" class="p-col-6">
        <ProgressSpinner />
      </div>
      <div v-else class="p-col-6">
        <h1>🪙 Top Shitcoins by $ value transacted:</h1>
        <Chart type="bar" :data="structureChartData" :options="chartOptions" />
      </div>
      <!-- <div class="p-col-6">{{ bitquery }}</div> -->
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      bitquery: null,
      loading: false,
      selectedTransactionCount: 2,
      selectedAmountThreshold: 10000,
      transactionCount: [
        { name: '2', code: 2 },
        { name: '10', code: 10 },
        { name: '50', code: 50 },
        { name: '100', code: 100 },
        { name: '500', code: 500 },
      ],
      chartData: {
        labels: ['HOTCROSS', 'XVS'],
        datasets: [
          {
            label: 'Weighted Avg',
            backgroundColor: '#42A5F5',
            data: [19960.76, 29113.57],
          },
        ],
      },
      chartOptions: {
        legend: {
          display: true,
          labels: {
            fontColor: '#ffffffde',
            fontSize: 16,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                // Include a dollar sign in the ticks
                callback: function(value) {
                  return '$' + value
                },
                fontColor: '#ffffffde',
                fontSize: 16,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#ffffffde',
                fontSize: 16,
              },
            },
          ],
        },
      },
    }
  },
  beforeMount() {
    this.getTopTrades()
  },
  computed: {
    structureChartData() {
      var labels = _.map(this.bitquery, 'sellCurrency.symbol')
      var data = _.map(this.bitquery, 'tradeAmount')

      var zipped = _.zipWith(labels, data, function(a, b) {
        return { symbol: a, value: b }
      })

      var summed = Array.from(
        zipped.reduce(
          (m, { symbol, value }) => m.set(symbol, (m.get(symbol) || 0) + value),
          new Map()
        ),
        ([symbol, value]) => ({ symbol, value })
      )

      summed = _.reverse(_.sortBy(summed, ['value']))

      labels = _.map(_.uniqBy(summed, 'symbol'), 'symbol')
      data = _.map(_.uniqBy(summed, 'value'), 'value')

      console.log('summed')
      console.log(summed)

      return {
        labels: labels,
        datasets: [
          {
            label: 'Amount Bought $',
            backgroundColor: '#42A5F5',
            data: data,
          },
        ],
      }
    },
  },
  methods: {
    async getTopTrades() {
      this.bitquery = null
      this.loading = true

      this.axios({
        url: 'https://graphql.bitquery.io',
        method: 'post',
        headers: {
          'X-API-KEY': 'BQYPGo0RgLC02Cl47EOVo8UvQGxHhO2S',
          'Content-Type': 'application/json',
        },
        data: {
          query: `
      query BigTrades {
        ethereum(network: bsc) {
    dexTrades(
      options: {desc: "timeInterval.second", limit: ${this.selectedTransactionCount}}
      exchangeName: {in: ["Pancake", "Pancake v2"]}
      tradeAmountUsd: {gt: ${this.selectedAmountThreshold}}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      sellCurrency: {notIn: ["BUNNY", "CAKE", "BNB", "WBNB", "USDT", "BUSD", "Cake", "ETH", "BTC", "BTCB", "LINK", "XRP", "ADA", "DOT"]}
    ) {
      transaction {
        hash
      }
      smartContract {
        address {
          address
        }
        contractType
        currency {
          name
        }
      }
      tradeIndex
      date {
        date
      }
      block {
        height
      }
      buyAmount
      buyAmountInUsd: buyAmount(in: USD)
      buyCurrency {
        symbol
        address
      }
      sellAmount
      sellAmountInUsd: sellAmount(in: USD)
      sellCurrency {
        symbol
        address
      }
      sellAmountInUsd: sellAmount(in: USD)
      tradeAmount(in: USD)
      transaction {
        gasValue
        gasPrice
        gas
      }
      timeInterval {
        second
      }
    }
  }
        }
      `,
        },
      }).then(result => {
        console.log(result.data)

        this.bitquery = result.data.data.ethereum.dexTrades
        this.loading = false
      })
    },
    amountClass(data) {
      console.log(data)
      return [
        {
          normalAmount: data.buyAmountInUsd <= 99999,
          largeAmount: data.buyAmountInUsd >= 100000,
        },
      ]
    },
  },
}
</script>

<style scoped>
.normalAmount {
  font-weight: 700;
  color: #66bb6a;
}

.largeAmount {
  font-weight: 700;
  color: #ffa726;
}
</style>
