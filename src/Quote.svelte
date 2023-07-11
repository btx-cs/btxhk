<script>
  import U from './assets/usdt.svelte';
</script>

<main>
<h3><U/>USDT / HKD 即日匯率報價：</h3>
</main>

<style>

.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 9999;
  animation: flashing 9s infinite;
}
h3{
  color:black;
  font-size:1.4em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
}
.usdt{
  height:33px;
}
</style>