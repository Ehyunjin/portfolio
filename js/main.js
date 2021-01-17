$(function(){

	//ž��ư
	function top_btn(){
		var scrollT = $(window).scrollTop();
		if(scrollT >= 500){
			$('.btn_top').stop().fadeIn(300);
		}else{
			$('.btn_top').stop().fadeOut(200);
		}
	}

	top_btn();
	$(window).on('load scroll',function(){
		top_btn();
	});
	$('.btn_top').on('click',function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop:'0'},300,'linear')

	});
	
	//��Ʈ������ ����� �ؽ�Ʈ �÷�
	function innerTxt(){
		$('.inner').each(function(){
			var thisColor = $(this).css('background-color');
			$(this).find('.period').css({'color':thisColor});
		});
	}
	function inner(){
		var winWd = $(window).width();
		if(winWd > 740){
			$('.cont ul > li a').on('mouseover',function(){
			$(this).find('.inner').stop().animate({'top':'0','opacity':'1'},400,'linear');
			}).on('mouseout',function(){
				$(this).find('.inner').stop().animate({'top':'400px','opacity':'0'},400,'linear');
			});
		}else{
			$('.cont ul > li a').off('mouseover mouseout');
			$('.cont .list > li a .inner').removeAttr('style');
		}
	}
	innerTxt();
	inner();
	$(window).on('resize',function(){
		innerTxt();
		inner();
	});

	//��Ʈ������ �̹��� Ŭ�� �� �˾� �����̵�
	

	//Ŭ�� �� �˾�
	$('.cont .list > li a').on('click',function(e){
		e.preventDefault();
	});
	$('.cont .list > li').on('click',function(){
		var popUp = $(this).children('.pop-area').html();
		$('.pop.pop-area').html(popUp);
		$('.pop.pop-area ul').addClass('slider');
		$('.bg-black, .cancel').show();
		$('.pop.pop-area').show();
		$('.slider').bxSlider({
			nextSelector:'.next',
			prevSelector:'.prev',
			pagerSelector: '.pagerSelector',
			adaptiveHeight:true
		});
	});
	$('.bg-black , .cancel').on('click',function(){
		$('.bg-black , .cancel').hide();
		$('.pop-area').hide();
		$('.controls a').remove();
		$('.pagerSelector div').remove();
	});
});