$(function () {
    // スクロールアニメーション
    const animatedCls = 'is-animated';
    $(window).on('scroll', function () {
        $(`.js-animationPoint:not(.${animatedCls})`).each(function () {
            let elementTop = $(this).offset().top;
            if (elementTop === 0) {
                elementTop = 999999;
            }

            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            const triggerPoint = scrollTop + (windowHeight / 2);
            if (elementTop <= triggerPoint) {
                $(this).addClass(animatedCls);
            }
        });
    });

    // スムーススクロール
    function smoothScroll(target, delay) {
        let headerHeight = $("header").height();
        $("html, body").animate({ scrollTop: target.offset().top - headerHeight }, delay);
    }
    $('a[href^="#"]').on("click", function (event) {
        let target = $($(this).attr("href"));

        if (target.length) {
            event.preventDefault();
            smoothScroll(target, 1000);
        }
    });

    //タブ
    let activeCls = "is-active";
    $(".tabLists_tab").click(function () {
        let tabId = $(this).data("tab");
        if (tabId === "tab1" || tabId === "tab2") {
            $('[data-tab="tab1"]').removeClass(activeCls);
            $('[data-tab="tab2"]').removeClass(activeCls);
        }
        $('[data-tab="' + tabId + '"]').addClass(activeCls);

        let scrollTarget = $('#' + $(this).parents('.js-tabParentBlock').attr('id'));
        smoothScroll(scrollTarget, 0);
    });

    // アコーディオン
    $(".js-accordion").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("is-open");
    });


    // document.addEventListener("mousemove", (event) => {
    //     const cursorX = event.clientX;
    //     const elements = document.querySelectorAll(".collectionTop_moon div"); // すべてのdiv要素を取得
    //     const percentage = -(cursorX * 0.01); // 負のパーセントを計算
    
    //     elements.forEach((element) => {
    //         element.style.marginLeft = `${percentage}%`; // 各divにスタイルを適用
    //     });
    // });
});