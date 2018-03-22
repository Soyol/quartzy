$( document ).ready(function() {
    console.log( "ready!" );

    $(".filter-list button").click(function(){
    	if($(this).hasClass("selected")){
    		$(this).removeClass("selected");
    	}else{
    		$(this).addClass("selected");
    	}

    	if ($('.filter-list button.selected').length > 0) {
	    	$(".clearFilterBtn").fadeIn("fast");
		}else{
			$(".clearFilterBtn").fadeOut();
		}
    });

    $( function() {
	    $( "#datepicker" ).datepicker();
	    $( "#datepicker2" ).datepicker();
	    $( "#datepicker-mobile1" ).datepicker();
	    $( "#datepicker-mobile2" ).datepicker();
	  } );

    
	

    $(".clearFilterBtn").click(function(){
    	if($(".filter-list>button.selected").removeClass("selected")){
    		$(".clearFilterBtn").fadeOut();
    	}else{
    		alert("Please try again. Something wrong :(");
    	}
    });

});