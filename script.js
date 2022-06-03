const perguntas = [
    {
        id: 1,
        enunciado: `"O átomo é como uma bola de bilhar." Quem fez essa afirmação?`,
        re1: "Thomsom",
        re2: "Rutherford",
        re3: "Bohr",
        rc: "Dalton",
    },
    {
        id: 2,
        enunciado: `Qual cientista criou o modelo atômico denominado "Pudim de Passas"?`,
        re1: "Dalton",
        re2: "Goldstein",
        re3: "Rutherford",
        rc: "Thomsom",
    },
    {
        id: 3,
        enunciado:`O elemento <span style="font-size: 10pt">11</span>Na<span style="font-size: 8pt">23</span> possui quantos prótons?`,
        re1: "14",
        re2: "12",
        re3: "23",
        rc: "11",
    },
    {
        id: 4,
        enunciado:`Quantas camadas possúi a <span style="font-weight: bold;">Eletrosfera?</span`,
        re1: "4",
        re2: "5",
        re3: "10",
        rc: "7",
    },
    {
        id: 5,
        enunciado:`Quais os subníveis da <span style="font-weight: bold">Eletrosfera?</span`,
        re1: "A B C D",
        re2: "Z P E N",
        re3: "S P D G",
        rc: "S P D F",
    },
    {
        id: 6,
        enunciado:`Quais as letras que representam as camadas da <span style="font-weight: bold">Eletrosfera?</span`,
        re1: "A B C D E F G",
        re2: "T U V W X Y Z",
        re3: "S P D F O Q",
        rc: "K L M N O P Q",
    },
    {
        id: 7,
        enunciado: `Quem criou a tabela periódica?`,
        re1: "John Dalton",
        re2: "Antoine Lavoisier",
        re3: "Theodore Seaborg",
        rc: "Dimitri Mendeleiev"
    },
    {
        id: 8,
        enunciado: `O primeiro grupo da tabela periódica é o grupo dos:`,
        re1: "Gases Nobres",
        re2: "Não metais",
        re3: "Halogênios",
        rc: "Metais Alcalinos"
    },
    {
        id: 9,
        enunciado: `Quais os únicos elementos da tabela periódica que podem ser encontrados na natureza de forna isolada?`,
        re1: "Metais Alcalinos",
        re2: "Metais Alcalino-Terrosos",
        re3: "Não metais",
        rc: "Gases Nobres (Exceto o Hélio)"
    },
    {
        id: 10,
        enunciado: `O elemento Bário <span style="font-size: 10pt">56</span>Ba<span style="font-size: 10pt">137</span> pertence a qual grupo da tabela periódica?`,
        re1: "Gases Nobres",
        re2: "Metais de Transição",
        re3: "Nâo Metais",
        rc: "Metais Alcalino-Terrosos"
    }
    
]
let pergunta;
let contp = 0

sortearPergunta = () => {
    pergunta = perguntas[contp]
    //console.log(pergunta)
}

let content = document.getElementById('content')
let quest = document.getElementById('quest')
let answer = document.getElementById('answer')
let ans = document.getElementById('ans')
let t2 = document.getElementById('title2')
let a_start = document.getElementById('a_start')
let title = document.getElementById('title')
let hp = document.getElementById('hp')
// tres corações de vida
let l1 = document.getElementById('l1')
let l2 = document.getElementById('l2')
let l3 = document.getElementById('l3')

let hit = document.getElementById('hit')
let miss = document.getElementById('miss')
let mainS = document.getElementById('main-song')
let game_over = document.getElementById('g-over')
let chp = 3;
let cp = 1;
exibirPergunta = () => {
    mainS.play()
    relogio()
    hp.style.display="block"
    let cont = 0;
    a_start.play()
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
    title.innerHTML=`Questão: `+cp+`&nbsp; &nbsp; &#x1F9EA; Química - Quiz &#x1F9EA;`
    resp = respostas;
}
quest.innerHTML=`<button class="start" onclick="exibirPergunta()">Play</button>`
let resp = [];

validar = (p) => {
    let t = resp.indexOf(pergunta.rc)
    if(p == t){
        hit.play()
        window.alert('Parabéns! Você acertou!')
        contp++
        cp++
        console.log(contp)
        console.log(perguntas.length)
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
        miss.play()
        window.alert('Que pena! Você errou!')
        tiravida()
        chp--
        if(chp == 0){
            mainS.pause()
            game_over.play()
            gameover()
        }
    }
}
reset = () => {
    location.reload()
}
gameover = () => {
    window.alert('Game Over!')
    clearInterval(relogio())
    timer.style.display="none"
    content.innerHTML=`
    <h2 class="gameover" align="center">GAME OVER</h2>
    <button class="start" onclick="reset()">Reiniciar</button>`
    content.style.marginTop="11.7px"
}

let vida = [l1,l2,l3]
tiravida = () => {
    vida[chp-1].style.display="none"
}
//console.log(perguntas[0].rc)
let timer = document.getElementById('time')
let start;
let Rsec;
relogio = () => {
    let clock = document.getElementById('clock')
    clock.style.display="block"
    content.style.marginTop="0"
    Rsec = 20;
    timer.innerHTML=`Tempo: `+Rsec+``
    start = setInterval(function(){
        Rsec--
        timer.innerHTML=`Tempo: `+Rsec+``
        if(Rsec == 0){
            gameover()
            clearInterval(start)
            timer.innerHTML=" "
        }
    },1000)
}
