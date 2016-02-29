<?php
$file = file_get_contents("http://localhost/home.php");
file_put_contents("home1.html", $file);
?>