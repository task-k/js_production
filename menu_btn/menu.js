(function($){
	$(function(){
		var
		navBtn= $('#navi_btn'),
		bdr1  = $('#border1'),
		bdr2  = $('#border2'),
		bdr3  = $('#border3'),
		nvTxt = $('#menu_txt'),
		rValue1,
		rValue3;

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
										transform:'rotate(' + (flame * 135) +'deg)'
									});
								},
								complete:function(){
									$(this).css('zIndex', 0);
									rValue1 = 45;
								}
							});
				bdr3.animate({
								bottom:'52%',
								zIndex:1
							},{
								duration:500,
								step:function(flame){
									$(this).css({
										transform:'rotate(' + (flame * -135) +'deg)'
									});
								},
								complete:function(){
									$(this).css('zIndex', 0);
									rValue3 = -45;
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
										transform:'rotate(' + (rValue1 + flame * 135) +'deg)'
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
										transform:'rotate(' + (rValue3 + flame * -135) +'deg)'
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