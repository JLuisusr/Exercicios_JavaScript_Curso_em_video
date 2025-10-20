var horario = new Date().getHours()

let horas = document.querySelector('span');
    horas.innerHTML = horario

const imagemHorario = document.getElementById('circular');



    if (horario < 6 || horario >= 18){
        imagemHorario.style.backgroundImage =  'url("./noite.jpg")';
        document.body.style.backgroundColor = 'gray'
    } 
    else if (horario<=12){
        imagemHorario.style.backgroundImage =  'url("./dia.jpg")';
        document.style.backgroundColor = 'rgb(0,0,0)'
    } 
    else {
        imagemHorario.style.backgroundImage =  'url("./tarde.jpg")';
        document.body.style.backgroundColor = 'rgba(42, 139, 42, 1)'
    } 
