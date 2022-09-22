//if = se
// else = senão

const pessoaCandidata = 59;

if (pessoaCandidata >= 80) {
    console.log("Parabens, você foi aprovada!");
}
else if (pessoaCandidata >= 60 && pessoaCandidata < 80) {
    console.log("Você está em nossa lista de espera!")
}
else if (pessoaCandidata < 60) {
    console.log("Você foi reprovad@!")
}