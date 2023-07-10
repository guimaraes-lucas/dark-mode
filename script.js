function toogleMode() {

    const html = document.documentElement
    const img = document.querySelector("#profile img")
    
    html.classList.toggle('light')
    //  if(html.classList.contains('light')) {
    //       html.classList.remove('light')
    //  } else {
    //       html.classList.add('light')
    //    }


    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Yae Miko')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Hutao')
    }

}