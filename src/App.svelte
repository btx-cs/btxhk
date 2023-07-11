<script lang="ts">

  // import Login from './Login.svelte';
  import LOGO from './assets/logo.svelte';
  import LOGOB from './assets/logo-b.svelte';
  import LOGOW from './assets/logo-w.svelte';
  import Quote from './Quote.svelte';
  import Back from './Background.svelte';


</script>

<main>

<div class="header">
<LOGO/>
</div>
<div class="headerw">
<LOGOW/>
</div>
<div class="headerb">
<LOGOB/>
</div>


<div class="body">
<Back/>
</div>
<!-- <Quote/> -->


</main>

<style>
.header {
  position: fixed;
  top: 0;
  left: -2%;
  width: 100%;
  height: 111em;
  padding: 10px;
  z-index: 9999;
  filter: drop-shadow(0 0 4em #0063be);
}
.headerw {
  position: fixed;
  top: 0;
  left: -2%;
  width: 100%;
  height: 111em;
  padding: 10px;
  z-index: 9999;
  animation: flashinga 9s infinite;
}
.headerb {
  position: fixed;
  top: 0;
  left: -2%;
  width: 100%;
  height: 111em;
  padding: 10px;
  z-index: 9999;
  animation: flashingb 9s infinite;
}
.body {
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  filter: drop-shadow(0 0 4em #0063be);
}
</style>
