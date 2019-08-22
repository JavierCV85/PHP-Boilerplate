<!doctype html>
<html class="no-js" lang="">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title><?= $title ?></title>
      <meta name="description" content="<?= $description; ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="shortcut icon" href="content/img/favicon.ico" type="image/x-icon">
      <link rel="icon" href="content/img/favicon.ico" type="image/x-icon">
      
      <link rel="stylesheet" href="content/css/normalize.css">
      <link rel="stylesheet" href="content/css/fontawesome-all.css">
      <link rel="stylesheet" href="content/css/main.min.css">

      <?php
        if ($styles != null && $styles != ""){
          echo "<style>".$styles."</style>";
        }
      ?>

  </head>
  <body id="<?= $id; ?>">
    <!-- start: Your site / app-->

    <?php
      include("views/".$view.".php");
    ?>

    <!-- end: Your site / app-->
    <script src="content/js/vendor/modernizr-3.7.1.min.js"></script>
    <script src="content/js/vendor/jquery-3.4.1.min.js"></script>
    <script src="content/js/plugins.js"></script>
    <script src="content/js/main.js"></script>

    <?php
      if ($scripts != null && $scripts != ""){
        echo "<script>".$scripts."</script>";
      }
    ?>

    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
        window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
        ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async defer></script>
  </body>
</html>
