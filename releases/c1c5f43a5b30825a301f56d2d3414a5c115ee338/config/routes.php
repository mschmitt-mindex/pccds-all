<?php

/**
 * Dynamic Site Routes
 *
 * If you’d prefer to set up your site routes in a file as opposed to Settings > Routes in the CP,
 * you can define them here.  Craft will check both places for dynamic site routes.
 *
 * Each route will take up one element in the array returned by this file.
 * The array keys are your URL patterns, and the values are the templates that should get loaded.
 *
 * The URL patterns are regular expressions. If you want to capture portions of the URL and
 * make them available to your template, use named subpatterns. For example:
 *
 *     'blog/archive/(?P<year>\d{4})' => 'blog/_archive',
 *
 * That example would match URIs such as "blog/archive/2012", and pass the request along to
 * the blog/_archive template, providing it a ‘year’ variable set to the value “2012”.
 */

return [
    'dev/search' => ['template' => 'dev/_search'],
    'dev/inv' => ['template' => 'dev/_style_inv'],
    'dev/inv/<invPage:(.*)>' => ['template' => 'dev/_style_inv'],
    'news/archive/<year:\d{4}>' => ['template' => 'pages/news'],
    'news/archive/<year:\d{4}>/<month:\d{2}>' => ['template' => 'pages/news'],
    'news/search' => ['template' => 'pages/news'],
    'news/search/<year:\d{4}>' => ['template' => 'pages/news'],
    'news/search/<year:\d{4}>/<month:\d{2}>' => ['template' => 'pages/news'],

    'thank-you/<formHandle:[^\/]+>/<originPage:[^\/]+>' => ['template' => 'pages/thank_you'],

    'sitemap' => ['template' => 'pages/sitemap'],

    'espanol' => [
        'noticias/archivo/<year:\d{4}>' => ['template' => 'pages/news'],
        'noticias/archivo/<year:\d{4}>/<month:\d{2}>' => ['template' => 'pages/news'],
        'noticias/busqueda' => ['template' => 'pages/news'],
        'noticias/busqueda/<year:\d{4}>' => ['template' => 'pages/news'],
        'noticias/busqueda/<year:\d{4}>/<month:\d{2}>' => ['template' => 'pages/news'],
        'gracias/<formHandle:[^\/]+>/<originPage:[^\/]+>' => ['template' => 'pages/thank_you'],
        'mapa-del-sitio' => ['template' => 'pages/sitemap']
    ]
];