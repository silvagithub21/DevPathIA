// ========================================
// DevPath — Logic Engine Challenges (30+)
// ========================================

export const logicChallenges = [
  // ── VARIÁVEIS (1-6) ──
  {
    id: 'L01',
    track: 'logic',
    concept: 'Variáveis',
    difficulty: 1,
    question: 'Você quer guardar o nome de um jogador. Qual comando em pseudocódigo melhor representa isso?',
    type: 'multiple-choice',
    options: [
      'mostrar "Jogador"',
      'definir nome = "Jogador"',
      'se nome == "Jogador"',
      'enquanto nome'
    ],
    answer: 'definir nome = "Jogador"',
    explanation: 'Definir (ou declarar) é o ato de criar uma variável para armazenar uma informação. Pense numa variável como uma caixa com etiqueta.'
  },
  {
    id: 'L02',
    track: 'logic',
    concept: 'Variáveis',
    difficulty: 1,
    question: 'Qual é o tipo de dado que armazena apenas verdadeiro ou falso?',
    type: 'multiple-choice',
    options: [
      'inteiro',
      'texto (string)',
      'booleano',
      'decimal (float)'
    ],
    answer: 'booleano',
    explanation: 'O tipo booleano armazena apenas dois valores: verdadeiro (true) ou falso (false). É a base de toda lógica computacional.'
  },
  {
    id: 'L03',
    track: 'logic',
    concept: 'Variáveis',
    difficulty: 1,
    question: 'Após executar:\n\nx = 10\nx = x + 5\n\nQual é o valor de x?',
    type: 'multiple-choice',
    options: ['10', '5', '15', 'Erro'],
    answer: '15',
    explanation: 'A variável x começa com 10. Depois, x = x + 5 pega o valor atual (10), soma 5, e armazena o resultado (15) de volta em x.'
  },
  {
    id: 'L04',
    track: 'logic',
    concept: 'Variáveis',
    difficulty: 1,
    question: 'Qual a diferença entre "10" (com aspas) e 10 (sem aspas)?',
    type: 'multiple-choice',
    options: [
      'Nenhuma diferença',
      '"10" é texto, 10 é número',
      '"10" é maior que 10',
      '10 é texto, "10" é número'
    ],
    answer: '"10" é texto, 10 é número',
    explanation: 'Aspas transformam qualquer coisa em texto (string). "10" é tratado como caracteres, não como valor numérico. Você não consegue somar "10" + "5" e obter 15.'
  },
  {
    id: 'L05',
    track: 'logic',
    concept: 'Variáveis',
    difficulty: 2,
    question: 'Para trocar o valor de duas variáveis (a=1, b=2), por que precisamos de uma terceira variável temporária?',
    type: 'multiple-choice',
    options: [
      'Porque o computador exige 3 variáveis',
      'Sem ela, um dos valores seria perdido ao substituir',
      'Não precisamos, basta fazer a = b',
      'A terceira variável é opcional'
    ],
    answer: 'Sem ela, um dos valores seria perdido ao substituir',
    explanation: 'Se fizermos a = b direto, o valor original de "a" é sobrescrito e perdido. temp = a → a = b → b = temp resolve isso.'
  },
  {
    id: 'L06',
    track: 'logic',
    concept: 'Variáveis',
    difficulty: 2,
    question: 'O que acontece se você tentar usar uma variável que nunca foi declarada?',
    type: 'multiple-choice',
    options: [
      'Ela recebe o valor 0 automaticamente',
      'O programa gera um erro',
      'Ela recebe o valor "vazio"',
      'Nada acontece'
    ],
    answer: 'O programa gera um erro',
    explanation: 'Na maioria das linguagens, usar uma variável não declarada causa um erro de referência. É como tentar abrir uma caixa que não existe.'
  },

  // ── CONDICIONAIS (7-12) ──
  {
    id: 'L07',
    track: 'logic',
    concept: 'Condicionais',
    difficulty: 1,
    question: 'Se a vida do boss for 0, o que deve acontecer? Qual condição está correta?',
    type: 'multiple-choice',
    options: [
      'se vida > 0 mostrar "Ganhou"',
      'se vida == 0 mostrar "Ganhou"',
      'enquanto vida == 0 mostrar "Ganhou"',
      'repetir 10 vezes "Ganhou"'
    ],
    answer: 'se vida == 0 mostrar "Ganhou"',
    explanation: 'Usamos condicionais (SE/IF) para verificar estados e tomar decisões. O operador == compara se dois valores são iguais.'
  },
  {
    id: 'L08',
    track: 'logic',
    concept: 'Condicionais',
    difficulty: 1,
    question: 'O que o código abaixo imprime?\n\nnumero = 15\nse numero > 10\n   mostrar "Alto"\nsenão\n   mostrar "Baixo"',
    type: 'multiple-choice',
    options: ['"Baixo"', '"Alto"', 'Erro', 'Nada'],
    answer: '"Alto"',
    explanation: '15 é maior que 10, então a condição é verdadeira e o bloco do SE é executado, mostrando "Alto".'
  },
  {
    id: 'L09',
    track: 'logic',
    concept: 'Condicionais',
    difficulty: 2,
    question: 'Qual operador lógico retorna verdadeiro apenas se AMBAS as condições forem verdadeiras?',
    type: 'multiple-choice',
    options: ['OU (OR)', 'E (AND)', 'NÃO (NOT)', 'XOU (XOR)'],
    answer: 'E (AND)',
    explanation: 'O operador E (AND) exige que todas as condições sejam verdadeiras. Exemplo: idade >= 18 E temCarteira == true.'
  },
  {
    id: 'L10',
    track: 'logic',
    concept: 'Condicionais',
    difficulty: 2,
    question: 'Qual a saída?\n\nnota = 7\nse nota >= 9\n   mostrar "A"\nsenão se nota >= 7\n   mostrar "B"\nsenão\n   mostrar "C"',
    type: 'multiple-choice',
    options: ['"A"', '"B"', '"C"', '"A" e "B"'],
    answer: '"B"',
    explanation: 'O programa verifica de cima para baixo. nota (7) não é >= 9, então pula. Mas 7 >= 7 é verdade, então mostra "B" e para.'
  },
  {
    id: 'L11',
    track: 'logic',
    concept: 'Condicionais',
    difficulty: 2,
    question: 'Qual a diferença entre = e == na programação?',
    type: 'multiple-choice',
    options: [
      'Nenhuma, são iguais',
      '= atribui valor, == compara valores',
      '== atribui valor, = compara valores',
      '= é para texto, == é para números'
    ],
    answer: '= atribui valor, == compara valores',
    explanation: 'O = (um igual) ATRIBUI: x = 5 coloca 5 em x. O == (dois iguais) COMPARA: x == 5 pergunta "x é igual a 5?".'
  },
  {
    id: 'L12',
    track: 'logic',
    concept: 'Condicionais',
    difficulty: 3,
    question: 'O que esse código imprime?\n\nx = 5\nse x > 3 E x < 10\n   se x == 5\n      mostrar "Bingo"\n   senão\n      mostrar "Quase"',
    type: 'multiple-choice',
    options: ['"Quase"', '"Bingo"', 'Nada', 'Erro'],
    answer: '"Bingo"',
    explanation: 'Primeiro verifica x > 3 E x < 10 (5 passa). Depois verifica x == 5 (verdade). Logo, imprime "Bingo". Condicionais aninhadas são avaliadas de fora para dentro.'
  },

  // ── LOOPS (13-18) ──
  {
    id: 'L13',
    track: 'logic',
    concept: 'Loops',
    difficulty: 1,
    question: 'Qual estrutura você usaria para repetir uma ação exatamente 5 vezes?',
    type: 'multiple-choice',
    options: [
      'se passos == 5',
      'definir passos = 5',
      'para i de 1 até 5: executar()',
      'mostrar "5 vezes"'
    ],
    answer: 'para i de 1 até 5: executar()',
    explanation: 'Loops (PARA/FOR) repetem ações automaticamente. "para i de 1 até 5" executa o bloco 5 vezes, com i assumindo valores 1, 2, 3, 4, 5.'
  },
  {
    id: 'L14',
    track: 'logic',
    concept: 'Loops',
    difficulty: 2,
    question: 'Quantas vezes o loop abaixo executa?\n\ni = 0\nenquanto i < 3\n   mostrar i\n   i = i + 1',
    type: 'multiple-choice',
    options: ['2 vezes', '3 vezes', '4 vezes', 'Loop infinito'],
    answer: '3 vezes',
    explanation: 'i começa em 0. Executa para i=0, i=1, i=2. Quando i chega a 3, a condição i < 3 é falsa e o loop para. Total: 3 iterações.'
  },
  {
    id: 'L15',
    track: 'logic',
    concept: 'Loops',
    difficulty: 2,
    question: 'O que causa um loop infinito?',
    type: 'multiple-choice',
    options: [
      'A condição sempre é falsa',
      'A condição nunca se torna falsa',
      'O loop executa muito rápido',
      'O loop não tem variável'
    ],
    answer: 'A condição nunca se torna falsa',
    explanation: 'Se a condição de parada nunca for falsa, o loop nunca para. Exemplo: "enquanto true" sem um "break" é um loop infinito clássico.'
  },
  {
    id: 'L16',
    track: 'logic',
    concept: 'Loops',
    difficulty: 2,
    question: 'Qual é a soma total após esse loop?\n\nsoma = 0\npara i de 1 até 4\n   soma = soma + i\nmostrar soma',
    type: 'multiple-choice',
    options: ['4', '6', '10', '15'],
    answer: '10',
    explanation: 'soma = 0+1 = 1, depois 1+2 = 3, depois 3+3 = 6, depois 6+4 = 10. O loop soma todos os números de 1 até 4.'
  },
  {
    id: 'L17',
    track: 'logic',
    concept: 'Loops',
    difficulty: 3,
    question: 'Qual a diferença fundamental entre "para" (for) e "enquanto" (while)?',
    type: 'multiple-choice',
    options: [
      '"Para" é mais rápido que "enquanto"',
      '"Para" é usado quando sabemos quantas vezes repetir, "enquanto" quando não sabemos',
      '"Enquanto" só funciona com números',
      'Não há diferença, são iguais'
    ],
    answer: '"Para" é usado quando sabemos quantas vezes repetir, "enquanto" quando não sabemos',
    explanation: 'Use "para" (for) quando sabe o número de repetições (ex: 10 vezes). Use "enquanto" (while) quando depende de uma condição dinâmica (ex: até o usuário digitar "sair").'
  },
  {
    id: 'L18',
    track: 'logic',
    concept: 'Loops',
    difficulty: 3,
    question: 'O que esse loop imprime?\n\npara i de 1 até 5\n   se i == 3\n      pular (continue)\n   mostrar i',
    type: 'multiple-choice',
    options: ['1 2 3 4 5', '1 2 4 5', '3', '1 2'],
    answer: '1 2 4 5',
    explanation: 'O "continue" (pular) faz o loop ir direto para a próxima iteração quando i == 3, sem executar o "mostrar". Então, 3 é pulado.'
  },

  // ── FUNÇÕES (19-24) ──
  {
    id: 'L19',
    track: 'logic',
    concept: 'Funções',
    difficulty: 1,
    question: 'O que é uma função em programação?',
    type: 'multiple-choice',
    options: [
      'Um tipo de variável numérica',
      'Um bloco de código reutilizável com nome',
      'Uma condição especial',
      'Um tipo de loop'
    ],
    answer: 'Um bloco de código reutilizável com nome',
    explanation: 'Funções são blocos de código que você define uma vez e pode chamar quantas vezes quiser. Elas organizam e reutilizam lógica.'
  },
  {
    id: 'L20',
    track: 'logic',
    concept: 'Funções',
    difficulty: 2,
    question: 'O que significa "retornar" um valor em uma função?',
    type: 'multiple-choice',
    options: [
      'Apagar o valor da memória',
      'Enviar o resultado de volta para quem chamou a função',
      'Mostrar o valor na tela',
      'Repetir a função'
    ],
    answer: 'Enviar o resultado de volta para quem chamou a função',
    explanation: '"Retornar" (return) devolve um valor como resultado. Exemplo: somar(2, 3) retorna 5, e quem chamou pode usar esse 5.'
  },
  {
    id: 'L21',
    track: 'logic',
    concept: 'Funções',
    difficulty: 2,
    question: 'Qual é a saída?\n\nfunção dobro(n)\n   retornar n * 2\n\nresultado = dobro(7)\nmostrar resultado',
    type: 'multiple-choice',
    options: ['7', '14', '2', 'Erro'],
    answer: '14',
    explanation: 'A função dobro recebe 7 como parâmetro (n = 7), calcula 7 * 2 = 14 e retorna esse valor. O resultado é 14.'
  },
  {
    id: 'L22',
    track: 'logic',
    concept: 'Funções',
    difficulty: 2,
    question: 'O que são "parâmetros" de uma função?',
    type: 'multiple-choice',
    options: [
      'Os resultados que a função produz',
      'Os valores que a função recebe para trabalhar',
      'O nome da função',
      'O tipo de dado que a função retorna'
    ],
    answer: 'Os valores que a função recebe para trabalhar',
    explanation: 'Parâmetros são as "entradas" da função. Em somar(a, b), "a" e "b" são parâmetros — valores que a função precisa para executar sua tarefa.'
  },
  {
    id: 'L23',
    track: 'logic',
    concept: 'Funções',
    difficulty: 3,
    question: 'Qual o valor de x após:\n\nfunção misterio(a, b)\n   se a > b\n      retornar a\n   senão\n      retornar b\n\nx = misterio(8, 12)',
    type: 'multiple-choice',
    options: ['8', '12', '20', '4'],
    answer: '12',
    explanation: 'A função compara 8 e 12. Como 8 > 12 é falso, vai para o senão e retorna 12. Essa função basicamente retorna o maior dos dois números.'
  },
  {
    id: 'L24',
    track: 'logic',
    concept: 'Funções',
    difficulty: 3,
    question: 'O que é recursão?',
    type: 'multiple-choice',
    options: [
      'Quando uma função chama outra função',
      'Quando uma função chama a si mesma',
      'Quando um loop executa dentro de outro loop',
      'Quando uma variável muda de tipo'
    ],
    answer: 'Quando uma função chama a si mesma',
    explanation: 'Recursão é quando uma função se chama novamente para resolver versões menores do mesmo problema. Exemplo clássico: fatorial(n) = n * fatorial(n-1).'
  },

  // ── ARRAYS (25-30) ──
  {
    id: 'L25',
    track: 'logic',
    concept: 'Arrays',
    difficulty: 1,
    question: 'O que é um array (vetor)?',
    type: 'multiple-choice',
    options: [
      'Uma variável que só guarda números',
      'Uma lista ordenada que guarda múltiplos valores',
      'Um tipo de loop',
      'Uma função especial'
    ],
    answer: 'Uma lista ordenada que guarda múltiplos valores',
    explanation: 'Um array é como uma fileira de caixas numeradas. Cada caixa tem uma posição (índice) e pode guardar um valor diferente.'
  },
  {
    id: 'L26',
    track: 'logic',
    concept: 'Arrays',
    difficulty: 2,
    question: 'Dado: frutas = ["maçã", "banana", "uva"]\nQual é frutas[1]?',
    type: 'multiple-choice',
    options: ['"maçã"', '"banana"', '"uva"', 'Erro'],
    answer: '"banana"',
    explanation: 'Arrays começam no índice 0. Então: frutas[0] = "maçã", frutas[1] = "banana", frutas[2] = "uva".'
  },
  {
    id: 'L27',
    track: 'logic',
    concept: 'Arrays',
    difficulty: 2,
    question: 'Qual operação adiciona um elemento ao FINAL de um array?',
    type: 'multiple-choice',
    options: ['inserir', 'push / adicionar', 'pop / remover', 'ordenar'],
    answer: 'push / adicionar',
    explanation: 'Push (ou adicionar) coloca um novo elemento no final do array. Pop faz o contrário: remove o último elemento.'
  },
  {
    id: 'L28',
    track: 'logic',
    concept: 'Arrays',
    difficulty: 2,
    question: 'Como percorrer todos os elementos de um array?',
    type: 'multiple-choice',
    options: [
      'Usando um condicional (se)',
      'Usando um loop (para cada)',
      'Usando uma variável booleana',
      'Não é possível'
    ],
    answer: 'Usando um loop (para cada)',
    explanation: 'O loop "para cada" (forEach / for...of) visita cada elemento do array, um por um. É a forma padrão de iterar coleções.'
  },
  {
    id: 'L29',
    track: 'logic',
    concept: 'Arrays',
    difficulty: 3,
    question: 'Dado: nums = [3, 1, 4, 1, 5]\nApós ordenar em ordem crescente, qual é nums[2]?',
    type: 'multiple-choice',
    options: ['1', '3', '4', '5'],
    answer: '3',
    explanation: 'Ordenado: [1, 1, 3, 4, 5]. O índice 2 (terceira posição) contém o valor 3.'
  },
  {
    id: 'L30',
    track: 'logic',
    concept: 'Arrays',
    difficulty: 3,
    question: 'Qual o resultado?\n\nnums = [10, 20, 30]\nmaior = nums[0]\npara cada n em nums\n   se n > maior\n      maior = n\nmostrar maior',
    type: 'multiple-choice',
    options: ['10', '20', '30', '60'],
    answer: '30',
    explanation: 'Esse é o algoritmo clássico de "encontrar o maior valor". Começa com 10, compara com 20 (maior), depois com 30 (maior ainda). Resultado: 30.'
  },

  // ── DEBUG (31-33) ──
  {
    id: 'L31',
    track: 'logic',
    concept: 'Debug',
    difficulty: 2,
    question: 'O código deveria somar 1 a 5, mas tem um bug:\n\nsoma = 0\npara i de 1 até 5\n   soma = i\nmostrar soma',
    type: 'multiple-choice',
    options: [
      'O loop está errado',
      'Deveria ser soma = soma + i',
      'soma deveria começar em 1',
      'Falta ponto e vírgula'
    ],
    answer: 'Deveria ser soma = soma + i',
    explanation: '"soma = i" substitui o valor a cada iteração (soma vira 5 no final). O correto é acumular: "soma = soma + i" → resultado 15.'
  },
  {
    id: 'L32',
    track: 'logic',
    concept: 'Debug',
    difficulty: 3,
    question: 'O código deveria imprimir 1, 2, 3 mas imprime 1 e trava:\n\ni = 1\nenquanto i <= 3\n   mostrar i\n\nQual é o bug?',
    type: 'multiple-choice',
    options: [
      'A condição está errada',
      'Falta incrementar i (i = i + 1)',
      'O mostrar está errado',
      'Deveria usar "para" ao invés de "enquanto"'
    ],
    answer: 'Falta incrementar i (i = i + 1)',
    explanation: 'Sem "i = i + 1", o valor de i nunca muda. A condição i <= 3 será sempre verdadeira (i é sempre 1), causando loop infinito.'
  },
  {
    id: 'L33',
    track: 'logic',
    concept: 'Debug',
    difficulty: 3,
    question: 'A função deveria verificar se um número é par, mas retorna errado:\n\nfunção ePar(n)\n   se n / 2 == 0\n      retornar verdadeiro\n   retornar falso\n\nQual o erro?',
    type: 'multiple-choice',
    options: [
      'Deveria usar n % 2 (resto da divisão)',
      'Deveria usar n * 2',
      'A função precisa de dois parâmetros',
      'O retornar está na posição errada'
    ],
    answer: 'Deveria usar n % 2 (resto da divisão)',
    explanation: 'n / 2 faz divisão normal (ex: 4/2 = 2, não 0). O operador % retorna o RESTO: 4 % 2 = 0 (par), 5 % 2 = 1 (ímpar).'
  },

  // ── LÓGICA APLICADA (34-36) ──
  {
    id: 'L34',
    track: 'logic',
    concept: 'Lógica Aplicada',
    difficulty: 3,
    question: 'Um sistema verifica se o usuário pode votar (idade >= 16) E se tem cadastro ativo. Qual a condição correta?',
    type: 'multiple-choice',
    options: [
      'se idade >= 16 OU cadastro == ativo',
      'se idade >= 16 E cadastro == ativo',
      'se idade > 16 E cadastro == ativo',
      'se idade == 16'
    ],
    answer: 'se idade >= 16 E cadastro == ativo',
    explanation: 'O operador E (AND) exige que AMBAS as condições sejam verdadeiras. O >= inclui o 16 (pode votar a partir dos 16).'
  },
  {
    id: 'L35',
    track: 'logic',
    concept: 'Lógica Aplicada',
    difficulty: 3,
    question: 'Um jogo precisa verificar se o jogador tem escudo OU armadura para sobreviver ao ataque. Como seria essa verificação?',
    type: 'multiple-choice',
    options: [
      'se temEscudo E temArmadura',
      'se temEscudo OU temArmadura',
      'se NÃO temEscudo',
      'se temEscudo == temArmadura'
    ],
    answer: 'se temEscudo OU temArmadura',
    explanation: 'O operador OU (OR) retorna verdadeiro se pelo menos uma das condições for verdadeira. Basta ter escudo OU armadura para sobreviver.'
  },
  {
    id: 'L36',
    track: 'logic',
    concept: 'Lógica Aplicada',
    difficulty: 3,
    question: 'Um algoritmo de busca linear percorre um array item por item. Qual a sua complexidade?',
    type: 'multiple-choice',
    options: [
      'O(1) — constante',
      'O(n) — linear',
      'O(n²) — quadrática',
      'O(log n) — logarítmica'
    ],
    answer: 'O(n) — linear',
    explanation: 'Na busca linear, no pior caso você verifica todos os n elementos. O tempo cresce proporcionalmente ao tamanho do array, logo O(n).'
  }
];
