const enviar = document.getElementById('enviar');
const enviando = document.getElementById('enviando');
const enviar2 = document.getElementById('enviar2');
const enviando2 = document.getElementById('enviando2');

$('#form').on('submit', function(event) {
    event.preventDefault(); // prevent reload

    enviar.style.display = 'none';
    enviando.style.display = 'block';
    const respuesta = document.getElementById('resp');
    var formData = new FormData(this);
    formData.append('service_id', 'smtp');
    formData.append('template_id', 'ElNaranjo');
    formData.append('user_id', 'user_O7XUDbnHgJolQ3oJpfKt0');

    document.getElementById("form").reset();
    

 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {

        enviando.style.display = 'none';

        respuesta.innerHTML = '¡Consulta enviada! Pronto nos pondremos en contacto.';

        enviar.style.display = 'block';

    }).fail(function(error) {

        enviando.style.display = 'none';

        respuesta.innerHTML = 'Ocurrió un error, por favor intente nuevamente';


        enviar.style.display = 'block';

    });
});

$('#form-modal').on('submit', function(event) {
    event.preventDefault(); // prevent reload

    enviar2.style.display = 'none';
    enviando2.style.display = 'block';
    const respuesta2 = document.getElementById('resp2');
    var formData = new FormData(this);
    formData.append('service_id', 'smtp');
    formData.append('template_id', 'ElNaranjo');
    formData.append('user_id', 'user_O7XUDbnHgJolQ3oJpfKt0');

    document.getElementById("form-modal").reset();
    

 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {

        enviando2.style.display = 'none';

        respuesta2.innerHTML = '¡Consulta enviada! Pronto nos pondremos en contacto.';

        enviar2.style.display = 'block';

    }).fail(function(error) {

        enviando2.style.display = 'none';

        respuesta2.innerHTML = 'Ocurrió un error, por favor intente nuevamente';


        enviar2.style.display = 'block';

    });
});