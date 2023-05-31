const onClickMenu = () => {
    document.getElementById("btn-menu").classList.toggle("change");
    document.getElementById("btn-cerrar-menu").classList.toggle("change");
    $('.menu').fadeToggle('1000');    
}

const onClickCerrar = () => {
    document.getElementById("btn-cerrar-menu").classList.toggle("change");
    document.getElementById("btn-menu").classList.toggle("change");
    $('.menu').fadeToggle('1000');
}