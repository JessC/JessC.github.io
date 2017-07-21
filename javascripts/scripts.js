$(window).load(function(){


    // CREATE RANDOM COLORS ON PROJECT HOVER
    $('.get-color').hover(function() {
    	var randomcolor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
         //console.log(color); //SHOW RANDOM HEX COLOR
         $('.hover-mask').css({background: [randomcolor]})
       });
    //END RANDOM COLORS FUNCTION
    

    $('#more').hover(
				function() {
    		$('#about').css({background: 'none'})
        },
    		function() {
    		$('#about').css({background: 'black'})
        }
     );

    $('.indiv-project').click(function(e){
    	e.preventDefault();

    	var elem = $(this),
    	image = elem.find('.project-image').html(),
    	title = elem.find('.project-title').text(),
    	descr = elem.find('.project-description').html(),
    	elemDataCont = elem.find('.project-description');

    	$('#project-title').text(title);
    	$('#project-content').html(descr);
    	$('#project-image').html(image);

    	openProject();

    });

    function openProject(){

		$('#project-preview').addClass('open');    //Makes prject div appear
		$('.container').animate({'opacity':0},300);//Makes projects disappear
		
		setTimeout(function(){
			$('#project-preview').slideDown();
			$('.container').slideUp();	
		},300);
	}
	
	function closeProject(){

		$('#project-preview').removeClass('open');
		$('#project-preview').animate({'opacity':0},300);
		
		setTimeout(function(){
			$('.container').slideDown();
			$('#project-preview').slideUp();

			$('.container').animate({'opacity':1},300);	
		},300);
		
	}

	$('.close-preview').click(function(){
		closeProject();

	})



//HIDE PROJECT DIV IF CLICK OUTSIDE PROJECT
// function hideDiv(e) {
//     if (!$(e.target).is('#project-preview') && !$(e.target).parents().is('#project-preview')) {
//         closeProject();
//         // $('#project-preview').hide();
//     }
// }
// $(document).on('click', function(e) {
//     hideDiv(e);
// });

$('#yellowbubble').magnificPopup({
	items: {
		src: '#yellowpiece',
		type: 'inline'
	},
	closeBtnInside: true
});

$('#bluebubble').magnificPopup({
	items: {
		src: '#bluepiece',
		type: 'inline'
	},
	closeBtnInside: true
});

$('#pinkbubble').magnificPopup({
	items: {
		src: '#pinkpiece',
		type: 'inline'
	},
	closeBtnInside: true
});

// $("#question").click(function(){
// 	$("#answer").slideToggle("fast");
// });

// $("#barcode-desc").click(function(){
//     $("#scanner-code").closest($("#barcode-desc")).slideToggle("fast");
// });


// $('#toggle-container h3').each(function() {
// 	var tis = $(this), 
// 	state = false, 
// 	answer = tis.next('div')
// 	.hide()
// 	.css('height','auto')
// 	.slideUp();

// 	tis.click(function() {
// 		state = !state;
// 		answer.slideToggle(state);
// 		tis.toggleClass('active',state);
// 	});
// });
//*******************************************************
//FINISH LATER IF YOU WANT TO ADD RESUME
 //    $('.resume-link').click(function(e){
 //    	e.preventDefault();

 //    	//     	var elem = $(this),
 //    	// image = elem.find('.resume-image').html(),
 //    	// descr = elem.find('.resume-description').html(),
 //    	// elemDataCont = elem.find('.resume-description');

 //    	$('#resume-image').html('.resume-image');
 //    	openResume();

 //    });

 //    function openResume(){

	// 	$('#resume-preview').addClass('open');    //Makes prject div appear
	// 	$('.container').animate({'opacity':0},300);//Makes projects disappear

	// 	setTimeout(function(){
	// 		$('#resume-preview').slideDown();
	// 		$('.container').slideUp();	
	// 	},300);
	// }
	
	// function closeProject(){

	// 	$('#resume-preview').removeClass('open');
	// 	$('#resume-preview').animate({'opacity':0},300);

	// 	setTimeout(function(){
	// 		$('.container').slideDown();
	// 		$('#resume-preview').slideUp();

	// 		$('.container').animate({'opacity':1},300);	
	// 	},300);

	// }

	// $('.close-preview').click(function(){
	// 	closeProject();
	// })

});
