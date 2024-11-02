// 当文档加载完毕时执行
document.addEventListener('DOMContentLoaded', function () {
    // 搜索框功能
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');
    var searchFeedback = document.getElementById('searchFeedback');

    searchButton.addEventListener('click', function () {
        var query = searchInput.value.trim(); // 移除前后空白字符
        if (query) {
            searchFeedback.textContent = '搜索结果：' + query;
        } else {
            searchFeedback.textContent = "请输入搜索内容";
        }
    });

    // 返回顶部按钮功能
    var backToTopBtn = document.getElementById('backToTopBtn');
    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 导航栏切换逻辑
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('nav-active');
    });

    // 字体变色模块
    (function () {
        var title = document.getElementById('color-changing-title');
        var colors = ['red', 'blue', 'green', 'yellow', 'purple'];
        var index = 0;
        setInterval(function () {
            title.style.color = colors[index++ % colors.length];
        }, 1000);
    })();

    // 轮播图逻辑
    var slides = document.querySelectorAll('.carousel-item');
    var totalSlides = slides.length;
    var currentSlide = 0;

    function showSlide(index) {
        for (var i = 0; i < totalSlides; i++) {
            if (i === index) {
                slides[i].style.display = 'block';
            } else {
                slides[i].style.display = 'none';
            }
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    var nextButton = document.querySelector('.carousel-button.next');
    nextButton.addEventListener('click', nextSlide);

    var prevButton = document.querySelector('.carousel-button.prev');
    prevButton.addEventListener('click', prevSlide);

    // 模态窗口逻辑
    var modal = document.getElementById('modal');
    var closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 商店功能
    var storeItems = document.querySelectorAll('.product');
    storeItems.forEach(function (item) {
        item.addEventListener('click', function () {
            alert('商品详情：' + this.querySelector('h4').textContent);
        });
    });

    // 音频和视频播放器功能
    var audioPlayer = document.querySelector('audio');
    var playButton = document.querySelector('audio + label');
    playButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    var videoContainer = document.querySelector('.video-container');
    var playVideoButton = document.querySelector('.video-container + label');
    playVideoButton.addEventListener('click', function () {
        if (videoContainer.paused) {
            videoContainer.play();
        } else {
            videoContainer.pause();
        }
    });
});
