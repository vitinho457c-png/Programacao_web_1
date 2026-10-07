let idade = Number (prompt ("Digite sua idade"))
let escolha = Number (prompt ("1 = Basico\n"+"2 =Pro \n"+"3 = Vip\n"))
 if (idade<18) {
    alert("Bloqueando o acesso")
 }else{
    switch(escolha){
        case 1:
            alert("voce pode acessar 3 vezes por dia")
            break
            case 2:
                alert("Voce podera assitir sem anuncio")
                break
                case 3:
                    alert("Voce tem acesso ilimitado sem anuncio")
                    break
    }
 }