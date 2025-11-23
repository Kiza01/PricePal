for (let i = 0; i <= 10; i++) {
    const mainObj = document.createElement("div")
    mainObj.classList.add("product")

    let categor = []
    let pod_categor = []
    let pod_categor_tovar = []


    for (let vse_categor in tableCard) {
        categor.push(vse_categor)
    }
    let randomCat = categor[Math.floor(Math.random() * (categor.length))] // рандомная категория


    for (let vse_podcategor in tableCard[randomCat]) {
        pod_categor.push(vse_podcategor)
    }
    let randomPodCat = pod_categor[Math.floor(Math.random() * (pod_categor.length - 1))] // рандомная подгатегория


    for (let vse_tovari in tableCard[randomCat][randomPodCat]) {
        pod_categor_tovar.push(vse_tovari)
    }
    let randomTov = pod_categor_tovar[Math.floor(Math.random() * (pod_categor_tovar.length - 1))]

    urldObj = tableCard[randomCat][randomPodCat][randomTov]

    let imgtable = urldObj['img']
    if (imgtable === "") {
        imgtable = 'img/photo_2025-11-22_21-18-36.jpg'
    }
    const name = randomTov
    const price = Number(urldObj['price'])
    const oldprice = Number(urldObj['oldprice'])
    const img = imgtable
    const review = urldObj['review']
    const assessment = urldObj['assessment']
    const skidka = Math.round((1 - (price / oldprice)) * 100)
    const path = `${randomCat} • ${randomPodCat} • ${randomTov}`
    generateCard(mainObj, '.mainCard', randomTov, price, oldprice, img, review)
    mainObj.addEventListener('click', () => {


        document.querySelector("header").classList.add("hiden")
        document.querySelector(".addventure").classList.add("hiden")
        document.querySelector(".add").classList.add("hiden")
        document.querySelector(".Tovars").classList.add("hiden")
        let closeObject = [document.querySelector("header"), document.querySelector(".addventure"),
            document.querySelector(".add"), document.querySelector(".Tovars")
        ]
        generateWindow(mainObj ,name, price, oldprice, img, review, assessment, path, skidka, closeObject)
        // window.location.href = window.location.href






    })


}
