$(document).ready(function () {
    // 필터 버튼
    $(".search-dtl-filter .search-filter-btn button").click(function() {
        $(this).parent().parent('.search-dtl-filter').toggleClass('active');
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("view-sns")){
                $(".view-sns .share .more").hide();
        }
    });
    
    // 드롭다운
    $(".drop-down .selected a").click(function() {
        var $options = $(this).parent().siblings('.options');
        $(this).toggleClass('active')
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

    // 마이페이지 목록 접기/펼치기
    $(".list-epi .epi-list-btn").click(function() {
        $(this).parent().parent().parent().find('.list-epi').toggleClass('active')
    });

    if($('.recent-list').length > 0) {
        // 최근 본 상품 스와이퍼 초기화 함수
        function initializeRecentSwiper() {
            return new Swiper(".recent-list .slider-wrap .slider", {
                slidesPerView: 6,
                spaceBetween: 28,
                observer: true,
                observeParents: true,
                watchOverflow:true,
                navigation: {
                    nextEl: ".recent-list .slider-wrap .next",
                    prevEl: ".recent-list .slider-wrap .prev",
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2,  //브라우저가 1024 보다 작을 때
                        spaceBetween: 32,
                    },
                },  
            });
        }

        // 최근 본 상품 스와이퍼 초기화
        var recentSwiper = initializeRecentSwiper();

        // del-btn을 클릭할 때 refreshSwiper 함수 호출
        document.querySelector('.del-btn').addEventListener('click', function() {
            recentSwiper.destroy(); // 이전 swiper 객체 파기
            recentSwiper = initializeRecentSwiper(); // 새로운 swiper 객체 생성
        });
    }

    if($('.order-div').length > 0) {
        // 장바구니/주문 탭 영역
        $('.order-div .tab-area .tab-cont').hide();
        
        $('.order-div .tab-area .tab-btn-wrap .tab-btn').click(function(){
            $('.order-div .tab-area .tab-cont').hide();
            $('.order-div .tab-area .tab-btn-wrap .tab-btn').removeClass('active');
            $($('.tab-cont')[$(this).index()]).show();
            $(this).addClass('active');
        }).first().trigger('click');
    }


    $(document).ready(function() {
        // 윈도우 크기 변경 이벤트 핸들러
        function handleWindowSize() {
            var ww = $(window).width();
            if (ww < 1024) {
                // 작은 화면일 때의 처리
                $(".view-sns .share a").off("click").on("click", function() {
                    $(this).siblings('.more').toggle();
                });

                // 탭 뎁스 슬라이드
                var tabDepthSwiper = new Swiper(".com-list-star-swiper", {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    slidesOffsetBefore: 16,
                    slidesOffsetAfter: 16,
                    observer: true,
                    observeParents: true,
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

                // 매거진 메인 지금 올라온 매거진 슬라이드
                var mgzViewwSwiper = new Swiper(".com-tab-circle.swiper-container", {
                    slidesPerView: 'auto',
                    spaceBetween: 6,
                    slidesOffsetBefore: 16,
                    slidesOffsetAfter: 16,
                    observer: true,
                    observeParents: true,
                });
            } else {
                // 큰 화면일 때의 처리
                $(".view-sns .share a").off("click");
            }

            // big 스와이퍼
            if (ww > 768) {
                mySwiper = new Swiper(".sub-list-has-big-swiper .slider", {
                    slidesPerView: 'auto',
                    // loop : true,
                    spaceBetween: 50,
                    navigation: {
                        nextEl: ".sub-list-has-big-swiper .next",
                        prevEl: ".sub-list-has-big-swiper .prev",
                    },  
                    breakpoints: {
                        576: {
                            slidesPerView: 3,  //브라우저가 768 보다 작을 때
                            spaceBetween: 11,
                        },
            
                        768: {
                            slidesPerView: 3,  //브라우저가 768 보다 작을 때
                            spaceBetween: 11,
                        },
            
                        860: {
                            slidesPerView: 2,  //브라우저가 920 보다 작을 때
                            spaceBetween: 11,
                        },
                        920: {
                            spaceBetween: 11,  //브라우저가 920 보다 작을 때
                        },
            
                        1280: {
                            spaceBetween: 24,  //브라우저가 1280 보다 작을 때
                        },
                    },  
                });
            } else if (ww <= 768) {
            // swiper 호출 안함
            }

            // 메인
            if($('.main').length > 0) {
                if (!$('.main').hasClass('ebook')) {
                // .main이 .ebook을 가지고 있지 않은 경우에만 아래 코드를 실행합니다.
                    // 메인 탭
                    $(".main-tab-list button").on("click", function() {
                        // 버튼 클릭시 기존 selected 클래스 제거 
                        $('.main-tab-list button').removeClass('selected');
                        // 클릭된 버튼에는 .selected 클래스 추가
                        $(this).addClass('selected');
                    });

                    // 메인 비주얼 슬릭
                    const visual = $('.slick-visual');
                    const progress = $('.visual-progress');
                    const initPercent = 100 / ($('.slick-visual').find('.slick-slide').length);

                    visual.slick({
                        variableWidth: true,
                        infinite: true,
                        autoplay : true,	
                        speed : 500,
                        autoplaySpeed : 2000,
                        centerMode:true,
                        dots:true,
                        prevArrow: '.visual-prev',
                        nextArrow: '.visual-next',
                        appendDots: '.slick-visual-paging',
                        customPaging: function (slider, i) {
                            return  '<span>'+'0'+(i + 1)+'</span><span>/</span><span>' + 0 + slider.slideCount + '</span>';
                        },
                        responsive: [ // 반응형 웹 구현 옵션
                            {  
                                breakpoint: 769,
                                settings: {
                                    variableWidth: false,
                                    slidesToShow:1,
                                    centerMode:false,
                                } 
                            },
                        ]

                    });
                    visual.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        var calc = ((nextSlide + 1) / slick.slideCount) * 100;
                        progress
                            .css('background-size', calc + '% 100%')
                            .attr('aria-valuenow', calc);
                    });
                    
                    // 갓 나온 신작 스와이퍼
                    var main01Swiper = new Swiper(".main-swiper-01 .slider", {
                        slidesPerView: 'auto',
                        centeredSlides: true,
                        spaceBetween: 48,
                        loop : true,
                        navigation: {
                            nextEl: ".main-swiper-01 .next",
                            prevEl: ".main-swiper-01 .prev",
                        },    

                        on: {
                            slideChange: function () {
                                $('.main-layout-01 .slider-wrap .swiper .swiper-wrapper').addClass('left');
                            }
                        },

                        breakpoints: {
                            400: {
                                spaceBetween: 16,  //브라우저가 1280 보다 작을 때
                            },

                            1280: {
                                spaceBetween: 20,  //브라우저가 1280 보다 작을 때
                            },
                        },
                    });

                    // 보던 콘텐츠 이어보기
                    var main02Swiper = new Swiper(".main-swiper-02 .slider", {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        navigation: {
                            nextEl: ".main-swiper-02 .next",
                            prevEl: ".main-swiper-02 .prev",
                        },    
                        breakpoints: {
                            600: {
                                slidesPerView: 'auto',
                                spaceBetween: 16,  //브라우저가 768 보다 작을 때
                                slidesOffsetAfter: 16,
                                slidesOffsetBefore: 16,
                            },

                            768: {
                                spaceBetween: 24,  //브라우저가 768 보다 작을 때
                                slidesOffsetAfter: 16,
                                slidesOffsetBefore: 16,
                            },

                            1024: {
                                spaceBetween: 28,  //브라우저가 1024 보다 작을 때
                            },

                            1280: {
                                spaceBetween: 40,  //브라우저가 1280 보다 작을 때
                            },
                        },
                    });

                    // 베스트
                    var mainBestSwiper = new Swiper(".main .best-div .slider", {
                        slidesPerView: 3,
                        navigation: {
                            nextEl: ".main .best-div .next",
                            prevEl: ".main .best-div .prev",
                        }, 
                        on:{
                            reachBeginning: function () {
                                $('.main .best-div .next').show();
                                $('.main .best-div .prev').hide();
                            },

                            reachEnd: function () {
                                $('.main .best-div .prev').show();
                                $('.main .best-div .next').hide();
                            }
                        },

                        breakpoints: {
                            648: {
                                slidesPerView: 'auto', //브라우저가 648 보다 작을 때
                                spaceBetween: 40,
                                loop: true,
                                slidesOffsetAfter: 16,
                                slidesOffsetBefore: 16,
                            },

                            768: {
                                slidesPerView: 'auto',
                                spaceBetween: 40, //브라우저가 768 보다 작을 때
                                loop: true,
                                slidesOffsetAfter: 24,
                                slidesOffsetBefore: 24,
                            },

                            1280: {
                                spaceBetween: 18, //브라우저가 1280 보다 작을 때
                            },
                        },
                    });

                    // 배너
                    var bigSwiper = new Swiper(".main-ad-banner .slider", {
                        slidesPerView: 2,
                        // loop : true,
                        spaceBetween: 20,
                        watchOverflow:true,
                        observer: true,
                        observeParents: true, 

                        breakpoints: {
                            768: {
                                slidesPerView: 1, //브라우저가 768 보다 작을 때
                            },
                        },
                    });

                    // main-swiper-04
                    var bigSwiper = new Swiper(".main-swiper-04.one .slider", {
                        slidesPerView: 6,
                        loop : false,
                        spaceBetween: 32,
                        navigation: {
                            nextEl: ".main-swiper-04.one .next",
                            prevEl: ".main-swiper-04.one .prev",
                        },    

                        breakpoints: {
                            648: {
                                slidesPerView: 'auto', //브라우저가 648 보다 작을 때
                                spaceBetween: 20,
                                slidesOffsetAfter: 16,
                                slidesOffsetBefore: 16,
                            },

                            768: {
                                slidesPerView: 'auto', //브라우저가 768 보다 작을 때
                                spaceBetween: 20,
                                slidesOffsetAfter: 24,
                                slidesOffsetBefore: 24,
                            },

                            1024: {
                                slidesPerView: 5, //브라우저가 1024 보다 작을 때
                                spaceBetween: 24,
                                slidesOffsetAfter: 32,
                                slidesOffsetBefore: 32,
                            },

                            1280: {
                                slidesPerView: 5, //브라우저가 1280 보다 작을 때
                                spaceBetween: 29,
                                slidesOffsetAfter: 32,
                                slidesOffsetBefore: 32,
                            },
                        },
                    });

                    var bigSwiper = new Swiper(".main-swiper-04.two .slider", {
                        slidesPerView: 6,
                        loop : false,
                        spaceBetween: 32,
                        navigation: {
                            nextEl: ".main-swiper-04.two .next",
                            prevEl: ".main-swiper-04.two .prev",
                        },    

                        breakpoints: {
                            648: {
                                slidesPerView: 'auto', //브라우저가 648 보다 작을 때
                                spaceBetween: 20,
                                slidesOffsetAfter: 16,
                                slidesOffsetBefore: 16,
                            },

                            768: {
                                slidesPerView: 'auto', //브라우저가 768 보다 작을 때
                                spaceBetween: 20,
                                slidesOffsetAfter: 24,
                                slidesOffsetBefore: 24,
                            },

                            1024: {
                                slidesPerView: 5, //브라우저가 1024 보다 작을 때
                                spaceBetween: 24,
                                slidesOffsetAfter: 32,
                                slidesOffsetBefore: 32,
                            },

                            1280: {
                                slidesPerView: 5, //브라우저가 1280 보다 작을 때
                                spaceBetween: 29,
                                slidesOffsetAfter: 32,
                                slidesOffsetBefore: 32,
                            },
                        },
                    });

                    $(".main-layout-01 .next, .main-layout-01 .prev").on("click", function() {
                        $('.main-layout-01 .slider-wrap .swiper .swiper-wrapper').addClass('left');
                    });
                }
            }
            
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
                    breakpoints: {
                        1024: {
                            slidesPerView: 1, //브라우저가 1024 보다 작을 때
                            spaceBetween: 0,
                        },
                    },
                });
            }
        }
    
        // 초기 실행
        handleWindowSize();
    
        // 윈도우 크기 변경 이벤트에 핸들러 연결
        $(window).on("resize", handleWindowSize);
    });
    

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

    // 배경있음 + 미니 스와이퍼
    var wideBgSwiper = new Swiper(".wide-bg-in .slider-wrap .slider", {
        slidesPerView: 5,
        spaceBetween: 40,
        observer: true,
        observeParents: true,
        loop : true,
        navigation: {
            nextEl: ".wide-bg-in .next",
            prevEl: ".wide-bg-in .prev",
        },    
        // 반응형
        breakpoints: {
            1024: {
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
                slidesPerView: 'auto',
                spaceBetween: 20, //브라우저가 1024 보다 작을 때
            },
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
            // 반응형
            breakpoints: {
                1024: {
                    slidesOffsetBefore: 16,
                    slidesOffsetAfter: 16,
                    slidesPerView: 'auto',
                    spaceBetween: 24, //브라우저가 1024 보다 작을 때
                },
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

            // 클릭된 탭에 해당하는 .layout-pd-view 영역으로 스크롤
            var viewTop = $(".layout-pd-view").offset().top;
            $("html, body").animate({
                scrollTop: viewTop
            }, 0);
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

        var ww = $(window).width();
        if (ww < 1024) {  //1024px 보다 작은 경우
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
                allowTouchMove:true,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: ".swiper-review-wrap .next",
                    prevEl: ".swiper-review-wrap .prev",
                },    
            });

          } else { // 1024px 보다 큰 경우
            
          }
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
            // 반응형
            breakpoints: {
                1024: {
                    slidesPerView: 'auto', //브라우저가 1024 보다 작을 때
                },
            },  
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
    }
    
});