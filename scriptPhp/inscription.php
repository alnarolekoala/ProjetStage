<?php 

$userNameInscription = $_POST['userNameInscription'];
$userPasswordInscription = $_POST['userPasswordInscription'];
$userMailInscription = $_POST['userMailInscription'];
$regexMail;
$regexStandard;
$msgError = array();

// si aucune checkbox est coché
if (!(isset($_POST['professionnelCheck'])) && !(isset($_POST['particulierCheck'])) ) {
    $msgError[3] = "Veuillez indiquer si vous êtes un particulier ou un professionnel";
  }
  // si au moins une est coché
  else {
      // si les 2 sont cochés
    if ((isset($_POST['professionnelCheck'])) && (isset($_POST['particulierCheck'])) ) {
        $msgError[3] = "Veuillez choisir si vous êtes un particulier ou un professionnel(modifiable par la suite)";
    }
    
    else{
        if(isset($_POST['professionnelCheck'])){
            $check = "1";
        }
        if(isset($_POST['particulierCheck'])){
            $check ="2";
        }
    }
  }

if(empty($userNameInscription)) {
 
    $msgError[0] = "Le champ Identifiant est vide";
}

if(empty($userPasswordInscription)) {
    $msgError[1] = "Le champ mot de passe est vide";
}

if(empty($userMailInscription)){
    $msgError[2] = "Le champ Email est vide";
}

if(!empty($msgError)){
    $verif = "1";


}
else {
    $verif = "2";
    // include "scriptPhp/ConnexionBDD.php"; 


    
}









header("Location: ../index.php?verif=$verif&msgError=$msgError[0]&msgError1=$msgError[1]&msgError2=$msgError[2]&msgError3=$msgError[3]"); /* Redirection du navigateur */

/* Assurez-vous que la suite du code ne soit pas exécutée une fois la redirection effectuée. */
exit;











?>