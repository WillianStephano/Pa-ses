const pesquisaPais = async() => {
   var pais = document.querySelector('.campo_pesquisa_txt').value
   const url = `https://restcountries.com/v3.1/name/${pais}`
   
   const dadosGerais = await fetch(url)
   const dadosPais = await dadosGerais.json()
   //console.log(dadosPais[0].name);
}
var campoPesquisa = document.querySelector('.campo_pesquisa_txt').addEventListener('focusout', pesquisaPais)


const listaPaises = async() => {
   const url = `https://restcountries.com/v3.1/all`
   const dadosGerais = await fetch(url)
   const dadosListaPaises = await dadosGerais.json()
   console.log(dadosListaPaises);

   const colecaoCards = document.querySelectorAll('.card_paises')
   for (let i = 0; i < colecaoCards.length; i++) {
      const card = colecaoCards[i];

      let nomePais = card.querySelector('.titulo_card_pais')
      let populacaoPais = card.querySelector('.populacao_pais')
      let capitalPais = card.querySelector('.capital_pais')
      let bandeiraPais = card.querySelector('.bandeira_card_pais')

      bandeiraPais.setAttribute('src' ,dadosListaPaises[i].flags.svg)
      nomePais.textContent = dadosListaPaises[i].name.common
      populacaoPais.textContent = dadosListaPaises[i].population
      capitalPais.textContent = dadosListaPaises[i].capital

      
   }
}
listaPaises()


function criaCardPais() {
   const container = document.querySelector('.secao_paises .container')
   var card = document.querySelector('.card_paises')
   for (let i = 0; i <= 6; i++) {
      var cardClone = card.cloneNode(true)
      container.appendChild(cardClone)
      
   }
}
criaCardPais()