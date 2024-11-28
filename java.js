const challenges = [
    // Fase 1 - Fácil
    {
        phase: 1,
        questions: [
            {
                question: "Fase 1 - Desafio 1: Enquanto você caminha, você vislumbra uma senhora jogando uma guimba de cigarro próximo de um mato seco, o que você faz?",
                options: {
                    A: { text: "Vou até ela e dou uma bronca, sem me importar com as consequências.", points: 1 },
                    B: { text: "Fico preocupado e aviso a senhora sobre o risco de incêndio, sugerindo que ela jogue a guimba no lixo.", points: 4 },
                    C: { text: "Ignoro, afinal, não é da minha conta.", points: 2 }
                },
                responses: {
                    A: "A senhora ficou chateada, e o clima ficou tenso, mas pelo menos você fez o que achava certo.",
                    B: "Você alertou a senhora e ajudou a evitar um possível incêndio. Parabéns por se preocupar com o meio ambiente!",
                    C: "Você seguiu seu caminho sem se importar, mas um incêndio acabou sendo evitado por outra pessoa."
                }
            },
            {
                question: "Fase 1 - Desafio 2: Enquanto você caminha com um grupo de amigos, você observa que um deles joga o copo de Milk-shake no chão próximo a uma lixeira, o que você faz?",
                options: {
                    A: { text: "Jogo mais coisas no chão também, já que ele fez isso.", points: 1 },
                    B: { text: "Peço para ele pegar o copo e jogar na lixeira, explicando a importância de manter o ambiente limpo.", points: 4 },
                    C: { text: "Digo para não se preocupar, pois alguém vai limpar.", points: 2 }
                },
                responses: {
                    A: "O ambiente ficou ainda mais sujo e você não ajudou a resolver o problema.",
                    B: "Seu amigo fica envergonhado, pega o copo e o descarta corretamente, e todos aprendem com você.",
                    C: "Você ignorou a situação, mas o local ficou mais sujo com o tempo."
                }
            }
        ]
    },

    // Fase 2 - Intermediária
    {
        phase: 2,
        questions: [
            {
                question: "Fase 2 - Desafio 1: Seu pai dá a ideia de vocês jogarem móveis antigos em um terreno baldio próximo à sua casa, qual a sua ação?",
                options: {
                    A: { text: "Falo que isso é errado, pois é ilegal e pode prejudicar o meio ambiente, sugerindo que levem os móveis para um local apropriado.", points: 4 },
                    B: { text: "Jogo os móveis no terreno baldio e ainda animo meus pais a fazerem o mesmo com outras coisas.", points: 0 },
                    C: { text: "Aceito a ideia e deixo os móveis no terreno baldio, pois não é problema meu.", points: 2 }
                },
                responses: {
                    A: "Você fez a escolha certa, garantindo que os móveis fossem descartados corretamente e ajudando o meio ambiente.",
                    B: "A área ficou mais suja e você contribuiu para um problema ambiental.",
                    C: "Você não se importou, mas o terreno baldio ficou mais poluído."
                }
            },
            {
                question: "Fase 2 - Desafio 2: Você percebe que em um bairro perto de sua casa, há um rio poluído cheio de plásticos e outros resíduos, o que você faz?",
                options: {
                    A: { text: "Jogo mais lixo no rio, porque não vejo ninguém fazendo algo sobre isso.", points: 0 },
                    B: { text: "Organizo uma ação com amigos e vizinhos para limpar o rio e pedir ajuda para as autoridades.", points: 4 },
                    C: { text: "Faço de conta que não é comigo, afinal, é um problema muito grande para resolver sozinho.", points: 2 }
                },
                responses: {
                    A: "O rio ficou ainda mais poluído e ninguém tomou uma atitude para resolver o problema.",
                    B: "Você tomou a frente e organizou uma limpeza do rio, trazendo mudanças positivas para o bairro.",
                    C: "Você não agiu, mas outras pessoas também não se importaram."
                }
            }
        ]
    },

    // Fase 3 - Difícil
    {
        phase: 3,
        questions: [
            {
                question: "Fase 3 - Desafio 1: Durante uma caminhada pela periferia, você vê uma área com muito entulho e lixo acumulado, o que você faz?",
                options: {
                    A: { text: "Adiciono mais lixo ao montante, já que parece ser um local de descarte comum.", points: 0 },
                    B: { text: "Passo reto, porque não é meu problema e a limpeza deve ser feita pela prefeitura.", points: 2 },
                    C: { text: "Comunico a comunidade e as autoridades sobre a situação e tento ajudar na limpeza.", points: 4 }
                },
                responses: {
                    A: "Você contribuiu para um problema maior e a área ficou ainda mais poluída.",
                    B: "Você não fez nada, mas o lixo continuou se acumulando.",
                    C: "Você ajudou a limpar o local e mostrou a todos como um pequeno gesto pode fazer a diferença."
                }
            },
            {
                question: "Fase 3 - Desafio 2: Durante uma visita à casa de um amigo, você percebe que a família dele está queimando lixo no quintal, o que você faz?",
                options: {
                    A: { text: "Fico quieto e não digo nada, já que isso é uma prática comum na região.", points: 0 },
                    B: { text: "Aviso a eles sobre os riscos da queima de lixo, como a poluição do ar e problemas de saúde, sugerindo formas mais seguras de descartar o lixo.", points: 4 },
                    C: { text: "Digo que é normal e que todo mundo faz isso, então não tem problema.", points: 2 }
                },
                responses: {
                    A: "Você ignorou o problema, mas o ar ficou mais poluído.",
                    B: "Você ajudou sua família a encontrar uma forma mais sustentável de descartar o lixo.",
                    C: "A queima de lixo continuou, e os riscos à saúde aumentaram."
                }
            }
        ]
    }
];

