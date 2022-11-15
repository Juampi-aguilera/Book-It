<?php 

//include("con_db.php");

$conex = oci_connect("BG04", "g4#VFR4","lothal"); 

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1) {
	    $email = trim($_POST['user_mail']);
		$password = trim($_POST['user_password'])
		$name = trim($_POST['user_name']);
		$lastname = trim($_POST['user_lastname'])
	    $consulta = "INSERT INTO table usuarios(nombre,apellido, mail, contrasena,) VALUES ('$name','$lastname','$email','$password')";
	    $resultado = oci_parse($conex,$consulta); //oci_parse hace lo mismo que mysql_query???
	    if ($resultado) {
	    	?> 
	    	<h3 class="ok">¡|Te has registrado correctamente!</h3>
           <?php
	    } else {
	    	?> 
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }
    } else {
	    	?> 
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
}

?>