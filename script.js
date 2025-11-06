// ===== FUNCIONALIDADES DE NAVEGACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave para enlaces internos
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 60; // Ajuste para navbar fija
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Actualizar URL sin recargar la página
                history.pushState(null, null, targetId);
            }
        });
    });

    // ===== FUNCIONALIDADES DEL FORMULARIO =====
    const contactForm = document.querySelector('.formulario-contacto');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Simular envío exitoso
                showFormMessage('¡Formulario enviado correctamente!', 'success');
                contactForm.reset();
            }
        });
    }

    // ===== VALIDACIÓN DE FORMULARIO =====
    function validateForm() {
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const terminos = document.getElementById('terminos');
        let isValid = true;

        // Limpiar mensajes de error previos
        clearErrorMessages();

        // Validar nombre
        if (!nombre.value.trim()) {
            showError(nombre, 'El nombre es obligatorio');
            isValid = false;
        }

        // Validar email
        if (!email.value.trim()) {
            showError(email, 'El email es obligatorio');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Ingrese un email válido');
            isValid = false;
        }

        // Validar términos y condiciones
        if (!terminos.checked) {
            showError(terminos, 'Debe aceptar los términos y condiciones');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        input.parentNode.appendChild(errorDiv);
        input.style.borderColor = '#e74c3c';
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        // Restaurar bordes normales
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.borderColor = '#bdc3c7';
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showFormMessage(message, type) {
        // Remover mensaje previo si existe
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.padding = '1rem';
        messageDiv.style.marginTop = '1rem';
        messageDiv.style.borderRadius = '4px';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontWeight = 'bold';
        
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        }

        contactForm.appendChild(messageDiv);
        
        // Auto-remover mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // ===== EFECTO SCROLL PARA NAVBAR =====
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ===== ANIMACIÓN AL SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar secciones para animaciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    console.log('Portfolio cargado correctamente');
});