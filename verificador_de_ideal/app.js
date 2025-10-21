var data = new Date().getFullYear()
 

function verificar(){
    
    let anoNascimento = document.getElementById('ano').value
    let idade = data - anoNascimento;
    let sexo = document.getElementsByName('genero');
    let txtResultado= document.getElementById('resultado');
    let img = document.createElement('img')
        


    if ( sexo[0].checked){
        if (idade <=10){
            //criança
        }
        else if (idade <=20){
            //jovem
        }
        else if (idade <=50){
            //adulto
        }
        else{
            //idoso
        }
        

        
    }
    else{
        if(idade <=10){
            //criança
            img.setAttribute('src','./mulher_idosa.jpg')              
        }
        else if (idade <=20){
            //jovem
        }
        else if (idade <=50){
            //adulto
        }
        else{
            //idoso
        }
        
    }
    
    txtResultado.innerHTML = `Idade calculad: ${idade} ${sexo[0].value}`;
    txtResultado.appendChild(img)


}