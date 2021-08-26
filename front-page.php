<?php get_header(); ?>
	<div id="a-j">
		<div class="home__wrapper">
			<div class="header__name">
				<a href="<?php echo home_url( '/' ); ?>">
				<p class="header__name__text">Protfolio of Enzo Janoir</p>
				</a>
			</div>
			<div class="side__bar__about active">
				<div class="side__bar__line"></div>
					<div class="side__bar__info">
						<div class="side__bar__role">
							<h1 class="side__bar__role__text">
								UI<span class="side__bar__role__dot"></span>UX<p class="m">DESIGNER</p>
							</h1>
						</div>
						<div class="side__bar__name">Enzo Janoir</div>
						<div class="side__bar__description">Based in <b>Lyon</b>, France. Passionate about this field, discover my projects by <b>clicking</b> and <b>dragging</b> the <b>cube</b> on the right </div>
					</div>
				<div class="side__bar__line__2"></div>
			</div>
			<div class="side__bar__projet">
				<ul class="side__bar__projet__list">
					<?php $loop = new WP_Query( array( 
						'post_type' => 'projets',
						'posts_per_page' => -1
					));
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
						<a class="side__bar__projet__item__link" href="<?= get_permalink() ?>">
							<li class="side__bar__projet__item">
								<h1 class="side__bar__projet__item__title" ><?= the_title() ?></h1>
								<? $taxes = get_the_category();
								echo '<ul class="side__bar__projet__item__list">';
								foreach( $taxes as $taxe ) {
									echo '<li class="side__bar__projet__item__cat pillule">' . $taxe->name . '</li>'; 
								} 
								echo '</ul>'; ?>
							</li>
						</a>
					<?php endwhile; ?>
				</ul>
			</div>
			<div class="button__dispo">
				<div class="button__dispo__text">Available for freelance</div>
				<div class="button__dispo__pins"></div>
			</div>
			<div class="nav__home">
				<svg class="abc" width="40" height="16">
					<use xlink:href="#abc" x="0" y="0" width="40" height="16"/>
				</svg>
				<div class="line-seperator"></div>
				<svg class="cube" width="32" height="32">
					<use xlink:href="#cube" x="0" y="0" width="32" height="32"/>
				</svg>
			</div>
			<div class="navigation__main">
				<?php wp_nav_menu( 
				array( 
					'theme_location' => 'main', 
					'container' => 'ul', // afin d'éviter d'avoir une div autour 
					'menu_class' => 'navigation', // ma classe personnalisée 
					'menu_id' => 'navigation',
					'add_li_class' => 'navigation__item', // ma classe personnalisée 
				) 
				); ?>
			</div>
		</div>
	</div>
<?php get_footer(); ?>