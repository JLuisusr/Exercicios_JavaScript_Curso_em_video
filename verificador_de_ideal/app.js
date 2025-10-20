var data = new Date().getFullYear()
 

function verificar(){
    
    let anoNascimento = document.getElementById('ano').value
    let idade = data - anoNascimento;
    let sexo = document.getElementsByName('genero');
    let txtResultado= document.getElementById('resultado');
        txtResultado.innerHTML = `Idade calculad: ${idade} ${sexo[0].value}`;
    if ( 0<= idade <=10){

        
    }
    

}