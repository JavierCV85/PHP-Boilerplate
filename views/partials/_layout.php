<!doctype html>
<html class="no-js" lang="">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title><?= $title ?></title>
      <meta name="description" content="<?= $description; ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="shortcut icon" href="<?= $GLOBALS['BASEURL'] ?>content/img/favicon.ico" type="image/x-icon">
      <link rel="icon" href="<?= $GLOBALS['BASEURL'] ?>content/img/favicon.ico" type="image/x-icon">

      <link rel="canonical" href="https://www.YourSite.com">

      <link rel="stylesheet" href="<?= $GLOBALS['BASEURL'] ?>content/css/normalize.css" type="text/css">
      <link rel="stylesheet" href="<?= $GLOBALS['BASEURL'] ?>content/css/main.min.css" type="text/css">

      <?php
        if ($styles != null && $styles != ""){
          echo "<style>".$styles."</style>";
        }
      ?>

  </head>
  <body id="<?= $id; ?>">
    <!-- start: Your site / app-->

    <?php
      include("views/".$ar['view'].".php");
    ?>

    <!-- end: Your site / app-->
    <script src="<?= $GLOBALS['BASEURL'] ?>content/js/vendor/modernizr-3.7.1.min.js"></script>
    <script src="<?= $GLOBALS['BASEURL'] ?>content/js/vendor/jquery-3.4.1.min.js"></script>
    <script src="<?= $GLOBALS['BASEURL'] ?>content/js/plugins.js"></script>
    <script src="<?= $GLOBALS['BASEURL'] ?>content/js/main.js"></script>

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
