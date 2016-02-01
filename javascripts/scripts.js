$(window).load(function(){


    // CREATE RANDOM COLORS ON PROJECT HOVER
    $('.get-color').hover(function() {
    	var randomcolor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
         //console.log(color); //SHOW RANDOM HEX COLOR
         $('.hover-mask').css({background: [randomcolor]})
       });
    //END RANDOM COLORS FUNCTION


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


});
