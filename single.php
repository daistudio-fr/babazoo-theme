<?php get_header(); ?>
<div id="a-j">
	<div class="single__wrapper">
		<style>
			#gl{
				opacity: 0;
			}
		</style>
		<div class="single__loader">
			<div class="single__line"></div>
				<div class="single__loader__wrapper">
				 	<? $taxes = get_the_category(); ?>
					<p class="single__loader__title animTitle">
						<?= the_title() . ", ";
						foreach( $taxes as $taxe ) {
							echo $taxe->name . " "; 
						} ?> </p>
					<p class="single__loader__role animTitle">
					<?php
					$termroles = wp_get_object_terms( $post->ID, 'roles' ); 
					foreach( $termroles as $termrole ) {
						echo $termrole->name; 
					} ?>
					</p>
				</div>
			<div class="single__line2"></div>
		</div>
		<div class="content">
			<div class="header__single">
				<a class="header__single__back__link" href="<?= home_url( '/' ); ?>">
					<div class="header__single__back">
						<div class="header__single__back__arrow">←</div>
						<p class="header__single__back__text animTitle">Back to work</p>
					</div>
				</a>
			</div>
			<div class="single__hero">
				<h1 class="single__hero__title animTitle"><?= the_title() ?></h1>
				<div class="single__hero__content">
					<div class="single__hero__info">
						<div class="single__hero__date">
							<p class="single__hero__date__item pht">
								<? $termdd = wp_get_object_terms( $post->ID, 'date_depart' ); 
								$termdf = wp_get_object_terms( $post->ID, 'date_fin' ); 
								echo $termdd[0]->name . " - " . $termdf[0]->name; ?>
							</p>
							<p class="single__hero__date__url"><?= the_title() ?></p>
						</div>
						<div class="single__hero__role">
							<p class="single__hero__role__ph pht">Role</p>
							<p class="single__hero__role__role">
								<? $termroles = wp_get_object_terms( $post->ID, 'roles' ); 
								foreach( $termroles as $termrole ) {
									echo $termrole->name; 
								} ?>
							</p>
						</div>
						<div class="single__hero__mission">
							<p class="single__hero__mission__ph pht">Mission</p>
								<? $termmissions = wp_get_object_terms( $post->ID, 'type_de_mission' ); 
								echo "<span class='single__hero__mission__item'>";
								foreach( $termmissions as $termmission ) {
									echo "<li>" . $termmission->name . "</li>"; 
								} 	echo "</span>"; ?>
						</div>
					</div>
					<div class="single__hero__thumbnail">
						<img src="<? the_post_thumbnail_url() ?>" alt="" srcset="">
					</div>
				</div>
			</div>

			<div class="single__content">
				<? the_content() ?>
					<?php if(get_field('contributeurs')): ?>
					<div class="single__content__contributeur">
						<h2 class="regular">Contributors</h2>
							<?php 
							$contributeurs = get_field('contributeurs');
							if( $contributeurs ) { ?>
								<div class="single__content__contributeur__container">
									<? foreach( $contributeurs as $row ) { ?>
										<div class="single__content__contributeur__row">
											<p class="pht"><?= $row['type_de_poste'] ?></p>
											<p class=""><?= $row['nom_prenom'] ?></p>
										</div>
									
									<?php } ?>
								</div>
							<? } ?>
					</div>
					<?php endif; ?>
			</div>
			<div class="single__next__projet">
				<? $next_post = get_next_post(); 
					if(!$next_post){ ?>
						<?php $loop = new WP_Query( array( 
							'post_type' => 'projets',
							'posts_per_page' => 1,
							'orderby' => 'date',
							'order' => 'ASC'
							));
							while ( $loop->have_posts() ) : $loop->the_post(); ?>
								<a class="next__projet" href="<?php echo get_permalink(); ?>">NEXT PROJECT</a>
							<?php endwhile; ?>
					<? }else{ ?>
						<a class="next__projet" href="<?php echo get_permalink( $next_post->ID ); ?>">NEXT PROJECT</a>
					<? } ?>
			</div>
			<div class="footer__single">
				<div class="footer__single__top">
					<p class="footer__single__top__text animTitle">Scroll down</p>
					<div class="footer__single__top__arrow">↓</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>
