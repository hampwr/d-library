$(document).ready(function () {

    // 드롭다운
    $(".drop-down .selected a").click(function() {
        var $options = $(this).parent().siblings('.options');
        $options.find('> ul').toggle();
    });
    
    //옵션 선택 및 선택 후 옵션 숨기기
    $(".drop-down .options ul li a").click(function() {
        var text = $(this).html();
        
        var $selected = $(this).closest('.options').siblings('.selected');
        $selected.find('> a > span').html(text);
        
        $(this).closest('ul').hide();
    }); 
    
    
    //페이지의 다른 위치를 클릭하면 옵션 숨기기
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("drop-down")){
                $(".drop-down .options ul").hide();
            }
    });
    
    
    // circle tab 원형 탭
    $(".com-tab-circle button").on("click", function() {
        // 버튼 클릭시 기존 selected 클래스 제거 
        $('.com-tab-circle li').removeClass('selected');
        // 클릭된 버튼에는 .selected 클래스 추가
        $(this).parents().addClass('selected');
        // 현재 클릭된 버튼의 형제 중에서 .two-depth의 첫 번째 li에 .selected 클래스 추가
        $(this).siblings('.two-depth').find('li:first').addClass('selected');
    });

    //e매거진 tab
    if($('.emgz.emgz-tab').length > 0) {
        // e매거진 tabs 스와이퍼 슬라이드
        var swiper = new Swiper(".emgz.emgz-tab .slider-wrap .slider", {
            slidesPerView: 4,
            spaceBetween: 40,
            loop : true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: ".emgz.emgz-tab .slider-wrap .next",
                prevEl: ".emgz.emgz-tab .slider-wrap .prev",
            },    
        });
    }

    // e매거진 상세
    if($('.emgz.emgz-dtl').length > 0) {
        // e매거진 상세 댓글 tab
        $("#tle1").on("click", function() {
            $(this).parents().addClass('reply-on');
            $("#tle2").parents().removeClass('reply-on');
            $(".see-reply").show();
            $(".write").hide();
        });

        $("#tle2").on("click", function() {
            $(this).parents().addClass('reply-on');
            $("#tle1").parents().removeClass('reply-on');
            $(".write").show();
            $(".see-reply").hide();
        });

        if('0' < 1 ){
            $("#tle2").trigger("click");
        }
    }

    // big 스와이퍼
    var bigSwiper = new Swiper(".sub-list-has-big-swiper.slider-wrap .slider", {
        slidesPerView: 1,
        loop : true,
        spaceBetween: 50,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".sub-list-has-big-swiper .next",
            prevEl: ".sub-list-has-big-swiper .prev",
        },    
    });

    // 배경있음 + 미니 스와이퍼
    var wideBgSwiper = new Swiper(".wide-bg-in .slider-wrap .slider", {
        slidesPerView: 5,
        spaceBetween: 40,
        observer: true,
        observeParents: true,
        // slidesPerGroup : 4,
        loop : true,
        navigation: {
            nextEl: ".wide-bg-in .next",
            prevEl: ".wide-bg-in .prev",
        },    
    });

    // 상품 상세
    if($('.dtl').length > 0) {
        // 상세 추천도서 슬라이드
        var recommSwiper = new Swiper(".layout-recomm-item .slider-wrap .slider", {
            slidesPerView: 4,
            spaceBetween: 60,
            observer: true,
            observeParents: true,
            // slidesPerGroup : 4,
            loop : true,
            navigation: {
                nextEl: ".layout-recomm-item .next",
                prevEl: ".layout-recomm-item .prev",
            },    
        });

        // 상품 리뷰 슬라이드
        var reviewSwiper = new Swiper(".swiper-review-wrap .slider-wrap .slider", {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop:true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: ".swiper-review-wrap .next",
                prevEl: ".swiper-review-wrap .prev",
            },    
        });

        // 상세 탭
        $('.layout-pd-cont .layout-pd-tab .tab').first().addClass('active');
        $('.layout-pd-cont .tab-cont .pd-intro').show();

        $(".layout-pd-tab a.tab").on("click", function() {
            // 이미 active 클래스가 있는지 확인
            var isActive = $(this).hasClass("active");

            // 모든 탭에서 active 클래스 제거
            $(".layout-pd-cont .layout-pd-tab a.tab").removeClass("active");
            // 모든 탭 내용 숨기기
            $(".layout-pd-cont .tab-cont > div").hide();

            // 클릭된 탭에 active 클래스 추가 (만약 이미 있다면 추가하지 않음)
            $(this).addClass("active", !isActive);

            // 클릭된 탭에 해당하는 탭 내용 보여주기
            var targetTabContent = ".layout-pd-cont .tab-cont .pd-" + $(this).attr("class").split(" ")[1];
            $(targetTabContent).toggle();
        });
    }
    
    if($('.modal-wrap').length > 0) {
        // 리뷰 보기 팝업 스외이퍼 탭
        var tabThumb = $('.modal-wrap.review-view .review-img .pd-img-thumb .swiper-slide');
        tabThumb.first().addClass("on");
        tabThumb.on("click", function() {
            $(this).addClass('on');
            tabThumb.not($(this)).removeClass('on');

            // 모든 탭 내용 숨기기
            $(".layout-pd-cont .tab-cont > div").hide();
        });
        
        // 리뷰 팝업 스와이퍼
        var galleryThumbs = new Swiper('.pd-img-thumb .swiper-container', {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
        });
        var galleryTop = new Swiper('.pd-img-slider .swiper-container', {
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }
    
});