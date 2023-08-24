const perguntas = [
    {
        id: 1,
        enunciado: "Qual é o processo de crescimento da população urbana em relação à população rural?",
        re1: "Migração",
        re2: "Expansão agrícola",
        re3: "Revolução industrial",
        rc: "Urbanização",
    },
    {
        id: 2,
        enunciado: "O que é êxodo rural?",
        re1: "Migração de áreas urbanas para áreas rurais",
        re2: "Crescimento da população rural",
        re3: "Desenvolvimento industrial",
        rc: "Migração de áreas rurais para áreas urbanas",
    },
    {
        id: 3,
        enunciado: "Quais são os principais fatores que impulsionam a urbanização?",
        re1: "Agricultura tradicional",
        re2: "Tecnologias agrícolas",
        re3: "Manutenção de tradições rurais",
        rc: "Industrialização e modernização",
    },
    {
        id: 4,
        enunciado: "Qual é a definição de aglomeração urbana?",
        re1: "Áreas de grande produção agrícola",
        re2: "Cidades de pequeno porte",
        re3: "Concentração de atividades rurais",
        rc: "Conjunto de cidades próximas que se interligam funcionalmente",
    },
    {
        id: 5,
        enunciado: "O que é o processo de suburbanização?",
        re1: "Desenvolvimento de atividades rurais",
        re2: "Crescimento populacional nas áreas centrais",
        re3: "Expansão das áreas urbanas em direção ao centro",
        rc: "Expansão das áreas urbanas para as regiões periféricas",
    },
    {
        id: 6,
        enunciado: "Qual é a principal consequência da urbanização descontrolada?",
        re1: "Preservação do meio ambiente",
        re2: "Aumento da população rural",
        re3: "Expansão da agricultura",
        rc: "Problemas de infraestrutura e degradação ambiental",
    },
    {
        id: 7,
        enunciado: "O que são megacidades?",
        re1: "Cidades com baixa densidade populacional",
        re2: "Pequenas vilas rurais",
        re3: "Cidades médias em crescimento",
        rc: "Cidades com mais de 10 milhões de habitantes",
    },
    {
        id: 8,
        enunciado: "Quais são os desafios enfrentados pelas cidades no contexto da urbanização?",
        re1: "Baixa demanda por serviços",
        re2: "Falta de infraestrutura nas áreas rurais",
        re3: "Desenvolvimento agrícola",
        rc: "Trânsito congestionado, moradia precária, poluição, entre outros",
    },
    {
        id: 9,
        enunciado: "O que é o processo de gentrificação?",
        re1: "Migração de áreas urbanas para áreas rurais",
        re2: "Expansão das áreas industriais",
        re3: "Aumento da população rural",
        rc: "Transformação de bairros antes degradados em áreas de classe alta",
    },
    {
        id: 10,
        enunciado: "Qual é o termo utilizado para descrever o crescimento desordenado das cidades?",
        re1: "Desenvolvimento sustentável",
        re2: "Ruralização",
        re3: "Expansão planejada",
        rc: "Urbanização caótica",
    },
];

let pergunta;

let contp = 9;

const sortearPergunta = () => {
    pergunta = perguntas[contp]
}

let content = document.getElementById('content')
let quest = document.getElementById('quest')
let answer = document.getElementById('answer')
let ans = document.getElementById('ans')
let t2 = document.getElementById('title2')
let a_start = document.getElementById('a_start')
let title = document.getElementById('title')
let hp = document.getElementById('hp')
let header_title = document.getElementById('header-title')
// tres corações de vida
let l1 = document.getElementById('l1')
let l2 = document.getElementById('l2')
let l3 = document.getElementById('l3')

let chp = 3;
let cp = 1;


const exibirPergunta = () => {
    header_title.classList.toggle('header-title-open')
    hp.style.display="flex"
    let cont = 0;
    sortearPergunta()
    quest.innerHTML= `<h3 class="pergunta">`+pergunta.enunciado+`</h3>`
    const respostas = [pergunta.re1,
    pergunta.re2,
    pergunta.re3,
    pergunta.rc]
    respostas.sort()
    for(let c = 0; c < respostas.length; c++){
        let cont = c
        ans.innerHTML+=`<li class="btn-r" onclick="validar(`+cont+`)">`+respostas[cont]+`</li>`
    }
    title.style.display="block"
    title.innerHTML=`Questão: `+cp+``
    resp = respostas;
}
quest.innerHTML=`<button class="start" onclick="exibirPergunta()">Play</button>`
let resp = [];

const validar = (p) => {
    let t = resp.indexOf(pergunta.rc)
    if(p == t){
        window.alert('Parabéns! Você acertou!')
        contp++
        cp++
        ans.innerHTML=''
        if(contp !== perguntas.length){
        Rsec=20
        exibirPergunta()
        }else{
            window.alert('Parabéns! Você concluiu o Quiz!')
            content.innerHTML=`<h3 class="pergunta">Registre seu nome:</h3>
            <input type="text" class="nome" placeholder="Digite seu nome:">
            <h3 class="pergunta">Pontuação: 10/10</h3>
            <button class="start" onclick="reset()">Voltar</button>`
        }
    }else{
        window.alert('Que pena! Você errou!')
        tiravida()
        chp--
        if(chp == 0){
            gameover()
        }
    }
}


const reset = () => {
    location.reload()
}


const gameover = () => {
    clearInterval(relogio())
    timer.style.display="none"
    hp.style.display="none"
content.innerHTML=`
    <h2 class="gameover" align="center">GAME OVER</h2>
    <button class="start" onclick="reset()">Reiniciar</button>`
content.style.marginTop="11.7px"
}

let vida = [l1,l2,l3]
tiravida = () => {
    vida[chp-1].style.display="none"
}
