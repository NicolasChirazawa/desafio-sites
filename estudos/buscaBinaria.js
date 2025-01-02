// Material para estudar sobre: (https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search#:~:text=Binary%20search%20is%20an%20efficient,game%20in%20the%20introductory%20tutorial.)

function binarySearch(array, valor){
    let min = 0;
    let max = array.length;

    while(min <= max){
        chute = Math.floor((min + max)/2);
        if(array[chute] == valor){
            return chute;
        } else if (array[chute] < valor){

            // Como o chute é sempre na metade, e ele é superior a metade mínima, ent ele não se encontra lá.
            min = chute + 1;

        } else {

            // Como o chute é sempre na metade, e ele é inferior a metade máxima, ent ele não se encontra lá.
            max = chute - 1;

        }
    }

    // Não encontrou valor
    return -1;
}

function main() {
    // A Binary Search tem a função de procurar um valor dentro de uma lista ordenada, sua complexidade é O(log(n)).
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const valor = 9;

    let resposta = binarySearch(array, valor);

    console.log(resposta)
}