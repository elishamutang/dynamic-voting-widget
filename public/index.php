<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FileSystemLoader;

$loader = new FileSystemLoader(__DIR__ . '/views');
$twig = new Environment($loader, ['auto_reload' => true]);

echo $twig->render('index.html.twig');