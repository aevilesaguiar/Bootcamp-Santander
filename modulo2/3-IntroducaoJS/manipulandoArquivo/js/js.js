function escreverNome(){
    var nome= window.prompt("Digite seu nome!");
    alert(nome);

}

function mask_date(){

        var n_char=document.getElementById("txtData").value.length;
        if(n_char==2){
            document.getElementById("txtData").value = document.getElementById("txtData").value + "/";
        }else if(n_char==5){
            document.getElementById("txtData").value = document.getElementById("txtData").value + "/";
        }else{
            document.getElementById("txtData").value;
        }
}

function mask_cep(){

    var n_char=document.getElementById("txtCep").value.length;
    if(n_char==5){
        document.getElementById("txtCep").value = document.getElementById("txtCep").value + "-";
    }else{
        document.getElementById("txtCep").value;
    }
}

function mask_fone(){

    var n_char=document.getElementById("txtFone").value.length;
    if(n_char==2){
        document.getElementById("txtFone").value = "("+document.getElementById("txtFone").value + ") ";
    }else if(n_char==10) {
        document.getElementById("txtFone").value=document.getElementById("txtFone").value + "-";
    }else{
        document.getElementById("txtFone").value;
    }
}