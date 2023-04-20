$(document).ready(function(){


	//브라우저 너비 가져오기
  let ww = $(window).width();

	//브라우저 창 사이즈 변경시...
	$(window).resize(function(){
		ww = $(window).width();
		$("html,body").stop().animate({ scrollLeft:ww*a},700);
	});

	//탑메뉴 클릭시....
	$("#gnb li,#dot span").click(function(){
		let num=$(this).index();
		$('html,body').animate({ scrollLeft:ww*num},700);
		$("#dot span").eq(num).addClass("active");
		$("#dot span").eq(num).siblings().removeClass("active");
	});


  //마우스휠 사용
  let a = 0;  //페이지번호
	let area_n = $(".area").length;  //섹션개수
	let wheel = true;

	$(".area").on("mousewheel DOMMouseScroll",function(e,delta) {
		
		e.preventDefault();
		if ( wheel ) {
			let n = $(this).index();

			if(delta < 0) {  //휠을 아래로 돌렸다면
				a = n+1;
			} 
			else {  //휠을 위로 돌렸다면
				a = n-1;
			}

			if ( a <= 0 ) { a = 0; }
			if ( a >= area_n-1 ) { a = area_n-1; }

			

			$("#tt").text(a); 
			$("#dot span").eq(a).addClass("active");
			$("#dot span").eq(a).siblings().removeClass("active");
			$('html,body').stop().animate({ scrollLeft:ww*a },700); 	
		}
		
	}); 

	$(window).scroll(function(){ 
  
		let sc = $(document).scrollLeft();         

		if((sc >=0) && (sc < ww)) {   //한영역 너비가 ww임
			// a=0; $("#tt").text(a);
		} 

		if((sc >= ww) && (sc < ww*2)) {
			a=1; 
			$(".about_contents p:nth-child(2)").delay(200).animate({top:"0"},700,function(){
				$(".about_contents p:nth-child(1").delay(200).animate({right:"250px",opacity:"1"},700);
			});
			
		} 
								
		if((sc >= ww*2) && (sc < ww*3)) {   
			// a=2; $("#tt").text(a);
		} 
		
		if(sc >= ww*3) {   
			// a=3; $("#tt").text(a);
		}                     
								
	});

});