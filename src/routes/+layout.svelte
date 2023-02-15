<script>
  import "prism-themes/themes/prism-one-dark.css";
    import { get_spread_object, object_without_properties } from "svelte/internal";
</script>

<svelte:head>
 <link rel="stylesheet" href="/pico.min.css" /> 
 <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
 <script src="https://kit.fontawesome.com/91ed277111.js" crossorigin="anonymous"></script>


 

  <style>
    body{
      background-color: #0f032a;
      margin : 0;
      box-sizing:border-box;
      margin: 0;
      padding: 0;
     
      }

   
    nav {
      background-color:#0f032a;
      overflow:hidden;
      scroll-behavior:smooth;
    }


    .nav_container {
        height:calc(3em + 4px);}

    #div-sec {
          padding:calc(1em + 2px);
          width:100vw;
          
        }
    a {
            border:solid 1px transparent;
            padding:1em;
            
      }

    
          
          
        
   

  </style>
    
</svelte:head>



<nav>
  <div class="nav_container">
    <div id="div-sec">
      <a id="homepage" href="/#main"  class="linkstyle">Hem</a>
      <a id="homepage" href="#blogg_nav"  class="linkstyle">Blogg</a>
    </div>
    <div id ="div-sec">
    
      <a id="blogg_nav" href="/#homepage"  class="linkstyle">Back</a>
      <a href="/devblog/blogg1" class="linkstyle">Blogg 1</a>
      <a href="/devblog/blogg2" class="linkstyle">Blogg 2</a>
      <a href="/devblog/blogg3" class="linkstyle">Blogg 3</a>
      <a href="/devblog/blogg4" class="linkstyle">Blogg 4</a>
      <a href="/devblog/blogg5" class="linkstyle">Blogg 5</a>
      <a href="/devblog/blogg6" class="linkstyle">Blogg 6</a>
      
  </div>
  </div>
</nav>

<main class="container-fluid" id="main">
  <hr />

  <main class="container">
    <slot />
  </main>
</main>
<style global>
  .container-fluid{
    background-color: #0f032a;
    position:absolute;
  }
  .container{
    background-color: #0f032a;
  }



  .linkstyle{
    color: white;
    margin-right: 1%;
    margin-bottom: 1%;
    font-size: 100%;
    text-decoration: none;
  
}



.linkstyle::before{
  content: "";
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
  


.linkstyle:hover::before {
  transform: scaleX(1);
}
.linkstyle:active{
  
  background-color: rgba(30, 139, 195,0.2) ;
  text-shadow: 0 0 2px #fff;
}

</style>
