const korzinaLogObj = document.querySelector(".korzinaLog")

korzinaLogObj.addEventListener('click', () => {
    document.querySelector(".mainC").classList.remove("hiden")
    document.querySelector("header").classList.add("hiden")
    document.querySelector(".addventure").classList.add("hiden")
    document.querySelector(".add").classList.add("hiden")
    document.querySelector(".Tovars").classList.add("hiden")

    document.querySelector('.mainCP').textContent = "Ваша корзина"
    document.querySelector('.mainC').style.cssText = `
    padding: 30px;
    `
    document.querySelector('.korzinaMain').style.cssText = `
    background-color: white;
border-radius: 20px;
padding: 20px;
    `
    document.querySelector('.mainCP').style.cssText = `
    margin-bottom: 50px;
    `
    const imgMain = document.createElement('img')
    document.querySelector('.werto').append(imgMain)
    imgMain.src = 'img/5968a2c8f2ed115d40bbe123.png'
    const objRem = []

    const objInKorzina = window.localStorage
    if (objInKorzina.length === 0) {
        document.querySelector(".korzinaMainObj").textContent = "товаров нет"
    } else {
        document.querySelector(".korzinaMainObj").textContent = ""
        for (let i in objInKorzina) {
            if (objInKorzina.getItem(i) != null) {
                const nameObj = i
                const objObj = JSON.parse(objInKorzina.getItem(i))
                const mainObj = document.createElement('div')
                mainObj.classList.add("product")
                objRem.push(mainObj)
                generateCard(mainObj, '.korzinaMainObj', nameObj, Number(objObj['price']), Number(objObj['oldprice']), objObj['img'], objObj['review'], '')
            }
        }
        document.querySelector('.scroll').scrollIntoView()

    }
    imgMain.addEventListener('click', () => {
        document.querySelector("header").classList.remove("hiden")
        document.querySelector(".addventure").classList.remove("hiden")
        document.querySelector(".add").classList.remove("hiden")
        document.querySelector(".Tovars").classList.remove("hiden")

        if (objRem) {
            for (let remO in objRem) {
                objRem[remO].remove()
            }
        } else {

        }
        imgMain.remove()
        document.querySelector(".mainC").classList.add("hiden")

    })
})
