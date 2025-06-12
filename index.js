document.querySelectorAll('.icon').forEach((icon, index) => {
    icon.style.opacity = 0;
    icon.style.transform = 'scale(0.5)';
    setTimeout(() => {
        icon.style.transition = 'all 0.6s ease';
        icon.style.opacity = 1;
        icon.style.transform = 'scale(1)';
    }, 300 + index * 150);
});


document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('pulse');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('pulse');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
