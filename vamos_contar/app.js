function contagem(inicio,fim,passo,textoContagem){
    for(var i = inicio; i <=fim; i = i + passo){
        
        textoContagem.innerHTML += `&#x1F449&#x1F3FC ${i} `
             

    }
    textoContagem.innerHTML += `&#x1F3C1`
}
 
function conta(){

    var texto = document.createElement('p');
        texto.id = 'textoConte';
    document.getElementById('resultado').appendChild(texto);
    var textoContagem = document.getElementById('textoConte')
    textoContagem.innerHTML = ''
    var inicio = parseInt(document.getElementById('inicio').value)
    var fim = parseInt(document.getElementById('fim').value)
    var passo = parseInt(document.getElementById('passo').value)
    contagem(inicio,fim,passo, textoContagem)





}    

