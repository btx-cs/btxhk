<script>
  export let Sell_U = 7.785;
  export let Buy_U = 7.71;

  import U from './assets/usdt.svelte';
  import B from './assets/btc.svelte';
  import E from './assets/eth.svelte';

  let sell_btc;
  let buy_btc;
  let sell_eth;
  let buy_eth;

  async function updateETH() {
    const response = await fetch('https://api.bybit.com/v5/market/orderbook?category=spot&limit=1&symbol=ETHUSDT');
    const data = await response.json();
    const aValue = parseFloat(data.result.a[0][0]);
    const bValue = parseFloat(data.result.b[0][0]);
    const average = Math.floor((aValue + bValue) / 2);
    sell_eth = Math.floor(average * 1.025 * Sell_U);
    buy_eth = Math.floor(average * 0.975 * Buy_U);
  }

  async function updateBTC() {
    const response = await fetch('https://api.bybit.com/v5/market/orderbook?category=spot&limit=1&symbol=BTCUSDT');
    const data = await response.json();
    const aValue = parseFloat(data.result.a[0][0]);
    const bValue = parseFloat(data.result.b[0][0]);
    const average = Math.floor((aValue + bValue) / 2);
    sell_btc = Math.floor(average * 1.025 * Sell_U);
    buy_btc = Math.floor(average * 0.975 * Buy_U);
  }

  function updateValues() {
    updateETH();
    updateBTC();
  }

  setInterval(updateValues, 5000);
</script>



<main class="box">
  <h4 class="c1"><U/>USDT-HKD 即日匯率報價：</h4>
  <h1 class="c2"><h4 class="sell">{Buy_U}</h4> / <h4 class="buy">{Sell_U}</h4></h1>
  <h4 class="c3">（ 客戶賣出價 ） （ 客戶買入價 ）</h4>

  <h4 class="c4"><B/>BTC-HKD 即日匯率報價：</h4>
  <h1 class="c5"><h4 class="sell" on:click={()=>{BTC()}}>{buy_btc}</h4> / <h4 class="buy">{sell_btc}</h4></h1>
  <h4 class="c6">（ 客戶賣出價 ） （ 客戶買入價 ）</h4>

  <h4 class="c7"><E/>ETH-HKD 即日匯率報價：</h4>
  <h1 class="c8"><h4 class="sell" on:click={()=>{ETH()}}>{buy_eth}</h4> / <h4 class="buy">{sell_eth}</h4></h1>
  <h4 class="c9">（ 客戶賣出價 ） （ 客戶買入價 ）</h4>
</main>


<style>
.c1{
  position: fixed;
  top: 140px;
  left: -1%;
  width: 100%;
  padding: 6px;
}
.c2{
  position: fixed;
  top: 150px;
  left: -0.5%;
  width: 100%;
}
.c3{
  position: fixed;
  top: 245px;
  left: -0.5%;
  width: 100%;
}
.c4{
  position: fixed;
  top: 140px;
  left: -1%;
  width: 100%;
  padding: 6px;
}
.c5{
  position: fixed;
  top: 350px;
  left: -0.5%;
  width: 100%;
  font-size: 2em;
}
.c6{
  position: fixed;
  top: 440px;
  left: -0.5%;
  width: 100%;
}
.c7{
  position: fixed;
  top: 535px;
  left: -1%;
  width: 100%;
  padding: 6px;
}
.c8{
  position: fixed;
  top: 550px;
  left: -0.5%;
  width: 100%;
  font-size: 2.2em;
}
.c9{
  position: fixed;
  top: 645px;
  left: -0.5%;
  width: 100%;
}
.box{
  gap:10px;
  position: fixed;
  /* position: flex; */
}
h1{
  color:black;
  font-size:2.4em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
}
h3{
  color:black;
  font-size:0.9em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
}
h4{
  gap: 0.6em;
  color:black;
  font-size:1.1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.usdt{
  height:33px;
}
</style>
