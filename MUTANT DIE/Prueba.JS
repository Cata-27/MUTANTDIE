document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa (si lo tienes)
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Mensaje de éxito en el formulario de contacto
    const form = document.querySelector('.form-contacto');
    const mensaje = document.getElementById('mensaje-exito');
    if (form && mensaje) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            mensaje.style.display = 'block';
            setTimeout(() => {
                mensaje.style.display = 'none';
            }, 4000);
        });
    }
});