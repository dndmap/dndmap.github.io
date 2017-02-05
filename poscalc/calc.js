$(function() {
	$("#ok-btn").on("click", function() {
		var parts = $("#coord-input").val().replace("  ", " ").split(" ");
		var longPart = parts[0];
		var latPart = parts[1];
		
		var y;
		if(latPart.substr(latPart.length-1) === "N") {
			y = 0.003; //default all N values as 0S.. sort of
		} else {
			y = latCoordToMapFraction(latPart.slice(0, -1));
		}
				
		var x;
		var longSign = longPart.substr(longPart.length-1);
		if(longSign === 'E') {
			x = eastCoordToMapFraction(longPart.slice(0, -1));
		} else if(longSign === 'W') {
			x = westCoordToMapFraction(longPart.slice(0, -1));
		} else {
			alert("Invalid format");
		}
		
		$("#result").text("x: " + Number(x.toFixed(5)) + ", y: " + Number(y.toFixed(5)));
	});
})

function latCoordToMapFraction(coord) {
	var wholes = parseInt(coord);
	
	var parts = 7 + parseInt((""+coord).split(".")[1]);
	
	return ((wholes * 60) + parts) / (40*60);
}

function westCoordToMapFraction(coord) {
	var wholes = 19-parseInt(coord);
	
	var parts = (60 - parseInt((""+coord).split(".")[1])) + 8;
	
	return ((wholes * 60) + parts) / (40*60);
}

function eastCoordToMapFraction(coord) {
	var wholes = parseInt(coord)+20;
	
	var parts = 7 + parseInt((""+coord).split(".")[1]);
	
	return ((wholes * 60) + parts) / (40*60);
}