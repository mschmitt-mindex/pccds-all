<?php
/**
 * Camel to Kebab module for Craft CMS 3.x
 *
 * Change camel case to kebab case.
 *
 * @link      http://pnkt.no
 * @copyright Copyright (c) 2018 Pnkt
 */

namespace modules\cameltokebabmodule\twigextensions;

use modules\cameltokebabmodule\CamelToKebabModule;

use Craft;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Pnkt
 * @package   CamelToKebabModule
 * @since     1.0.0
 */
class CamelToKebabModuleTwigExtension extends \Twig_Extension
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'CamelToKebabModule';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('camelToKebab', [$this, 'camelToKebabFunction']),
        ];
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function camelToKebabFunction($var)
    {
        if (is_string($var) && strlen($var))
        {
            $var = preg_replace_callback('/(^|[a-z])([A-Z])/', function($matches) {
                return strtolower(strlen("\\1") ? "$matches[1]-$matches[2]" : "\\2");
            },
            $var);
        }
        return $var;
    }
}
