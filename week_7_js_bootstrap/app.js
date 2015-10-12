function hideShowNav(whereAmI) {
	if ($(ul).hasClass("active")) {
		$("#slide-down").slideUp();
		$(whereAmI).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(whereAmI).addClass("active");
	}
}

$( ".navtabs" ).click(function() {
  $( ".tab-content" ).slideDown( "slow", function() {
    // Animation complete.
  });
});
