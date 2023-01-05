$(function(){
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper2 = new Swiper(".notice", {
        loop:true,
      
        pagination: {
          el: ".notice .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".notice .swiper-button-next",
            prevEl: ".notice .swiper-button-prev",
          },
          breakpoints: {
        
            481: {
              slidesPerView: 1,  //브라우저가 768보다 클 때
              spaceBetween: 40,
            },
            1281: {
              slidesPerView: 4,  //브라우저가 1024보다 클 때
              spaceBetween: 50,
            },
          },
      });

      var swiper3 = new Swiper(".event", {
        loop:true,
      
        pagination: {
          el: ".event .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".event .swiper-button-next",
            prevEl: ".event .swiper-button-prev",
          },
          breakpoints: {
        
            481: {
              slidesPerView: 1,  //브라우저가 768보다 클 때
              spaceBetween: 40,
            },
            1281: {
              slidesPerView: 4,  //브라우저가 1024보다 클 때
              spaceBetween: 50,
            },
          },
      });

      $("a").click(function(e){
        e.preventDefault();
    });
    $(".tab_con > div").hide();
    $('.tab_con > div:first').show();

    $(".tab_title ul li:first").click(function(){
        $(".tab_title ul li:first").addClass("active");
        $(".tab_title ul li:last").removeClass("active");
        $(".tab_con > div:first").show();
        $(".tab_con > div:last").hide();
    });
    
    $(".tab_title ul li:last").click(function(){
        $(".tab_title ul li:first").removeClass("active");
        $(".tab_title ul li:last").addClass("active");
        $(".tab_con > div:first").hide();
        $(".tab_con > div:last").show();
    });


      //notice slide
      var swiper4 = new Swiper(".magazine1", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop:true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
        breakpoints: {
        
          481: {
            slidesPerView: 1.5,  //브라우저가 768보다 클 때
            spaceBetween: 40,
          },

          768: {
            slidesPerView: 1.5,  //브라우저가 768보다 클 때
            spaceBetween: 40,
          },

          1281: {
            slidesPerView: 3,  //브라우저가 1024보다 클 때
            spaceBetween: 30,
          },
        },
      });



    var magazine1_img=$("notice .magazine1 .swiper-slide img");
    var img_width=magazine1_img.width();
    magazine1_img.css("height",img_width);


    //mobile에서만  실행
    if ($(window).width()<=1280){
      $(".menu").click(function(){
        $(".popup_menu").animate({"left":0});
        $('html,body').css('overflow-y','hidden');
      });
      $(".close_btn").click(function(){
        $(".popup_menu").animate({"left":"-110vw"});
         $(".popup_menu").animate({"left":0});
         $("html,body").css("overflow-y","visible");
      });
     

      var popup_nav=$(".popup_menu .popup_nav nav > ul > li > a" );
      popup_nav.click(function(){
      if($(this).attr("class")!="active"){
        popup_nav.next().slideUp();
        popup_nav.removeClass('active');
        $(this).next().slideDown();
        $(this).addClass("active");
      } 
        else{
          $(this).next().slideUp();
          $(this).removeClass("active");
        }
      });
    }
      else{
        $("header nav .sub").hide();
        $("header nav > ul > li > a").hover(function(){
          $("header nav .sub").stop().slideDown();
          $("header nav .sub").css("z-index",11);
          $(this).next().css("z-index",20);               
        });
        
      $("header nav").mouseleave(function(){
        $("header nav .sub").stop().slideUp();
      });  
    }//햄버거 메뉴 클릭시 팝업 메뉴 왼쪽에서 나타남

    //pc
      if($(window).width()>=1281){
        $('#fullpage').fullpage();
      }

      var swiper4 = new Swiper(".magazine1", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop:true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
        navigation: {
          nextEl: ".magazine1 .swiper-button-next",
          prevEl: ".magazine1 .swiper-button-prev",
        },
        breakpoints: {
        
          481: {
            slidesPerView: 1.5,  //브라우저가 768보다 클 때
            spaceBetween: 40,
          },
          1281: {
            slidesPerView: 4,  //브라우저가 1024보다 클 때
            spaceBetween: 30,
          },
        }
      });
});
