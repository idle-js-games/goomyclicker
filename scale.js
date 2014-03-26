goomy_volume = 0.01601725;  // volume in m^3
goomy_weight = 2.837961; // weight in kg
goomy_length = 0.2875;  // length in metres
// Gonna fudge these numbers up just a little bit.

function repr_volume(cu_m){
	if(cu_m > 500000000){
		return digitgroup(cu_m / 1000000000, 3) + " km&sup3;";
	}else{
		return digitgroup(cu_m, 3) + " m&sup3;";
	}
}

volume_comparisons = {
	
	// Displays: "Your swath of Goomies would fill %s".
	// name_sing: the singular name.
	// name_pl: a format string for plurals. 

	"goomy": {
		"name_sing": "a Goomy",
		"name_pl": "%s Goomies",
		"volume": 0.016
	},

	"bathtub": {
		"name_sing": "a bathtub",
		"name_pl": "%s bathtubs",
		"volume": 0.159
	},

	"office_cubicle": {
		"name_sing": "an average-sized office cubicle",
		"name_pl": "%s average-sized office cubicles",
		"volume": 6.12
	},

	"loaded_truck": {
		"name_sing": "a loaded truck",
		"name_pl": "%s loaded trucks",
		"volume": 55
	},

	"wailord_blimp": {
		"name_sing": "a Wailord-sized blimp",
		"name_pl": "%s Wailord-sized blimps",
		"volume": 481.2
	},

	"average_house": {
		"name_sing": "a two-story house",
		"name_pl": "%s two-story houses",
		"volume": 1200
	},

	"olympic_pool": {
		"name_sing": "an Olympic-sized swimming pool",
		"name_pl": "%s Olympic-sized swimming pools",
		"volume": 2500
	},

	"oil_tanker": {
		"name_sing": "an oil supertanker",
		"name_pl": "%s oil supertankers",
		"volume": 318000
	},

	"football_field": {
		"name_sing": "a football field",
		"name_pl": "%s football fields",
		"volume": 570000
	},

	"wall_street": {
		"name_sing": "Wall Street",
		"name_pl": "",
		"volume": 999999
	},

	"empirestate_building": {
		"name_sing": "the entire Empire State Building",
		"name_pl": "%s Empire State Buildings",
		"volume": 1047720
	},

	"sydney_harbour": {
		"name_sing": "the Sydney Harbour",
		"name_pl": "the Sydney Harbour %s times",
		"volume": 5000000
	},

	"borg_cube": {
		"name_sing": "the Borg cube",
		"name_pl": "%s Borg cubes",
		"volume": 28000000000
	},

	"lake_ontario": {
		"name_sing": "Lake Ontario",
		"name_pl": "Lake Ontario %s times",
		"volume": 1640000000000
	},

	"world_oceans": {
		"name_sing": "the Earth's oceans",
		"name_pl": "the Earth's oceans %s times",
		"volume": 1.37e+18
	}

};

function compare_volume(cu_m){
	if(cu_m == 0) return "a thimble";

	var largest_comparison = "";
	for(comp in volume_comparisons){
		if(volume_comparisons[comp].volume <= cu_m){
			largest_comparison = comp;
		}else break;
	}
	var comp_ratio = cu_m / volume_comparisons[largest_comparison].volume;
	if(comp_ratio < 1.15 || volume_comparisons[largest_comparison].name_pl == ""){
		return volume_comparisons[largest_comparison].name_sing;
	}else if(largest_comparison == "goomy"){
		return sprintf(volume_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(0));
	}else{
		return sprintf(volume_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(1));
	}
}




function repr_weight(kg){
	if(kg > 1000000000){
		return digitgroup(kg / 1000000000, 3) + " Mt";
	}else if(kg > 1000){
		return digitgroup(kg / 1000, 3) + " t";
	}else{
		return digitgroup(kg, 1) + " kg";
	}
}


weight_comparisons = {

	// Displays: "Your swath of Goomies weigh as much as %s."
	
	"goomy": {
		"name_sing": "a Goomy",
		"name_pl": "%s Goomies",
		"weight": 2.8
	},
	
	"suitcase": {
		"name_sing": "a piece of checked airplane baggage",
		"name_pl": "%s pieces of checked airplane baggage",
		"weight": 22
	},
	
	"human": {
		"name_sing": "an adult human",
		"name_pl": "%s adult humans",
		"weight": 75
	},
	
	"hydreigon": {
		"name_sing": "a Hydreigon",
		"name_pl": "%s Hydreigons",
		"weight": 160
	},
	
	"turtle": {
		"name_sing": "a leatherback turtle",
		"name_pl": "%s leatherback turtles",
		"weight": 384
	},
	
	"groudon": {
		"name_sing": "Groudon",
		"name_pl": "%s Groudons",
		"weight": 950
	},

	"minivan": {
		"name_sing": "a minivan",
		"name_pl": "%s minivans",
		"weight": 2000
	},

	"elephant": {
		"name_sing": "an African elephant",
		"name_pl": "%s African elephants",
		"weight": 5500
	},

	"schoolbus": {
		"name_sing": "a fully loaded school bus",
		"name_pl": "%s fully loaded school buses",
		"weight": 16700
	},

	"bluewhale": {
		"name_sing": "a blue whale",
		"name_pl": "%s blue whales",
		"weight": 165000
	},

	"boeing747": {
		"name_sing": "a fully loaded Boeing 747 plane",
		"name_pl": "%s fully loaded Boeing 747 planes",
		"weight": 360000
	},

	"olympic_pool": {
		"name_sing": "the water in an Olympic-sized swimming pool",
		"name_pl": "the water in %s Olympic-sized swimming pools",
		"weight": 2500000
	},

	"uluru": {
		"name_sing": "Ayers Rock",
		"name_pl": "%s Ayers Rocks",
		"weight": 4000000000
	},

	/*
	
	"": {
		"name_sing": "",
		"name_pl": "",
		"weight": 
	},

	*/
	
};

