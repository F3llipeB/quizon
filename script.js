let perguntas = [
    {
        titulo: 'O concretismo foi um movimento literário que surgio em meados da década de:',
        alternativa: [40, 50, 60, 70],
        correta: 1
    },
    {
        titulo: 'Quando foi lançada a revista "Noigrandes"?',
        alternativa: ['1950', "1952", "1956", "1958"],
        correta: 1
    },
    {
        titulo: 'Qual o nome do grupo de concretismo de São Paulo?',
        alternativa: ['Grupo Frente', "Grupo da Arte Concreta", "Grupo Manifesto", "Grupo Ruptura"],
        correta: 3
    },
    {
        titulo: 'Onde surgio o Neoconcretismo',
        alternativa: ['Rio de Janeiro', "São Paulo", "Fortaleza", "Recife"],
        correta: 0
    },
    {
        titulo: 'Qual das seguintes opções não corresponde a uma caracteríticas das artes concretas?',
        alternativa: ['Simplicidade', "Geometrismo", "Metalinguagem", "Subjetiva"],
        correta: 3
    },
    {
        titulo: 'Quais são os principais nomes do Neocrocretismo?',
        alternativa: ['Lygia Clark e Ferreira Gullar', "Geraldo de Barros e Abraham Palatinik", "Waldemar Cordeiro e Ivan Serpa", "Lygia Pape e Lothar Charoux"],
        correta: 0
    },
    {
        titulo: 'A Qual característica o Neoconcretismo se opõe?',
        alternativa: ['valorização da criatividade artística', "Subjetividade e maior expressividade artistica", "Racionalismo exarcebado da arte concreta", "Maior participação do observador na obra"],
        correta: 2
    },
    {
        titulo: 'Fundadora do grupo frente, pintora e escultora mineira, mudou-se para o Rio de Janeiro em 1947, e inicia aprendizado artístico com Burle Marx. Esse trecho refere-se a?',
        alternativa: ['Lygia Clark', "Salette Tavares", "Judith Lauand", "Lygia Pape"],
        correta: 0
    },
    
  
]

let app = {
    start: function(){
        this.Atualpos = 0
        this.Points = 0
        let alts = document.querySelectorAll('.qt');
        alts.forEach((element, index)=>{
            element.addEventListener('click',()=>{
                this.checares(index);
            })
        })
        this.mostrarquestao(perguntas[this.Atualpos]);
    },

    mostrarquestao :function(q){
        this.qres = q.correta;
        let texto = document.getElementById('quest');
        texto.textContent = q.titulo;
        let alts = document.querySelectorAll('.qt');
        alts.forEach(function(element, index){
            element.textContent = q.alternativa[index]
        })
    },

    proxper: function(){
        this.Atualpos++
        if(this.Atualpos == perguntas.length){
            this.endgame()
        }
    },

    checares : function(user){
        if(user == this.qres){
           this.Points++
        }
        this.proxper()
        this.mostrarquestao(perguntas[this.Atualpos])
    },

    endgame : function(){
        let end = document.getElementById('title');
        let texto = document.getElementById('quest');
        let alts = document.querySelectorAll('.qt');
        end.innerText = 'Fim do Quiz!'
        if(this.Points == 1){
            texto.style.textAlign = 'center'
            texto.innerHTML = 'Sua pontuação foi 1 acerto de ' + perguntas.length
        }
        else{
            texto.style.textAlign = 'center'
            texto.innerHTML = 'No total foram ' + this.Points + " acertos de " + perguntas.length + " questões!"
        }
        alts.forEach(function(element){
            element.style.display = 'none'
        })
    }

}
app.start()