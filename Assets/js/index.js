const map = document.getElementById("svg2");
let  paths = map.getElementsByTagName('path');
const filtreButton = document.getElementById('filtreButton');
const filtre = document.getElementById('filtre');
filtreButton.addEventListener('click', function(){
    
    if(filtre.hidden){

        filtre.removeAttribute("hidden");
    }
    else {
        
        filtre.setAttribute("hidden", "hidden");
    }
    
})


for (var i = 0; i < paths.length; i++) {
    paths[i].addEventListener("mouseover", function(e){
      let pays  = e.target;
      pays.setAttribute("fill", "red");
      
    })
  }
  for (var i = 0; i < paths.length; i++) {
    paths[i].addEventListener("mouseout", function(e){
      let pays  = e.target;
      console.log(pays)
      pays.setAttribute("fill", "white");
    })
  }
