let quantlike = 0

function addlike() {
    quantlike = quantlike + 1;
    if (quantlike == 1) {
        botao.innerHTML = quantlike + ' Like';
    }
    if (quantlike !== 1) {
        botao.innerHTML = quantlike + ' Likes'
    }
}

