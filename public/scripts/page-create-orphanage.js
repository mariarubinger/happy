// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

// o let permite que posso alterar depois essa variável
let marker;

// create and add marker
// o event vai ser responsável pela latitude lat e longitude lng 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

    // adicionar o campo de fotos

    // usa o console pra vê se está funcionando quando clica no + pra adicionar fotos
  /*   function addPhotoField() {
        console.log('esta funcionando')
    } */

    function addPhotoField() {
        // pegar o container de fotos #images
        const container = document.querySelector('#images')
        
        // pegar o container para duplicar .new-image
        const fieldsContainer = document.querySelectorAll('.new-upload')

        // realizar o clone da última imagem adicionada
        const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

        // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
        const input = newFieldContainer.children[0]
        // se o campo está vazio ele retorna com nada (não vai executar o restante do código)
        if(input.value == "") {
            return
        }

        // limpar o campo antes de adicionar ao container imagens
        input.value = ""


        // adicionar o clone ao container de #images
        container.appendChild(newFieldContainer)
    }


    function deleteField(event) {
        const span = event.currentTarget 

        const fieldsContainer = document.querySelectorAll('.new-upload')

        if(fieldsContainer.length <= 1) {
            
            // limpar o valor do campo
            span.parentNode.children[0].value = ""
            return
        } 

        // deletar o campo
        span.parentNode.remove();
    }

    // selecionar sim ou não
    function toggleSelect(event) {

        // retirar a class .active (dos botões)
        document.querySelectorAll('.button-select button')
        .forEach(function(button) {
            button.classList.remove('active')
        })

        // colocar a class .active nesse botão clicado
        const button = event.currentTarget
        button.classList.add('active')
        
        // atualizar o meu input hidden com o valor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')

        input.value = button.dataset.value
    }