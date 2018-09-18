// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  	todasAsImagens = [
	    'philae-parts.jpg',
	    'philae-rosetta.jpg',
	    'philae-separation.jpg',
	    'philae-67-picture.jpg',
	    'philae-collecting.jpg'
  	];

const prevButton = document.querySelector('#anterior.controle');
const nextButton = document.querySelector('#proximo.controle');
const imgElement = document.querySelector('#slide');

let currentImgIndex = 0;

let nextImage = function(){
  	currentImgIndex++;
  	if(currentImgIndex >= todasAsImagens.length){
    	currentImgIndex = 0
  	}
  	updateImage();  
}

let prevImage = function(){
  	currentImgIndex--;
  	if(currentImgIndex < 0){
    	currentImgIndex = todasAsImagens.length - 1;
  	}
  	updateImage();
}

let updateImage = function(){
  	imgElement.src = servidorDasImagens + todasAsImagens[currentImgIndex];
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);