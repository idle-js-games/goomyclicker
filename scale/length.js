function repr_length(m){
	if(m > 9.461e+15){
		return digitgroup(m / 9.461e+15, 3) + " ly";
	}else if(m > 1000){
		return digitgroup(m / 1000, 3) + " km";
	}else{
		return digitgroup(m, 1) + " m";
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
	
	"walking": {
		"name_sing": "as far as a person can walk in 1 hour",
		"name_pl": "as far as a person can walk in %s hours",
		"length": 4500
	},
	
	"gibraltar": {
		"name_sing": "across the Gibraltar Strait",
		"name_pl": "across the Gibraltar Strait %s times",
		"length": 14795
	},
	
	"channel": {
		"name_sing": "across the English Channel",
		"name_pl": "across the English Channel %s times",
		"length": 33100
	},
	
	"driving": {
		"name_sing": "as far as a car on a highway goes in an hour",
		"name_pl": "as far as a car on a highway goes in %s hours",
		"length": 100000
	},
	
	"geog18": {
		"name_sing": "from Edmonton to Calgary",
		"name_pl": "",
		"length": 281482
	},

	"geog01": {
		"name_sing": "from London to Paris",
		"name_pl": "",
		"length": 342000
	},

	"geog16": {
		"name_sing": "from Miami to Havana",
		"name_pl": "",
		"length": 371000
	},

	"iss": {
		"name_sing": "from the International Space Station to the Earth's surface",
		"name_pl": "",
		"length": 420000
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

	"geog14": {
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
	
	"iss_velocity": {
		"name_sing": "the distance the International Space Station travels in one hour",
		"name_pl": "the distance the International Space Station travels in %s hours",
		"length": 27576000
	},
	
	"around_the_world": {
		"name_sing": "around the Earth",
		"name_pl": "around the Earth %s times",
		"length": 40000000
	},
	
	"earth_orbit": {
		"name_sing": "the distance Earth orbits the Sun in one hour",
		"name_pl": "the distance Earth orbits the Sun in %s hours",
		"length": 107280000
	},

	"light-second": {
		"name_sing": "the distance light travels in one second",
		"name_pl": "the distance light travels in %s seconds",
		"length": 299792458
	},

	"moon": {
		"name_sing": "to the Moon",
		"name_pl": "",
		"length": 400000000
	},
	
	"moon2": {
		"name_sing": "to the Moon and back",
		"name_pl": "to the Moon and back %s times",
		"length": 800000000
	},

	"light-second2": {
		"name_pl": "the distance light travels in %s seconds",
		"length": 3200000000,
		"length_base": 299792458
	},

	"light-minute": {
		"name_sing": "the distance light travels in one minute",
		"name_pl": "the distance light travels in %s minutes",
		"length": 17987547480
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

	"light-hour": {
		"name_sing": "the distance light travels in one hour",
		"name_pl": "the distance light travels in %s hours",
		"length": 1079252800000
	},

	"saturn": {
		"name_sing": "from the Sun to Saturn",
		"name_pl": "",
		"length": 1433449370000
	},

	"light-hour2": {
		"name_pl": "the distance light travels in %s hours",
		"length": 1700000000000,
		"length_base": 1079252800000
	},

	"uranus": {
		"name_sing": "from the Sun to Uranus",
		"name_pl": "",
		"length": 2876679082000
	},
	
	"light-hour3": {
		"name_pl": "the distance light travels in %s hours",
		"length": 3400000000000,
		"length_base": 1079252800000
	},

	"neptune": {
		"name_sing": "from the Sun to Neptune",
		"name_pl": "",
		"length": 4503443661000
	},
	
	"kuiper_belt": {
		"name_sing": "from the Sun into the Kuiper Belt",
		"name_pl": "",
		"length": 5.2e+12
	},
	
	"kuiper_belt2": {
		"name_sing": "past the edge of the Kuiper Belt",
		"name_pl": "",
		"length": 7.498e+12
	},
	
	"light-hour4": {
		"name_pl": "the distance light travels in %s hours",
		"length": 1e+13,
		"length_base": 1079252800000
	},

	"light-day": {
		"name_sing": "the distance light travels in a day",
		"name_pl": "the distance light travels in %s days",
		"length": 2.59e+13
	},
	
	"sedna": {
		"name_sing": "past the orbit of Sedna",
		"name_pl": "",
		"length": 1.402e+14
	},

	"light-day2": {
		"name_pl": "the distance light travels in %s days",
		"length": 1.8e+14,
		"length_base": 2.59e+13
	},
	
	"oort_cloud": {
		"name_sing": "past the edge of the Oort cloud",
		"name_pl": "",
		"length": 5.678e+15
	},

	"light-day3": {
		"name_pl": "the distance light travels in %s days",
		"length": 7e+15,
		"length_base": 2.59e+13
	},

	"light-year": {
		"name_sing": "the distance light travels in a year",
		"name_pl": "the distance light travels in %s years",
		"length": 9.461e+15
	},

	"alpha_centauri": {
		"name_sing": "past Alpha Centauri",
		"name_pl": "",
		"length": 3.9905e+16
	},

	"light-year2": {
		"name_pl": "the distance light travels in %s years",
		"length": 5e+16,
		"length_base": 9.461e+15
	},

	"sirius": {
		"name_sing": "past Sirius",
		"name_pl": "",
		"length": 8.13646e+16
	},

	"light-year3": {
		"name_pl": "the distance light travels in %s years",
		"length": 5e+16,
		"length_base": 9.461e+15
	},

	"polaris": {
		"name_sing": "past Polaris",
		"name_pl": "",
		"length": 4.106e+18
	},

	"light-year4": {
		"name_pl": "the distance light travels in %s years",
		"length": 5e+18,
		"length_base": 9.461e+15
	},

	"light-millennium": {
		"name_sing": "the distance light travels in a thousand years",
		"name_pl": "",
		"length": 9.461e+18
	},

	"light-year5": {
		"name_pl": "the distance light travels in %s years",
		"length": 1.2e+19,
		"length_base": 9.461e+15
	},
	
	"light-millennium2": {
		"name_pl": "the distance light travels in %d thousand years",
		"length": 9.461e+19,
		"length_base": 9.461e+18
	},

	"milky_way": {
		"name_sing": "to the center of the Milky Way galaxy",
		"name_pl": "",
		"length": 2.365e+20
	},

	"light-millennium3": {
		"name_pl": "the distance light travels in %d thousand years",
		"length": 3e+20,
		"length_base": 9.461e+18
	},
	
	"milky_way2": {
		"name_sing": "past the edge of the Milky Way galaxy",
		"name_pl": "",
		"length": 4.7305e+20
	},

	"light-millennium4": {
		"name_pl": "the distance light travels in %d thousand years",
		"length": 5.6e+20,
		"length_base": 9.461e+18
	},
	
	"milky_way3": {
		"name_sing": "across the Milky Way galaxy",
		"name_pl": "across the Milky Way galaxy %s times",
		"length": 9.461e+20
	},

	"light-millennium5": {
		"name_pl": "the distance light travels in %d thousand years",
		"length": 5e+21,
		"length_base": 9.461e+18
	},
	
	"light-megayear": {
		"name_sing": "the distance light travels in a million years",
		"name_pl": "the distance light travels in %s million years",
		"length": 9.461e+21
	},

	"andromeda": {
		"name_sing": "to the Andromeda Galaxy",
		"name_pl": "",
		"length": 2.4e+22
	},

	"light-megayear2": {
		"name_pl": "the distance light travels in %s million years",
		"length": 2.8e+22,
		"length_base": 9.461e+21
	},

	"andromeda2": {
		"name_sing": "to the Andromeda Galaxy and back",
		"name_pl": "to the Andromeda Galaxy and back %s times",
		"length": 4.865e+22
	},

	"ngc4697": {
		"name_sing": "past NGC 4697",
		"name_pl": "",
		"length": 3.309e+23
	},

	"light-megayear4": {
		"name_pl": "the distance light travels in %s million years",
		"length": 4e+23,
		"length_base": 9.461e+21
	},

	"virgo_cluster": {
		"name_sing": "past the Virgo cluster",
		"name_pl": "",
		"length": 5.09e+23
	},

	"light-megayear5": {
		"name_pl": "the distance light travels in %s million years",
		"length": 6.1e+23,
		"length_base": 9.461e+21
	},

	"virgo_supercluster": {
		"name_sing": "past the edge of the Virgo supercluster",
		"name_pl": "",
		"length": 1.041e+24
	},

	"light-megayear6": {
		"name_pl": "the distance light travels in %s million years",
		"length": 1.2e+24,
		"length_base": 9.461e+21
	},

	"pisces_supercluster": {
		"name_sing": "to the Perseus-Pisces supercluster",
		"name_pl": "",
		"length": 2.365e+24
	},

	"light-megayear7": {
		"name_pl": "the distance light travels in %s million years",
		"length": 2.8e+24,
		"length_base": 9.461e+21
	},

	"horologium_supercluster": {
		"name_sing": "to the Horologium supercluster",
		"name_pl": "",
		"length": 6.623e+24
	},

	"light-megayear8": {
		"name_pl": "the distance light travels in %s million years",
		"length": 7.9e+24,
		"length_base": 9.461e+21
	},

	"light-gigayear": {
		"name_sing": "the distance light travels in a billion years",
		"name_pl": "the distance light travels in %s billion years",
		"length": 9.461e+24
	},

	"universe": {
		"name_sing": "past the edge of the observable universe",
		"name_pl": "",
		"length": 4.4e+26
	},

};

function compare_length(m){

	if(m == 0) return "the width of a human hair";

	var largest_comparison = "";
	for(comp in length_comparisons){
		if(length_comparisons[comp].length <= m){
			largest_comparison = comp;
		}else break;
	}
	
	if("length_base" in length_comparisons[largest_comparison]){
		var comp_ratio = m / length_comparisons[largest_comparison].length_base;
		if(length_comparisons[largest_comparison].name_pl.indexOf("%d") != -1)
			return sprintf(length_comparisons[largest_comparison].name_pl, Math.floor(comp_ratio));
		else
			return sprintf(length_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(1));
	}else{
		var comp_ratio = m / length_comparisons[largest_comparison].length;
		if(comp_ratio < 1.15 || length_comparisons[largest_comparison].name_pl == ""){
			return length_comparisons[largest_comparison].name_sing;
		}else if(length_comparisons[largest_comparison].name_pl.indexOf("%d") != -1){
			return sprintf(length_comparisons[largest_comparison].name_pl, Math.floor(comp_ratio));
		}else{
			return sprintf(length_comparisons[largest_comparison].name_pl, comp_ratio.toFixed(1));
		}
	}

}
