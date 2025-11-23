document.querySelector(".searchButton").addEventListener('click', () => {

    // input
    const labelInputUser = document.querySelector('.search').value
    // проход 
    if (labelInputUser.length >= 3) {
        document.querySelector('.searchMain').innerHTML = ''

        for (let i in tableCard) {

            // проход по категориям
            if (i.toLowerCase().includes(labelInputUser.toLowerCase())) {
                document.querySelector('.searchMain').style.cssText = `
            padding: 10px;
            margin-top: 30px;
            margin: 10px;
            border-radius: 20px;
            background-color: white;
        `
                document.querySelector(".addventure").classList.add("hiden")
                document.querySelector(".add").classList.add("hiden")
                document.querySelector(".Tovars").classList.add("hiden")

                for (let cat in tableCard[i]) {
                    for (let tov in tableCard[i][cat]) {
                        const mainObj = document.createElement("div")
                        mainObj.classList.add('product')
                        urlObj = tableCard[i][cat][tov]
                        generateCard(mainObj, '.searchMain', tov, Number(urlObj['price']), Number(urlObj['oldprice']), urlObj['img'], urlObj['review'])

                        mainObj.addEventListener('click', ()=>{
                            urlObj = tableCard[i][cat][tov]
                            document.querySelector('.searchMain').classList.add('hiden')
                            document.querySelector('header').classList.add('hiden')
                            const path = `${i} • ${cat} • ${tov}`
                            const skid = Math.round((1 - (Number(urlObj['price']) / Number(urlObj['oldprice']))) * 100)
                            generateWindow(mainObj, tov, Number(urlObj['price']), Number(urlObj['oldprice']), urlObj['img'], urlObj['review'], urlObj['assessment'], path, skid, [document.querySelector('.searchMain'), document.querySelector('header')])
                        })
                    }
                }
            } else {


                for (let cat in tableCard[i]) {
                    if (cat.toLowerCase().includes(labelInputUser.toLowerCase())) {
                        document.querySelector(".addventure").classList.add("hiden")
                        document.querySelector(".add").classList.add("hiden")
                        document.querySelector(".Tovars").classList.add("hiden")
                        document.querySelector('.searchMain').style.cssText = `
            padding: 10px;
            margin-top: 30px;
            margin: 10px;
            border-radius: 20px;
            background-color: white;
        `

                        for (let tov in tableCard[i][cat]) {
                            const mainObj = document.createElement("div")
                            mainObj.classList.add('product')
                            urlObj = tableCard[i][cat][tov]
                            generateCard(mainObj, '.searchMain', tov, Number(urlObj['price']), Number(urlObj['oldprice']), urlObj['img'], urlObj['review'])
                        }
                    } else {

                        for (let tov in tableCard[i][cat]) {
                            if (tov.toLowerCase().includes(labelInputUser.toLowerCase())) {
                                document.querySelector(".addventure").classList.add("hiden")
                                document.querySelector(".add").classList.add("hiden")
                                document.querySelector(".Tovars").classList.add("hiden")
                                document.querySelector('.searchMain').style.cssText = `
            padding: 10px;
            margin-top: 30px;
            margin: 10px;
            border-radius: 20px;
            background-color: white;
        `
                                const mainObj = document.createElement("div")
                                mainObj.classList.add('product')
                                urlObj = tableCard[i][cat][tov]
                                generateCard(mainObj, '.searchMain', tov, Number(urlObj['price']), Number(urlObj['oldprice']), urlObj['img'], urlObj['review'])
                            }
                        }


                    }
                }
            }
        }
    } else {
        alert("Пожайлуста введите больше 2 символов!")
    }
    // проход по подкатегориям




})

