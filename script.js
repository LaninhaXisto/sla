// Textos de cada redação
const textos = {
    1: "Texto completo da Redação 1 aqui...",
    2: "Texto completo da Redação 2 aqui...",
    3: "Texto completo da Redação 3 aqui...",
};

// abrir modal
function abrirModal(num){
    document.getElementById("modalRedacao").style.display = "flex";
    document.getElementById("modal-titulo").innerText = "Redação " + num;
    document.getElementById("modal-texto").innerText = textos[num];
}

// fechar modal
function fecharModal(){
    document.getElementById("modalRedacao").style.display = "none";
}

// fechar clicando fora
window.onclick = function(e){
    const modal = document.getElementById("modalRedacao");
    if(e.target === modal){
        fecharModal();
    }
};