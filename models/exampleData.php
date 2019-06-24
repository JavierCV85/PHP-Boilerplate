<?php
class exampleData{
  public $id, $variable1;

  function __construct($_id, $_variable1){
    $this->id = $_id;
    $this->variable1 = $_variable1;
  }

  function getVariable1(){
    echo $this->variable1;
  }

}

?>
