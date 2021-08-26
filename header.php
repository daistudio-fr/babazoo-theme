<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' : '; } ?><?php bloginfo( 'name' ); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content="La première année est cruciale pour le bon développement des chiots et des chatons. L'alimentation qu'ils reçoivent maintenant aura une incidence sur leur santé pour le reste de leur vie.">
    <title><?php wp_title(''); ?></title>
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
    <?php wp_head(); ?>
</head>
<div id="gl"></div>

<div class="services__pop">
    <div class="sombritude"></div>  
    <div class="services__pop__button__close slide">Close</div>
    <div class="services__pop__about__description slide">
      <h2 class="services__pop__about__description__title">About me</h2>
      <p class="services__pop__about__description__desc">
      I am a web designer specializing in digital design. At the intersection of brand identity, interaction, user interface design, and web project management. I like to work in a team to share processes and knowledge. Bringing solutions and working on projects that bring a personal touch. I am very interested in implementing responsible solutions by being as user friendly as possible. I am currently freelancing from France in Lyon.
      <br><br>Working at home and living at work.
      </p>
    </div>
    <div class="services__pop__item slide">
      <h2 class="services__pop__item__title">Services i can help you with</h2>
      <ul class="services__pop__items">
        <li class="services__pop__item__item">Interaction Design</li>
        <li class="services__pop__item__item">Prototyping</li>
        <li class="services__pop__item__item">Interface design</li>
        <li class="services__pop__item__item">User research</li>
        <li class="services__pop__item__item">UX Audit</li>
        <li class="services__pop__item__item">Wireframing</li>
        <li class="services__pop__item__item">Design system</li>
        <li class="services__pop__item__item">Usability testing</li>
        <li class="services__pop__item__item">User interview</li>
        <li class="services__pop__item__item">Motion</li>
        <li class="services__pop__item__item">Digital project management</li>
        <li class="services__pop__item__item">Redaction</li>
      </ul>
      <h2 class="services__pop__item__proud__title">Proud of</h2>
      <p class="services__pop__item__proud__item">Bachelor's degree in digital project management</p>
      <p class="services__pop__item__proud__items">Master's degree in user experience</p>
    </div>
    <div class="services__pop__note slide">
      <p class="services__pop__note__sub">Would you like us to work together?</p>
      <p class="services__pop__note__cta">Drop a note →</p>
    </div>
  </div>
  <div class="contact__pop">
  <div class="sombritudee"></div>  
    <div class="contact__pop__button__close slide">Close</div>
    <div class="contact__pop__about__description slide">
      <h2 class="contact__pop__about__description__title">Follow the guide</h2>
      <p class="contact__pop__about__description__desc">
        <ul class="services__pop__items">
          <li class="services__pop__item__item">Interaction Design</li>
          <li class="services__pop__item__item">Prototyping</li>
          <li class="services__pop__item__item">Interface design</li>
          <li class="services__pop__item__item">User research</li>
        </ul>
      </p>
      <h2 class="contact__pop__about__description__title">Thanks to</h2>
      <p class="contact__pop__about__description__desc">
        <ul class="services__pop__items">
          <li class="services__pop__item__item">Develop by Daistudio</li>
        </ul>
      </p>
    </div>
    <div class="contact__pop__note slide">
      <p class="contact__pop__note__sub">Would you like us to work together?</p>
      <p class="contact__pop__note__cta">Drop a note →</p>
    </div>
  </div>
<body <?php body_class(); ?>> <?php wp_body_open(); ?>
<header class="header">
  <div class="fake_elmt"></div>
  <div class="header__button__dark">
    <div class="button__dark">
      <div class="button__dark__text">LIGHT</div>
      <div class="button__dark__pins"></div>
    </div>
  </div>

</header>
