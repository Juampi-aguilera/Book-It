<?php
$conn = oci_connect("BG04", "g4#VFR4", "infob");
if (!$conn){
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USEA_ERROR);
}
global $conn;
//$qry='Select nombre,contrasena FROM usuarios';
//$stid = oci_parse($conn, $qry);
//oci_execute($stid);
?>