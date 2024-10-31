// script.js

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let index = 0;
    setInterval(function () {
        title.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

    // 搜索框功能
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchFeedback = document.getElementById('searchFeedback');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        // 这里可以添加搜索逻辑
        searchFeedback.textContent = '搜索结果：' + query;
    });

    // 轮播图逻辑
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const modal = document.getElementById('modal');
    const buyButtons = document.querySelectorAll('.buy-button');
    const closeButton = document.querySelector('.close-button');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // 模态窗口逻辑
    function openModal() {
        modal.style.display = 'block';
        currentSlide = 0;
        showSlide(currentSlide);
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    buyButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});
