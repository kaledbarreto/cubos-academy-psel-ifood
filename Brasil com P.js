function solucao(primeiraLetra, segundaLetra, palavras) {
  var i=0;
  var comb = primeiraLetra + segundaLetra;
  var max = palavras.length;
  var soma = 0;
  
  while(i<max){
      var start = palavras[i].startsWith(comb);
      if(start == true){
          console.log(palavras[i]);
      }else{
          soma++;
      }
      i++;
  }
  if(soma == palavras.length){
      console.log("NENHUMA");
  }
}