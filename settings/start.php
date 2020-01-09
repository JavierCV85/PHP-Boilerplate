<?php
	use \Psr\Http\Message\ServerRequestInterface as Request;
  use \Psr\Http\Message\ResponseInterface as Response;
  use Illuminate\Database\Capsule\Manager as Capsule;

  require 'vendor/autoload.php';
	require 'settings/globals.php'; //Global variables

  $app = new \Slim\App([
       'settings' => [
         'determineRouteBeforeAppMiddleware' => false,
         'displayErrorDetails' => true,
          'db' => [
             'driver' => 'mysql',
             'host' => $GLOBALS['DB_HOST'],
             'database' => $GLOBALS['DB_DB'],
             'username' => $GLOBALS['DB_USER'],
             'password' => $GLOBALS['DB_PASS'],
             'charset' => 'utf8',
             'collation' => 'utf8_unicode_ci',
             'prefix' => '',
          ]
      ],
  ]);

  $container = $app->getContainer();
  $capsule = new Illuminate\Database\Capsule\Manager;
  $capsule->addConnection($container->get('settings')['db']);
  $capsule->setAsGlobal();
  $capsule->bootEloquent();

	require 'settings/routes.php';

	$app->run();

?>
