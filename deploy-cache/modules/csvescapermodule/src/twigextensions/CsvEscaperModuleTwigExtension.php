<?php
/**
 * CSV Escaper module for Craft CMS 3.x
 *
 * Escape a CSV.
 *
 * @link      marchartwig.com
 * @copyright Copyright (c) 2018 Marc Hartwig
 */

namespace modules\csvescapermodule\twigextensions;

use modules\csvescapermodule\CsvEscaperModule;

use Craft;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Marc Hartwig
 * @package   CsvEscaperModule
 * @since     1.0.0
 */
class CsvEscaperModuleTwigExtension extends \Twig_Extension
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
        return 'CsvEscaperModule';
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
            new \Twig_SimpleFilter('escapeCsv', [$this, 'escapeCsvFunction']),
        ];
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
    * @return array
     */
    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('csvToArray', [$this, 'csvToArrayInternal']),
        ];
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function csvToArrayInternal($csv_url)
    {
    	//$csv = file_get_contents($csv_url);

    	$data = array();
        ini_set('auto_detect_line_endings', true);

        // If in local/dev fopen( $csv_url, 'r', false, $context)
        // Else fopen( $csv_url, 'r')
        if ( $_file = fopen( $csv_url, 'r')) {
            $csv_data = array();

            $header = fgetcsv( $_file );

            while ( $row = fgetcsv( $_file ) ) {
                foreach ($header as $i => $key) {
                    $csv_data[strtolower($key)] = $row[$i];
                }
                $data[] = $csv_data;
            }

            fclose( $_file );

            $header_array = array();

            foreach ($header as $h => $val) {
            	$header_array[strtolower($val)] = $header[$h];
            }


            $data = array_merge([$header_array], $data);


            return $data;

        } else{
            echo 'file is not readable';
        }

    }
}
