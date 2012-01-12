$(document).ready(function() {	
	var heading = '';
	$('h1, h2, h3, h4, h5, h6').each(function(index) {
	  heading  = $(this).text().replace(/ (\w+)$/,'&nbsp;$1');
	  $(this).html(heading);
	});  
	
	$("h1:contains('&'), h2:contains('&'), h3:contains('&'), h4:contains('&'), h5:contains('&')", document.body).contents().each(function() {
		if( this.nodeType == 3 ) {
			$(this).replaceWith( this.nodeValue.replace( /&/g, "<span class='amp'>&</span>" ));
		}
	});
});