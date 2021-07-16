<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    <!--==================== UNICONS (bibliothèque d’icônes) ====================-->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="Assets/css/index.css">
    <title>Document</title>
</head>
<body>
   <input type="text" id="verif" value="<?php   
            if(isset($_GET)){
                echo $_GET['verif'];
            }
        ?>"> 
      
    </div>
    <div class="container-fluid test">
        <header class="header" id="header">
            <nav class="nav">
                <a href="#" class="nav__logo">
                    <img src="assets/img/logo.png" alt="logo-entreprise">
                </a>
    
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">
                                <i class="uil uil-estate nav__icon"></i> Accueil
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#about" class="nav__link">
                                <i class="uil uil-file-alt nav__icon"></i> À propos
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#info" class="nav__link">
                                <i class="uil uil-info-circle nav__icon"></i> Infos
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">
                                <i class="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                        <li class="nav__item" id="btnConnexion">
                                <i class="uil uil-user nav__icon"></i> Se connecter 
                        </li>
                        <li class="nav__item" id="btn-inscription">
                                <i class="uil uil-message nav__icon"></i> S'inscrire
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" id="nav-close"></i>
                </div>
    
                <div class="nav__btns">
                    <div class="nav__toggle" id="nav-toggle">
                        <i class="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
        <!-- modal inscription -->
        <div class="modal modal-backdrop" tabindex="-1" id="modal-inscription" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Inscription</h5>
                  <button type="button" class="close" id="btnCloseModalI" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <!-- le contenu du modal  -->
                    <form action="scriptPhp/inscription.php" method="POST">
                        <div class="form-group">
                            <label for="userNameInscription">Identifiant</label>
                            <input type="text" class="form-control" name="userNameInscription" id="userNameInscription" placeholder="Entrez votre identifiant">
                            <!-- message d'erreur récuperer en get -->
                            <small class="msgError"> 
                                <?php 
                                    $msgError = $_GET['msgError'];
                                    if(isset($_GET)){
                                        echo $msgError;
                                    } 
                                ?>
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="userPasswordInscription">Mot de passe</label>
                            <input type="password" class="form-control" name="userPasswordInscription" id="userPasswordInscription" placeholder="Entrez votre mot de passe">
                            <!-- message d'erreur récuperer en get -->
                            <small class="msgError">
                                <?php 
                                    $msgError = $_GET['msgError1'];
                                    if(isset($_GET)){
                                        echo $msgError;
                                    } 
                                ?>
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="userMailInscription">Adresse E-mail</label>
                            <input type="email" class="form-control" name="userMailInscription" id="userMailInscription" aria-describedby="emailHelp" placeholder="Entrez votre adresse mail">
                            <!-- message d'erreur récuperer en get -->
                            <small class="msgError">
                                <?php 
                                    $msgError = $_GET['msgError2'];
                                    if(isset($_GET)){
                                        echo $msgError;
                                    } 
                                ?> 
                            </small>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="particulierCheck" id="particulierCheck">
                            <label class="form-check-label" for="particulierCheck">Particulier</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="professionnelCheck" id="professionnelCheck">
                            <label class="form-check-label" for="professionnelCheck">Professionnel</label>
                        </div>
                        <div>
                            <!-- message d'erreur récuperer en get -->
                        <small>
                            <?php 
                                $msgError = $_GET['msgError3'];
                                if(isset($_GET)){
                                    echo $msgError;
                                } 
                            ?>
                        </small>
                        </div>
                        <div>
                            <button type="submit" id="inscriptionBtn" class="btn btn-primary">Inscription</button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>

           <!-- modal connexion -->
        <div class="modal modal-backdrop" tabindex="-2" id="modal-connexion" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Connexion</h5>
                  <button type="button" class="close" id="btnCloseModalC" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <!-- le contenu du modal  -->
                    <form action="scriptPhp/connexion.php" method="POST">
                    <div class="form-group">
                        <label for="userNameConnexion">Identifiant</label>
                        <input type="text" class="form-control" name="userNameConnexion" id="userNameConnexion" placeholder="Entrez votre identifiant">
                    </div>
                    <div class="form-group">
                        <label for="userPasswordConnexion">Mot de passe</label>
                        <input type="password" class="form-control" name="userPasswordConnexion" id="userPasswordConnexion" placeholder="Entrez votre mot de passe">
                    </div>
                    <button type="submit" class="btn btn-primary">Connexion</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <div class="row home">
            <div id="swap">
                <button type="button" id="partenaire" class="btn btn-danger mt-1 sizeText">Carte Partenaire</button>
                <button type="button" id="projet" class="btn btn-primary mt-1 sizeText">Carte des projets/appel d'offre</button>
                <button type="button" id="prestataire" class="btn btn-primary mt-1 sizeText">Carte des prestataires</button>
                <div id="switch">Changer pour liste</div>
                <label  class="switch">
                    <input id="choice" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <!-- position de la souris X,Y par rapport au coin Haut gauche -->
            <input type =texte id='imp1' hidden/>
            <input type =texte id='imp2' hidden/>
            <!-- infoBulle -->
            <div id="description" hidden></div>
            <!-- map du monde -->
            <div id="mapWorld" class="col-md-12 col-xl-9">
            <?php include "SVG/mapWorld.php"; ?>
            </div>
            <!-- map de l'Afrique -->
            <div id="map" class="col-md-7 col-xl-9" hidden>
            <?php include "SVG/map.php"; ?>
            </div>

            <!-- pays par liste -->
            <div id="versionListe" hidden>
                <!-- include fichier liste pays -->
                <!-- pays en dur et remplissage du pays par requete sql pour les projets, prestataire -->
                <!-- <div id="Maroc">
                    <div id="liste">
                        liste des projets ou prestataires en fonction du maroc 
                        <div id="prestataireListe">

                        </div>
                        <div id="projetListe">

                        </div>
                    </div>
                </div> -->
            </div>
            <!-- partenaire forme liste -->
            <div id="partenaireListe" hidden>
            <!-- requete sql pour afficher chaque partenaire -->

            </div>
            <div id ="searchZone" class="col-md-5 col-xl-3 pt-2">

                <form class="form-inline">
                    <!-- Barre de recherche -->
                    <label for="barreDeRecherche" class="sr-only">Search</label>
                    <input type="search" class="form-control sizeText mr-1" id="barreDeRecherche" aria-describedby="searchHelp" placeholder="Rechercher">
                    <button type="submit" class="btn btn-primary mt-1 mr-1 sizeText">Rechercher</button>
                    <button type="button" class="btn btn-secondary mt-1 sizeText" id="filtreButton">Recherche avancée </button>
                </form>
                
                <div id="filtre" hidden>
                    <!-- Visuel du filtre -->
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Secteur</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">Pays</label>
                    </div>
                </div>


                <div id="filtreProjet" hidden>
                    <!-- Visuel du filtre -->
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">test projet</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">test projet 2</label>
                    </div>
                </div>

                <div id="filtrePrestataire" hidden>
                    <!-- Visuel du filtre -->
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">test prestataire</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">test prestataire 2</label>
                    </div>
                </div>
               

            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="Assets/js/index.js"></script>
</body>
</html>