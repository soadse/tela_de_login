let nome = document.getElementById('nome')
let eMail = document.getElementById('eMail')
let senha = document.getElementById('senha')
let confSenha = document.getElementById('confSenha')
let gerarSenha = document.getElementById('gerarSenha')
let senhaGerada = document.getElementById('senhaGerada')
let btnCadastrar = document.getElementById('btnCadastrar')
let popover = document.getElementById('popover')
let msgPopover = document.getElementById('msgPopover')
let fecharPopover = document.getElementById('fecharPopover')
let mostrarSenha = document.getElementById('mostrarSenha')
let mostrarSenhaConf = document.getElementById('mostrarSenhaConf')
let click = 0;

mostrarSenha.addEventListener('click', () => {
    click++
    if(click === 1) {
        senha.type = 'text'
        mostrarSenha.src = '../img/open.png'
    } else if(click === 2) {
        senha.type = 'password'
        mostrarSenha.src = '../img/closed.png'
        click = 0
    }
})
mostrarSenhaConf.addEventListener('click', () => {
    click++
    if(click === 1) {
        confSenha.type = 'text'
        mostrarSenhaConf.src = '../img/open.png'
    } else if(click === 2) {
        confSenha.type = 'password'
        mostrarSenhaConf.src = '../img/closed.png'
        click = 0
    }
})

popover.addEventListener('click', () => {
    popover.style.display = 'none'
})

btnCadastrar.addEventListener('click', () => {
    if (nome.value === '' || eMail.value === '' || senha.value === '') {
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'Campos vazios!'
    } else if(nome.value.length < 2){
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'Nome não pode ser menor que 2 caracteres!'
        nome.value = ''
    } else if(/\d/.test(nome.value)) {
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'Nome não pode conter números!'
        nome.value = ''
    } else if(senha.value.length < 6){
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'A senha tem que ter no mínimo 6 caracteres.'
    }
    else if (senha.value !== confSenha.value) {
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'As senhas não são iguais.'
    } else {
        localStorage.setItem('nome', nome.value);
        localStorage.setItem('eMail', eMail.value);
        localStorage.setItem('senha', senha.value);
        window.open('../index.html', '_self');
    }
});

gerarSenha.addEventListener('click', () => {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alfabetoMaiusculo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alfabetoMinusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const caracteresEspeciais = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'
    ];
    let senha = []
    
    while(senha.length < 10){
        let randomNumero = Math.floor(Math.random() * numeros.length);
        let randomAlfabetoMaior = Math.floor(Math.random() * alfabetoMaiusculo.length);
        let randomAlfabetoMenor = Math.floor(Math.random() * alfabetoMaiusculo.length);
        let randomCaractere = Math.floor(Math.random() * caracteresEspeciais.length);

        senha.push(numeros[randomNumero])
        senha.push(alfabetoMaiusculo[randomAlfabetoMaior])
        senha.push(alfabetoMinusculo[randomAlfabetoMenor])
        senha.push(caracteresEspeciais[randomCaractere])
    }

    senha = senha.slice(0, 10)
    senhaGerada.innerHTML = senha.join('')
})
