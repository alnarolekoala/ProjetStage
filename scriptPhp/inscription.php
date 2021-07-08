<?php 

$userNameInscription = $_POST['userNameInscription'];
$userPasswordInscription = $_POST['userPasswordInscription'];
$userMailInscription = $_POST['userMailInscription'];
$regexMail;
$regexStandard;
$msgError;

if(empty($userNameInscription) || empty($userPasswordInscription) || empty($userMailInscription)){
 
    $msgError = "error";
}




header("Location: ../index.php?msgError=$msgError"); /* Redirection du navigateur */

/* Assurez-vous que la suite du code ne soit pas exécutée une fois la redirection effectuée. */
exit;











?>