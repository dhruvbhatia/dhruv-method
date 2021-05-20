<template>
  <div class="portfolio">
    <div class="p-grid">
      <div v-if="loading" class="p-col-6">
        <ProgressSpinner />
      </div>
      <div v-else class="p-col-6">
        <h1>My Portfolio</h1>
        <Card>
          <template #title>
            Balance
          </template>
          <template v-if="balances" #content>
            <b>BNB:</b>

            {{
              new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                bnbBalanceInUSD
              )
            }}
            •
            <b>Total:</b>
            {{ totalPortfolioValue }}
          </template>
        </Card>
        <DataTable :value="balances" responsiveLayout="scroll">
          <Column field="currency.name" header="Name" :sortable="true"></Column>
          <Column field="currency.symbol" header="Symbol" :sortable="true"></Column>
          <Column field="history[0].timestamp" header="Bought" :sortable="true">
            <template #body="{ data }">
              {{
                new Date(data.history[0].timestamp).toLocaleString('en-AU', {
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
          <Column field="value" header="Amount #" :sortable="true"></Column>
          <Column field="valueUSD" header="Amount USD" :sortable="true">
            <template #body="{ data }">
              <div v-if="typeof data.valueUSD == 'number'">
                {{
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                    data.valueUSD
                  )
                }}
              </div>
            </template>
          </Column>
        </DataTable>
        BNB

        {{ bnbUSD }}
        sdasad
        {{ bnbBalance }}
        <hr />
        {{ balances }}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      balances: null,
      bnbBalance: null,
      bnbBalanceInUSD: null,
      totalPortfolioInUSD: null,
      bnbUSD: null,
      loading: null,
    }
  },
  beforeMount() {
    this.getBNBUSD()
    this.getPortfolio()
  },
  computed: {
    totalPortfolioValue() {
      // get total portfolio
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        this.balances.reduce(function(sum, n) {
          return sum + n.valueUSD
        }, 0)
      )
    },
  },
  methods: {
    async getBNBUSD() {
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
      query BNBUSD {
        ethereum(network: bsc) {
          dexTrades(options: {limit: 1, desc: "timeInterval.minute"},
            exchangeName: {is: "Pancake v2"},
            baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
            quoteCurrency: {is: "0x55d398326f99059ff775485246999027b3197955"}) {


            timeInterval {
              minute
            }


            baseCurrency {
              symbol
              address
            }
            baseAmount
            quoteCurrency {
              symbol
              address
            }
            quoteAmount

            trades: count
            quotePrice

            maximum_price: quotePrice(calculate: maximum)
            minimum_price: quotePrice(calculate: minimum)
                  median_price: quotePrice(calculate: median)

            open_price: minimum(of: block get: quote_price)
            close_price: maximum(of: block get: quote_price)

          }
        }
      }
      `,
        },
      }).then(result => {
        this.bnbUSD = result.data.data.ethereum.dexTrades[0].quotePrice
        this.loading = false
      })
    },
    async getPortfolio() {
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
      query MyBalances {
        ethereum(network: bsc) {
          address(address: {is: "0x4ab5e20a7b2ce1c2adc18eb202dc2baea8ad9bc7"}) {
            balances {
              currency {
                address
                name
                symbol
                tokenType
              }
              value
              history {
                timestamp
                value
              }
            }
          }
        }
      }
      `,
        },
      }).then(result => {
        this.balances = result.data.data.ethereum.address[0].balances

        _.map(result.data.data.ethereum.address[0].balances, this.getValueUSDForHolding)

        this.bnbBalance = _.find(this.balances, { currency: { symbol: 'BNB' } })
        this.bnbBalanceInUSD = this.bnbBalance.valueUSD

        this.loading = false
      })
    },
    async getLatestQuote(address) {
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
      query LatestQuoteInBNB {
        ethereum(network: bsc) {
          dexTrades(
            options: {limit: 1, desc: "timeInterval.minute"}
            exchangeName: {in: ["Pancake", "Pancake v2"]}
            baseCurrency: {is: "${address}"}
            quoteCurrency: {in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]}
          ) {
            timeInterval {
              minute
            }
            baseCurrency {
              symbol
              address
            }
            baseAmount
            quoteCurrency {
              symbol
              address
            }
            quoteAmount
            trades: count
            quotePrice
            median_price: quotePrice(calculate: median)
            maximum_price: quotePrice(calculate: maximum)
            minimum_price: quotePrice(calculate: minimum)
            open_price: minimum(of: block, get: quote_price)
            close_price: maximum(of: block, get: quote_price)
          }
        }
      }
      `,
        },
      }).then(result => {
        var dataIndex = _.findIndex(this.balances, function(o) {
          return o.currency.address == address
        })

        if (result.data.data.ethereum.dexTrades.length == 0) {
          // do nothing
        } else {
          // update the quoteprice

          this.balances[dataIndex].valueUSD =
            result.data.data.ethereum.dexTrades[0].quotePrice *
            this.balances[dataIndex].value *
            this.bnbUSD

          //JNR33
          if (address == '0x35ec445db1f49315b49f9cebc80f2d705a0c34e1') {
            console.log('jnr')
            this.balances[dataIndex].valueUSD = 0
          } else if (address == '0x05f2df7b3d612a23fe12162a6c996447dce728a5') {
            //yummy bug
            this.balances[dataIndex].valueUSD = 0
          }
        }
        this.loading = false
      })
    },
    getValueUSDForHolding(obj) {
      var address = obj.currency.address
      console.log(address)

      if (address.length > 3) {
        this.getLatestQuote(address).then(res => {
          console.log(res)
        })
      } else {
        // bnb address
        var dataIndex = _.findIndex(this.balances, function(o) {
          return o.currency.address == address
        })

        this.balances[dataIndex].valueUSD = this.balances[dataIndex].value * this.bnbUSD
      }

      return
    },
  },
}
</script>
