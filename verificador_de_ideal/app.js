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
            img.setAttribute('src','./menino.jpg') 
        }
        else if (idade <=20){
            //jovem
            img.setAttribute('src','./homem_jovem.jpg') 
        }
        else if (idade <=50){
            //adulto
            img.setAttribute('src','./homem_adulto.jpg') 
        }
        else{
            //idoso
            img.setAttribute('src','./Homem_idoso.jpg') 
        }
        

        
    }
    else{
        if(idade <=10){
            //criança
            img.setAttribute('src','./menina.jpg')              
        }
        else if (idade <=20){
            //jovem
            img.setAttribute('src','./mulher_jovem.jpg') 
        }   
        else if (idade <=50){
            //adulto
            img.setAttribute('src','./mulher_adulta.jpg') 
        }
        else{
            //idoso
            img.setAttribute('src','./mulher_idosa.jpg') 
        }
        
    }
    
    txtResultado.innerHTML = `Detectamos ${sexo[0].value} de ${idade} anos`;
    txtResultado.appendChild(img)


}