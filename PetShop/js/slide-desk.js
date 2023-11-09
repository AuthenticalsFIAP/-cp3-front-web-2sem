/*criando o slideShow */


// declarando o objeto de imagens em um array
let imagens = [
    'img/banner/1.png',
    'img/banner/2.png',
    'img/banner/3.png',
  ];
  
  // declarando links correspondentes
  let links = [
    'https://www.example.com/link1',
    'https://www.example.com/link1',
    'https://www.example.com/link1',
  ];
  
  // declarando a posição de início
  let index = 0;
  //declarando o tempo que as imagens vão passar em milesegundos
  let time = 4000;
  
  //criando a função chamanda slideshow
  
  
  function slideShow1() {
    // obtendo o elemento de imagem no HTML
    document.getElementById('img-banner').src = imagens[index];
    
    // obtendo o elemento de link no HTML
    document.getElementById('img-link').href = links[index];
  
    // incremento das imagens e sua posição
    index++;
  
    if (index === imagens.length) {
        index = 0;
    }
  
  //setTimeout é uma função que executa o tempo, nesse caso vai chamar função e aplicar o time
    setTimeout(slideShow1, time);
  }
  
  // execute a função de início
  slideShow1();