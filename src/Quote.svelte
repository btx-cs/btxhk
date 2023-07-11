<script>
  import U from './assets/usdt.svelte';
</script>

<main class="box">

<h4 class="c1"><U/>USDT-HKD 即日匯率報價：</h4>
<h1 class="c2"><h4 class="sell">7.77</h4> / <h4 class="buy">7.78</h4></h1>
<h4 class="c3">（ 客戶賣出價 ） （ 客戶買入價 ）</h4>

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
  top: 160px;
  left: -0.5%;
  width: 100%;
}
.c3{
  position: fixed;
  top: 250px;
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