//Setta o jogo
let jogo = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//Começa com esse lance
let lance = 1;
let quantLance = 0;
let resultado = 0;

function jogada(id, child) {
  //Para o jogo se houver uma vitória ou empate
  if (resultado != 0) return

  const coordenada = String(id);
  const frase = document.getElementById("frase");

  let valor = testePosicao(coordenada);

  if (valor != 0) {
    quantLance++;
    verLance(child);
    testeResultado();
  }
}

function testePosicao(coordenada) {
  //Testa se já não foi jogado
  if (jogo[coordenada - 1] == 0) {
    jogo[coordenada - 1] = lance;
  } else {
    frase.textContent = "Faça uma jogada válida";
    return 0;
  }
}

function verLance(child) {
  if (lance % 2 == 1) {
    frase.textContent = "Vez do O";
    child[0].textContent = "X";

    //Passar a vez
    lance++;
  } else {
    frase.textContent = "Vez do X";
    child[0].textContent = "O";
    lance = 1;
  }
}

function testeResultado() {
  for (let i = 0; i < 3; i++) {
    if (jogo[i] == 1 && jogo[3 + i] == 1 && jogo[6 + i] == 1) {
        vitoria_X();
    } else if (jogo[i] == 2 && jogo[3 + i] == 2 && jogo[6 + i] == 2) {
        vitoria_O();
    }
    
    if (jogo[0 + (3 * i)] == 1 && jogo[1 + (3 * i)] == 1 && jogo[2 + (3 * i)] == 1) {
        vitoria_X();
        break;
    }
    if (jogo[0 + 3 * i] == 2 && jogo[1 + 3 * i] == 2 && jogo[2 + 3 * i] == 2) {
        vitoria_O();
        break;
    }
  }

    if (jogo[0] == 1 && jogo[4] == 1 && jogo[8] == 1) {
      vitoria_X();
    } else if (jogo[0] == 2 && jogo[4] == 2 && jogo[8] == 2) {
      vitoria_O();
    }


    if (jogo[2] == 1 && jogo[4] == 1 && jogo[6] == 1) {
        vitoria_X();
      } else if (jogo[2] == 2 && jogo[4] == 2 && jogo[6] == 2) {
        vitoria_O();
        console.log(jogo[2] + jogo[4] + jogo[6] + ' teste foda');
    }

  if(resultado == 0 && quantLance == 9){
    frase.textContent = "Empate";
    resultado == 2;
  }
}

function vitoria_X() {
  frase.textContent = "Vitória do X";
  resultado = 1;
  console.log(jogo);
}

function vitoria_O() {
  frase.textContent = "Vitória do O";
  resultado = 1;
  console.log(jogo);
}

/*
Ideia caso os id's fossem nomes
function testeClique(id){
    const possibilidades = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto", "setimo", "oitavo", "nono"];

    for(let i = 0; i < possibilidades.length; i++){
        if(possibilidades[i] == String(id)){
            return i;
        }
    }
}
*/
