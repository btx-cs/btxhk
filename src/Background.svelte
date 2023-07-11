<back></back>

<style>

back{
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #0063be44 0%, #ffa72244 13%, #0063be44 25%, #ffa72244 38%, #0063be44 50%, #ffa72244 62%, #0063be44 75%, #ffa72244 87%, #0063be44 100%);;
  background-size: 400% 400%;
  position: relative;
  animation: animate 9s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}


@keyframes animate{
  0%{
    background-position: 0 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
</style>