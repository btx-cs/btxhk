<script lang="ts">
  import { onMount } from 'svelte';

  import LOGO from './assets/logo.svelte';
  import LOGOB from './assets/logo-g.svelte';
  import LOGOW from './assets/logo-w.svelte';
  import Quote from './Quote.svelte';
  import Price from './Price.svelte';
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
  <Quote/>
  <!-- <Price/> -->
</main>

<style>
  .header {
    position: fixed;
    top: -60px;
    left: -2%;
    width: 100%;
    padding: 10px;
    z-index: 9999;
    filter: drop-shadow(0 0 4em #0063be);
  }
  .headerw {
    position: fixed;
    top: -60px;
    left: -2%;
    width: 100%;
    padding: 10px;
    z-index: 9999;
    animation: flashinga 9s infinite;
  }
  .headerb {
    position: fixed;
    top: -60px;
    left: -2%;
    width: 100%;
    padding: 10px;
    z-index: 9999;
    animation: flashingb 9s infinite;
    filter: drop-shadow(0 0 1em #ffffff);
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
