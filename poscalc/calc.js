$(function() {
	$("#ok-btn").on("click", function() {
		var parts = $("#coord-input").val().replace("  ", " ").split(" ");
		var longPart = parts[0];
		var latPart = parts[1];
		
		var latVal = parseFloat(latPart.slice(0, -1));
		var x = latVal/40;
				
		var y;
		var longSign = longPart.substr(longPart.length-1);
		if(longSign === 'E') {
			var longVal = longPart.slice(0, -1);
			y = (parseFloat(longVal)+20)/40;
		} else if(longSign === 'W') {
			var longVal = longPart.slice(0, -1);
			y = (20-parseFloat(longVal))/40;
		} else {
			alert("Invalid format");
		}
		
		$("#result").text("x: " + Number(x.toFixed(5)) + ", y: " + Number(y.toFixed(5)));
	});
})