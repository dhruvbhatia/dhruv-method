(function(e){function t(t){for(var o,c,u=t[0],l=t[1],s=t[2],i=0,b=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},r=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"da8cf15c","chunk-e17679c2":"f37b7a0d"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var s=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}a[e]=void 0}};var i=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dhruv-method/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0124":function(e,t,n){"use strict";n("c438")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"p-m-2"};function r(e,t,n,r,c,u){var l=Object(o["B"])("TopMenu"),s=Object(o["B"])("router-view");return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["j"])(l),Object(o["j"])("div",a,[Object(o["j"])(s)])],64)}var c=Object(o["i"])(" Dhruv Method "),u=Object(o["i"])(" Beer is good for you 🍻 ");function l(e,t,n,a,r,l){var s=Object(o["B"])("Menubar");return Object(o["t"])(),Object(o["f"])(s,{model:r.items},{start:Object(o["K"])((function(){return[c]})),end:Object(o["K"])((function(){return[u]})),_:1},8,["model"])}var s={name:"TopMenu",data:function(){return{items:[{label:"Hottest Coins",icon:"pi pi-fw pi-sun",to:"/"},{label:"Whale Stalker",icon:"pi pi-fw pi-users",to:"/stalk"},{label:"My Portfolio",icon:"pi pi-chart-bar",to:"/portfolio"}]}}};s.render=l;var i=s,d={name:"App",components:{TopMenu:i}};n("0124");d.render=r;var b=d,f=n("9319"),p=n("c0c3"),m=n("4344"),h=n("5b2c"),j=n("6f85"),O=n("1f80"),y=(n("f623"),n("e1ae"),n("bddf"),n("4121"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),v=Object(o["O"])("data-v-0d8e5c48");Object(o["w"])("data-v-0d8e5c48");var g={class:"hot"},C={class:"p-grid"},T={class:"p-col-4"},A=Object(o["j"])("label",{for:"transactionCount"},"# of Trades: ",-1),B={class:"p-col-4"},w=Object(o["j"])("label",{for:"amountThreshold"},"Min Trade Amount: ",-1),k={class:"p-col-4"},S={key:0,class:"p-col-6"},U={key:1,class:"p-col-6"},x=Object(o["j"])("h1",null,"🔥 Recent big trades:",-1),D={key:2,class:"p-col-6"},I={key:3,class:"p-col-6"},P=Object(o["j"])("h1",null,"🪙 Top Shitcoins by $ value transacted sonny:",-1);Object(o["u"])();var M=v((function(e,t,n,a,r,c){var u=Object(o["B"])("Dropdown"),l=Object(o["B"])("InputNumber"),s=Object(o["B"])("Button"),i=Object(o["B"])("ProgressSpinner"),d=Object(o["B"])("Column"),b=Object(o["B"])("Chip"),f=Object(o["B"])("DataTable"),p=Object(o["B"])("Chart");return Object(o["t"])(),Object(o["f"])("div",g,[Object(o["j"])("div",C,[Object(o["j"])("div",T,[A,Object(o["j"])(u,{id:"transactionCount",modelValue:r.selectedTransactionCount,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.selectedTransactionCount=e}),options:r.transactionCount,optionLabel:"name",optionValue:"code",placeholder:"# of transactions",onChange:t[2]||(t[2]=function(e){return c.getTopTrades(e)})},null,8,["modelValue","options"])]),Object(o["j"])("div",B,[w,Object(o["j"])(l,{id:"amountThreshold",modelValue:r.selectedAmountThreshold,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.selectedAmountThreshold=e}),mode:"currency",currency:"USD",locale:"en-US",onUpdated:t[4]||(t[4]=function(e){return c.getTopTrades(e)})},null,8,["modelValue"])]),Object(o["j"])("div",k,[Object(o["j"])(s,{label:"Refresh",onClick:t[5]||(t[5]=function(e){return c.getTopTrades(e)})})]),r.loading?(Object(o["t"])(),Object(o["f"])("div",S,[Object(o["j"])(i)])):(Object(o["t"])(),Object(o["f"])("div",U,[x,Object(o["j"])(f,{value:r.bitquery,responsiveLayout:"scroll",paginator:!0,rows:10},{default:v((function(){return[Object(o["j"])(d,{field:"timeInterval.second",header:"Time",sortable:!0},{body:v((function(e){var t=e.data;return[Object(o["i"])(Object(o["F"])(new Date(t.timeInterval.second+" UTC").toLocaleString("en-AU",{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"numeric",hour12:!0})),1)]})),_:1}),Object(o["j"])(d,{field:"sellCurrency.symbol",header:"Bought",sortable:!0}),Object(o["j"])(d,{field:"sellAmount",header:"Amount #",sortable:!0}),Object(o["j"])(d,{field:"buyAmountInUsd",header:"Amount $",sortable:!0},{body:v((function(e){var t=e.data;return[Object(o["j"])("div",{class:c.amountClass(t)},Object(o["F"])(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.buyAmountInUsd)),3)]})),_:1}),Object(o["j"])(d,{field:"transaction.hash",header:"Transaction",sortable:!0},{body:v((function(e){var t=e.data;return[Object(o["j"])("a",{href:"https://bscscan.com/tx/"+t.transaction.hash,target:"new"},[Object(o["j"])(b,{label:t.transaction.hash.substring(0,6)+"...",icon:"pi pi-external-link"},null,8,["label"])],8,["href"])]})),_:1})]})),_:1},8,["value"])])),r.loading?(Object(o["t"])(),Object(o["f"])("div",D,[Object(o["j"])(i)])):(Object(o["t"])(),Object(o["f"])("div",I,[P,Object(o["j"])(p,{type:"bar",data:c.structureChartData,options:r.chartOptions},null,8,["data","options"])]))])])})),q=n("1da1"),_=n("3835"),V=(n("96cf"),n("d81d"),n("a630"),n("4ec9"),n("99af"),n("2ef0")),N=n.n(V),E={data:function(){return{bitquery:null,loading:!1,selectedTransactionCount:2,selectedAmountThreshold:1e4,transactionCount:[{name:"2",code:2},{name:"10",code:10},{name:"50",code:50},{name:"100",code:100},{name:"500",code:500}],chartData:{labels:["HOTCROSS","XVS"],datasets:[{label:"Weighted Avg",backgroundColor:"#42A5F5",data:[19960.76,29113.57]}]},chartOptions:{legend:{display:!0,labels:{fontColor:"#ffffffde",fontSize:16}},scales:{yAxes:[{ticks:{callback:function(e){return"$"+e},fontColor:"#ffffffde",fontSize:16}}],xAxes:[{ticks:{fontColor:"#ffffffde",fontSize:16}}]}}}},beforeMount:function(){this.getTopTrades()},computed:{structureChartData:function(){var e=N.a.map(this.bitquery,"sellCurrency.symbol"),t=N.a.map(this.bitquery,"tradeAmount"),n=N.a.zipWith(e,t,(function(e,t){return{symbol:e,value:t}})),o=Array.from(n.reduce((function(e,t){var n=t.symbol,o=t.value;return e.set(n,(e.get(n)||0)+o)}),new Map),(function(e){var t=Object(_["a"])(e,2),n=t[0],o=t[1];return{symbol:n,value:o}}));return o=N.a.reverse(N.a.sortBy(o,["value"])),e=N.a.map(N.a.uniqBy(o,"symbol"),"symbol"),t=N.a.map(N.a.uniqBy(o,"value"),"value"),console.log("summed"),console.log(o),{labels:e,datasets:[{label:"Amount Bought $",backgroundColor:"#42A5F5",data:t}]}}},methods:{getTopTrades:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.bitquery=null,e.loading=!0,e.axios({url:"https://graphql.bitquery.io",method:"post",headers:{"X-API-KEY":"BQYPGo0RgLC02Cl47EOVo8UvQGxHhO2S","Content-Type":"application/json"},data:{query:'\n      query BigTrades {\n        ethereum(network: bsc) {\n    dexTrades(\n      options: {desc: "timeInterval.second", limit: '.concat(e.selectedTransactionCount,'}\n      exchangeName: {in: ["Pancake", "Pancake v2"]}\n      tradeAmountUsd: {gt: ').concat(e.selectedAmountThreshold,'}\n      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}\n      sellCurrency: {notIn: ["BUNNY", "CAKE", "BNB", "WBNB", "USDT", "BUSD", "Cake", "ETH", "BTC", "BTCB", "LINK", "XRP", "ADA", "DOT"]}\n    ) {\n      transaction {\n        hash\n      }\n      smartContract {\n        address {\n          address\n        }\n        contractType\n        currency {\n          name\n        }\n      }\n      tradeIndex\n      date {\n        date\n      }\n      block {\n        height\n      }\n      buyAmount\n      buyAmountInUsd: buyAmount(in: USD)\n      buyCurrency {\n        symbol\n        address\n      }\n      sellAmount\n      sellAmountInUsd: sellAmount(in: USD)\n      sellCurrency {\n        symbol\n        address\n      }\n      sellAmountInUsd: sellAmount(in: USD)\n      tradeAmount(in: USD)\n      transaction {\n        gasValue\n        gasPrice\n        gas\n      }\n      timeInterval {\n        second\n      }\n    }\n  }\n        }\n      ')}}).then((function(t){console.log(t.data),e.bitquery=t.data.data.ethereum.dexTrades,e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},amountClass:function(e){return console.log(e),[{normalAmount:e.buyAmountInUsd<=99999,largeAmount:e.buyAmountInUsd>=1e5}]}}};n("7872");E.render=M,E.__scopeId="data-v-0d8e5c48";var L=E,R=[{path:"/",name:"Hottest Coins",component:L},{path:"/stalk",name:"Stalk",component:function(){return n.e("about").then(n.bind(null,"23e6"))}},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("about").then(n.bind(null,"c9e5"))}}],F=Object(y["a"])({history:Object(y["b"])("/dhruv-method/"),routes:R}),H=F,K=n("bc3a"),z=n.n(K),W=n("2106"),$=n.n(W),G=n("bb57"),X=n("a1e6"),Y=n("a469"),J=n("0100"),Q=n("3822"),Z=n("9899"),ee=Object(o["e"])(b).use(H);ee.use(f["a"]),ee.use($.a,z.a),ee.component("Menubar",p["a"]),ee.component("Chart",m["a"]),ee.component("DataTable",h["a"]),ee.component("Column",j["a"]),ee.component("ColumnGroup",O["a"]),ee.component("Button",G["a"]),ee.component("Chip",X["a"]),ee.component("ProgressSpinner",Y["a"]),ee.component("Dropdown",J["a"]),ee.component("InputNumber",Q["a"]),ee.component("Card",Z["a"]),ee.mount("#app")},7872:function(e,t,n){"use strict";n("8d8a")},"8d8a":function(e,t,n){},c438:function(e,t,n){}});
//# sourceMappingURL=app.aa4ee43d.js.map