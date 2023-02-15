<script>
  let clicks = 100;
  let multiplier = 1;
  let workers = [];
  let pictures = []
  let worker_multiplier = 1;


  let upgrades = [
    { cost: 15, name: "booster", multiplier: 2, worker: 0 },
    { cost: 5, name: "worker", multiplier: 0, worker: 1 , url: 'src\\routes\\img\\minerpng.png' }
  ];

  function increment() {
    if (clicks <= 999999999999){
      clicks = clicks + multiplier;

      console.log("click" + clicks);

        
    }
   
  }

</script>
<div id = 'alert' class="alert">
<div  class="alert-content">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">X</span> 
    <strong>Click some more first!</strong> 
</div>
</div>

<article style="background-color: #0f032a
;">
  <header style="background-color: #0f032a
;">
  
    <div class="grid">
      {#each upgrades as upgrade}
        <button
          class="upgrade"
          id="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
                upgrade.cost *= 2
              }
              if (upgrade.worker) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                // För att url ska läggas till i listan som heter pictures
                pictures=[upgrade.url, ...pictures]
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
                upgrade.cost *= 2;
              }
            } else {
              document.getElementById('alert').style.display='block';
              
            }
                      
            var alert = document.getElementById("alert");
            
            
            var span = document.getElementsByClassName("closebtn")[0];
            

            span.onclick = function() {
              alert.style.display = "none";
            }
            
            window.onclick = function(event) {
              if (event.target == alert) {
                alert.style.display = "none";
              }
              
            }
            window.onload = setInterval(() => alert.style.display='none', 10000)

            }}>
          <span>{upgrade.name}</span>
          <span>{upgrade.cost}</span>
        </button>
      {/each}
    </div>
  </header>
    <div class="game">
      <div class="butt-container"><button on:click={increment} class="clicker">
        <span class="clicks">{clicks}</span>
        <span class="pointtext">PPC: {multiplier}</span>
      </button></div>
    </div>
    <footer style=" background-color: #0f032a;" >
  
    <div class="panelright">
      <div>
        <span class="worker_text">Workers</span>
        <hr />
        <div class="shop">
          {#each pictures as picture}
            <div class="worker"><img src={picture} alt="worker" class="worker_img"></div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>


<style>

  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 10px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    
  }

  .upgrade {
    position: relative;
    letter-spacing: 5px;
    background-color: transparent;
    border: 5px solid white;
    color: rgb(255, 255, 255);
    padding: 50px;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    transition: 1.5s;
    border-radius:10px;
    transition: transform 450ms;
  }
  .upgrade:hover{ 
    box-shadow: 0 5px 10px 0 white inset,0 5px 10px 0 white,
    0 5px 50px 0 white inset,0 5px 50px 0 white;
    text-shadow: 0 0 5px white;
    
    
  }

  .upgrade:active{
    transform: scale(.96)
  }
  .worker_text{
    color: #fff;
    font-size: 20px;

  }
  
  .worker {
    margin-top: 10%;
    width: 100%;
    height: 90%;
    border: transparent;
    place-items: center;
    place-content: center;
    display: flex;
  }

  .worker_img{
    will-change: transform;
    transition: transform 450ms;

  }
  .worker_img:hover{
    transition: transform 125ms;
    transform: translateY(-10px);
  }

  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
    .butt-container{
      margin:500px;
    }
  .clicker {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    
    background-position: 0px -100px;
    position: center;
    letter-spacing: 5px;
    background-color: transparent;
    border: 5px solid white;
    color: white;
    padding: 50px;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    transition: 1.5s;
    width: auto;
    height: 100%;
    outline-style:initial;
    border-radius: 100px;
    cursor: pointer;
    will-change: transform;
    transition: transform 450ms;
    transition: background-color 100ms;
  }
    
 

  .clicker:hover{
    /* Om musen är över clicker-knappen*/  
    box-shadow: 0 5px 10px 0 white inset,0 5px 10px 0 white,
    0 5px 50px 0 white inset,0 5px 50px 0 white;
    /* Gör så att kanten lyser vitt*/
    text-shadow: 0 0 5px brown;
    /*Gör så att texten på det som står i .upgrade lyser vitt*/
    transition: transform 125ms;
    /*transition behöver 2 värden: namnet på saken vi vill ska animera och hur lång tid vi vill att det ska ta*/
    transform: translateY(-10px);
    /*Gör så att clickern rör sig 10 pixlar uppåt*/

  }
  .clicker:active{
    transform: scale(.96)
  }
  

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #0f032a
;
  }

  .clicks {
    font-size: 100px;
  }

  .pointtext {
    color: brown;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
  }
  
  .alert {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  animation-name: fadeIn;
  animation-duration: 0.4s;
  
}

.alert-content {
  position: fixed;
  bottom: 0;
  background-color: brown;
  width: 100%;
  animation-name: slideIn;
  animation-duration: 0.4s;
  color:#fff;
  font-size: larger;
  padding:30px;
}



.closebtn {
  margin-left: 0px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  
  
}

.closebtn:hover {
  color: black;
}

  
  
</style>
