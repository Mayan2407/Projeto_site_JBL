document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    if (!searchInput) {
        console.error("ERRO: O Script não encontrou a barra de pesquisa (id='search-input')");
        return;
    }

    if (cards.length === 0) {
        console.error("ERRO: O Script não encontrou nenhum produto (class='card')");
        return;
    }

    console.log("Sistema de pesquisa iniciado com sucesso!");

    searchInput.addEventListener('input', function(event) {
        const termo = event.target.value.toLowerCase();

        cards.forEach(card => {
            const nomeProduto = card.getAttribute('data-name');
            
            if (nomeProduto) {
                if (nomeProduto.toLowerCase().includes(termo)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});