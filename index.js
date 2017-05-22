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
				$(this).addClass('flip'+side);
				setTimeout(function(){
					$(that).addClass('trans'+side);
				},2000);
				
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
	}else{
		ranNum(that);
		return;
	}
	};
	$('.front').each(function(){
		ranNum($(this));
	});

