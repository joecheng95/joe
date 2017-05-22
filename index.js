	$(document).ready(function() {
		$('#fullpage').fullpage({
			fadingEffect: true,
			css3: false,
			scrollBar: true,
			scrollingSpeed: 1200,
		});
	});
	var s = skrollr.init();
	$('.transition')
	.on('mouseenter',function(){
		var that=this;
		// if(Math.random()<0.5){
		// 	$(this).addClass('rotateright');
		// 	$(this).off('click');
		// 	$(this).on('click',function(){
		// 		$(this).addClass('flipright');
		// 		// setTimeout(function(){
		// 		// $(that).removeClass('flipright')
		// 		// },2000);
		// 	});
		// }else{
		// 	$(this).addClass('rotateleft');
		// 	$(this).off('click');
		// 	$(this).on('click',function(){
		// 		$(this).addClass('flipleft');
		// 		// setTimeout(function(){
		// 		// $(that).removeClass('flipleft')
		// 		// },2000);
		// 	});
		// };


		// var side = Math.random()<0.5 ? "right" : "left";//  精簡寫法


		if(Math.random()<0.5){
			side = "right";
		}
		else{
			side = "left";
		}
		$(this).addClass('rotate'+side);
		$(this).off('click');
		$(this).on('click',function(){
			$(this).addClass('flip'+side).delay(3000).addClass('trans'+side);
			// .delay(1000).addClass('transdown');
			// setTimeout(function(){
			// 	$(that).addClass('trans'+side).delay(5000).hide();
			// },5000)
			$(this).off('mouseenter');
			if($('.flipleft').length+$('.flipright').length===3){
					//防止user點下第四張牌
					$('.transition').off('mouseenter').off('click');
					setTimeout(function(){
						$.fn.fullpage.moveSectionDown();
					},1000);
				}
				
				// setTimeout(function(){
				// $(that).css('transform','scale(1.5)');
				// },2000);
				// setTimeout(function(){
				// $(that).css('transform','translateY(1000px)');
				// $(window).animate({scrollTop:1000},'1500');
				// },2000);
	});

		
	})
	.on('mouseleave',function(){
		$(this).removeClass('rotateright');
		$(this).removeClass('rotateleft');
	});
	var imgSelected=[]
	var imgNum=22
	var ranNum=function(that){
		var n = Math.ceil(Math.random()*imgNum);

		// for(let i=0;i<imgSelected.length;i++){
		// 	if(n===imgSelected[i]){
		// 		ranNum(that);
		// 		return;
		// 	}
		// }

		if(imgSelected.indexOf(n)===-1){
			imgSelected.push(n);
			that.attr('src','images/tarot' + n + '.jpg')
			debugger
		}else{
			ranNum(that);
			return;
		}
	};
	$('.front').each(function(){
		ranNum($(this));
	});


// imgSelected
// (8) [10, 17, 9, 15, 1, 18, 20, 3]
// $(this)
// [div.card.transition.rotateright, context: div.card.transition.rotateright]
// $(this).index('div')
// 4
// $(this).index('.transition')
// 0
// $(this).index('.transition')
// 6
// imgSelected
// (8) [10, 17, 9, 15, 1, 18, 20, 3]
// imgSelected[$(this).index('.transition')]
// 20
// var clickedCard = []
// undefined
// clickedCard.push()
// 0
// clickedCard
// []
// clickedCard.push(imgSelected[$(this).index('.transition')])
// 1
// clickedCard
// [20]