let resultadoDoProcesso = "lista";

switch (resultadoDoProcesso) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovad@!");
        break;
        
    case 'lista':
        console.log("Você está em nossa lista de espera!");
        break;

    case 'reprovada':
        console.log("Você foi reprovad@... =/");
        break;

    default:
        console.log("Informação incorreta,");
}