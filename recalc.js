// Recalculation functions.


function recalc(){
	
	recalc_gps();
	recalc_gpc();
	recalc_click_mult();
	recalc_global_mult();
	for(item in items){
		recalc_itemcost(item);
	}
	unlock_upgrades();

}


function recalc_gpc(){
	
	var new_gpc = goomy.level;
	recalc_gcm();
	new_gpc += gcm_bonus;

	// After level 100, start giving click bonus as a proportion of GpS.
	if(goomy.level > 100){
		new_gpc += gps * (goomy.level / 100 - 1);
	}
	
	gpc = new_gpc;

}


function recalc_gps(){

	gps = 0;
	for (item in items){
		// calculate total upgraded cost
		upgraded = 0;
		for(var a = 0; a < upgrades.length; ++a){
			if(upgrades[a].bought == true && $.inArray(item, upgrades[a].upgrades) != -1){
				++upgraded;
			}
		}
		items[item].gps = items[item].gpslist[upgraded];

		if(item == "cursor"){
			gps += items[item].gps * goomy.level * click_mult * items[item].count;
			$(sprintf("#%s_gps", item)).html(sprintf("Produces %s GpS", digitgroup(items[item].gps * goomy.level * click_mult * global_mult, 1)));
		}else{
			gps += items[item].gps * items[item].count;
			$(sprintf("#%s_gps", item)).html(sprintf("Produces %s GpS", digitgroup(items[item].gps * global_mult, 1)));
		}
	}
	
	expps = items["cursor"].count / 5;
	$("#gps").html(sprintf("%s Goomies per second", digitgroup(gps * global_mult, 1)));

}



function recalc_gcm(){
	
	total_generators = 0;
	for (item in items){
		total_generators += items[item].count;
	}
	
	level_mult = 0;
	if(goomy.level >= 10 && goomy.level < 20)
		level_mult = (goomy.level - 10) * 0.1 + 0;
	else if(goomy.level >= 20 && goomy.level < 40)
		level_mult = (goomy.level - 20) * 0.2 + 1;
	else if(goomy.level >= 40 && goomy.level < 60)
		level_mult = (goomy.level - 40) * 0.5 + 5;
	else if(goomy.level >= 60 && goomy.level < 70)
		level_mult = (goomy.level - 60) * 1.0 + 15;
	else if(goomy.level >= 70 && goomy.level < 90)
		level_mult = (goomy.level - 70) * 2.5 + 25;
	else if(goomy.level >= 90 && goomy.level < 100)
		level_mult = (goomy.level - 90) * 5.0 + 75;
	else if(goomy.level >= 100)
		level_mult = 125;
	
	gcm_bonus = total_generators * level_mult;

	// 0, 1, 3, 5, 10, 15, 25, 50, 75, 125

}


function recalc_click_mult(){

	click_mult = 1;
	if(goomy.level >= 30 && goomy.level < 80)
		click_mult = (goomy.level - 30) * 0.1 + 1;
	else if(goomy.level >= 80 && goomy.level < 100)
		click_mult = (goomy.level - 80) * 0.2 + 6;
	else if(goomy.level >= 100)
		click_mult = 10;

}


function recalc_global_mult(){
	
	global_mult = Math.max(1, (goomy.level) * 0.02);

}



function recalc_itemcost(item){
	
	// items[item].cost = Math.floor(items[item].base_cost * Math.pow(1.1, items[item].count));
	
	// new experimental cost formula
	var damping_factor = 10;
	items[item].cost = Math.floor( items[item].base_cost * Math.pow(2, Math.pow(items[item].count + damping_factor, 0.5) - Math.pow(damping_factor, 0.5)) )

	$("#" + item + "_count").html(" - " + items[item].count);
	$("#" + item).find(".cost").html(digitgroup(items[item].cost));

}


function unlock_upgrades(){
	
	for(var a = 0; a < upgrades.length; ++a){
		if(upgrades[a].unlock_level <= goomy.level && upgrades[a].bought == false){
			$("#upgrade" + a).show();
		}else{
			$("#upgrade" + a).hide();
		}
	}

}
