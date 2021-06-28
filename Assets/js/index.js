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

  
/*==================== Affichage/Masquage du menu ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Affichage du menu =====*/
// si le bouton à bascule est visible 
if (navToggle) {
// lorsqu'un clic sur le bouton est détecté 
navToggle.addEventListener('click', () => {
  // ajout de la classe "show-menu" à la div contenant la classe "nav__menu" 
  navMenu.classList.add('show-menu');
})
}


/*===== Masquage du menu =====*/
// si le bouton de fermeture du menu est visible
if (navClose) {
// lorsqu'un clic sur le bouton est détecté
navClose.addEventListener('click', () => {
  // on supprime de la liste "show-menu" (retour à l'affichage initial)
  navMenu.classList.remove('show-menu');
})
}


/*==================== Supression du menu mobile ====================*/
// initialisation d'une vairable qui retourne le premier élément correspondant à la classe ".nav__link"
const navLink = document.querySelectorAll('.nav__link');

// fonction qui récupère et masque le menu
function linkAction(){
// récupération du menu
const navMenu = document.getElementById('nav-menu');
// Masquage du menu
navMenu.classList.remove('show-menu');
}
// Masquage du menu à chaque clic sur un lien
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== Changement de l'arrière plan du menu de navigation ====================*/ 
function scrollHeader() {
  // récupération de l'entête du document selon son id
  const nav = document.getElementById('header')
  // si la position de la barre de défilement dépasse 80px
  if(this.scrollY >= 80) {
      // changement de l'arrière plan (ajout de la classe "scroll-header") du menu de navigation
      nav.classList.add('scroll-header'); 
  } else {
      // retrait de l'ombre
      nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);