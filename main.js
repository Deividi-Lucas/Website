var footer = window.document.getElementsByTagName('footer')
let main = window.document.getElementById('main')
let title = window.document.getElementById('title')
let local = document.getElementById('local')
let personal = document.getElementsByClassName('about-me')
let text = document.getElementById('text')
let contact = document.getElementById('contact')
let list_item = document.getElementsByTagName('li')
let link_navegacao = document.getElementsByTagName('a')
let ul = document.getElementsByTagName('ul')


function color(){
    document.body.style.background = '#282828'
    
    var cont = 0 
    //loop para estilização de vários item
    while (cont < link_navegacao.length){
        link_navegacao.item(cont).style.color = 'white'
        link_navegacao.item(cont).style.fontSize = '40px'
        cont ++
    }
    cont = 0

    //loop para estilização de vários item
    while (cont < list_item.length){
        list_item.item(cont).style.padding = '15px'
        cont ++
    }
    cont = 0
   

    footer.item(0).style.cssText = 'background: #d12323; color:white; font-size: large;'

    title.style.color = 'white' // Cor do meu nome

    ul.item(0).style.cssText = ' list-style: none; display: flex;' //Organização da listagem

    local.style.cssText = 'color: white; textShadow: 1px 2px 3px black;' // Local de moradia

    personal.item(0).style.background = '#1B1B1B' //Container secudário cor

    text.style.cssText = 'text-align: justify; color: white; width: 450px;' // Texto pessoal estilização

    main.style.cssText = 'height: 100vh; display:flexbox; text-align:center;' // Parte de title e fotografia 

    contact.style.background = '#282828'
}   

color()