<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dancan4u_wp');

/** MySQL database username */
define('DB_USER', 'dancan4u_dustin');

/** MySQL database password */
define('DB_PASSWORD', '*Portland');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'A`u@YOM(o?L)J=$h}JW+YS3l,<Ya>Y;U(bB+0y6qvC_4>Fc(O+Wo~b(kNBX?;O$/');
define('SECURE_AUTH_KEY',  'TAQ==a|kp~3u#vv:~j/vx^g9~M#m~QiE`[OFlK$t8uz{)V|+-D_1(NbxpfMFsLG4');
define('LOGGED_IN_KEY',    '.8WW+-Uka.sCagQv9[9XKL9s }+we5GOJiA6;  EuMI-sh9y+v1[CW+WH3N-FDY1');
define('NONCE_KEY',        'L?2^UDW$E>U%.Flh8vo)rAD(X-WqS8H^z?TS m$9+cEkZLc-?.#?x.qtRn#_<MB]');
define('AUTH_SALT',        'Ml|C`+b+Fn0j5#!4sV+5_E7}Qe|fp6}[O|M$%S?ce1wr%[cm!S+R.j~C8:bKq9_L');
define('SECURE_AUTH_SALT', '=Z+<R#Z!,ktF+F^J4Zfj?({n;Lp/z*G!S5D@@BQ-ogY/087,,.)G7jH2/n=l/?w ');
define('LOGGED_IN_SALT',   ' T%eDYFnd$,{5|-K^6*j|-{V;uhyJB_A{E<tWR3HL$z w>W`Z:B|k:{e:4hZ{[j0');
define('NONCE_SALT',       '-|,Q~9em3jNY;^hYpB33e2V%KbSWVhxJ0wLogSh3d?F?h@J4,dSt-NxueZ}}0mso');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
