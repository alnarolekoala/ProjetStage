// map world
const mapW = document.getElementById("svg1");
let pathsW = mapW.getElementsByTagName('path');
// la map afrique SVG 
const map = document.getElementById("svg2");
let  paths = map.getElementsByTagName('path');
// bouton filtre
const filtreButton = document.getElementById('filtreButton');
const filtre = document.getElementById('filtre');
// contenu de l'info bulle
let infoBulle = document.getElementById('description');
// champ pour vérifier si on doit ouvrir ou non une modal 
const verif = document.getElementById('verif').value;

const body = document.body;
// position de la souris axe X et Y 
let Mouse_X; 
let Mouse_Y;
//  élément des modals de connexion/inscription
// bouton de fermeture de la modal d'inscription
const btnCloseModalI = document.getElementById('btnCloseModalI');
// bouton de fermeture de la modal de connexion
const btnCloseModalC = document.getElementById('btnCloseModalC');
// modal inscription
const modalI = document.getElementById('modal-inscription');
// modal connexion
const modalC = document.getElementById('modal-connexion');
// bouton d'inscription
const btnInscription = document.getElementById('btn-inscription');
// bouton de connexion
const btnConnexion = document.getElementById('btnConnexion');
// champ userName dans la modal connexion
const userNameConnexion = document.getElementById('userNameConnexion');
// champ userName dans la modal d'inscription
const userNameInscription = document.getElementById('userNameInscription');
// champ password dans la modal de connexion
const userPasswordConnexion = document.getElementById('userPasswordConnexion');
// champ password dans la modal d'inscription
const userPasswordInscription = document.getElementById('userPasswordInscription');
// champ userMail dans la modal d'inscription
const userMailInscription = document.getElementById('userMailInscription'); 
// checkbox particulier dans la modal d'inscription
const particulierCheck = document.getElementById('particulierCheck');
// check box professionnel dans la modal d'inscription
const professionnelCheck = document.getElementById('professionnelCheck');
//bouton de changement de carte
const partenaire = document.getElementById('partenaire');
const projet = document.getElementById('projet');
const prestataire = document.getElementById('prestataire');
// div conteneur des svg
const conteneurMap = document.getElementById('map');
const conteneurMapWorld = document.getElementById('mapWorld'); 
//écoute sur les boutons de changement de carte 

partenaire.addEventListener('click', function() {
  conteneurMapWorld.removeAttribute('hidden'); 
  conteneurMap.setAttribute('hidden', 'hidden');
  document.getElementById('searchZone').classList.remove('col-md-5');
  document.getElementById('searchZone').classList.add('col-md-7');
  partenaire.classList.remove('btn-primary');
  partenaire.classList.add('btn-danger');

  if(projet.classList.contains('btn-danger')){
    projet.classList.remove('btn-danger');
    projet.classList.add('btn-primary');
  }
  if(prestataire.classList.contains('btn-danger')){
    prestataire.classList.remove('btn-danger');
    prestataire.classList.add('btn-primary');
  }
  
})

projet.addEventListener('click', function(){
  conteneurMap.removeAttribute('hidden'); 
  conteneurMapWorld.setAttribute('hidden', 'hidden');
  document.getElementById('searchZone').classList.remove('col-md-7');
  document.getElementById('searchZone').classList.add('col-md-5');

  projet.classList.remove('btn-primary');
  projet.classList.add('btn-danger');
  
  if(partenaire.classList.contains('btn-danger')){
    partenaire.classList.remove('btn-danger');
    partenaire.classList.add('btn-primary');
  }
  if(prestataire.classList.contains('btn-danger')){
    prestataire.classList.remove('btn-danger');
    prestataire.classList.add('btn-primary');
  }
})

prestataire.addEventListener('click', function(){
  conteneurMap.removeAttribute('hidden'); 
  conteneurMapWorld.setAttribute('hidden', 'hidden');
  document.getElementById('searchZone').classList.remove('col-md-7');
  document.getElementById('searchZone').classList.add('col-md-5');

  prestataire.classList.remove('btn-primary');
  prestataire.classList.add('btn-danger');
  
  if(projet.classList.contains('btn-danger')){
    projet.classList.remove('btn-danger');
    projet.classList.add('btn-primary');
  }
  if(partenaire.classList.contains('btn-danger')){
    partenaire.classList.remove('btn-danger');
    partenaire.classList.add('btn-primary');
  }
})

// écoute du changement sur la checkbox professionnel
professionnelCheck.addEventListener('change', function() {

    // si professionnel est coché décoche particulier
    if(professionnelCheck.checked == true){
      particulierCheck.checked = false;
    }


})
// écoute du changement sur la checkbox particulier
particulierCheck.addEventListener('change', function() {
  // si particulier est coché décoche professionnel
  if(particulierCheck.checked == true){
    professionnelCheck.checked = false;
  }

})



// écoute du chargement de la page 

document.addEventListener('DOMContentLoaded', function() {
  
  if(verif == "1"){
    btnInscription.click();
    verif= "";
  }
 
});
// écoute sur le bouton de fermeture de la modal de connexion 
btnCloseModalC.addEventListener('click', function () {
  userNameConnexion.value = "";
  userPasswordConnexion.value = "";
  modalC.style.display = 'none';
  

})
// écoute sur le bouton de fermeture de la modal d'inscription 
btnCloseModalI.addEventListener('click', function () {
  modalI.style.display = 'none';
  userNameInscription.value = "";
  userMailInscription.value = "";
  userPasswordInscription.value = "";


})


// écoute du bouton d'inscription
btnInscription.addEventListener('click', function () {
  
  modalI.style.display = 'block';

})
// écoute sur le bouton de connexion
btnConnexion.addEventListener('click', function () {
  
  modalC.style.display = 'block';

})

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
// fonction qui récupere la position de la souris et actualise la position de l'infoBulle en conséquence
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


// actualisation de l'infoBulle pour la afrique ==================================================================================================================================================
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
//======================================================================================================================================================================================================
// actualisation de l'infoBulle pour la mapWorld========================================================================================================================================================
for (var i = 0; i < pathsW.length; i++) {
  // quand la souris entre dans un pays 
  pathsW[i].addEventListener("mouseover", function(e){
    let pays  = e.target;
    // On met le pays selectionné en rouge
    pays.setAttribute("fill", "red");
    // on entre dans l'infoBulle l'id qui correspond au nom du pays 
    infoBulle.innerHTML = e.target.classList;
    // on rend l'info bulle visible
    infoBulle.removeAttribute('hidden');
    // permet de donner une position a l'infoBulle a chaque deplacement de souris
    body.addEventListener("mousemove", function(e){
      RefreshPosition();
    })
  })
}
  
for (var i = 0; i < pathsW.length; i++) {

  // quand la souris sort d'un pays
  pathsW[i].addEventListener("mouseout", function(e){
    let pays  = e.target;
    // on rend l'infoBulle invisible
    infoBulle.setAttribute('hidden', "hidden")
    // on remet le pays dans sa couleur de base
    pays.setAttribute("fill", "#FFE4B5");
  })
}
//======================================================================================================================================================================================================
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
