// $(document).ready(function() {
// 		$('#fullpage').fullpage({})
// 	});

$('.wrapper a img').mouseenter(function(){
	$(this).addClass('large')
});
$('.wrapper a img').mouseleave(function(){
	$(this).removeClass('large')
});
$('#goPrevious').click(function(){
	$('body').fadeOut('slow',function(){
		window.location.assign('project.html');
	});
});

// $('body').html("<div>home.html</div>")




// $('#goPrevious').click(function(){
// 	$('body').fadeOut('slow',function(){
// 		$('body').load('Home.html');
// 	});
// });
