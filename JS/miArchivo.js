
//CODIGO JAVA SCRIPT PAGINA INICIO

function redirectToContact() {
  var email = document.getElementById('emailInput').value;
  var arrival = document.getElementById('arrivalInput').value;
  var departure = document.getElementById('departureInput').value;

  // Redirigir a la página de contacto con los parámetros en la URL
  window.location.href = 'contacto.html?email=' + encodeURIComponent(email) +
    '&arrival=' + encodeURIComponent(arrival) +
    '&departure=' + encodeURIComponent(departure);
}


// CODIGO JAVA SCRIPT PAGINA DE CONTACTO

window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  document.getElementById('email').value = urlParams.get('email');
  document.getElementById('arrival').value = urlParams.get('arrival');
  document.getElementById('departure').value = urlParams.get('departure');
};


// CODIGO JAVA SCRIPT QUE HACE APARECER UNA FLECHA CUADNO SE INCIA SCROLL DOWN


document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function() {
    var button = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  document.getElementById("scrollTopBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});



// CODIGO JAVA SCRIPT PARA TENER UN FONDO DE IMAGENES INTERCAMBIABLES EN UN ELEMENTO DIV

document.addEventListener('DOMContentLoaded', function () {
  const bgDiv = document.getElementById('dynamicBgDiv');
  const images = [
    'url("https://pablomoralessp.github.io/casarurallosrobles/ImagenesGaleria/20210905_124604.jpg")',
    'url("https://pablomoralessp.github.io/casarurallosrobles/ImagenesGaleria/20210905_131211.jpg")',
    'url("https://pablomoralessp.github.io/casarurallosrobles/ImagenesGaleria/20210904_124606.jpg")'

  ];
  let currentIndex = 0;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    const backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${images[currentIndex]}`;
    bgDiv.style.backgroundImage = backgroundImage;
  }

  // Initial background
  changeBackground();

  // Change background every 12 seconds
  setInterval(changeBackground, 5000);
});

// CODIGO PARA EL MENU REDUCIDO AL ENCOGER PANTALLA DEL NAVEGADOR

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const mobileNav = document.getElementById('mobileNav');

    menuButton.addEventListener('click', function() {
        mobileNav.classList.add('show');
    });

    closeButton.addEventListener('click', function() {
        mobileNav.classList.remove('show');
    });
});


// ENVIO DEL FORMULARIO DE CONTACTO POR MEDIO DEL SERVICIO Formspree


  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Gracias. Su formulario ha sido enviado!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Ha habido un problema enviando su formulario"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Ha habido un problema enviando su formulario""
    });
  }
  form.addEventListener("submit", handleSubmit)
