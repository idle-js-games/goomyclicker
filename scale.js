goomy_volume = 0.01601725;  // volume in m^3
goomy_weight = 2.837961; // weight in kg
goomy_length = 0.2875;  // length in metres
goomy_area = 0.07065; // area in m^2 
// Gonna fudge these numbers up just a little bit.



function show_info(){
	$("#info").show();
	$("#info").css("height", $("#centre").height() - 24);
	$("#info").css("width", Math.min(400, $("#centre").width() - 44));
	$("#info").css("top", "0px");
	$("#info").css("left", $("#centre").width() / 2 - $("#info").width() / 2 - 22);
}

function hide_info(){
	$("#info").hide();
}

