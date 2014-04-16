function repr_volume(cu_m){
	if(cu_m > 500000000){
		return digitgroup(cu_m / 1000000000, 3) + " km&sup3;";
	}else{
		return digitgroup(cu_m, 3) + " m&sup3;";
	}
}

volume_comparisons = {
	
	// Displays: "Your swath of Goomies would %s".
	// name_sing: the singular name.
	// name_pl: a format string for plurals. 

	"goomy": {
		"name_sing": "occupy as much space as a Goomy",
		"name_pl": "occupy as much space as %s Goomies",
		"volume": 0.016
	},

	"bathtub": {
		"name_sing": "fill a bathtub",
		"name_pl": "fill %s bathtubs",
		"volume": 0.159
	},

	"office_cubicle": {
		"name_sing": "fill an average-sized office cubicle",
		"name_pl": "fill %s average-sized office cubicles",
		"volume": 6.12
	},

	"loaded_truck": {
		"name_sing": "fill a loaded truck",
		"name_pl": "fill %s loaded trucks",
		"volume": 55
	},

	"wailord_blimp": {
		"name_sing": "fill a Wailord-sized blimp",
		"name_pl": "fill %s Wailord-sized blimps",
		"volume": 481.2
	},

	"average_house": {
		"name_sing": "fill up a two-story house",
		"name_pl": "fill up %s two-story houses",
		"volume": 1200
	},

	"olympic_pool": {
		"name_sing": "fill up an Olympic-sized swimming pool",
		"name_pl": "fill up %s Olympic-sized swimming pools",
		"volume": 2500
	},

	"oil_tanker": {
		"name_sing": "fill an oil supertanker",
		"name_pl": "fill %s oil supertankers",
		"volume": 318000
	},

	"football_field": {
		"name_sing": "fill up a football stadium",
		"name_pl": "fill up %s football stadiums",
		"volume": 570000
	},

	"wall_street": {
		"name_sing": "occupy Wall Street",
		"name_pl": "",
		"volume": 999999
	},

	"empirestate_building": {
		"name_sing": "fill up the entire Empire State Building",
		"name_pl": "fill up %s Empire State Buildings",
		"volume": 1047720
	},

	"sydney_harbour": {
		"name_sing": "fill the Sydney Harbour",
		"name_pl": "fill %s Sydney Harbours",
		"volume": 5000000
	},

	"borg_cube": {
		"name_sing": "fill up the Borg cube",
		"name_pl": "fill %s Borg cubes",
		"volume": 28000000000
	},

	"lake_ontario": {
		"name_sing": "fill up Lake Ontario",
		"name_pl": "fill up Lake Ontario %s times",
		"volume": 1640000000000
	},

	"world_oceans": {
		"name_sing": "fill up the Earth's oceans",
		"name_pl": "fill up the Earth's oceans %s times",
		"volume": 1.37e+18
	},

	"mercury": {
		"name_sing": "create a planet the size of Mercury",
		"name_pl": "create a planet %s times the size of Mercury",
		"volume": 6.083e+19
	},
	
	"venus": {
		"name_sing": "create a planet the size of Venus",
		"name_pl": "create a planet %s times the size of Venus",
		"volume": 9.283e+20
	},
		
	"uranus": {
		"name_sing": "create a planet the size of Uranus",
		"name_pl": "create a planet %s times the size of Uranus",
		"volume": 6.835e+22
	},

	"saturn": {
		"name_sing": "create a planet the size of Saturn",
		"name_pl": "create a planet %s times the size of Saturn",
		"volume": 8.271e+23
	},

	"sun": {
		"name_sing": "create a planet the size of the Sun",
		"name_pl": "create a planet %s times the size of the Sun",
		"volume": 1.412e+27
	},
		
	"sirius": {
		"name_sing": "create a planet the size of Sirius",
		"name_pl": "create a planet %s times the size of Sirius",
		"volume": 1.6e+28
	},
		
	"pollux": {
		"name_sing": "create a planet the size of Pollux",
		"name_pl": "create a planet %s times the size of Pollux",
		"volume": 1.4e+31
	},
		
	"arcturus": {
		"name_sing": "create a planet the size of Arcturus",
		"name_pl": "create a planet %s times the size of Arcturus",
		"volume": 4.2e+31
	},
		
	"aldebaran": {
		"name_sing": "create a planet the size of Aldebaran",
		"name_pl": "create a planet %s times the size of Aldebaran",
		"volume": 2e+32
	},
		
	"antares": {
		"name_sing": "create a planet the size of Antares",
		"name_pl": "create a planet %s times the size of Antares",
		"volume": 4.6e+36
	},
		
	"vy_canis_majoris": {
		"name_sing": "create a planet the size of VY Canis Majoris",
		"name_pl": "create a planet %s times the size of VY Canis Majoris",
		"volume": 1.8e+37
	},
		
		
		
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
