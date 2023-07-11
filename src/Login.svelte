<script lang="ts">
  import { currentUser, pb } from './pocketbase';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  // import { AES } from 'crypto-js';
  import MMM from './assets/w3mlogo.svelte';
  import MP from './assets/w3mlogopur.svelte';
  import BB from './assets/back.svelte';

  let address    : string;
  let re_password ="";
  let password    ="";
  let isLoading  : boolean = false;
  let pw_error   : boolean = false;
  let su_error   : boolean = false;
  let new_user   : boolean = false;
  let signUpState = 0;
  export let logedin = false;

	async function connectWallet() {
		if (window.ethereum) {
			// ethereum is an object injected by the wallet. Let's check if is available
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // use the request method to get the accounts, aka logging in to Metamask
			if (accounts.length > 0) {
				// it returns an array of accounts, it should have at least 1 element
				address = accounts[0]; // update the state
			} else {
				alert('No ethereum accounts found');
			}
		} else {
			alert('No ethereum Wallet found');
		}
	}

  async function login(password) {
    await connectWallet();
    // let pw = AES.encrypt(address, password).toString().replace(/[\W_]/g,'').slice(0, 8);
    try {
        isLoading = true; // 啟用過渡畫面
        const authData = await pb.collection('users').authWithPassword(address,password);
        isLoading = false; // 關閉過渡畫面
        if ($currentUser && address){
          logedin = true;
        }
    } catch (err) {
        password = "";
        re_password = "";
        pw_error = true;
        console.error(err);
        isLoading = false; // 關閉過渡畫面（若出現錯誤）
    }
  }

  async function signUp() {
    await connectWallet();
    try {
      isLoading = true; // 啟用過渡畫面
      // let pw = AES.encrypt(address, password).toString().replace(/[\W_]/g,'').slice(0, 8);
      const data = {
          "username": address,
          "email": "",
          "emailVisibility": false,
          "password": password,
          "passwordConfirm": password,
          "msg_sent": 0,
          "address": address,
      };
      const createdUser = await pb.collection('users').create(data);
      isLoading = false; // 關閉過渡畫面
      login(password);
      } catch (err) {
        su_error = true;
        console.error(err);
        isLoading = false; // 關閉過渡畫面（若出現錯誤）
      }
  }


  function signOut() {
    address    = "";
    password   = "";
    re_password= "";
    pb.authStore.clear();
    logedin = false;
    signUpState = 0;
  }
</script>




<style>

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 290px;
    min-width: 290px;
  }

  .container {
    position: absolute;
    margin-bottom: 1em;
    margin-top: 16vh;
    align-items: center;
    justify-content: center;
  }
  .con {
    margin: 3%;
    width: 99%;
    border: 1px solid #0063be;
    border-radius: 14px;
  }

  input {
    width: 60vw;
    max-width: 333px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #0063be;
    padding: 0.6em 1.2em;
    gap: 1em;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Nunito Sans';
    background-color: rgba(94, 28, 236, 0.1);
    cursor: pointer;
    transition: background-color 0.25s;
  }

  input:hover {
    background-color: rgba(0, 0, 0, 0.8);
    filter: drop-shadow(0 0 1em #0063beaa);
  }

  input:focus,
  input:focus-visible {
    outline: 6px auto #0063be;
    background-color: rgba(94, 28, 236, 0.6);
  }


::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(256, 256, 256, 0.3);
  opacity: 1; /* Firefox */
}

.loader {
  top: 22vh;
  width: 100vw;
  position: absolute;
  width: 68px;
  height: 68px;
  animation: flashing 9s infinite; 
  filter: drop-shadow(0 0 4em rgba(94, 28, 236, 0.3)) drop-shadow(0 0 6px rgba(94, 28, 236));
}
.loader2 {
  top: 22vh;
  width: 100vw;
  position: absolute;
  width: 68px;
  height: 68px;
  animation: flashing_pur 9s infinite; 
}
button{
  width: 300px;
}
input{
  width: 250px;
}
</style>





<main max-width="100vw">
  <div class="big-container" in:fade>
    <div class="center">
      {#if isLoading}
        <div class="loading-spinner" in:fade></div>
      {:else}
        {#if logedin == true}
          <div class="center" in:fade>
            <div class="con">
              <p class="mini-text"> Login with account: <strong>{address}</strong></p>
              <!-- <h1>USDT</h1> -->
            </div>
            <br><button class="button" on:click={signOut}><red>Sign Out</red></button><br>
          </div>
        {:else}
          <div class="loader"><MMM/></div>
          <div class="loader2"><MP/></div>
          <div class="container center" in:fade>

            <form on:submit|preventDefault>

              {#if new_user}

                  {#if signUpState == 0}

                    <input in:fade class="input-center" placeholder="Setup Your Password" type="password" bind:value={password} /> <br><br>
                    <button class="button" on:click={()=>{signUpState = 1;}}>Continue</button>

                    {#if !password}
                        <p class="mini-text" on:click={()=>{new_user=false;password="";re_password="";}} cursor="pointer">sign in with a registered wallet</p>
                    {:else if password.length < 6}
                        <p in:fade class="notice">password must more than 6 characters</p>
                    {:else if password.length >= 6}
                        <p in:fade class="confirm">available password</p>
                    {/if}

                  {:else if signUpState == 1}


                    {#if !su_error}

                        <input in:fade class="input-center" placeholder="Confirm Your Password" type="password" bind:value={re_password} /> <br><br>

                    {:else}

                        <button class="button" on:click={()=>{password="";re_password="";pw_error=false;su_error=false;new_user=false; signUpState = 0;}}>Try Again</button>

                    {/if}

                    {#if password != re_password}

                            <button class="button" on:click={()=>{signUpState = 1;}}>Proceed</button>
                            <p in:fade class="notice">password should be the same as the confirmation</p>
                                              
                    {:else if password == re_password}

                        {#if su_error}
                            <p in:fade class="notice">{address}</p>
                            <p in:fade class="notice">already registered or something went wrong</p>
                            <p in:fade class="mini-text" on:click={()=>{new_user=false;password="";re_password="";pw_error=false;su_error=false;}} cursor="confirm">try to sign in with this wallet</p>
                        {:else}
                            <button class="button" on:click={signUp}>Join Us With Wallet</button>
                            {#if password != ""}
                            <p class="confirm">password confirmed</p>
                            {/if}
                        {/if}

                    {/if}

                  {/if}



                  <div on:click={()=>{password="";re_password="";pw_error=false;su_error=false;new_user=false;}} class="back"><BB/></div>


              {:else if !$currentUser}

                    <input in:fade class="input-center" placeholder="Enter Your Password" type="password" bind:value={password} /> <br>
                    <br><button in:fade class="button" on:click={()=>{login(password);}}>Login By Wallet</button>

                    {#if !password}
                        <p class="mini-text" on:click={()=>{new_user=true;password="";re_password="";pw_error=false;su_error=false;signUpState=0;}} cursor="pointer">sign up with a new wallet</p>
                    {:else if pw_error}
                        <p in:fade class="notice">Invalid password for {address}</p>
                    {:else if password}
                        <p class="mini-text" on:click={()=>{password="";re_password="";pw_error=false;su_error=false;}}> click here to clear the password </p>
                    {/if}

              {/if}
            </form>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</main>

