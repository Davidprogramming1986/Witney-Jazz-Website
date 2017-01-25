$(document).ready(function() {

	// Navbar Collapse
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });

    //init band buttons
    $('.read-more').slideUp(1);

    // Band button read more
    $('.band-button').on('click', function(event) {
    	event.preventDefault();
    	$(this).closest('p').next().slideToggle();
    	 $(this).text(function(i, text){
          return text === "Read MORE" ? "Read LESS" : "Read MORE";
      })
    	
    });

});