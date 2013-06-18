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
        $('.navhome').hover(function(){
            $(this).stop().animate({ backgroundColor: '#A9010E' }, 600);
        }, function(){
            $(this).stop().animate({ backgroundColor: '#b90111' }, 300);
        });
        
        // Nav items
        $('.navitem').hover(function(){
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
        
        $('.headerbottomleft').hover(function(){
            $('.headerimginfo').stop().animate({ height: '50px' }, 200);
        }, function(){
            $('.headerimginfo').stop().animate({ height: '30px' }, 100);
        });
        
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
        
    });
    
})(window.jQuery);