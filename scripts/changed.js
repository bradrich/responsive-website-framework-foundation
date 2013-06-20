/* Author: Brad Richardson */

// Anonymous jQuery Function for Cleaner JavaScript
(function ($) {
    
    $(document).ready(function() {
        
        // ********************************* //
        // ----- Image Rollover Effect ----- //
        // _________________________________ //
        
		$("img.a").hover(function() {
			$(this).stop().animate({ "opacity": "0" }, 100);
		}, function () {
			$(this).stop().animate({ "opacity": "1" }, 600);
		});
        
        
        // ****************************************** //
        // ----- Navigation Button Hover Effect ----- //
        // __________________________________________ //
        
        // Nav home button
        $('.buttonhover').hover(function(){
            $(this).stop().animate({ backgroundColor: '#A9010E' }, 600);
        }, function(){
            $(this).stop().animate({ backgroundColor: '#b90111' }, 300);
        });
        
        // Nav items
        $('.navbuttonhover').hover(function(){
            $(this).stop().animate({ backgroundColor: '#A9010E' }, 600);
        }, function(){
            $(this).stop().animate({ backgroundColor: '#D60312' }, 300);
        });
        
        
        // ************************************ //
        // ----- Header Navigation Search ----- //
        // ____________________________________ //
        
        // Click function on search button
        $('#navsearch').click(function(e){
            e.preventDefault();
            $('.navitemcontainer').fadeOut(300);
            $('.navsearchinput').focus();
        });
        $('.navsearchbutton').click(function(){
            $('.navitemcontainer').fadeIn(300);
        });
        
        
        // ********************************** //
        // ----- Header Gallery Effects ----- //
        // __________________________________ //
        
        // Animate on visible
        var win = $(window);
        //var detectPartial = $('#detect_type').val() == 'partial';
        var headerRightImages = $('.headerbottomrightimg');
        var headerAnimateDelay = 300;
        
        /*win.scroll(function(event) {
            if($('.headerbottom').visible(true)){*/
                // Ease in big image
                $('.headerbottomleft').delay(headerAnimateDelay).animate({ left: '0px' }, 1200, 'easeOutQuart');
                
                // Ease in small images
                headerRightImages.each(function(i, el){
                    var el = $(el);
                    headerAnimateDelay = headerAnimateDelay + 200;
                    el.delay(headerAnimateDelay).animate({ left: '0px' }, 1200, 'easeOutQuart');
                });
            /*}
        });*/
        
        // Big left image color bar hover effect
        $('.headerbottomleft').hover(function(){
            $('.headerimginfo').stop().animate({ height: '50px' }, 200);
        }, function(){
            $('.headerimginfo').stop().animate({ height: '30px' }, 100);
        });
        
        // Small right color bar hover effects
        $('.headerbottomrightimg').hover(function(){
            $(this).find('.headerimginfo-other').stop().animate({ height: '30px' }, 200);
        }, function(){
            $(this).find('.headerimginfo-other').stop().animate({ height: '100%' }, 100);
        });
        
        
        // ******************************* //
        // ----- Button Hover Effect ----- //
        // _______________________________ //
        
        // Middle Button items
        $('.middlebutton').hover(function(){
            $(this).stop().animate({ backgroundColor: '#A9010E' }, 600);
        }, function(){
            $(this).stop().animate({ backgroundColor: '#D60312' }, 300);
        });
        
        // Footer Button items
        $('.hireusbutton').hover(function(){
            $(this).stop().animate({ backgroundColor: '#A9010E' }, 600);
        }, function(){
            $(this).stop().animate({ backgroundColor: '#D60312' }, 300);
        });
        
        
        // ******************************* //
        // ----- Button Hover Effect ----- //
        // _______________________________ //
        
        $('.backtotop').localScroll();
        
    });
    
})(window.jQuery);