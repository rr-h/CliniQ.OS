$(function() {
		
	$('#time').jclock();
	
	/* columnise folders */
	var fN = $('.folder').length;
	var fH = $('#folders').height() + 100;
	var wH = $(window).height();
	var wW = $(window).width();
	
	if(fH > wH)
	{
		var fIH = fH / fN;
		var fpW = wH / fIH;
		fpW = parseInt(fpW);
		var colN = ( parseInt(fH / wH)+1 );
		
		for(i=0;i<(colN-1);i++) {
			$('#folders').after('<div id="folders'+(i+2)+'" class="folders"/>');
			$('.folder_wrapper').slice((fpW*(i+1)), ((fpW*2)*(i+1))).appendTo('#folders'+(i+2));
		}
	}
	
	/* make folders draggable and invert icon when drag starts */
	$('.folder').draggable({
		scroll: false,
		start: function(){
		
			$('.folder').contents().find('img').attr({src: 'gfx/disk.gif'});
			$(this).contents().find('img').attr({src: 'gfx/disk_black.gif'});

			$('.folder_text').removeClass('folder_text-inverted');
			$(this).contents().find('.folder_text').addClass('folder_text-inverted');

		}
	});
	
	$('.plant').draggable();

	$('.folder').bind("click", function(){

			$('.folder').contents().find('img').attr({src: 'gfx/disk.gif'});
			$(this).contents().find('img').attr({src: 'gfx/disk_black.gif'});

			$('.folder_text').removeClass('folder_text-inverted');
			$(this).contents().find('.folder_text').addClass('folder_text-inverted');
	});
	

	/* this variable is used to make a selected window come up on top of the others
	   after an icon is double-clicked */
	var z = 50;
	
	first = true;
	
	/* load windows of icon double-clicked on */
	$('.folder').bind("dblclick", function(){
		
		if(first) {
			first = false;
			$('.note').delay(2000).show('blind', 500).delay(5000).hide('blind', 500);
		}

		var name = $(this).find('.folder_text').html();

		$('#description').fadeOut(2000);
	 	//var icon = $(this).contents().text();
	 	var icon = $(this).data('src');

		$('#windows').load('dir.php?q=' + icon, function(){

			$('.img_wrapper').each(function(){
				var img = $(this).find('img');
				var t = $(this);
				$(this).imagesLoaded( function() {
					
					var speed = Math.floor((Math.random() * 1000) + 500);
					
					var wH = $(window).height() - 40;
					var iH = img.attr('height');
					var iW = img.attr('width');					
					var iH = parseInt(iH);
					var iW = parseInt(iW);
					var holder = t.closest('.img_holder');
					var iT = holder.css('top'); iT = iT.slice(0, -2); iT = parseInt(iT);

					var fr = 25; // window frame
					var overflow = (iT + iH + fr) - wH;
					var iHtot = iH + fr + 30;
					
					// resize 													
					if(iHtot > wH) {
						var nH = wH * 0.8;
						var nW = iW * (nH / iH);
						img.height(nH).width(nW);
						t.height(nH).width(nW);
						overflow = (iT + nH + fr) - wH;
					}

					var newTop = iT - overflow - 8;

/*
					console.log('old pos: '+iT);					
					console.log('overflow: '+overflow);
					console.log('new pos: '+newTop);
*/
					if(overflow > 0) holder.animate({'top': newTop}, 1000);
					
					img.show('blind', speed);
				});
			});
			

			$('div.img_holder').draggable({ 
				start: function(){ 
					z = z + 1; 
					$(this).css({ 'z-index': z }); 
				}
			}).click(function(){ 
				z = z + 1; 
				$(this).css({ 'z-index': z }); 
			});
			
			$("div.img_holder").bind("dblclick", function(){ $(this).remove(); });
		
			$('.window_left').mousedown(function(){
				$(this).find('img').attr('src', 'gfx/window_left-close.gif');
			});
			$('.window_left').mouseup(function(){
				$(this).closest('.img_holder').remove();
			});
		});	  
		
		/* invert icon when double-clicked, as when dragged */		
		$('.folder').contents().find('img').attr({src: 'gfx/disk.gif'});
		$(this).contents().find('img').attr({src: 'gfx/disk_black.gif'});
		$('.folder_text').removeClass('folder_text-inverted');
		$(this).contents().find('.folder_text').addClass('folder_text-inverted');

	});
	
	// reset inverted icon when clicking bg
	$('#bg').click(function(){
		$('.folder').contents().find('img').attr({src: 'gfx/disk.gif'});
		$('.folder_text').removeClass('folder_text-inverted');
	});



	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    //$('#no-mobile').show();
	    window.location = '/mobile/';
	}

		
});