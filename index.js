function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}
function classificacao(saldo){
    let rank;
    if (saldo < 10) {
        rank = "Ferro";
    } else if (saldo >= 10 && saldo < 20) {
        rank = "Bronze";
    } else if (saldo >= 20 && saldo < 50) {
        rank = "Prata";
    } else if (saldo >= 50 && saldo < 80) {
        rank = "Ouro";
    } else if (saldo >= 80 && saldo < 90) {
        rank = "Diamante";
    } else if (saldo >= 90 && saldo < 100) {
        rank = "Lendario";
    } else {
        rank = "Imortal";
    }

    return rank;
}

const vitorias = 10;
const derrotas = 4;
let saldo = saldoVitorias(vitorias, derrotas);
let rank = classificacao(saldo);

console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível " + rank);

