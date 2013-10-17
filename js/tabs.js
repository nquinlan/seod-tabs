$(function () {

	$(".nav-tabs a").click(function (e) {
		// Prevent the default behavior
		e.preventDefault();

		// Get the new content
		var contentName = $(this).attr("id");
		var contentDestination = $(this).attr("href");
		var $target = $(this);
		$.get("content/" + contentName + ".json", null, function (content) {
			// Change the content
			$("#content").html(content.content);

			// Change the tabs
			// This isn't required, but it's a nice touch
			$(".nav-tabs li").removeClass("active");
			$target.parent().addClass("active");

			// Change the apparent URL
			// Again, this isn't required, but it's a nice touch
			history.pushState({ "content" : content.content}, contentName, contentDestination);
		});

	});

});