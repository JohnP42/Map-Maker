$(document).ready(function(){

	$("#create-map").on("submit", function(event) {
		event.preventDefault();
		newMap($("#width").val(), $("#height").val());
	});

	$("#select-tile").on("change", function(event) {
		$("#show-tile").attr("class", $(this).val());
	});

	$("#map").on("click", "td", function(event) {
		$(this).attr("class", $("#select-tile").val());
	});

});

var newMap = function(width, height){
	$("#map").empty();
	for(var x = 0; x < width; x++) {
		var row = $("<tr></tr>");
		for(var y = 0; y < height; y++) {
			row.append("<td width='32px' height='32px' class='tile0'></td>");
		}
		$("#map").append(row);
	}
}