function solucao(tamanhoBr) {
  switch(tamanhoBr){
      case 'PP':
        console.log('XS');
        break;
      case 'P':
        console.log('S');
        break;
      case 'M':
        console.log('M');
        break;
      case 'G':
        console.log('L');
        break;
      case 'GG':
        console.log('XL');
        break;
      default:
        console.log('INVALIDO');
        break;
  }
}