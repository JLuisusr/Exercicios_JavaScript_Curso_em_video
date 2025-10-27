
function tabuada(){
    let numero = parseInt(document.getElementById('number').value)
    if( isNaN(numero)){
        alert('Entrada invalida')
    }

    else{
        var tab = document.getElementById('tabuada')
        tab.innerHTML = ''
        tab.setAttribute('size','10')

        for(let i = 0; i < 10; i++){
            let elemento= document.createElement('option')
            elemento.text = `${numero} x ${i} = ${numero * i}`
            elemento.value = `tab${i}`
            tab.appendChild(elemento)
            

        }
    }


}