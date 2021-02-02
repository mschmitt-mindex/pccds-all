<?php

/**
 * Imager by André Elvan
 *
 * @author      André Elvan <http://vaersaagod.no>
 * @package     Imager
 * @copyright   Copyright (c) 2016, André Elvan
 * @license     http://opensource.org/licenses/mit-license.php MIT License
 * @link        https://github.com/aelvan/Imager-Craft
 */


/**
 * Configuration file for Imager
 *
 * Override this by placing a file named 'imager.php' inside your config folder and override variables as needed.
 * Multi-environment settings work in this file the same way as in general.php or db.php
 */

return array(
    '*' => array(
        'imagerSystemPath' => $_SERVER['DOCUMENT_ROOT'] . '/resized/',
        'imagerUrl' => '/resized/',
        'cacheEnabled' => true,
        'cacheDuration' => 1209600, // 14 days
        'cacheDurationRemoteFiles' => 1209600, // 14 days
        'jpegQuality' => 80,
        'pngCompressionLevel' => 2,
        'interlace' => false, // false, true ('line'), 'none', 'line', 'plane', 'partition'
        'allowUpscale' => true,
        'resizeFilter' => 'lanczos',
        'smartResizeEnabled' => true,
        'removeMetadata' => false,
        'bgColor' => '',
        'position' => '50% 50%',
        'letterbox' => array('color'=>'#000', 'opacity'=>0),
        'hashFilename' => 'postfix', // true, false, or 'postfix' (meaning only the generated part of the filename is hashed)
        'hashRemoteUrl' => false, // true, false, or 'host' (meaning only the host part of the url is hashed)
        'instanceReuseEnabled' => false,

        'jpegoptimPath' => '/usr/bin/jpegoptim',
        'jpegoptimOptionString' => '-s',
        'jpegtranPath' => '/usr/bin/jpegtran',
        'jpegtranOptionString' => '-optimize -copy none',
        'optipngPath' => '/usr/bin/optipng',
        'optipngOptionString' => '-o5',
        'tinyPngEnabled' => false,
        'tinyPngApiKey' => '',
        'optimizeType' => 'task',
        'logOptimizations' => false,

        'awsEnabled' => false,
        'awsAccessKey' => '',
        'awsSecretAccessKey' => '',
        'awsBucket' => '',
        'awsCacheDuration' => 1209600, // 14 days
        'awsRequestHeaders' => array(),
        'awsStorageType' => 'standard' // 'standard' or 'rrs' (reduced redundancy storage)
    ),


    /* -- Local developmental settings */

    '172.16.1.100' => array(
        'jpegoptimEnabled' => false,
        'jpegtranEnabled' => false,
        'optipngEnabled' => false,
    ),

    /* -- bergmann.com production settings */

    '.com' => array(
        'jpegoptimEnabled' => false,
        'jpegtranEnabled' => false,
        'optipngEnabled' => false,
    ),
);