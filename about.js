function show_credits(){
	$("#credits").show();
	$("#msgbox").show();
	$("#msgbox").css("left", $(window).width() / 2 - $("#msgbox").width() / 2 + "px");
	$("#msgbox").css("top", $(window).height() / 2 - $("#msgbox").height() / 2 + "px");
}


function close_msgbox(){
	$("#msgbox").hide();
}
