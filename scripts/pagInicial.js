let nome = localStorage.getItem('nome')
let recebeNome = document.getElementById('recebeNome')
let btnSair = document.getElementById('btnSair')
recebeNome.innerHTML = nome

btnSair.addEventListener('click', () => {
    window.close('../pags/pagInicial.html')
    window.open('../index.html', '_self')
})
