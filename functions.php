<?php 

add_filter('show_admin_bar', '__return_false');

//** *Enable upload for webp image files.*/
function webp_upload_mimes($existing_mimes) {
    $existing_mimes['webp'] = 'image/webp';
    return $existing_mimes;
}
add_filter('mime_types', 'webp_upload_mimes');

//** * Enable preview / thumbnail for webp image files.*/
function webp_is_displayable($result, $path) {
    if ($result === false) {
        $displayable_image_types = array( IMAGETYPE_WEBP );
        $info = @getimagesize( $path );

        if (empty($info)) {
            $result = false;
        } elseif (!in_array($info[2], $displayable_image_types)) {
            $result = false;
        } else {
            $result = true;
        }
    }

    return $result;
}
add_filter('file_is_displayable_image', 'webp_is_displayable', 10, 2);



// Ajouter la prise en charge des images mises en avant
function CT_setup_theme() {
    add_theme_support( 'post-thumbnails' );
    if ( function_exists( 'add_image_size' ) ) {
        add_image_size( 'small', 200, 200, true ); /* Taille perso  1 */ 
        add_image_size( 'medium', 450, 450, true ); /* Taille perso  2 */
        add_image_size( 'full', 1000, 1000, true );  /* Taille perso  3 */
    }
}
add_action( 'after_setup_theme', 'CT_setup_theme' );
// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );
/**
 * Disable plein de trucs
 */
function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
    add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
   }
   add_action( 'init', 'disable_emojis' );
   
function disable_emojis_tinymce( $plugins ) {
    if ( is_array( $plugins ) ) {
        return array_diff( $plugins, array( 'wpemoji' ) );
    } else {
        return array();
    }
}

function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
    if ( 'dns-prefetch' == $relation_type ) {
        $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
        $urls = array_diff( $urls, array( $emoji_svg_url ) );
    }
return $urls;
}

// function remove_block_css(){
//     wp_dequeue_style( 'wp-block-library' );
//     }
// add_action( 'wp_enqueue_scripts', 'remove_block_css', 100 );

function my_deregister_scripts(){
    wp_dequeue_script( 'wp-embed' );
   }
add_action( 'wp_footer', 'my_deregister_scripts' );


register_nav_menus( array(
	'main' => 'Menu Principal'
) );

function CT_register_assets() {
    // Déclarer style.css à la racine du thème
    wp_enqueue_script( 
        'three',
        get_template_directory_uri() . '/js/libs/three.min.js',
        array(), 
        '1.0',
        true
    );
    wp_enqueue_style( 
        'Style',
        get_template_directory_uri() . '/style.css',
        array(), 
        '1.0'
    );

    wp_enqueue_script( 
        'app',
        get_template_directory_uri() . '/js/app.js',
        array(), 
        '1.0',
        true
    );
    wp_enqueue_script( 
        'cube',
        get_template_directory_uri() . '/js/cube.js',
        array(), 
        '1.0',
        true
    );
    wp_enqueue_script( 
        'aj',
        get_template_directory_uri() . '/js/aj.js',
        array(), 
        '1.0',
        true
    );
   
    wp_enqueue_script( 
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js',
        array(), 
        '1.0',
        false
    );
    wp_enqueue_script( 
        'gsapCustom',
        get_template_directory_uri() . '/js/libs/CustomEase.min.js',
        array(), 
        '1.0',
        false
    );
}
add_action( 'wp_enqueue_scripts', 'CT_register_assets' );



function CT_register_post_types() {
	
    $labels = array(
        'name' => 'Projets',
        'all_items' => 'Tout les projets', 
        'singular_name' => 'projet',
        'add_new_item' => 'Ajouter un projet',
        'edit_item' => 'Modifier le projet',
        'menu_name' => 'projets'
    );

	$args = array(
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'has_archive' => true,
        'supports' => array( 'title','thumbnail', 'editor' ),
        'menu_position' => 2, 
        'menu_icon' => 'dashicons-admin-page',
        'taxonomies' => array( 'category', 'tag' ),
	);

    register_post_type( 'projets', $args );
}
add_action( 'init', 'CT_register_post_types' );




//On crée 3 taxonomies personnalisées: Année, Réalisateurs et Catégories de série.

