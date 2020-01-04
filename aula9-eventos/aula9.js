
var bloco = document.getElementById('bloco');

bloco.addEventListener('click', clicar);
bloco.addEventListener('mouseenter', mover);
bloco.addEventListener('mouseleave', sair);

function clicar(){
    bloco.innerHTML = 'clicou!';
    bloco.style.background = 'orange';
}

function mover(){
    bloco.innerHTML = 'entrou no bloco!';
    bloco.style.background = 'black';
    bloco.style.color = 'white';
}

function sair(){
    bloco.innerHTML = 'saiu do bloco!';
    bloco.style.background = 'gray';
}
