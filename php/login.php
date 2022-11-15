<?php
require 'dbconfig.php';
include '../pages/login.php'
session_start();
//global $conn;
//$conn = oci_connect('BG04', 'g4#VFR4', 'lothal', 'book_it');

if(isset($_POST['login'])){
    $mail = $_POST['user_mail'];
    $pass = $_POST['user_password'];
//$qry='Select nombre,contrasena FROM usuarios';
//$stid = oci_parse($conn, $qry);
//oci_execute($stid);
//    $qry="INSERT INTO usuarios(nombre, contrasena) VALUES ('$user','$pass')";
    $qry="select 1 from usuarios where mail = '$mail' and  contrasena = '$pass'";
    $s = oci_parse($conn,$qry );  
    oci_execute($s);
    //$row = oci_fetch_all($s, $res);
    $row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)
    if($row){
            $_SESSION['nombre']=$mail;
            echo "hola mundo";
    }else{

        echo "wrong password or username";
    }
}



if(isset($_POST['register']))
?>