//variável para guardar a URL da base de dados

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

//função assíncrona( ao fazer uma requisição para a API, o JavaScript espera ela ser concluída.)
async function visualizarInformacoesGlobais() {  //essa função não terá parâmetros.

        const res = await fetch(url) //palavra  await, para esperar a requisição ser finalizada e fetch() para passar a url.

        const dados = await res.json()  //variável para guardar a resposta recebida.

        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)
    

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    }

    visualizarInformacoesGlobais()  //invocar a função