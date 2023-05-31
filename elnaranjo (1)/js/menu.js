$(document).ready(function () {   

    var scrollTop = $(window).scrollTop();
    if ( scrollTop > 50 ) { 
     $('nav').addClass('menu-fijo');
     $('nav').addClass('sombreado-barra');
    }else{
     $('nav').removeClass('menu-fijo');
     $('nav').removeClass('sombreado-barra');
    }
 });
  
 $(window).scroll(function() {
   var scrollTop = $(window).scrollTop();
   if ( scrollTop > 50 ) { 
    $('nav').addClass('menu-fijo');
    $('nav').addClass('sombreado-barra');
   }else{
    $('nav').removeClass('menu-fijo');
    $('nav').removeClass('sombreado-barra');
   }
    });

    document.addEventListener("DOMContentLoaded", function() {
      // Seleccionar los elementos DIV
      const ollieDiv = document.querySelector('.ollie');
      const observa = document.querySelector('.lompa');
    
      // Crear un objeto IntersectionObserver para observar los elementos DIV
      const observer = new IntersectionObserver(entries => {
        // Iterar sobre todas las entradas (observaciones)
        entries.forEach(entry => {
          // Si alguno de los elementos DIV es visible en la ventana
          if (entry.isIntersecting) {
            // Cambiar la clase de los elementos DIV a "revert" para animar con Animate.css
            ollieDiv.classList.add('revert');
            observa.classList.add('animacion');
           
          } else {
            // Si ninguno de los elementos DIV es visible en la ventana
            // Eliminar la clase "revert" y las clases de animación de los elementos DIV
            ollieDiv.classList.remove('revert');
            observa.classList.remove('animacion');
          }
        });
      });
    
      // Observar los elementos DIV con el mismo observador
      observer.observe(ollieDiv);
      observer.observe(observa);
    });

document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const buttons = document.querySelectorAll('.button');
  const text = document.querySelector('.text');

  // Agregar un listener de evento para cada botón
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Cambiar el índice y el color del botón
      currentIndex = index;
      buttons.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');

      // Cambiar el texto
      switch (currentIndex) {
        case 0:
          text.textContent = 'El Naranjo es un ejemplo de desarrollo sostenible y cohesión socio-territorial. La actividad urbana-inmobiliaria responsable, junto con el fortalecimiento de los lazos comunitarios y la promoción de la inclusión social, fomenta la convivencia pacífica entre vecinos y vecinas.';
          break;
        case 1:
          text.textContent = 'El Naranjo se está impulsando al desarrollo sostenible mediante la protección del medio ambiente. La reorganización y resguardo de los bordes de los canales Ibarlucea - Urquiza, busca preservar los espacios verdes y proteger las áreas residenciales.';
          break;
        case 2:
          text.textContent = 'El Naranjo y la actividad urbana-inmobiliaria es un motor de desarrollo económico sostenible. La integración de la cadena de valor completa, desde la producción hasta la gestión de los escenarios de la vida, promueve la creación de empleos, la generación de riqueza y el progreso económico del barrio';
          break;
      }
    });
  });
});

