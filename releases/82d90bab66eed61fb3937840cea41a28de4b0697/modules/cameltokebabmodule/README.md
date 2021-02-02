# Camel to Kebab module for Craft CMS 3.x

Change camel case to kebab case.

## Requirements

This module requires Craft CMS 3.0.0-RC1 or later.

## Installation

To install the module, follow these instructions.

First, you'll need to add the contents of the `app.php` file to your `config/app.php` (or just copy it there if it does not exist). This ensures that your module will get loaded for each request. The file might look something like this:
```
return [
    'modules' => [
        'camel-to-kebab-module' => [
            'class' => \modules\cameltokebabmodule\CamelToKebabModule::class,
        ],
    ],
    'bootstrap' => ['camel-to-kebab-module'],
];
```
You'll also need to make sure that you add the following to your project's `composer.json` file so that Composer can find your module:

    "autoload": {
        "psr-4": {
          "modules\\cameltokebabmodule\\": "modules/cameltokebabmodule/src/"
        }
    },

After you have added this, you will need to do:

    composer dump-autoload
 
 …from the project’s root directory, to rebuild the Composer autoload map. This will happen automatically any time you do a `composer install` or `composer update` as well.

## Camel to Kebab Overview

-Insert text here-

## Using Camel to Kebab

-Insert text here-

## Camel to Kebab Roadmap

Some things to do, and ideas for potential features:

* Release it

Brought to you by [Pnkt](http://pnkt.no)
