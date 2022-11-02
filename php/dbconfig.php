<?php

session_start();

session_regenerate_id(true);

$conn = oci_connect("BG04","g4VFR4","lothal","Book it");
if(!$conn){
    $e=oci_error();
}