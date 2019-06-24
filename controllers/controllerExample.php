<?php
 //Page Settings (are optionals)
 $title = "Title Example";
 $id = "id-body";
 $description = "description";
 $styles = "body {
   Background: #eeeeee;
 }";
 $scripts = 'console.log("script from controller")';


 //Models
 require_once 'models/exampleData.php';
 $test = new exampleData(1,"variable1 from ExampleData");
?>
