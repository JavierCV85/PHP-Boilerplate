<?php
	function getPage(){
		$urlRequest = $_SERVER['REQUEST_URI'];
		$parameters = array();
		$url = array();

		if (strpos($urlRequest, '?') != false)
		{
				$url = explode("?",$urlRequest);
				if(strpos($url[1], '&') != false){
					//multiples variables
					$parameters = explode("&",$url[1]);
				}else{
					//una variable
					$parameters[0] = $url[1];
				}
		}else{
				//sin variables
				$url[0] = $urlRequest;
		}

		//si acaba en / eliminarlo
		if (substr($url[0], -1) == '/'){
			$url[0] = rtrim($url[0],'/');
		}

		switch ($url[0]){
			case "/javier/github/PHP-Boilerplate/page1":
				pageLoad("controllerExample","view1", $parameters);
				break;
			case "/javier/github/PHP-Boilerplate/page2":
				pageLoad("controllerExample","view2", $parameters);
				break;
			default:
			  pageLoad("controllerExample","home", $parameters);
				break;
		}
	}

	function pageLoad($controller, $view, $parameters){
		include("controllers/".$controller.".php");
		include("views/shared/_layout.php");
	}

	getPage();
?>
