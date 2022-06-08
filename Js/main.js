const pesquisaPais = async() => {
   var pais = document.querySelector('.campo_pesquisa_txt').value
   const url = `https://restcountries.com/v3.1/name/${pais}`
   
   const dadosGerais = await fetch(url)
   const dadosPais = await dadosGerais.json()
   console.log(dadosPais);
   
   for (let i = 0; i < dadosPais.length; i++) {
      var nomeDoPais = dadosPais[i].name.common;
      if (nomeDoPais.toUpperCase() == pais.toUpperCase()) {
         selecionaPais(nomeDoPais)
      }
   } 
   
}
var campoPesquisa = document.querySelector('.campo_pesquisa_txt')
campoPesquisa.addEventListener('keyup', pesquisaPais)
campoPesquisa.addEventListener('input', restauraPaises)


function restauraPaises() {
   const colecaoCards = document.querySelectorAll('.card_paises')
   if (campoPesquisa.value == '') {
      for (let i = 0; i < colecaoCards.length; i++) {
         const element = colecaoCards[i];
         element.style.display = 'initial'
      }
   }
}


function selecionaPais(nomeDoPais) {
   const colecaoCards = document.querySelectorAll('.card_paises')
   
   for (let i = 0; i < colecaoCards.length; i++) {
      var gambiarra = colecaoCards[i].childNodes[3].firstChild.nextSibling.textContent; 
      if (gambiarra !== nomeDoPais) {
         colecaoCards[i].style.display = 'none' 
      }else{
         colecaoCards[i].style.display = 'initial' 
      }
   }
}


const listaPaises = async() => {
   const url = `https://restcountries.com/v3.1/all`
   const dadosGerais = await fetch(url)
   const dadosListaPaises = await dadosGerais.json()
   
   criaCardPais(dadosListaPaises)
   
   const colecaoCards = document.querySelectorAll('.card_paises')
   for (let i = 0; i < colecaoCards.length; i++) {
      const card = colecaoCards[i];
      
      let bandeiraPais = card.querySelector('.bandeira_card_pais')
      let nomePais = card.querySelector('.titulo_card_pais')
      let populacaoPais = card.querySelector('.populacao_pais')
      let regiaoPais = card.querySelector('.regiao_pais')
      let capitalPais = card.querySelector('.capital_pais')
      
      bandeiraPais.setAttribute('src' ,dadosListaPaises[i].flags.png)
      nomePais.textContent = dadosListaPaises[i].name.common
      populacaoPais.textContent =`População: ${dadosListaPaises[i].population}` 
      regiaoPais.textContent = `Região: ${dadosListaPaises[i].region}`
      capitalPais.textContent = `Capital: ${dadosListaPaises[i].capital}`
   }
}
listaPaises()


function criaCardPais(dadosListaPaises) {
   const container = document.querySelector('.secao_paises .container')
   var card = document.querySelector('.card_paises')
   for (let i = 0; i <= dadosListaPaises.length; i++) {
      var cardClone = card.cloneNode(true)
      container.appendChild(cardClone)
      
   }
}