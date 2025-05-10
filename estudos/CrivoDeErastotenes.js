function descobrirNumerosPrimos (numeroFinal) {
    let array_numeros = [];

    for(let i = 0; i <= numeroFinal; i++){
        array_numeros.push(i);
    }

    // Limpar o 1;
    array_numeros[1] = 0

    let loop = 0;

    for(let i = 2; i < array_numeros.length; i++){
        let array_numeros_zeragem = true;

        while(array_numeros_zeragem) {
            
            if(array_numeros[i] == 0) {
                i++;
            } else {
                array_numeros_zeragem = false;
            }
        }

        if(array_numeros[i]**2 > array_numeros_zeragem[array_numeros_zeragem.length - 1]) { break }

        for(let j = array_numeros[i]**2; j <= array_numeros.length - 1; j += array_numeros[i]) {
            array_numeros[j] = 0;
        }
    }

    const array_numeros_primos = array_numeros.filter((array_numeros) => array_numeros != 0);
    return array_numeros_primos;
}