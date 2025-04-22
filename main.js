
// Efecto al hacer clic en "CREAR TAREA"
document.querySelector('.create-btn').addEventListener('click', () => {
    const btn = document.querySelector('.create-btn');
    btn.textContent = 'Creando...';
    btn.style.background = 'linear-gradient(to right, #4776E6, #8E54E9)';
    
    setTimeout(() => {
        btn.textContent = 'TAREA CREADA!';
        btn.style.background = 'linear-gradient(to right, #00b09b, #96c93d)';
    }, 1000);
    
    setTimeout(() => {
        btn.textContent = 'CREAR TAREA';
        btn.style.background = 'linear-gradient(to right, var(--primary), var(--secondary))';
    }, 3000);
});

// Animación de las tarjetas de estadísticas
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(0, 255, 204, 0.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});