function compare_weight(kg){
	if(kg == 0) return "a gulp of air";

	var largest_comparison = "";
	for(comp in weight_comparisons){
		if(weight_comparisons[comp].weight <= kg){
			largest_comparison = comp;
		}else break;
	}
	var comp_ratio = kg / weight_comparisons[largest_comparison].weight;
	if(comp_ratio < 1.15 || weight_comparisons[largest_comparison].name_pl == ""){
		return weight_comparisons[largest_comparison].name_sing;
	}else if(largest_comparison == "goomy"){
		return sprintf(weight_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(0));
	}else{
		return sprintf(weight_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(1));
	}
}






function repr_length(kg){
	if(kg > 1000000000){
		return digitgroup(kg / 1000000000, 3) + " Mt";
	}else if(kg > 1000){
		return digitgroup(kg / 1000, 3) + " t";
	}else{
		return digitgroup(kg, 1) + " kg";
	}
}


length_comparisons = {

	// Displays: "If your swath of Goomies were laid end-to-end, they would stretch %s."
	
	"goomy": {
		"name_sing": "as far as one Goomy",
		"name_pl": "as far as %d Goomies",
		"length": 0.2875
	},
	
	"street": {
		"name_sing": "across a 1-lane street",
		"name_pl": "across a %d-lane street",
		"length": 1.43
	},
	
	"olympic_pool": {
		"name_sing": "across an Olympic-sized swimming pool",
		"name_pl": "across %s Olympic-sized swimming pools",
		"length": 25
	},
	
	"football_field": {
		"name_sing": "across a football field",
		"name_pl": "across %s football fields",
		"length": 105
	},
	
	"cn_tower": {
		"name_sing": "as high as the CN Tower",
		"name_pl": "%s times as high as the CN Tower",
		"length": 553.33
	},
	
	"marianas_trench": {
		"name_sing": "as deep as the Marianas Trench",
		"name_pl": "%s times as deep as the Marianas Trench",
		"length": 10911
	},
	
	"geog01": {
		"name_sing": "from London to Paris",
		"name_pl": "",
		"length": 342000
	},

	"geog02": {
		"name_sing": "from Toronto to Montréal",
		"name_pl": "",
		"length": 505900
	},

	"geog03": {
		"name_sing": "from Vancouver to Calgary",
		"name_pl": "",
		"length": 676800
	},

	"geog04": {
		"name_sing": "from Anchorage to Whitehorse",
		"name_pl": "",
		"length": 770800
	},

	"highway401": {
		"name_sing": "the entire length of Highway 401",
		"name_pl": "",
		"length": 817900
	},

	"geog05": {
		"name_sing": "from Brasilia to Rio de Janeiro",
		"name_pl": "",
		"length": 931400
	},

	"geog04": {
		"name_sing": "from Beijing to Shanghai",
		"name_pl": "",
		"length": 1069000
	},

	"geog06": {
		"name_sing": "from Adelaide to Sydney",
		"name_pl": "",
		"length": 1165000
	},

	"geog07": {
		"name_sing": "from Bucharest to Berlin",
		"name_pl": "",
		"length": 1297000
	},

	"geog08": {
		"name_sing": "from Baghdad to Dubai",
		"name_pl": "",
		"length": 1383000
	},

	"yonge_street": {
		"name_sing": "the entire length of Yonge Street",
		"name_pl": "",
		"length": 1896000
	},
	
	"geog09": {
		"name_sing": "from Singapore to Hanoi",
		"name_pl": "",
		"length": 2172000
	},

	"geog10": {
		"name_sing": "from Helsinki to Reykjavik",
		"name_pl": "",
		"length": 2424000
	},

	"geog11": {
		"name_sing": "from Hong Kong to Tokyo",
		"name_pl": "",
		"length": 2892000
	},

	"geog12": {
		"name_sing": "from Cape Town to Antananarivo",
		"name_pl": "",
		"length": 3325000
	},

	"geog13": {
		"name_sing": "from Honolulu to San Francisco",
		"name_pl": "",
		"length": 3852000
	},

	"yellow_river": {
		"name_sing": "the entire length of the Yellow River",
		"name_pl": "",
		"length": 5464000
	},
	
	"mississippi_river": {
		"name_sing": "the entire length of the Mississippi river",
		"name_pl": "",
		"length": 6275000
	},
	
	"amazon_river": {
		"name_sing": "the entire length of the Amazon river",
		"name_pl": "",
		"length": 6400000
	},
	
	"nile_river": {
		"name_sing": "the entire length of the Nile river",
		"name_pl": "",
		"length": 6853000
	},
	
	"great_wall": {
		"name_sing": "the entire length of the Great Wall of China",
		"name_pl": "",
		"length": 8850000
	},
	
	"earth_diameter": {
		"name_sing": "from one end of the Earth through the core to another",
		"name_pl": "",
		"length": 12756000
	},
	
	"pacific_ocean": {
		"name_sing": "across the Pacific Ocean",
		"name_pl": "",
		"length": 19760000
	},
	
	"around_the_world": {
		"name_sing": "around the Earth",
		"name_pl": "around the Earth %s times",
		"length": 40000000
	},
	
	"moon2": {
		"name_sing": "to the Moon",
		"name_pl": "",
		"length": 400000000
	},
	
	"moon2": {
		"name_sing": "to the Moon and back",
		"name_pl": "to the Moon and back %s times",
		"length": 800000000
	},
	
	"sun": {
		"name_sing": "to the Sun",
		"name_pl": "",
		"length": 149960000000
	},
	
	"sun2": {
		"name_sing": "to the Sun and back",
		"name_pl": "to the Sun and back %s times",
		"length": 299820000000
	},
	
	"jupiter": {
		"name_sing": "from the Sun to Jupiter",
		"name_pl": "",
		"length": 773200000000
	},

	"saturn": {
		"name_sing": "from the Sun to Saturn",
		"name_pl": "",
		"length": 1433449370000
	},

	"uranus": {
		"name_sing": "from the Sun to Uranus",
		"name_pl": "",
		"length": 2876679082000
	},
	
	"neptune": {
		"name_sing": "from the Sun to Neptune",
		"name_pl": "",
		"length": 4503443661000
	},
	
	"kuiper_belt": {
		"name_sing": "from the Sun into the Kuiper Belt",
		"name_pl": "",
		"length": 5200000000000
	},
	
	"kuiper_belt2": {
		"name_sing": "past the edge of the Kuiper Belt",
		"name_pl": "",
		"length": 7498000000000
	},
	
	"sedna": {
		"name_sing": "past the orbit of Sedna",
		"name_pl": "",
		"length": 140200000000000
	},
	
	"oort_cloud": {
		"name_sing": "past the edge of the Oort cloud",
		"name_pl": "",
		"length": 5678901234567890
	},

	"light_year": {
		"name_sing": "the distance light travels in a year",
		"name_pl": "the distance light travels in %.1f years",
		"length": 9461000000000000
	},

	"alpha_centauri": {
		"name_sing": "past Alpha Centauri",
		"name_pl": "",
		"length": 39905000000000000
	},

	"sirius": {
		"name_sing": "past Sirius",
		"name_pl": "",
		"length": 81364600000000000
	},

	"light_year2": {
		"name_sing": "the distance light travels in a decade",
		"name_pl": "the distance light travels in %.1f decades",
		"length": 94610000000000000
	},
	
	"light_year3": {
		"name_sing": "the distance light travels in a century",
		"name_pl": "the distance light travels in %.1f centuries",
		"length": 946100000000000000
	},
	
	"polaris": {
		"name_sing": "past Polaris",
		"name_pl": "",
		"length": 4105957025100067200
	},

	"light_year3": {
		"name_sing": "the distance light travels in a millennium",
		"name_pl": "the distance light travels in %.1f millennia",
		"length": 9461000000000000000
	},
	
	"milky_way": {
		"name_sing": "to the center of the Milky Way galaxy",
		"name_pl": "",
		"length": 236525000000000000000
	},
	
	"milky_way2": {
		"name_sing": "past the edge of the Milky Way galaxy",
		"name_pl": "",
		"length": 473050000000000000000
	},
	
	"milky_way2": {
		"name_sing": "across the Milky Way galaxy",
		"name_pl": "across the Milky Way galaxy %.1f times",
		"length": 946100000000000000000
	},
	


	/*
	
	"": {
		"name_sing": "",
		"name_pl": "",
		"length": 
	},

	*/
	
};

function compare_length(m){
	if(m == 0) return "the width of a human hair";

	var largest_comparison = "";
	for(comp in length_comparisons){
		if(length_comparisons[comp].length <= m){
			largest_comparison = comp;
		}else break;
	}
	var comp_ratio = m / length_comparisons[largest_comparison].length;
	if(comp_ratio < 1.15 || length_comparisons[largest_comparison].name_pl == ""){
		return length_comparisons[largest_comparison].name_sing;
	}else if(length_comparisons[largest_comparison].name_pl.indexOf("%d") != -1){
		return sprintf(length_comparisons[largest_comparison].name_pl, Math.floor(comp_ratio));
	}else{
		return sprintf(length_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(1));
	}
}




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
