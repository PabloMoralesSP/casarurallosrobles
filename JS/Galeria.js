	

// CODIGO PARA LA GALERIA

$(document).ready(function() {
    // Al hacer clic en una imagen de la galería
    $('.lightbox-gallery img').on('click', function() {
        var src = $(this).attr('data-image-hd');
        var alt = $(this).attr('alt');
        $('#lightbox-img').attr('src', src);
        $('#lightbox-caption').text(alt);
        $('#lightbox').fadeIn();
    });

    // Al hacer clic en el botón de cerrar
    $('#lightbox-close').on('click', function() {
        $('#lightbox').fadeOut();
    });

    // Cerrar el lightbox al hacer clic fuera de la imagen
    $('#lightbox').on('click', function(e) {
        if (e.target !== this) return;
        $(this).fadeOut();
    });
});
