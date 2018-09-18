// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

const plusButtons = document.querySelectorAll(".botao-expandir-retrair");

plusButtons.forEach(function(plusButton){
	plusButton.addEventListener('click', function(e){
    	const parentParagraph = this.parentNode;
    	if(parentParagraph.classList.length == 1){
      		parentParagraph.classList.remove('expandido');
      		this.innerHTML = '+';
    	}else{
      		parentParagraph.classList.add('expandido');
      		this.innerHTML = '-';
    	}
  	});
});
