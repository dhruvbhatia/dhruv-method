import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Chart from 'primevue/chart'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' //optional for column grouping
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import ProgressSpinner from 'primevue/progressspinner'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Card from 'primevue/card'

const app = createApp(App).use(router)

app.use(PrimeVue)
app.use(VueAxios, axios)
app.component('Menubar', Menubar)
app.component('Chart', Chart)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Button', Button)
app.component('Chip', Chip)
app.component('ProgressSpinner', ProgressSpinner)
app.component('Dropdown', Dropdown)
app.component('InputNumber', InputNumber)
app.component('Card', Card)
app.mount('#app')
