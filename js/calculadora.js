var conta = ""
var valor = ""
var limparResultado = false

//Maximo de caracteres: conta(21), valor(14)
//var pressionar = document.getElementById('calculadora');

debug()

function limpar(){
    if(conta.length > 0 || valor.length > 0){
        conta = ""
        valor = ""

        debug()
        imprimir()
    }
    else alert("Os campos já estão vazios!")
}

function apagar(){
    if(valor.length > 0){
        valor = valor.slice(0, valor.length-1)

        debug()
        imprimir()
    }
    else alert("O campo já esta vazio!")

}

function sinal(){
    valor = String(Number(valor) * (-1))
    

    debug()
    imprimir()
}

function operacao(operador){
    if(conta.length + valor.length + 1 < 21){
        conta += valor + operador
        valor = ""
    }else alert("A quantidade de 21 caracteres foi excedida!")

    debug()
    imprimir()
}

function numero(n){
    if(limparResultado){
        valor = ""
        limparResultado = false
    }

    if(valor.length < 14){
        valor += n 

        debug()
        imprimir()
    }
    else alert("A quantidade de 14 caracteres foi excedida!")
}

function ponto(){
    valor += "."

    debug()
    imprimir()
}

function resultado(){
    if(conta.length > 0){
        valor = String(eval(String(conta) + String(valor)))
        if(!Number.isInteger(Number(valor))){
            valor = Number(valor).toPrecision(4)
        }

        limparResultado = true
        conta = ""
    }else{
        alert("Operação incompleta, termine a equação")
    } 

    debug()
    imprimir()
}

function imprimir(){
    document.getElementById('conta').innerHTML = conta
    document.getElementById('valor').innerHTML = valor
}

function debug(){
    console.log(conta, conta.length, typeof(conta), valor, valor.length, typeof(valor))
}

//Função para capturar as teclas do teclado

document.onkeypress = function(evento) {
    evento = evento || window.event;
    var tecla = String(evento.keyCode || evento.which);

    console.log(tecla, typeof(tecla))

    switch (tecla){
        case '13': resultado(); break;
        case '32': resultado(); break;
        case '42': operacao('*'); break;
        case '43': operacao('+'); break;
        case '44': ponto(); break;
        case '45': operacao('-'); break;
        case '46': ponto(); break;
        case '47': operacao('/'); break;
        case '48': numero(0); break;
        case '49': numero(1); break;
        case '50': numero(2); break;
        case '51': numero(3); break;
        case '52': numero(4); break;
        case '53': numero(5); break;
        case '54': numero(6); break;
        case '55': numero(7); break;
        case '56': numero(8); break;
        case '57': numero(9); break;
        case '99': sinal(); break;
        case '120': apagar(); break;
        case '122': limpar(); break;
        default:
            alert("Tecla indisponível!, utilize somente as teclas:\n"
            +"0 1 2 3 4 5 6 7 8 9 / * - + . ,\n"
            +"Para as funções igual(ENTER ou ESPAÇO), limpar(Z), apagar(X), sinal(C)");
    }
};

