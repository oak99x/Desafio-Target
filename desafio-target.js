// Questão 1

let i = 13;
let soma = 0;
let k = 0;

while (k < i) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);

// Resultado: 91

//=======================================================================================================

// Questão 2

function fibonacciSequence(n) {
  // Inicializa a sequencia de fibonacci com os dois primeiros valores
  // **Dado a sequencia de fibonacci, onde se inicia por 0 e 1...
  const sequence = [0, 1];

  // Nota: A dúvida aqui foi 
  // "calcular a sequencia ate n OU calcular a sequencia ate que o ultimo numero seja maior ou igual a n"

  //Segue abaixo ambos os calculos

  // Calcula a sequencia ate n
//   for(let i=1; i < n; i++){
//     const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//     sequence.push(nextNumber);
//   }

  // Calcula a sequencia ate que o ultimo numero seja maior ou igual a n
  while (sequence[sequence.length - 1] < n) {
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }



  // console.log(sequence.join(', '))
  // Verifica se n pertence a sequencia e retorna uma mensagem
  if (sequence.includes(n)) {
    return `O numero ${n} pertence a sequencia de Fibonacci`;
  } else {
    return `O numero ${n} nao pertence a sequencia de Fibonacci`;
  }

}

// Minha preferência foi deixar uma entrada previamente definida no código
// O número deve ser maior que 1
const entrada = 5;
console.log(fibonacciSequence(entrada));

// Resultado com 5: O numero 5 pertence a sequencia de Fibonacci

//=======================================================================================================

// Questão 3

// a) 1, 3, 5, 7, 9, 11... (impares)

// b) 2, 4, 8, 16, 32, 64, 128, 256... (2^n, sendo n > 0)

// c) 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100... (quadrado perfeito ou número quadrado perfeito - números que têm uma raiz quadrada exata)

// d) 4, 16, 36, 64, 100, 144... (pares^2 -> 2^2, 4^2, 6^2, 8^2, 10^2...)

// e) 1, 1, 2, 3, 5, 8, 13, 21, 34... (sequência de Fibonacci)

// f) 2,10, 12, 16, 17, 18, 19, 200, 201... (sequência com 'padrão D' -> números que começam com a letra D)

//=======================================================================================================

// Questão 4
// Para responder a essa questao, podemos fazer fazer de dua formas ou pela simples lógica ou calcular o ponto exato em que o carro e o caminhao se cruzam na rodovia

// Resultado: Quando eles se cruzam o carro e o caminhão estão à mesma distância de Ribeirão Preto.

// **Usando uma lógica mais simples 
// O carro de Ribeirão Preto em direção a Franca
// Caminhão de Franca em direção a Ribeirão Preto

// Ribeirão Preto🚗__________________distancia 100km_____________________🚛Franca

// Como eles saem respectivamente em algum momento eles teram que se cruzar, ou seja,
// seja Ribeirão Preto ou Franca como referencia de distancia 
// no momento que se cruzarem ambos estarão no mesmo kilometro da rodovia

// Ribeirão Preto__________________distancia 100km_____🚗🚛________________Franca

// Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
// Ao se cruzar ambos estarão no mesmo kilometro da rodovia então:
// Quando eles se cruzam o carro e o caminhão estão à mesma distância de Ribeirão Preto.


// **Calculando o ponto exato em que o carro e o caminhao se cruzam na rodovia

// Ponto fica localizado a uma distância x de Ribeirão Preto e a uma distância 100km - x de Franca, onde x é a distância percorrida
// pelo carro até o cruzamento. Podemos calcular a distância percorrida pelo carro e pelo caminhão até o cruzamento utilizando a 
// fórmula da velocidade média: distância = velocidade * tempo

// Para determinar o local em que o carro e o caminhao se cruzam podemos colocar o ponto de referencia em Ribeirao Preto.

// Para o carro, a distância percorrida até o cruzamento é dada por:
// x1 = v1 . t 
// x1 = 110 km/h * t

// Para o caminhão, temos que ele sai de um local 100 km distante do ponto de referencia, a distância percorrida até o cruzamento é dada por:
// x2 = 100km - (v2 . t)

// Como o caminhao tem 2 pedágios e perde 5 minutos em cada um, podemos calcular o tempo de viagem sem os pedágios:
// Nota: tso(Tempo de viagem Sem os Obstaculos)
// tso = v . t 
// tso = 100km / 80km 
// tso = 1,25h

// Como perde 10 minutos (ou 0,17 horas) nos pedágios, o tempo de viagem para o caminhão será de 1,25h+0,17h=1,42h.
// Sua velocidade média é:
// v2 = 100km / 1,42h 
// v2 = 70,42km/h

// Nas equações horárias podemos limpar o tempo e igualar ambas para achar o ponto em que o carro e o caminhão se cruzam:
// t = x1 / v1
// t = (x2 - 100km) / -v2
// x1 = x2 => x / v1 = (x - 100km) / -v2
// -v2 . x = (v1 . x) -( v1 . 100km)
// x = (v1 . 100km)/ (v1 + v2)
// x = (110km/h . 100km) / (110km/h + 70,6km/h)
// x = 60,96km

// x é a distância da cidade de Ribeirão Preto em direção em que o carro e o caminhão se cruzam

// Resultado: O carro e o caminhão estão à mesma distância de Ribeirão Preto ao eles se cruzarem, eles se encontram a 60,9 km de Ribeirão Preto.

//=======================================================================================================

// Questão 5

function inverteString(string) {
    let novaString = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      novaString += string[i];
    }
  
    return novaString;
}

const string = 'Sera que inverte mesmo'
console.log(inverteString(string))

// Resultado com 'Sera que inverte mesmo': omsem etrevni euq areS