let currentPhase = 0; // Controle da fase atual
let currentChallenge = 0; // Controle do desafio atual
let score = 0; // Variável para armazenar a pontuação

// Função para atualizar a pergunta e opções
function updateQuestion() {
    const questionBox = document.getElementById('question');
    const answersBox = document.getElementById('answers');
    const responseBox = document.getElementById('response-box');
    const nextButton = document.getElementById('next-button');

    // Atualiza a pergunta da fase atual
    const phase = challenges[currentPhase];
    const challenge = phase.questions[currentChallenge];

    questionBox.textContent = challenge.question;

    // Atualiza as opções
    answersBox.innerHTML = ''; // Limpa botões antigos
    for (const [key, option] of Object.entries(challenge.options)) {
        const button = document.createElement('button');
        button.textContent = `${key}) ${option.text}`;
        button.onclick = () => handleAnswer(key, option.points);
        answersBox.appendChild(button);
    }

    // Esconde resposta e botão "Próximo"
    responseBox.textContent = '';
    nextButton.style.display = 'none';
}

// Função para lidar com a resposta do usuário
function handleAnswer(choice, points) {
    const responseBox = document.getElementById('response-box');
    const nextButton = document.getElementById('next-button');
    const phase = challenges[currentPhase];
    const challenge = phase.questions[currentChallenge];
    const response = challenge.responses[choice];

    responseBox.textContent = response;

    // Soma os pontos da escolha
    score += points;

    // Mostra o botão "Próximo"
    nextButton.style.display = 'block';
}

// Função para avançar para o próximo desafio
function goToNextChallenge() {
    currentChallenge++;
    const phase = challenges[currentPhase];

    if (currentChallenge < phase.questions.length) {
        updateQuestion();
    } else {
        // Avança para a próxima fase
        currentChallenge = 0;
        currentPhase++;

        if (currentPhase < challenges.length) {
            updateQuestion();
        } else {
            // Mensagem final com a pontuação
            const questionBox = document.getElementById('question');
            const answersBox = document.getElementById('answers');
            const responseBox = document.getElementById('response-box');
            const nextButton = document.getElementById('next-button');

            // Exibição do resultado final baseado na pontuação
            if (score >= 18 && score <= 24) {
                questionBox.textContent = `Parabéns! Você se saiu bem, continue assim! Sua pontuação final é: ${score}`;
                document.body.style.backgroundImage = 'url("images/fase1.jpg")'; // Altera o fundo para vitória
            } else if 
            (score >= 8 && score < 18) {
                questionBox.textContent = `Você terminou o jogo com uma pontuação de: ${score}. Continue a tentar melhorar!`;
            } else {
                questionBox.textContent = `Sua pontuação final é: ${score}. Talvez na próxima vez você consiga melhorar.`;
            }

            // Esconde as opções de resposta
            answersBox.innerHTML = '';
            responseBox.textContent = '';
            nextButton.style.display = 'none';
        }
    }
}

// Iniciar o jogo
updateQuestion();
