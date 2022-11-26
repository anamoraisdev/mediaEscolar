// média através de um array de notas
// 0 - 59: F
// 60 - 69: D
// 70 - 79: C 
// 80 - 89: B
// 90 - 100: A

let notas = [30, 30, 80];
function mediaEscolar(nota){
    const media = calcularMedia(nota);
    if(media < 59 )return "F";
    if(media < 69 )return "D";
    if(media < 79 )return "C";
    if(media < 89 )return "B";
    return "A"
}

function calcularMedia(notas){
    let soma = 0;
    for (let valor of notas){
        soma += valor;
    }
    return soma /(notas.length);
}

console.log(mediaEscolar(notas))