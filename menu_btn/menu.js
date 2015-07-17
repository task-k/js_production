(function($){
	$(function(){
		var
		navBtn= $('#navi_btn'),
		bdr1  = $('#border1'),
		bdr2  = $('#border2'),
		bdr3  = $('#border3'),
		nvTxt = $('#menu_txt');

		navBtn.on('click', navi);

		function navi(){
			if(bdr2.is(':visible')){
				bdr2.fadeOut(300);
				bdr1.animate({
								top:'39%',
								zIndex:1
							},{
								duration:500,
								step:function(flame){
									$(this).css({
										transform:'rotate(' + (flame * 225) +'deg)'
									});
								},
								complete:function(){
									$(this).css('zIndex', 0);
								}
							});
				bdr3.animate({
								bottom:'52%',
								zIndex:1
							},{
								duration:500,
								step:function(flame){
									$(this).css({
										transform:'rotate(' + (flame * -225) +'deg)'
									});
								},
								complete:function(){
									$(this).css('zIndex', 0);
								}
							});
				nvTxt.text("Close");
			} else{
				bdr2.delay(300).fadeIn(200);
				bdr1.animate({
								top:'17%',
								zIndex:1
							},{
								duration:500,
								step:function(flame){
									$(this).css({
										transform:'rotate(' + (flame * 180) +'deg)'
									});
								},
								complete:function(){
									$(this).css('zIndex', 0);
								}
							});
				bdr3.animate({
								bottom:'40%',
								zIndex:1
							},{
								duration:500,
								step:function(flame){
									$(this).css({
										transform:'rotate(' + (flame * -180) +'deg)'
									});
								},
								complete:function(){
									$(this).css('zIndex', 0);
								}
							});
				nvTxt.text("Menu");
			}

		}
	});
})(jQuery);