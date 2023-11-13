window.addEventListener('load', function() {
    this.document.getElementById('btnCadastrar').addEventListener('click', cadastrarUsuario);

    function cadastrarUsuario() {   
        var user = document.getElementById('txtUser').value;
        var pwd = document.getElementById('txtPwd').value;
        var checkPwd = document.getElementById('txtCheckPwd').value;

        if(user == '' || pwd == '' || checkPwd == '') {
            alertWifi('Preencha todas as informações!', false, 0, "", 30, "");
        } else {    
            var novoUsuario = {nome: user, senha: pwd};
            var vetUsuarios = localStorage.getItem('vetUsuarios');
            if(!vetUsuarios) {
                var vet = [];

                vet.push(novoUsuario); 

                localStorage.setItem('vetUsuarios', JSON.stringify(vet));
            } else {
                vet =JSON.parse(vetUsuarios);
                vet.push(novoUsuario);
                localStorage.setItem('vetUsuarios', JSON.stringify(vet));
    }
    alertWifi('Usuário cadastrado com sucesso!', false, 0, "", 30, "");
}

}






});