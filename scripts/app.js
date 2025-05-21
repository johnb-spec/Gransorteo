document.addEventListener('DOMContentLoaded', function() {
    // Validación del formulario
    const formCompra = document.getElementById('form-compra');
    formCompra.addEventListener('submit', function(e) {
        const numero = document.getElementById('numero').value;
        if (numero.length < 3 || numero.length > 5) {
            alert('El número debe tener entre 3 y 5 cifras.');
            e.preventDefault();
        }
    });

    // Redirección a pasarelas (ya integrado en HTML)
});
