<script lang="ts">
  import { onMount } from 'svelte';

  import LOGO from './assets/logo.svelte';
  import LOGOB from './assets/logo-g.svelte';
  import LOGOW from './assets/logo-w.svelte';
  import Quote from './Quote.svelte';
  import Price from './Price.svelte';
  import Back from './Background.svelte';

  let interval;

  onMount(() => {
    interval = setInterval(() => {
      // 在此处执行更新操作
    }, 60000); // 1分钟 = 60000毫秒
  });

  // 在组件卸载时清除定时器
  onDestroy(() => {
    clearInterval(interval);
  });
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
