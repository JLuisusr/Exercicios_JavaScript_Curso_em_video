
 
function conta(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    console.log(inicio)
    console.log(fim)
    console.log(passo)

function conta(inicio,fim,passo){
    for(var i = inicio; i <=10;i+1){
        console.log(i)
        console.log(fim)
        console.log(i+passo)
    }
}

conta(inicio,fim,passo)
}