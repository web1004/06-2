$(document).ready(function(){

  //브라우저 너비 가져오기
  let ww = $(window).width();

  /*브라우저 창 사이즈 변경시___________ */
  $(window).resize(function(){
    location.reload();  //새로고침
    let ww = $(window).height();
    $("html,body").stop().animate({ scrollLeft:ww*a },500);
  });

  /* 탑메뉴 클릭시______________________ */
  $("#gnb li,#dot span").click(function(){
    let num=$(this).index();
    $("#tt").text(num); 
    $("#dot span").eq(num).addClass("active");
		$("#dot span").eq(num).siblings().removeClass("active");
    $("html,body").stop().animate({ scrollLeft:ww*num },500); 
  });

  /* 마우스휠__________________________ */
  let a = 0;  //페이지번호
	let area_n = $(".area").length;  //섹션개수
	let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta) {
    e.preventDefault();  //요소의 기본기능해제
    if ( wheel ) {
      let n = $(this).index();

      if(delta < 0) { //휠을 아래로 돌렸다면
        a = n+1;
      }else{ //휠을 위로 돌렸다면
        a = n-1;
      }

      if ( a <= 0 ) { a = 0; }
      if ( a >= area_n-1 ) { a = area_n-1; }

      $("#tt").text(a); 
      $("#dot span").eq(a).addClass("active");
			$("#dot span").eq(a).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollLeft:ww*a },500); 

    }
  });

  /*스크롤이벤트______________________ */
  /* $(window).scroll(function(){ 
    let sc = $(document).scrollTop();

    //한영역 높이가 wh임 
    if((sc>=0) && (sc<ww)){  
      a=0; 
      $("#tt").text(a);
    };

    if((sc>=ww) && (sc< ww*2)){  
      a=1; 
      $("#tt").text(a);
    };

    if((sc>=ww*2) && (sc<ww*3)){  
      a=2; 
      $("#tt").text(a);
    };

    if(sc>=ww*3){  
      a=3; 
      $("#tt").text(a);
    };
  }); */

});