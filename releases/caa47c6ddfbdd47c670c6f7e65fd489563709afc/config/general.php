<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [

        'cacheDuration' => false,
        'cpTrigger' => 'cms',
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
        'enableCsrfProtection' => true,
        'generateTransformsBeforePageLoad' => true,
        'omitScriptNameInUrls' => true,
        'useProjectConfigFile' => true,
        'maxRevisions' => 25,
        'securityKey' => getenv('CRAFTENV_SECURITY_KEY'),
        'siteUrl' => getenv('CRAFTENV_SITE_URL'),
        'usePathInfo' => true,
        'aliases' => [
            '@basePath' => realpath(dirname(__DIR__)) . getenv('CRAFTENV_BASE_PATH'),
            '@baseUrl' => getenv('CRAFTENV_BASE_URL'),
            '@baseAssetPath' => realpath(dirname(__DIR__)) . getenv('CRAFTENV_BASE_PATH') . 'u',
            '@baseAssetUrl' => getenv('CRAFTENV_BASE_URL') . 'u',
            '@emailSystemAddress' => getenv('CRAFTENV_EMAIL_SYSTEM_ADDRESS'),
            '@emailReplyAddress' => getenv('CRAFTENV_EMAIL_REPLY_ADDRESS'),
            '@emailSenderName' => getenv('CRAFTENV_EMAIL_SENDER_NAME'),
            '@emailHostName' => getenv('CRAFTENV_EMAIL_HOST_NAME'),
            '@emailPort' => getenv('CRAFTENV_EMAIL_PORT'),
            '@emailAuthUsername' => getenv('CRAFTENV_EMAIL_AUTH_USERNAME'),
            '@emailAuthPassword' => getenv('CRAFTENV_EMAIL_AUTH_PASSWORD'),
        ],
        'custom' => [
            'basePath' => realpath(dirname(__DIR__)) . getenv('CRAFTENV_BASE_PATH'),
            'baseUrl' => getenv('CRAFTENV_BASE_URL'),
            'craftEnv' => CRAFT_ENVIRONMENT,
        ]
    ],

    // Live (production) environment
    'live' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'allowAdminChanges' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
    ],

    // Staging (pre-production) environment
    'staging' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'allowAdminChanges' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
    ],

    // Local (development) environment
    'dev' => [
        // Craft defined config settings
        'cpTrigger' => getenv('CRAFTENV_CP_TRIGGER') ?: 'cms',
        'allowUpdates' => true,
        'allowAdminChanges' => true,
        'backupOnUpdate' => false,
        'devMode' => true,
        'enableTemplateCaching' => false,
    ],
];