function CT_register_taxonomies() {
	
	// Taxonomie Date de départ

	$labels_date_depart = array(
		'name'                       => _x( 'Date de départ', 'taxonomy general name'),
		'singular_name'              => _x( 'Date de départ', 'taxonomy singular name'),
		'search_items'               => __( 'Rechercher une date de départ'),
		'popular_items'              => __( 'Date de départ populaires'),
		'all_items'                  => __( 'Toutes les date de départ'),
		'edit_item'                  => __( 'Editer une date de départ'),
		'update_item'                => __( 'Mettre à jour une date de départ'),
		'add_new_item'               => __( 'Ajouter une nouvelle date de départ'),
		'new_item_name'              => __( 'Nom de la nouvelle catégorie'),
		'add_or_remove_items'        => __( 'Ajouter ou supprimer une date de départ'),
		'choose_from_most_used'      => __( 'Choisir parmi les date de départ les plus utilisées'),
		'not_found'                  => __( 'Pas de date de départ trouvées'),
		'menu_name'                  => __( 'Date de départ de project'),
	);

	$args_date_depart = array(
	// Si 'hierarchical' est défini à true, notre taxonomie se comportera comme une catégorie standard
		'hierarchical'          => true,
		'labels'                => $labels_date_depart,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'date_depart' ),
		'show_in_rest' => true,
	);

	register_taxonomy( 'date_depart', 'projets', $args_date_depart );

	// Taxonomie Date de fin

	$labels_date_fin = array(
		'name'                       => _x( 'Date de fin', 'taxonomy general name'),
		'singular_name'              => _x( 'Date de fin', 'taxonomy singular name'),
		'search_items'               => __( 'Rechercher une date de fin'),
		'popular_items'              => __( 'Date de fin populaires'),
		'all_items'                  => __( 'Toutes les date de fin'),
		'edit_item'                  => __( 'Editer une date de fin'),
		'update_item'                => __( 'Mettre à jour une date de fin'),
		'add_new_item'               => __( 'Ajouter une nouvelle date de fin'),
		'new_item_name'              => __( 'Nom de la nouvelle catégorie'),
		'add_or_remove_items'        => __( 'Ajouter ou supprimer une date de fin'),
		'choose_from_most_used'      => __( 'Choisir parmi les date de fin les plus utilisées'),
		'not_found'                  => __( 'Pas de date de fin trouvées'),
		'menu_name'                  => __( 'Date de fin de project'),
	);

	$args_date_fin = array(
	// Si 'hierarchical' est défini à true, notre taxonomie se comportera comme une catégorie standard
		'hierarchical'          => true,
		'labels'                => $labels_date_fin,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'date_fin' ),
		'show_in_rest' => true,
	);

	register_taxonomy( 'date_fin', 'projets', $args_date_fin );
	
	// Taxonomie Role
	
	$labels_roles = array(
		'name'                       => _x( 'Rôles', 'taxonomy general name'),
		'singular_name'              => _x( 'Rôle', 'taxonomy singular name'),
		'search_items'               => __( 'Rechercher un rôle'),
		'popular_items'              => __( 'Rôles populaires'),
		'all_items'                  => __( 'Tous les rôles'),
		'edit_item'                  => __( 'Editer un rôle'),
		'update_item'                => __( 'Mettre à jour un rôle'),
		'add_new_item'               => __( 'Ajouter un nouveau rôle'),
		'new_item_name'              => __( 'Nom du nouveau rôle'),
		'separate_items_with_commas' => __( 'Séparer les rôles avec une virgule'),
		'add_or_remove_items'        => __( 'Ajouter ou supprimer un rôle'),
		'choose_from_most_used'      => __( 'Choisir parmi les plus utilisés'),
		'not_found'                  => __( 'Pas de rôle trouvés'),
		'menu_name'                  => __( 'Rôles'),
	);

	$labels_roles = array(
		'hierarchical'          => false,
		'labels'                => $labels_roles,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'update_count_callback' => '_update_post_term_count',
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'roles' ),
		'show_in_rest' => true,
	);

	register_taxonomy( 'roles', 'projets', $labels_roles );
	
	
	
	// Type de mission

	$labels_type_project = array(
		'name'                       => _x( 'Type de mission', 'taxonomy general name'),
		'singular_name'              => _x( 'Type de mission', 'taxonomy singular name'),
		'search_items'               => __( 'Rechercher un type'),
		'popular_items'              => __( 'Types de mission populaires'),
		'all_items'                  => __( 'Toute les types de mission'),
		'edit_item'                  => __( 'Editer un types de mission'),
		'update_item'                => __( 'Mettre à jour un type de mission'),
		'add_new_item'               => __( 'Ajouter un nouveau type de mission'),
		'new_item_name'              => __( 'Nom du type de mission'),
		'add_or_remove_items'        => __( 'Ajouter ou supprimer un type de mission'),
		'choose_from_most_used'      => __( 'Choisir parmi les types de mission les plus utilisées'),
		'not_found'                  => __( 'Pas de type de mission trouvées'),
		'menu_name'                  => __( 'type de mission'),
	);

	$args_type_project = array(
	// Si 'hierarchical' est défini à true, notre taxonomie se comportera comme une catégorie standard
		'hierarchical'          => true,
		'labels'                => $labels_type_project,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'type_de_mission' ),
		'show_in_rest' => true,
	);

	register_taxonomy( 'type_de_mission', 'projets', $args_type_project );
}

add_action( 'init', 'CT_register_taxonomies', 0 );