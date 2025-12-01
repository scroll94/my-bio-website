// Инициализация анимаций
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Тёмная/светлая тема
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Проверяем сохранённую тему
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-heart');
    themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-heart');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-heart');
        localStorage.setItem('theme', 'light');
    }
});

// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Текущий год в футере
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Эффект для навигации при скролле
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    
    if (scrollTop > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = 'var(--nav-bg)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = 'var(--nav-bg)';
    }
});

// Создаём плавающие сердца
function createHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const hearts = ['❤', '💖', '💕', '💗', '💓', '💞', '💝'];
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Запускаем создание сердец после загрузки страницы
window.addEventListener('load', createHearts);

// Анимация для кнопки темы
themeToggle.addEventListener('mouseenter', () => {
    themeToggle.style.transform = 'scale(1.1) rotate(10deg)';
});

themeToggle.addEventListener('mouseleave', () => {
    themeToggle.style.transform = 'scale(1) rotate(0deg)';
});

// Добавляем параллакс эффект для героя
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.backgroundPosition = `50% ${rate}px`;
    }
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем текущую дату в посвящение
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateElements = document.querySelectorAll('.dedication-date');
    dateElements.forEach(el => {
        el.textContent = now.toLocaleDateString('ru-RU', options);
    });
    
    // Добавляем эффект наведения на карточки
    document.querySelectorAll('.quality-card, .gallery-item, .detail').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
