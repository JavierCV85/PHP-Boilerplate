<?php
	use \Psr\Http\Message\ServerRequestInterface as Request;
  use \Psr\Http\Message\ResponseInterface as Response;
  use Illuminate\Database\Capsule\Manager as Capsule;

	//HOME
	$app->get('/', function (Request $req, Response $res, array $ar) use($app){
		include("controllers/controllerExample.php");
		$ar['view'] = "home";
		include("views/shared/_layout.php");
  });

	//CONTROLLER/VIEW
	$app->get('/{controller}/{view}', function (Request $req, Response $res, array $ar) use($app){
		include("controllers/".$ar['controller'].".php");
		include("views/shared/_layout.php");
  });

?>
