// 初始化 AOS
AOS.init({
    duration: 1000,
    once: true
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 返回顶部按钮
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 作品展示数据
const portfolioItems = [];

// 动态加载作品展示
function loadPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioItems.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item item-${index + 1}`;
        portfolioItem.setAttribute('data-aos', 'fade-up');
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="作品展示">
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});

// 配置粒子效果
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.9,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.5,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.2,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.8,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

// 视频播放控制
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const playButton = document.getElementById('playButton');
    const aiButton = document.querySelector('.ai-button');
    const aiModal = document.getElementById('aiModal');
    const closeModal = document.getElementById('closeModal');

    // 视频播放控制
    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.style.opacity = '0';
            playButton.style.pointerEvents = 'none';
        } else {
            video.pause();
            playButton.style.opacity = '1';
            playButton.style.pointerEvents = 'auto';
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    // 添加视频容器点击事件
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.style.opacity = '0';
            playButton.style.pointerEvents = 'none';
        } else {
            video.pause();
            playButton.style.opacity = '1';
            playButton.style.pointerEvents = 'auto';
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    // 视频结束时重置播放按钮
    video.addEventListener('ended', () => {
        playButton.style.opacity = '1';
        playButton.style.pointerEvents = 'auto';
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    });
    // 打开弹窗
    aiButton.addEventListener('click', () => {
        aiModal.classList.add('show');
        document.body.classList.add('modal-open');
    });

    // 关闭弹窗
    closeModal.addEventListener('click', () => {
        aiModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    });

    // 点击弹窗外部关闭
    aiModal.addEventListener('click', (e) => {
        if (e.target === aiModal) {
            aiModal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });
});