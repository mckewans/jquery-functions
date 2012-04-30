$(function(){ 
	
	var images_list = new Array( 
		“images/site/smartpanel/keyfobs_smartpanel.jpg”, 
		“images/site/smartpanel/carloop_smartpanel.jpg”, 
		“images/site/smartpanel/missing_smartpanel.jpg”, 
		“images/site/smartpanel/other_off_test.gif”, 
		“images/site/smartpanel/another_off_test.gif”  
	); 
	
	$(“#mainimage”).attr(“src”, images_list[0]); /* DEFAULT */ 
	
	function maincontrol(image, a, b, c, text) { 
		
		$(“#mainimage”).fadeOut(‘slow’, function() {  
			$(“#mainimage”).attr(“src”, image); 
			$(“#mainimage”).fadeIn(‘slow’); 
		}); 
		
		switch(a) { 
			case ‘hide’ : $(“#underpic.set_one”).hide(); break; 
			case ‘show’ : $(“#underpic.set_one”).show(‘slow’); break; 
		} 
		switch(b) { 
			case ‘hide’ : $(“#underpic.set_two”).hide(); break; 
			case ‘show’ : $(“#underpic.set_two”).show(‘slow’); break; 
		} 
		switch(c) { 
			case ‘hide’ : $(“#underpic.set_three”).hide(); break; 
			case ‘show’ : $(“#underpic.set_three”).show(‘slow’); break; 
		}
		 
		$(‘h2’).text(text); 
	}  
		
	function whatsup(link, image, title) { 
			
		$(“#mainimage”).fadeOut(‘slow’, function() { 
			$(“#mainimage”).attr(“src”, image); 
			$(“#mainimage”).fadeIn(‘slow’); 
		}); 
		
		$(‘h2’).text(title).fadeIn(‘slow’); 
		
	} 
			
		$(“#set1”).click(function()	{ 
			maincontrol(images_list[0],’show’,’hide’,’hide’,’Special Offers’); 
		}); 			 			 				
		
		$(“#set2”).click(function()	{ 
			maincontrol(images_list[1],’hide’,’show’,’hide’,’Accessories’); 
		}); 
		
		$(“#set3”).click(function()	{ 
			maincontrol(images_list[3],’hide’,’hide’,’show’,’More Offers’); 
		}); 
			
		$(“.s1_a”).click(function() { whatsup(‘s1_a’, images_list[0], ‘Some Items’); }); 
		$(“.s1_b”).click(function() { whatsup(‘s1_b’, images_list[3], ‘More offers for you’); });
		$(“.s1_c”).click(function() { whatsup(‘s1_c’, images_list[4], ‘Even more offers for you’); }); 
		$(“.s2_a”).click(function() { whatsup(‘s2_a’, images_list[0], ‘A Bit More’); }); 
		$(“.s2_b”).click(function() { whatsup(‘s2_b’, images_list[1], ‘And Some Other’); }); 
		$(“.s2_c”).click(function() { whatsup(‘s2_c’, images_list[2], ‘Something Else’); }); 
		$(“.s3_a”).click(function() { whatsup(‘s3_a’, images_list[0], ‘C Items a’); });  
		$(“.s3_b”).click(function() { whatsup(‘s3_b’, images_list[1], ‘C items b’); }); 
});


2010 Robert Gage-Smith (robgs-online.com)