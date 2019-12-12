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
             'host' => '127.0.0.1',
             'database' => 'testDB',
             'username' => 'root',
             'password' => '',
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
