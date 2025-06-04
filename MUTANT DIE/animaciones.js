document.addEventListener('DOMContentLoaded', function() {
    // ...tu código de animaciones...

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