let nome = localStorage.getItem('nome')
let recebeNome = document.getElementById('recebeNome')
let btnSair = document.getElementById('btnSair')
recebeNome.innerHTML = nome

btnSair.addEventListener('click', () => {
    window.open('../index.html', '_self')
    window.close('../pags/pagInicial.html')
})
