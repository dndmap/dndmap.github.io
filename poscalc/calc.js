$(function() {
	$("#ok-btn").on("click", function() {
		var parts = $("#coord-input").val().replace("  ", " ").split(" ");
		var longPart = parts[0];
		var latPart = parts[1];
		
		var y;
		if(latPart.substr(latPart.length-1) === "N") {
			y = 0; //default all N values as 0S
		} else {
			var latVal = parseFloat(latPart.slice(0, -1));
			y = latCoordToMapFraction(latVal);
		}
				
		var x;
		var longSign = longPart.substr(longPart.length-1);
		if(longSign === 'E') {
			var longVal = longPart.slice(0, -1);
			x = (parseFloat(longVal)+20)/40;
		} else if(longSign === 'W') {
			var longVal = longPart.slice(0, -1);
			x = (20-parseFloat(longVal))/40;
		} else {
			alert("Invalid format");
		}
		
		$("#result").text("x: " + Number(x.toFixed(5)) + ", y: " + Number(y.toFixed(5)));
	});
})


function latCoordToMapFraction(coord) {
	var floatVal = parseFloat(coord);
	var wholes = parseInt(coord);
	
	var parts = 7 + parseInt((""+coord).split(".")[1])
	
	return ((wholes * 60) + parts) / (40*60);
}