<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Twig\Loader\FileSystemLoader;

$loader = new FileSystemLoader(__DIR__ . '/views');
$twig = new Environment($loader, ['auto_reload' => true]);

$request = Request::createFromGlobals();

$html = $twig->render('index.html.twig');

$response = new Response($html);
$response->send();

//$loader = new \Twig\Loader\FileSystemLoader(['src/views', 'src/components']);
//$twig = new \Twig\Environment($loader, ['auto_reload' => true]);
//
//echo $twig->render('index.html.twig');