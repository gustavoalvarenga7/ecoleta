
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( res => res.json())
    .then( states => {
        states.sort(compareitem);   
        for (let state of states){            
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }   
        
    })
}

populateUFs()

function getCities(event){
    
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    const ufvalue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>'
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json())
    .then( cities => {
        
        for (const city of cities){            
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
} 


document.
querySelector("select[name=uf]")
.addEventListener("change", getCities)
      
function compareitem(a, b){
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
}


//Items de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

let SelectedItems = []

function handleSelectedItem(){
    const itemLi = event.target

    // adicionar ou remover uma classe com JavaScript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem itens selecionados, se sim pega-los

    // se o item já estiver selecionado, tirar da seleção

    // se não estiver selecionado, adicionar à seleção

    // atualizar o campo escondido com os itens selecionados




}