// ============================================
// FUNÇÕES DE NAVEGAÇÃO E SCROLL
// ============================================

function scrollToPackages() {
    const packagesSection = document.getElementById('packages');
    packagesSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// FUNÇÕES DE WHATSAPP
// ============================================

function openWhatsApp(message) {
    const phoneNumber = '5517981319754';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function openWhatsAppPackage(packageName) {
    const message = `Olá, quero eternizar o meu momento. Posso contar com vocês? (Pacote: ${packageName})`;
    openWhatsApp(message);
}

// ============================================
// FUNÇÕES DE YOUTUBE
// ============================================

function openYouTube(url) {
    window.open(url, '_blank');
}

function openYouTubeChannel() {
    window.open('https://www.youtube.com/@criartsvideosproducoes755', '_blank');
}

// ============================================
// FUNÇÕES DE INSTAGRAM
// ============================================

function openInstagram() {
    window.open('https://instagram.com/criartsvideos', '_blank');
}

// ============================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links com href que começa com #
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ============================================
// ANIMAÇÃO DE ENTRADA PARA ELEMENTOS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.differential-card, .package-card, .gallery-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// ============================================
// EFEITOS DE HOVER PARA BOTÕES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ============================================
// NAVBAR STICKY (OPCIONAL)
// ============================================

window.addEventListener('scroll', function() {
    // Você pode adicionar lógica para navbar sticky aqui
    // Por exemplo, mudar a cor de fundo quando scroll > 100px
});

// ============================================
// PREVENÇÃO DE MÚLTIPLOS CLIQUES
// ============================================

function preventDoubleClick(callback, delay = 1000) {
    let lastClick = 0;
    return function() {
        const now = Date.now();
        if (now - lastClick >= delay) {
            lastClick = now;
            callback.apply(this, arguments);
        }
    };
}

// Aplicar prevenção de duplo clique aos botões de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .btn-contact');
    
    whatsappButtons.forEach(button => {
        const originalOnclick = button.onclick;
        button.onclick = preventDoubleClick(originalOnclick, 500);
    });
});

// ============================================
// LAZY LOADING DE IMAGENS (OPCIONAL)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ANALYTICS (OPCIONAL)
// ============================================

function trackEvent(eventName, eventData = {}) {
    // Você pode integrar com Google Analytics ou outro serviço aqui
    console.log(`Event: ${eventName}`, eventData);
}

// Rastrear cliques em botões importantes
document.addEventListener('DOMContentLoaded', function() {
    const trackableButtons = document.querySelectorAll('.btn-whatsapp, .btn-youtube, .btn-instagram');
    
    trackableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('button_click', { button: buttonText });
        });
    });
});

// ============================================
// VALIDAÇÃO DE FORMULÁRIOS (SE HOUVER)
// ============================================

function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// ============================================
// MOBILE MENU (SE HOUVER NAVBAR)
// ============================================

function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Fechar menu ao clicar em um link
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const menu = document.querySelector('.mobile-menu');
            if (menu) {
                menu.classList.remove('active');
            }
        });
    });
});

// ============================================
// COPY TO CLIPBOARD (PARA WHATSAPP NUMBER)
// ============================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar notificação de sucesso
        console.log('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Criarts Videos - Site carregado com sucesso!');
    
    // Aqui você pode adicionar mais inicializações
    // Por exemplo, carregar dados de uma API, etc.
});
