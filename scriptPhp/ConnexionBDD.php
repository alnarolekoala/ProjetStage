<?php
$dbname = "adrns";
$root = "root";
$mdp = "67f6d8355";
try 
{        
    $db = new PDO('mysql:host=localhost;charset=utf8;dbname='+$dbname, $root, $mdp);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Erreur : " . $e->getMessage() . "<br>";
    echo "N° : " . $e->getCode();
    die("Fin du script");
} 


?>
