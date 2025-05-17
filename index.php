<?php

require __DIR__ .  '/../vendor/autoload.php';

$loader = new \Twig\Loader\FileSystemLoader(['..\src\views', '..\src\components']);
$twig = new \Twig\Environment($loader, ['auto_reload' => true]);

echo $twig->render('index.html.twig');