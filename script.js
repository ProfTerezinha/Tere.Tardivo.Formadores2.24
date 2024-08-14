const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você acessa a Internet se depara com uma nova tecnologia, um IA que consegue montar um jogo sobre qualquer conteúdo. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso seria útil?!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Claude IA, um professor de História resolve utilizar para fazer um jogo de quizz para seus alunos estudarem para a prova?",
        alternativas: [
            {
                texto: "Utilizar esse tipo de ferramenta ajuda no desevolvimento e melhora o aprendizado do aluno.",
                afirmacao: "afirmação"
            },
            {
                texto: "Buscar um texto ou artigo sobre um determinado assunto e pedir para a IA montar o jogo desejado.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do jogo, basta salvar como .HTML e enviar para os alunos, seria uma opção para melhorar o aprendizado?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com as pessoas que podem ficar mais viciadas em tecnologia.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Caso tenha uma prova de biologia para fazer na semana seguinte, e você não entendeu muito bem o conteúdo. Você usaria uma IA para estudar para aprova? ",
        alternativas: [
            {
                texto: "Não vejo problena em estudar com um IA, penso que ajudaria a entender melhor os conteúdos.",
                afirmacao: "afirmação"
            },
            {
                texto: "O Claude.IA é uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function() { 
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
