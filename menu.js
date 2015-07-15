(function($){
	$(function(){
		var navBtn= $('#navi_btn');
		var bdr1  = $('#border1');
		var bdr2  = $('#border2');
		var bdr3  = $('#border3');
		var nvTxt = $('#menu_txt');
		navBtn.on('click', navi);
		function navi(){
			if(bdr2.is(':visible')){
				bdr2.fadeOut(60);
				bdr1.delay(120).transition({ rotate: 45 ,top: '18px'});
				bdr3.delay(120).transition({ rotate: -45,top: '18px' });
				nvTxt.text("閉じる");
			} else{
				bdr2.delay(300).fadeIn(200);
				bdr1.transition({ rotate: 0 ,top: '10px'});
				bdr3.transition({ rotate: 0,top: '26px' });
				nvTxt.text("menu");
			}

		}
	});
})(jQuery);