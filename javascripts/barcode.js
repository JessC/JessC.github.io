
$(document).ready(function() {

// *******SUBMIT BARCODE BUTTON*******
$('#check').click(function() {
	JsBarcode("#barcode", $('#userInput').val());
	return false;
});

// ********END SUBMIT BARCODE BUTTON******


// ******PREFIX BUTTONS******
$("#ambient").click(function() {
	$("#userInput").val("P-1-A").focus();
});

$("#chilled").click(function() {
	$("#userInput").val("P-1-C").focus();
});

$("#freezer").click(function() {
	$("#userInput").val("P-1-F").focus();
});

$("#bigs").click(function() {
	$("#userInput").val("P-1-B").focus();
});

$("#p-cart").click(function() {
				// if
				// 	(document.getElementById("fcLfocation").value == "ONT4")
				// {$("#userInput").val("rbONT40").focus();}
				// else if
				// 	(document.getElementById("fcLocation").value == "OAK4")
				// {$("#userInput").val("rbOAK40").focus();} 
				// else
				// {
					$("#userInput").val("rbLAX60").focus();
				// }
			});

$("#oneway").click(function() {
	$("#userInput").val("sp1WAY").focus();
});

$("#s-cart").click(function() {
	$("#userInput").val("SCFRSH0").focus();
});
// ******END PREFIX BUTTONS******

$(document).ready(function(){
	$("#userInput").on('input',newBarcode);
	$("#userInput").on('input',checkISD);
	$("#barcodeType").change(function(){
	$("#userInput").val( defaultValues[$(this).val()] );
	});
});

var newBarcode = function() {
	var windowSize = $(window).width();
    //Convert to boolean
    if ($("#userInput").val().charAt(0) == "P" && $("#userInput").val().charAt(1) == "-" && windowSize > 401)
    {
    	$("#barcode").JsBarcode(
    		$("#userInput").val().toUpperCase(),
    		)
    } 
    else if ($("#userInput").val().charAt(0) == "P" && $("#userInput").val().charAt(1) == "-" && windowSize < 400)
    {
    	$("#barcode").JsBarcode(
    		$("#userInput").val().toUpperCase(), {width: 1},
    		)	
    }
    else if ( windowSize < 400)
    {
    	$("#barcode").JsBarcode(
    		$("#userInput").val(), {width: 1},
    		)
    } 
    else {
    	$("#barcode").JsBarcode(
    		$("#userInput").val(),
    		)}
    };



//<!--  selecting a random array item
-->


function randomWorkstation(listOfStations)
{
	return listOfStations[Math.floor(Math.random()*listOfStations.length)];
}
$('#randstation').click(function() {
	JsBarcode("#barcode", randomWorkstation(listOfStations));
});

$('#drop-ambient').click(function() {
	if ( $(window).width() < 400) {
		JsBarcode("#barcode", "dz-P-AMBIENT", {width: 1});
	} else {
		JsBarcode("#barcode", "dz-P-AMBIENT");
	}
});

$('#drop-chilled').click(function() {
	if ( $(window).width() < 400) {
		JsBarcode("#barcode", "dz-P-CHILLED", {width: 1});
	} else {
		JsBarcode("#barcode", "dz-P-CHILLED");
	}
});

$('#drop-freezer').click(function() {
	if ( $(window).width() < 400) {
		JsBarcode("#barcode", "dz-P-FROZEN", {width: 1});
	} else {
		JsBarcode("#barcode", "dz-P-FROZEN");
	}
});
});


