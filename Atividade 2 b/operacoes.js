function calcular(oper){
    var valor1 = document.operacoes.valor1.value;
    var valor2 = document.operacoes.valor2.value;
    var valor3 = document.operacoes.valor3.value;

  if (oper == "somar")
   {
      var res = parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3);
    }
       if (oper == "media")
       {
            var res = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3))/3;
        }
            if (oper == "multiplicar")
            {
                 var res = parseFloat(valor1) * parseFloat(valor2) * parseFloat(valor3);
            }
                if (oper == "maior") 
                {   
                    var maior = parseFloat(valor1);
                    if (valor2 > maior) 
                        maior= parseFloat(valor2);
                    if (valor3 > maior) 
                        maior = parseFloat(valor3);
                                      
                    var res = maior;      
                            
                } 
                  if (oper == "menor")    
                  {              
                     var menor = parseFloat(valor1);
                     if(valor2 < menor)
                        menor = parseFloat(valor2);
                     if(valor3 < menor)
                        menor = parseFloat(valor3);
      
                     var res = menor;
                    }
                    

                    
                
        

  document.operacoes.res.value = res;
}