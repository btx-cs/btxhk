<script>
  import U from './assets/usdt.svelte';
</script>

<main class="box">
<c1><h4><U/>USDT-HKD 即日匯率報價：</h4></c1>
<h1><h4 class="sell">7.77</h4> <h4 class="buy">7.78</h4></h1>
<c3><h4>💵 客戶賣出價 / 客戶買入價 🪙</h4></c3>

</main>

<style>
c1{
  position: fixed;
  top: 250px;
  left: -2%;
  width: 100%;
  height: 111em;
  padding: 10px;
  z-index: 9999;
}
c3{
  position: fixed;
  top: 340px;
  left: -2%;
  width: 100%;
  height: 111em;
  padding: 10px;
  z-index: 9999;
}
.box{
  gap:10px;
  /* position: flex; */
}
h1{
  color:black;
  font-size:2.5em;
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
  font-size:1.3em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.usdt{
  height:33px;
}
</style>