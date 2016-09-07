$(document).ready(function(){
    $.getJSON('/model/listar-os.php',function(dados){
     $('#tabela').empty();
     for (i in dados)
     {
         (dados[i]);
     }
    });
    
});
