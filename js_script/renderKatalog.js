let check = false
const buttonCatalog = document.querySelector(".katalogButton")
document.querySelector(".catalogRead").style.cssText = `
position: absolute;
background-color: #0059ff00;
padding: 20px;
backdrop-filter: blur(100px);
color: white;
z-index: 1000;
left: -600px;
width: 500px;
overflow-y: auto;
height: 85vh;
transition: 1s;
`
buttonCatalog.addEventListener('click', () => {
    if (check) {
        document.querySelector(".catalogRead").style.cssText += `
            left: -600px;
         `

        check = false
        document.querySelector(".catalogRead").innerHTML = ''
    } else {

        for (let i in tableCard) {
            const categorMain = document.createElement("div")
            const table = document.createElement("ul")
            const categor = document.createElement("p")
            const podCategor = []

            categor.textContent = i
            categor.classList.add("cat_categor")
            categorMain.classList.add("cat_div")
            table.classList.add("cat_ul")

            for (let j = 0; j <= (Object.keys(tableCard[i]).length); j++) {
                podCategor[j] = document.createElement("li")
                podCategor[j].textContent = Object.keys(tableCard[i])[j]
                podCategor[j].classList.add("cat_podcategor")

                podCategor[j].addEventListener('click', () => {
                    document.querySelector(".qwerty").classList.remove("hiden")
                    const closeImg = document.createElement('img')
                    closeImg.src = 'img/5968a2c8f2ed115d40bbe123.png'

                    document.querySelector('.catalogMainTop').append(closeImg)

                    document.querySelector("header").classList.add("hiden")
                    document.querySelector(".catalogRead").classList.add("hiden")
                    document.querySelector(".addventure").classList.add("hiden")
                    document.querySelector(".add").classList.add("hiden")
                    document.querySelector(".Tovars").classList.add("hiden")

                    document.querySelector('.qwerty').scrollIntoView()
                    document.querySelector('.catalogMainTxt').textContent = Object.keys(tableCard[i])[j]
                    document.querySelector(".qwerty").style.cssText = `
                    padding: 50px;
                    `
                    document.querySelector(".catalogMain").style.cssText = `
                    background-color: white;
                    padding: 20px;
                    `
                    document.querySelector('.catalogMainTxt').style.cssText = `
                    margin-bottom: 50px;
                    `
                    let deleatObj = []

                    for (let tovar in tableCard[i][Object.keys(tableCard[i])[j]]) {
                        let urlObject = tableCard[i][Object.keys(tableCard[i])[j]][tovar]
                        const divObjCatalog = document.createElement("div")
                        divObjCatalog.classList.add("divCategoriiObj")
                        deleatObj.push(divObjCatalog)
                        generateCard(divObjCatalog, ".catalogSelect", tovar, Number(urlObject['price']), Number(urlObject['oldprice']), urlObject['img'], urlObject['review'])
                        divObjCatalog.addEventListener('click', () => {
                            const pathbj = `${i} • ${Object.keys(tableCard[i])[j]} • ${tovar}`
                            const skidkaObj = Math.round((1 - (Number(urlObject['price']) / Number(urlObject['oldprice']))) * 100)
                            document.querySelector(".qwerty").classList.add("hiden")
                            generateWindow(divObjCatalog, tovar, Number(urlObject['price']), Number(urlObject['oldprice']), urlObject['img'], urlObject['review'], urlObject['assessment'], pathbj, skidkaObj, [document.querySelector(".qwerty")])
                        })
                    }
                    closeImg.addEventListener('click', () => {
                        document.querySelector("header").classList.remove("hiden")
                        document.querySelector(".catalogRead").classList.remove("hiden")
                        document.querySelector(".addventure").classList.remove("hiden")
                        document.querySelector(".add").classList.remove("hiden")
                        document.querySelector(".Tovars").classList.remove("hiden")

                        for (let i in deleatObj) {
                            deleatObj[i].remove()
                        }
                        closeImg.remove()
                        document.querySelector(".qwerty").classList.add("hiden")

                    })

                })

                table.append(podCategor[j])
            }
            categorMain.append(categor)
            categorMain.append(table)

            document.querySelector(".catalogRead").append(categorMain)

        }





        document.querySelector(".catalogRead").style.cssText += `
        left: 0px;
    `
        // document.querySelector(".catalogRead").addEventListener("mouseover", ()=>{
        //     document.querySelector(".catalogRead").style.cssText = `

        //     `
        // })
        check = true
    }

})