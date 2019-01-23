var LANG_FOLDER = "/lang/";

function display() {
	var lang = $.cookie("lang") || "en";

	$.get(LANG_FOLDER + lang + "/title", function (res) {
		$("#title").text(res);
	});
}

function lang(l) {
	$.cookie("lang", l);
	window.location.reload();
}