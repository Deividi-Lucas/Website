let mnt = document.createElement('h1')
mnt.innerHTML = `EM MANUTENÇÃO!!!`
mnt.style.color = 'white'
document.body.append(mnt)

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

}

color()