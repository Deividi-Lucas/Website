var footer = window.document.getElementsByTagName('footer')
let main = window.document.getElementById('main')
let nome = window.document.getElementsByTagName('h1')
let local = document.getElementsByTagName('h3')
let personal = document.getElementsByClassName('about-me')
let text = document.getElementById('text')
let contact = document.getElementById('contact')

main.style.cssText = 'height: 100vh; display:flexbox; text-align:center;'

function color(){
    document.body.style.background = '#282828'
    var link = document.getElementsByTagName('a')
    var cont = 0 
    while (cont < link.length){
        link.item(cont).style.color = 'white'
        cont ++
    }
    cont = 0
   
    var img = document.getElementById('logo')
    footer.item(0).style.cssText = 'background: #d12323; color:white; font-size: large;'
    nome.item(0).style.color = 'white' // Cor

    local.item(0).style.color = 'white' // Cor
    local.item(0).style.textShadow = '1px 2px 3px black' // Sombra no texto
    personal.item(0).style.background = '#1B1B1B'
    text.style.cssText = 'text-align: justify; color: white;'
    contact.style.background = '#282828'
}   

color()