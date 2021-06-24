const map = document.getElementById("svg2");
let  paths = map.getElementsByTagName('path');
const filtreButton = document.getElementById('filtreButton');
const filtre = document.getElementById('filtre');
let infoBulle = document.getElementById('description');
const body = document.body;
let Mouse_X; 
let Mouse_Y;

// Evenement clique sur le bouton "filtre"
filtreButton.addEventListener('click', function(){
    
    if(filtre.hidden){
        // on rend le detail du filtre visible
        filtre.removeAttribute("hidden");
    }
    else {
        // On cache le detail du filtre
        filtre.setAttribute("hidden", "hidden");
    }
    
})

function RefreshPosition() {
// on récupere la position X de la souris a laquelle on ajoute 5 
      var X = parseInt(document.getElementById('imp1').value)+5;
      // on récupere la position Y de la souris a laquelle on ajoute 5
      var Y = parseInt(document.getElementById('imp2').value)+5;
      // on défini la position X de l'infoBulle'
      infoBulle.style.left = X+"px";
      // on défini la position Y de l'infoBulle
      infoBulle.style.top = Y+"px";
}


for (var i = 0; i < paths.length; i++) {
  // quand la souris entre dans un pays 
    paths[i].addEventListener("mouseover", function(e){
      let pays  = e.target;
      // On met le pays selectionné en rouge
      pays.setAttribute("fill", "red");
      // on entre dans l'infoBulle l'id qui correspond au nom du pays 
      infoBulle.innerHTML = e.target.id;
      // on rend l'info bulle visible
      infoBulle.removeAttribute('hidden');
      // permet de donner une position a l'infoBulle a chaque deplacement de souris
      body.addEventListener("mousemove", function(e){
        RefreshPosition();
      })
    })
  }
  
  for (var i = 0; i < paths.length; i++) {

    // quand la souris sort d'un pays
    paths[i].addEventListener("mouseout", function(e){
      let pays  = e.target;
      // on rend l'infoBulle invisible
      infoBulle.setAttribute('hidden', "hidden")
      // on remet le pays dans sa couleur de base
      pays.setAttribute("fill", "#FFE4B5");
    })
  }

// Position de la souris enregistrer en permanence
  function WhereMouse( evt ){

    evt = !evt ? event : evt
    
    var Mouse_X = evt.clientX; 
    var Mouse_Y = evt.clientY;
    
    var scroll_x=document.body.scrollLeft || document.documentElement.scrollLeft;
    var scroll_y=document.body.scrollTop || document.documentElement.scrollTop;
    
    Mouse_X += scroll_x;
    Mouse_Y += scroll_y;
    
    document.getElementById('imp1').value=Mouse_X
    document.getElementById('imp2').value=Mouse_Y
    }
    typeof window.addEventListener == 'undefined' ? document.attachEvent("onmousemove",WhereMouse) : document.addEventListener('mousemove',WhereMouse,false);

  
