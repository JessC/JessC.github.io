
$(document).ready(function() {


$('.mytoggle button').click(function(){
    var ix = $(this).index();
    
    $('.barcode-checker').toggle( ix === 0 );
    $('.sioc-checker').toggle( ix === 1 );
      // document.getElementById("barcode-checker").blur();
});

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
					$("#userInput").val("rbLAX6").focus();
				// }
			});

$("#oneway").click(function() {
	$("#userInput").val("sp1WAY").focus();
});

$("#s-cart").click(function() {
	$("#userInput").val("SCFRSH0").focus();
});
// ******END PREFIX BUTTONS******


var newBarcode = function() {
	var windowSize = $(window).width();
    //Convert to boolean
    if ($("#userInput").val().charAt(0) == "P" && $("#userInput").val().charAt(1) == "-" && windowSize > 401)
    {
    	$("#barcode").JsBarcode(
    		$("#userInput").val().toUpperCase()
    		)
    } 
    else if ($("#userInput").val().charAt(0) == "P" && $("#userInput").val().charAt(1) == "-" && windowSize < 400)
    {
    	$("#barcode").JsBarcode(
    		$("#userInput").val().toUpperCase(), {width: 1}
    		)	
    }
    else if ( windowSize < 400)
    {
    	$("#barcode").JsBarcode(
    		$("#userInput").val(), {width: 1}
    		)
    } 
    else {
    	$("#barcode").JsBarcode(
    		$("#userInput").val()
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

// $(function(){
//             var hits = 0; //->variable
//     //  binding handler to click event
//     $('#randstation').click(function(){ 
//         if  (hits % 2 !== 0) 
//         {
//             JsBarcode("#barcode", randomWorkstation(listOfStations), {text: "New Year ♪~ ᕕ(ᐛ)ᕗ"});
//         }
//         else
//         { 
//             JsBarcode("#barcode", randomWorkstation(listOfStations), {text: "Happy"});
//         }
//         hits++;
//         return false;
//     });
// });





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
		JsBarcode("#barcode", "dz-P-CHILLED", {lineColor: ""});
	}
});

$('#drop-freezer').click(function() {
	if ( $(window).width() < 400) {
		JsBarcode("#barcode", "dz-P-FROZEN", {width: 1});
	} else {
		JsBarcode("#barcode", "dz-P-FROZEN", {lineColor: ""});
	}
});


	$("#userInput").on('input',newBarcode);
	// $("#userInput").on('input',checkISD);
	$("#barcodeType").change(function(){
	$("#userInput").val( defaultValues[$(this).val()] );
	});


    $('#scanner-button').magnificPopup({
    	items: {
    		src: '#scanner-pop',
    		type: 'inline'
    	},
    	closeBtnInside: true
    });

// *********TOGGLE FUNCTION*********
    $('.toggle-switch').click(function(){
    	$(this).toggleClass("amzorng")
    	$(this).next().slideToggle("fast", function(){
    		if($('.toggle-div').is(":visible")){
    			$('#more').text("less");
    		}else{
    			$('#more').text("more");
    		}
    	});
    });
// *********END TOGGLE FUNCTION*********


});


// **********REAL TIME BARCODE********* 
// <script>
//     var checkISD = function() {
//     	if ($("#userInput").val().charAt(6) == "8" && $("#userInput").val().charAt(7) == "0" && $("#userInput").val().charAt(8) == "4" && $("#userInput").val().charAt(9) == "" ){
//     		$('#isd').css('visibility', 'visible'); 	 		
//     	}
//     	else
//     	{
//     		$('#isd').css('visibility', 'hidden'); 	 		
//     	}
//     }
//     </script>
//  *******END REAL TIME BARCODE****** 


// **********MOBILE ALERT********* 
// if (screen.width <= 400) {
//     $(function() {
//     $("#mobilealert").show();
//   })
// }
// **********END MOBILE ALERT********* 


// **********CHECK ISD********* 
//     var checkISD = function() {
//     	if ($("#userInput").val().charAt(6) == "8" && $("#userInput").val().charAt(7) == "0" && $("#userInput").val().charAt(8) == "4" && $("#userInput").val().charAt(9) == "" ){
//     		$('#isd').css('visibility', 'visible'); 	 		
//     	}
//     	else
//     	{
//     		$('#isd').css('visibility', 'hidden'); 	 		
//     	}
//     }
// **********END CHECK ISD********* 

// amazon.com/gp/product/ASIN **only works with ASIN






