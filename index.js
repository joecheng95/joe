	$(document).ready(function() {
		$('#fullpage').fullpage({
			fadingEffect: true,
			css3: false,
			scrollBar: true,
			scrollingSpeed: 1200,
		});
	});
	var s = skrollr.init();
	var clickedCard=[];
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
			},700);
			setTimeout(function(){
				$(that).addClass('transdown');
				$('#goTop').css('opacity', 0.8);
			},1500);
			clickedCard.push(imgSelected[$(this).index('.transition')]);
			var cardNum1="images/" + 'tarot' + clickedCard[0] + '.jpg';
			var cardNum2="images/" + 'tarot' + clickedCard[1] + '.jpg';
			var cardNum3="images/" + 'tarot' + clickedCard[2] + '.jpg';
			var cardText=[
			{
				name: "魔術師 The Magician",
				suggest: "將所學有效整合",
				sevencircle: "喉輪、藍色",
				body:"呼吸系統、神經系統",
				personality: "十分聰明有主見的人"

			},{
				name: "女祭司 The High Priestess",
				suggest: "想要有直覺力，但是勿操之過急",
				sevencircle: "海底輪、紅色",
				body:"消化系統、女性生殖器",
				personality:"受過良好教育，並擁有豐富的知識而孤僻不愛說話。有定見，給人較冷漠感覺"
			},{
				name:"皇后 The Empress",
				suggest:"主動積極",
				sevencircle:"平衡系統，泌尿系統",
				body:"臍輪、紅色",
				personality:"擅交際，重生活享受"
			},{
				name:"戰車 The Chariot",
				suggest:"雖會一直遇到競爭的情況，但是欲速則不達",
				sevencircle:"心輪、藍色",
				body:"心",
				personality:"有理想與抱負之人但會餵了達成目標而不擇手段"
			},{
				name:"力量 Strength",
				suggest:"實際行動",
				sevencircle:"心輪，藍色",
				body:"心",
				personality:"具有英雄特質、有勇氣挑戰並且有頭有尾"
			},{
				name:"正義 Justice",
				suggest:"追求真正的真理而並非表面假象與自己認定的",
				sevencircle:"臍輪、橙色",
				body:"臍、腰部",
				personality:"有很強的正義感"
			},{
				name:"吊人 The Hangedman",
				suggest:"學習當下的經驗",
				sevencircle:"海底輪、紅色",
				body:"下半部",
				personality:"具有遠見與卓越的看法"
			},{
				name:"高塔 The Tower",
				suggest:"忌固執己見、多聽智者建議",
				sevencircle:"海底輪、紅色",
				body:"下半部",
				personality:"明知錯誤仍然不願改過"
			},{
				name:"星星 The Star",
				suggest:"放空自己等待上天的旨意，屬於靈性之人",
				sevencircle:"海底輪、紅色",
				body:"下半部",
				personality:"十分愛好自由、有高度理想"
			},{
				name:"皇帝 The Emperor",
				suggest:"力求務實理性",
				sevencircle:"眉心輪、錠色",
				body:"頭部、臉部",
				personality:"理性偏務實，但是有時熱衷於權利的追求"
			},{
				name:"教皇 The Hierophant",
				suggest:"多求助於宗教或靈性層面",
				sevencircle:"喉輪、藍色",
				body:"頸部、肩膀",
				personality:"重視靈性成長的人"
			},{
				name:"死神 Death",
				suggest:"放掉過去、開創新未來",
				sevencircle:"海底輪、紅色",
				body:"下半部",
				personality:"經歷重大的變故，外表看來冷酷但其實是以堅強的意志力在控制情緒"
			},{
				name:"戀人 The Lovers",
				suggest:"以純真的心面對事物",
				sevencircle:"眉心輪、錠色",
				body:"手臂、手指",
				personality:"有天助且單純的人"
			},{
				name:"惡魔 The Devil",
				suggest:"多從正向的心靈追求，如:宗教信仰",
				sevencircle:"能量保護、白色",
				body:"全身",
				personality:"個性較激烈，可能有暴力傾向，為達目的不擇手段"
			},{
				name:"命運之輪 Wheel of Fortune",
				suggest:"順服宇宙的變化",
				sevencircle:"胃輪、黃色",
				body:"胃",
				personality:"心胸寬大，順其自然不強求"
			},{
				name:"節制 Temperance",
				suggest:"丟棄舊包袱",
				sevencircle:"海底輪、紅色",
				body:"下半部",
				personality:"溫和有禮、嚴守中庸之道，愛說話有定見，給人較冷漠的感覺"
			},{
				name:"隱者 The Hermit",
				suggest:"是修行的時機點",
				sevencircle:"胃輪、黃色",
				body:"胃",
				personality:"十分小心謹慎之人，習慣一人做事情"
			},{
				name:"太陽 The Sun",
				suggest:"運用活力與熱情及樂觀的態度朝向光明面",
				sevencircle:"心輪、藍色",
				body:"心",
				personality:"樂觀而有自信，會正向觀察和思考事情而做出理性決定"
			},{
				name:"月亮 The Moon",
				suggest:"運用直覺指引答案",
				sevencircle:"海底輪、紅色",
				body:"下半部",
				personality:"十分善變"
			},{
				name:"審判 Judgement",
				suggest:"面對強烈想要重生與覺醒的欲望時傾聽自己內心真實的聲音",
				sevencircle:"眉心輪、錠色",
				body:"上半部",
				personality:"經常路見不平拔刀相助，有主見且果決"
			},{
				name:"世界 The World",
				suggest:"防犯於未然、冷靜思考",
				sevencircle:"能量保護、白色",
				body:"全身",
				personality:"不合邏輯、瘋瘋癲癲"
			},{
				name:"愚者 The Fool",
				suggest:"順應世界的自然法則，負責任並完成目標",
				sevencircle:"能量保護、白色",
				body:"骨骼系統",
				personality:"十分單純且內心充滿喜樂"
			}
			]
			var i=clickedCard[0]-1, j=clickedCard[1]-1, k=clickedCard[2]-1;
			$('.cardselected1').html('<img src='+cardNum1+'>');
			$('.cardselected2').html('<img src='+cardNum2+'>');
			$('.cardselected3').html('<img src='+cardNum3+'>');
			$('.cardtext1').html('<br>' + '牌名:' + " " + cardText[i].name + '<br>' + '建議:' + " " + 
				cardText[i].suggest + '<br>' + '七輪:' + " " + cardText[i].sevencircle + '<br>' + '身體:' + " " + 
				cardText[i].body + '<br>' + '個性:' + " " + cardText[i].personality);
			$('.cardtext2').html('<br>' + '牌名:' + " " + cardText[j].name + '<br>' + '建議:' + " " + 
				cardText[j].suggest + '<br>' + '七輪:' + " " + cardText[j].sevencircle + '<br>' + '身體:' + " " + 
				cardText[j].body + '<br>' + '個性:' + " " + cardText[j].personality);
			$('.cardtext3').html('<br>' + '牌名:' + " " + cardText[k].name + '<br>' + '建議:' + " " + 
				cardText[k].suggest + '<br>' + '七輪:' + " " + cardText[k].sevencircle + '<br>' + '身體:' + " " + 
				cardText[k].body + '<br>' + '個性:' + " " + cardText[k].personality);
			// setTimeout(function(){
			// 	$(that).css('opacity','0');
			// },2000);
			// .delay(3000).addClass('trans'+side);
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
					},2000);
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
			// debugger
		}else{
			ranNum(that);
			return;
		}
	};
	$('.front').each(function(){
		ranNum($(this));
	});

	$('#goTop').click(function(){
		$('body').animate({
			scrollTop:0
		},500);
		// $(this).css('opacity', 0)
	});

	$('.cardselected').realshadow();
	$('.cardselected').realshadow({
		type:'text'
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