/*
*
*	Live Customiser Script
*	------------------------------------------------
	*	Akmanda Framework
	* 	Copyright Themes Awesome 2013 - http://www.themesawesome.com
*
*/
( function( $ ){		
	
	// HEADER STYLING

	wp.customize('top_head',function( value ) {
		value.bind(function(to) {
			$('.top-header').css('background-color', to ? to : '' );
		});
	});

	wp.customize('bottom_bar',function( value ) {
		value.bind(function(to) {
			$('.main-menu').css('background-color', to ? to : '' );
		});
	});

	wp.customize('top_icon',function( value ) {
		value.bind(function(to) {
			$('.top-header ul li i').css('color', to ? to : '' );
		});
	});

	wp.customize('top_bgicon',function( value ) {
		value.bind(function(to) {
			$('.top-header ul li i').css('background-color', to ? to : '' );
		});
	});

	wp.customize('top_text',function( value ) {
		value.bind(function(to) {
			$('.info ul li p span').css('color', to ? to : '' );
		});
	});

	wp.customize('menu_bar',function( value ) {
		value.bind(function(to) {
			$('.main-menu > ul > li > a, .right-section .search i, .main-menu ul ul li a').css('color', to ? to : '' );
		});
	});

	wp.customize('btn_quote',function( value ) {
		value.bind(function(to) {
			$('.right-section .quote-link a').css('background-color', to ? to : '' );
			$('.right-section .search i').css('border-left-color', to ? to : '' );
		});
	});

	wp.customize('btn_quotetext',function( value ) {
		value.bind(function(to) {
			$('.right-section .quote-link a').css('color', to ? to : '' );
		});
	});

	wp.customize('sub_bg',function( value ) {
		value.bind(function(to) {
			$('.main-menu ul ul li a').css('background-color', to ? to : '' );
		});
	});

	wp.customize('sub_bord',function( value ) {
		value.bind(function(to) {
			$('.main-menu ul ul li a').css('border-bottom-color', to ? to : '' );
		});
	});

	wp.customize('sub_bg_hover',function( value ) {
		value.bind(function(to) {
			$('.main-menu ul ul li a:hover').css('background-color', to ? to : '' );
		});
	});



	// CONTENT STYLING

	wp.customize('text_slider',function( value ) {
		value.bind(function(to) {
			$('.home-slider .caption-wrap h1, .home-slider .caption-wrap p').css('color', to ? to : '' );
			$('.home-slider .caption-wrap h1:after').css('background-color', to ? to : '' );
		});
	});

	wp.customize('arrow_slider',function( value ) {
		value.bind(function(to) {
			$('.home-slider .flex-direction-nav a:before, .owl-theme .owl-controls .owl-nav [class*=owl-]').css('color', to ? to : '' );
		});
	});

	wp.customize('bgemail_quote',function( value ) {
		value.bind(function(to) {
			$('.services .email-quote, .contact-page .address, .contact-page .hours').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn_send',function( value ) {
		value.bind(function(to) {
			$('.services .email-quote .button-normal').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn_sendtext',function( value ) {
		value.bind(function(to) {
			$('.services .email-quote .button-normal').css('color', to ? to : '' );
		});
	});

	wp.customize('title_form',function( value ) {
		value.bind(function(to) {
			$('.services .email-quote h4').css('color', to ? to : '' );
		});
	});

	wp.customize('title_white',function( value ) {
		value.bind(function(to) {
			$('.with-bg .section-title h2, .services .services-text h3.title').css('color', to ? to : '' );
		});
	});

	wp.customize('title_white_bord',function( value ) {
		value.bind(function(to) {
			$('.with-bg .section-title h2:after, .services .services-text h3.title:after').css('background-color', to ? to : '' );
		});
	});

	wp.customize('title_black',function( value ) {
		value.bind(function(to) {
			$('.section-title h2, .intro-section h3.title, .company-desc h3.title, .services-text h3.title, .company-vision h4, .single-content h3').css('color', to ? to : '' );
		});
	});

	wp.customize('title_black_bord',function( value ) {
		value.bind(function(to) {
			$('.section-title h2:after, .intro-section h3.title:after, .company-desc h3.title:after, .services-text h3.title:after, .single-content h3:after').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn1_bg',function( value ) {
		value.bind(function(to) {
			$('.button-normal').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn2_bg',function( value ) {
		value.bind(function(to) {
			$('.button-normal.with-icon .icon').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn1_bg_hov',function( value ) {
		value.bind(function(to) {
			$('.button-normal:hover').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn1_text',function( value ) {
		value.bind(function(to) {
			$('.button-normal').css('color', to ? to : '' );
		});
	});

	wp.customize('btn1_text_hover',function( value ) {
		value.bind(function(to) {
			$('.button-normal:hover').css('color', to ? to : '' );
		});
	});

	wp.customize('text_icon_service',function( value ) {
		value.bind(function(to) {
			$('.features-item .text h4, .features-item .text p, .text').css('color', to ? to : '' );
		});
	});

	wp.customize('text_testi',function( value ) {
		value.bind(function(to) {
			$('.testimonial-item p').css('color', to ? to : '' );
		});
	});

	wp.customize('text_testi_ava',function( value ) {
		value.bind(function(to) {
			$('.client-info .client-details .author').css('color', to ? to : '' );
		});
	});

	wp.customize('post_date',function( value ) {
		value.bind(function(to) {
			$('.latest-post .post-content .date').css('background-color', to ? to : '' );
			$('.latest-post .post-content .content-wrap .meta span i, .blog .post-item .meta span i').css('color', to ? to : '' );
		});
	});

	wp.customize('post_date_text',function( value ) {
		value.bind(function(to) {
			$('.latest-post .post-content .date span').css('color', to ? to : '' );
		});
	});

	wp.customize('post_title',function( value ) {
		value.bind(function(to) {
			$('.latest-post .post-content .content-wrap h4, .blog .post-item .post-title, .sidebar .recent-post .post-content h4').css('color', to ? to : '' );
		});
	});

	wp.customize('post_title_hover',function( value ) {
		value.bind(function(to) {
			$('.blog .post-item .post-title:hover, .sidebar .recent-post .post-content h4:hover').css('color', to ? to : '' );
		});
	});

	wp.customize('counter_value',function( value ) {
		value.bind(function(to) {
			$('.counter-section h2').css('color', to ? to : '' );
			$('.counter-section h2:after').css('border-top-color', to ? to : '' );
		});
	});

	wp.customize('counter_title',function( value ) {
		value.bind(function(to) {
			$('.counter-section p.heading').css('color', to ? to : '' );
		});
	});

	wp.customize('counter_text',function( value ) {
		value.bind(function(to) {
			$('.counter-section p').css('color', to ? to : '' );
		});
	});

	wp.customize('bg_team',function( value ) {
		value.bind(function(to) {
			$('.team-photo .team-details').css('background-color', to ? to : '' );
		});
	});

	wp.customize('bg_team_hover',function( value ) {
		value.bind(function(to) {
			$('.team-photo:hover .team-details').css('background-color', to ? to : '' );
		});
	});

	wp.customize('team_detail',function( value ) {
		value.bind(function(to) {
			$('.team-photo .team-details h4, .team-photo .team-details p').css('color', to ? to : '' );
		});
	});

	wp.customize('team_detail_sosmed',function( value ) {
		value.bind(function(to) {
			$('.team-details .fa').css('color', to ? to : '' );
		});
	});

	wp.customize('blue_btn',function( value ) {
		value.bind(function(to) {
			$('p.col-md-12 .button-normal, .post .button-normal, .contact-us-banner .button-normal').css('background-color', to ? to : '' );
		});
	});

	wp.customize('blue_btn_hover',function( value ) {
		value.bind(function(to) {
			$('p.col-md-12 .button-normal:hover, .post .button-normal:hover, .contact-us-banner .button-normal:hover').css('background-color', to ? to : '' );
		});
	});

	wp.customize('blue_btn_text',function( value ) {
		value.bind(function(to) {
			$('p.col-md-12 .button-normal, .post .button-normal, .contact-us-banner .button-normal').css('color', to ? to : '' );
		});
	});

	wp.customize('service_icon',function( value ) {
		value.bind(function(to) {
			$('.single-services-wrap .features-item .icon-wrap i').css('color', to ? to : '' );
		});
	});

	wp.customize('text_banner',function( value ) {
		value.bind(function(to) {
			$('.contact-us-banner h2').css('color', to ? to : '' );
		});
	});

	wp.customize('bg_pdf',function( value ) {
		value.bind(function(to) {
			$('.sidebar .widget.pdf-download').css('background-color', to ? to : '' );
		});
	});

	wp.customize('bord_pdf',function( value ) {
		value.bind(function(to) {
			$('.sidebar .widget.pdf-download ul li').css('border-bottom-color', to ? to : '' );
		});
	});

	wp.customize('text_pdf',function( value ) {
		value.bind(function(to) {
			$('.sidebar .widget.pdf-download ul li a, .sidebar .widget.pdf-download h4, .contact-page .address h4, .contact-page .hours h4, .contact-page .address p, .contact-page .hours p').css('color', to ? to : '' );
		});
	});

	wp.customize('text_white',function( value ) {
		value.bind(function(to) {
			$('.services .services-text p, .widget-footer p, .widget-footer .footer-content h4, .services-calculator .form-section form label').css('color', to ? to : '' );
		});
	});

	wp.customize('text_black',function( value ) {
		value.bind(function(to) {
			$('.excerpt p, .services-calculator .intro-section p, .fform span, .excerpt, .latest-post .post-content .content-wrap .meta span, .meta span, .text-content p, .company-desc p, .company-vision p, .services-content p, .content-text p, .single-tag-bottom strong, .share span, .comment-respond h3, .comment-respond label, h4.title').css('color', to ? to : '' );
		});
	});

	wp.customize('bg_icon_share',function( value ) {
		value.bind(function(to) {
			$('.share ul li a').css('background-color', to ? to : '' );
		});
	});

	wp.customize('bord_icon_share',function( value ) {
		value.bind(function(to) {
			$('.share ul li a').css('border-color', to ? to : '' );
		});
	});

	wp.customize('bg_icon_share_hove',function( value ) {
		value.bind(function(to) {
			$('.share ul li a:hover').css('background-color', to ? to : '' );
			$('.share ul li a:hover').css('border-color', to ? to : '' );
		});
	});

	wp.customize('icon_share',function( value ) {
		value.bind(function(to) {
			$('.social-share .fa').css('color', to ? to : '' );
		});
	});

	wp.customize('icon_share_hov',function( value ) {
		value.bind(function(to) {
			$('.social-share .fa:hover').css('color', to ? to : '' );
		});
	});

	wp.customize('link_copyright',function( value ) {
		value.bind(function(to) {
			$('.copyright p a, .breadcrumbs span a, .tags a, .logged-in-as a, .single-tag-bottom a').css('color', to ? to : '' );
		});
	});

	wp.customize('link_copyright_hov',function( value ) {
		value.bind(function(to) {
			$('.copyright p a:hover, , .breadcrumbs span a:hover, .tags a:hover, .logged-in-as a:hover, .single-tag-bottom a:hover').css('color', to ? to : '' );
		});
	});



	// FOOTER STYLING

	wp.customize('title_footer',function( value ) {
		value.bind(function(to) {
			$('.widget-title h4 span').css('color', to ? to : '' );
			$('.widget-footer h4.title:after').css('border-top-color', to ? to : '' );
		});
	});

	wp.customize('btn_white',function( value ) {
		value.bind(function(to) {
			$('.button-normal.white').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn_white_hov',function( value ) {
		value.bind(function(to) {
			$('.button-normal.white:hover').css('background-color', to ? to : '' );
		});
	});

	wp.customize('btn_white_text',function( value ) {
		value.bind(function(to) {
			$('.button-normal.white').css('color', to ? to : '' );
		});
	});

	wp.customize('btn_white_text_hov',function( value ) {
		value.bind(function(to) {
			$('.button-normal.white:hover').css('color', to ? to : '' );
		});
	});

	wp.customize('icon_sosmed',function( value ) {
		value.bind(function(to) {
			$('.copyright .social-icon ul li a').css('color', to ? to : '' );
		});
	});

	wp.customize('text_copyright',function( value ) {
		value.bind(function(to) {
			$('.copyright p').css('color', to ? to : '' );
		});
	});


	


} )( jQuery );