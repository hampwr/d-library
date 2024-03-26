$(document).ready(function () {
    // 드롭다운
    $(".drop-down .selected a").click(function() {
        $(this).toggleClass('active')
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

    // 매거진 메인 지금 올라온 매거진 슬라이드
    var mgzViewwSwiper = new Swiper(".com-tab-circle.swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 6,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        observer: true,
        observeParents: true,
    });

    // 가로 슬라이드 24
    var row24Swiper = new Swiper(".row-swiper-24", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        watchOverflow: true,
        observer: true,
        observeParents: true,
    });
    
    // 가로 슬라이드 10
    var row10Swiper = new Swiper(".row-swiper-10", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        scrollbar: {
            el: '.row-swiper-10 .swiper-scrollbar',
            draggable: true,
          },
    });


    if($('.emgz.main').length > 0) {
        // 매거진 메인 지금 올라온 매거진 슬라이드
        var mgzViewwSwiper = new Swiper(".update-mgz .swiper-container", {
            slidesPerView: 'auto',
            spaceBetween: 20,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            observer: true,
            observeParents: true,
        });
    }

    if($('.emgz.emgz-tab').length > 0) {
        // 탭 상세 슬라이드
        var tabDtlSwiper = new Swiper(".view-special .swiper-container", {
            slidesPerView: 'auto',
            spaceBetween: 12,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            observer: true,
            observeParents: true,
        });
    }

    // 탭 뎁스 슬라이드
    var tabDepthSwiper = new Swiper(".com-list-star-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        observer: true,
        observeParents: true,
    });

    // share 버튼
    $(".view-sns .share-btn").click(function() {
        $(this).siblings('.more').toggle();
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("view-sns")){
                $(".view-sns .share .more").hide();
        }
    });
    //

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

    // 상품 상세
    if($('.dtl').length > 0) {
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

            // 클릭된 탭에 해당하는 .layout-pd-view 영역으로 스크롤
            var viewTop = $(".layout-pd-view").offset().top;
            $("html, body").animate({
                scrollTop: viewTop
            }, 0);
        });

        // 리뷰 리스트 하단 슬라이더
        var recommSwiper = new Swiper(".pd-rating-list .review-thumb", {
            slidesPerView: 'auto',
            spaceBetween: 10,
            observer: true,
            observeParents: true,
        });

        // 상품 리뷰
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

        // 상세 탭 fixed
        var tab = $(".layout-pd-tab");
        var viewTop = $(".layout-pd-view").offset().top;
        var viewBottom = viewTop + $(".layout-pd-view").outerHeight();

        $(window).on("scroll", function() {
            var scrollTop = $(window).scrollTop();

            // .layout-pd-view에 진입하면 .fixed 클래스 추가
            if (scrollTop >= viewTop && scrollTop <= viewBottom && !tab.hasClass("fixed")) {
                tab.addClass("fixed");
            } else if (scrollTop > viewBottom && tab.hasClass("fixed")) {
                // .layout-pd-view에서 나가면 .fixed 클래스 제거
                tab.removeClass("fixed");
            } else if (scrollTop < viewTop && tab.hasClass("fixed")) {
                // .layout-pd-view 영역 위로 스크롤 시 .fixed 클래스 제거
                tab.removeClass("fixed");
            }
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
            slidesPerView: 'auto',
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

    // e매거진 상세
    if($('.search-list').length > 0) {
        $(".search-filter-mo-btn").on("click", function() {
            $('.filter-pop').addClass('active');
            $('html').addClass('lock');
        });
        $(".filter-pop .close-btn").on("click", function() {
            $('.filter-pop').removeClass('active');
            $('html').removeClass('lock');
        });

        // 
        $(".filter-pop .filter-wrap .filter-item .th").on("click", function() {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass('active')
            } else {
                // $(".filter-pop .filter-wrap .filter-item").removeClass('active');
                $(this).parent().addClass('active');
            }
        });
    }
});