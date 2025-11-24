
//
function generateWindow(mainObj, name, price, oldprice, img, review, assessment, path, skidka, openObj) {

    document.querySelector(".pay").classList.remove('hiden')

    const imgObj = document.createElement("img")
    const closeObj = document.createElement("img")
    const nameObj = document.createElement("p")
    const starObj1 = document.createElement("img")
    const starObj2 = document.createElement("img")
    const starObj3 = document.createElement("img")
    const starObj4 = document.createElement("img")
    const pathObj = document.createElement("p")
    const priceObj = document.createElement("span")
    const priceObjInfa = document.createElement("span")
    const oldpriceObj = document.createElement("span")
    const reviewObj = document.createElement("span")
    const skidkaObj = document.createElement("span")
    const korzina = document.createElement("button")
    const pay = document.createElement("button")

    const down = document.createElement("div")
    const otzTxt = document.createElement("p")
    const otzMain = document.createElement("div")
    let otzInd = []
    let otzUsername = []
    const otzText = []




    const top = document.createElement("div")
    const bottom = document.createElement("div")
    const infoObj = document.createElement("div")

    const buttonclick = document.createElement("div")


    const asesObj = document.createElement("div")
    const priceInformation = document.createElement("div")
    const oldprice_priceInformation = document.createElement("div")
    const skidka_priceInformation = document.createElement("div")
    const buttonObj = document.createElement("div")

    const ases = document.createElement("span")
    const skidkaInfo = document.createElement("span")

    otzTxt.textContent = `Отзывы ${review}`



    bottom.classList.add('pay_bottom')
    infoObj.classList.add('pay_info')
    nameObj.classList.add('pay_info_name')
    top.classList.add('pay_top')
    imgObj.classList.add('pay_img')
    starObj1.classList.add('pay_star')
    starObj2.classList.add('pay_star')
    starObj3.classList.add('pay_star')
    starObj4.classList.add('pay_star')
    ases.classList.add('pay_ases')
    priceInformation.classList.add('pay_priceinfa')
    priceObj.classList.add('pay_price')
    oldprice_priceInformation.classList.add('pay_old')
    priceObjInfa.classList.add('pay_pricenew')
    oldpriceObj.classList.add('pay_oldprice')
    skidka_priceInformation.classList.add('pay_skidkaMain')
    skidkaObj.classList.add('pay_skidka')
    skidkaInfo.classList.add('pay_skidkaInfo')
    korzina.classList.add('pay_korzina')
    pay.classList.add('pay_pay')
    buttonclick.classList.add('pay_butt')
    otzMain.classList.add('pay_oMain')
    otzTxt.classList.add('pay_oTxt')
    document.querySelector(".pay").style.padding = "20px"

    pathObj.textContent = path
    nameObj.textContent = name
    priceObj.textContent = `${price.toString().slice(0, Number(price.toString().length) - 3)} ${price.toString().slice(Number(price.toString().length) - 3)} ₽`
    priceObjInfa.textContent = `${price.toString().slice(0, Number(price.toString().length) - 3)} ${price.toString().slice(Number(price.toString().length) - 3)} ₽`
    oldpriceObj.textContent = `${oldprice.toString().slice(0, Number(oldprice.toString().length) - 3)} ${oldprice.toString().slice(Number(oldprice.toString().length) - 3)} ₽`
    skidkaObj.textContent = `${skidka}%`
    reviewObj.textContent = review
    starObj1.src = 'img/logo_tov/star_77949.png'
    starObj2.src = 'img/logo_tov/star_77949.png'
    starObj3.src = 'img/logo_tov/star_77949.png'
    starObj4.src = 'img/logo_tov/star_77949.png'
    closeObj.src = 'img/5968a2c8f2ed115d40bbe123.png'
    imgObj.src = img
    ases.textContent = '4 отзыва'
    skidkaInfo.textContent = '- скидка на данный товар'
    korzina.textContent = 'добавить в корзину'
    pay.textContent = 'купить сейчас'
    korzina.addEventListener('click', () => {
        window.localStorage.setItem(name, '')
        korzina.classList.remove("pay_korzina")
        korzina.textContent = 'Добавлено!'
        korzina.style.cssText = `
    border: none;
    color: white;
    background-color: #2c8312ff;
    width: 375px;
    font-weight: 700;
    font-size: 20px;
    height: 50px;
    margin-top: 20px;
    border-radius: 14px;
        `
    })


    for (let i in assessment) {
        otzUsername.push(document.createElement("p"))
        otzUsername[i].textContent = assessment[i]['name']
        otzText.push(document.createElement("p"))
        otzText[i].textContent = assessment[i]['review']

        otzUsername[i].classList.add('pay_oUser')


        otzInd.push(document.createElement("div"))
        otzInd[i].append(otzUsername[i])
        otzInd[i].append(otzText[i])
        otzMain.append(otzInd[i])
    }
    down.append(otzTxt)
    down.append(otzMain)


    oldprice_priceInformation.append(priceObjInfa)
    oldprice_priceInformation.append(oldpriceObj)
    skidka_priceInformation.append(skidkaObj)
    skidka_priceInformation.append(skidkaInfo)
    buttonclick.append(korzina)
    buttonclick.append(pay)



    asesObj.append(starObj1)
    asesObj.append(starObj2)
    asesObj.append(starObj3)
    asesObj.append(starObj4)
    asesObj.append(ases)
    buttonObj.append(buttonclick)
    priceInformation.append(priceObj)
    priceInformation.append(oldprice_priceInformation)
    priceInformation.append(skidka_priceInformation)



    infoObj.append(nameObj)
    infoObj.append(asesObj)
    infoObj.append(priceInformation)
    infoObj.append(buttonObj)

    top.append(pathObj)
    top.append(closeObj)
    bottom.append(imgObj)
    bottom.append(infoObj)

    document.querySelector(".pay").scrollIntoView()

    document.querySelector(".pay").append(top)
    document.querySelector(".pay").append(bottom)
    document.querySelector(".pay").append(down)

    closeObj.addEventListener('click', () => {
        document.querySelector(".pay").classList.add('hiden')

        for (let i in openObj) {
            openObj[i].classList.remove("hiden")
        }
        mainObj.scrollIntoView()
        top.remove()
        bottom.remove()
        down.remove()

    })
}


//
function generateCard(mainObj, divG, name, price, oldprice, img, review, ases) {
    const imgObj = document.createElement("img")
    const starObj = document.createElement("img")
    const nameObj = document.createElement("p")
    const priceObj = document.createElement("span")
    const oldpriceObj = document.createElement("span")
    const reviewObj = document.createElement("span")
    const skidkaObj = document.createElement("span")
    const pricePlan = document.createElement("div")
    const asesPlan = document.createElement("div")

    imgObj.src = img
    imgObj.classList.add("img")
    asesPlan.classList.add("asesPlan")
    starObj.src = "img/logo_tov/star_77949.png"
    starObj.classList.add("star")
    nameObj.textContent = name
    nameObj.classList.add("name")
    priceObj.textContent = `${price.toString().slice(0, Number(price.toString().length) - 3)} ${price.toString().slice(Number(price.toString().length) - 3)} ₽`


    priceObj.classList.add("price")
    oldpriceObj.textContent = `${oldprice.toString().slice(0, Number(oldprice.toString().length) - 3)} ${oldprice.toString().slice(Number(oldprice.toString().length) - 3)} ₽`
    oldpriceObj.classList.add("oldprice")
    reviewObj.textContent = review
    reviewObj.classList.add("review")
    skidkaObj.textContent = `-${Math.round((1 - (price / oldprice)) * 100)}%`
    skidkaObj.classList.add("skidka")


    mainObj.append(imgObj)
    pricePlan.append(priceObj)
    pricePlan.append(oldpriceObj)
    pricePlan.append(skidkaObj)
    asesPlan.append(starObj)
    asesPlan.append(reviewObj)

    mainObj.append(pricePlan)
    mainObj.append(nameObj)
    mainObj.append(asesPlan)

    const divObj = document.querySelector(divG)
    divObj.append(mainObj)

}


//
const tableCard =
{
    "Автотовары": {
        "Автоаксессуары": {
            "Антискользящий коврик для ног водителя": {
                "article": "334455667",
                "assessment": [
                    {
                        "name": "Новиков Роман",
                        "rating": 5,
                        "review": "Удобный коврик, предотвращает скольжение."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 4,
                        "review": "Качество хорошее, легко моется."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 5,
                        "review": "Компактный, не занимает много места."
                    },
                    {
                        "name": "Михайлов Максим",
                        "rating": 4,
                        "review": "Нормально, но материал немного грубый."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-c/wc500/6848234220.jpg",
                "oldprice": "900",
                "price": "600",
                "review": "4.3"
            },
            "Держатель для телефона на лобовое стекло": {
                "article": "112233445",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Надежный держатель, телефон не падает."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Легко крепится, хорошо держит."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 4,
                        "review": "Удобный для навигатора, не отвлекает."
                    },
                    {
                        "name": "Лебедева Светлана",
                        "rating": 5,
                        "review": "Качество отличное, служит уже год."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc1000/7266868164.jpg",
                "oldprice": "1200",
                "price": "800",
                "review": "4.5"
            },
            "Коврики автомобильные универсальные": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Иванов Алексей",
                        "rating": 5,
                        "review": "Хорошие коврики, легко чистятся и не скользят."
                    },
                    {
                        "name": "Петрова Мария",
                        "rating": 4,
                        "review": "Качество среднее, но цена выгодная."
                    },
                    {
                        "name": "Сидоров Дмитрий",
                        "rating": 5,
                        "review": "Подходят для моей машины, грязь не проходит."
                    },
                    {
                        "name": "Козлова Ольга",
                        "rating": 3,
                        "review": "Немного жесткие, но функциональные."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/8216725299.jpg",
                "oldprice": "2500",
                "price": "1500",
                "review": "4.2"
            },
            "Организатор багажника": {
                "article": "556677889",
                "assessment": [
                    {
                        "name": "Кузнецов Михаил",
                        "rating": 4,
                        "review": "Полезная вещь, все вещи на месте."
                    },
                    {
                        "name": "Алексеева Дарья",
                        "rating": 3,
                        "review": "Легкий и компактный, но сборка хромает."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Хороший организатор, упрощает жизнь."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 4,
                        "review": "Цена оправдана, но мог бы быть прочнее."
                    },
                    {
                        "name": "Егорова Валерия",
                        "rating": 3,
                        "review": "Не очень устойчивый, вещи падают."
                    }
                ],
                "country": "Вьетнам",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/8130484124.jpg",
                "oldprice": "2700",
                "price": "1800",
                "review": "3.9"
            },
            "Чехол на сиденье водителя": {
                "article": "987654321",
                "assessment": [
                    {
                        "name": "Никитина Анна",
                        "rating": 5,
                        "review": "Удобный чехол, легко одевается и снимается."
                    },
                    {
                        "name": "Федоров Сергей",
                        "rating": 4,
                        "review": "Материал прочный, сиденье выглядит как новое."
                    },
                    {
                        "name": "Захарова Елена",
                        "rating": 4,
                        "review": "Хороший, но цвет немного отличается от фото."
                    },
                    {
                        "name": "Морозов Павел",
                        "rating": 5,
                        "review": "Рекомендую, защищает от износа."
                    },
                    {
                        "name": "Волкова Наталья",
                        "rating": 3,
                        "review": "Нормально, но швы не очень ровные."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/7439120819.jpg",
                "oldprice": "3500",
                "price": "2200",
                "review": "4.0"
            }
        },
        "Автозапчасти": {
            "Аккумулятор автомобильный": {
                "article": "112233445",
                "assessment": [
                    {
                        "name": "Новиков Роман",
                        "rating": 5,
                        "review": "Надежный аккумулятор, долго держит заряд."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 5,
                        "review": "Качество отличное, легко заводится зимой."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 4,
                        "review": "Хороший, но вес большой."
                    },
                    {
                        "name": "Михайлов Максим",
                        "rating": 4,
                        "review": "Рекомендую, цена оправдана."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/7178458971.jpg",
                "oldprice": "7500",
                "price": "5000",
                "review": "4.4"
            },
            "Воздушный фильтр": {
                "article": "667788990",
                "assessment": [
                    {
                        "name": "Кузнецов Михаил",
                        "rating": 4,
                        "review": "Легко устанавливается, фильтрует хорошо."
                    },
                    {
                        "name": "Алексеева Дарья",
                        "rating": 4,
                        "review": "Материал плотный, но сборка простая."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Цена приемлемая, работает исправно."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 3,
                        "review": "Нормально, но мог бы быть эффективнее."
                    },
                    {
                        "name": "Егорова Валерия",
                        "rating": 3,
                        "review": "Не очень долговечный, быстро засоряется."
                    }
                ],
                "country": "Вьетнам",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/7895112817.jpg",
                "oldprice": "600",
                "price": "400",
                "review": "3.9"
            },
            "Масляный фильтр для двигателя": {
                "article": "445566778",
                "assessment": [
                    {
                        "name": "Иванов Алексей",
                        "rating": 5,
                        "review": "Хороший фильтр, легко меняется, не течет."
                    },
                    {
                        "name": "Петрова Мария",
                        "rating": 4,
                        "review": "Качество приемлемое, цена низкая."
                    },
                    {
                        "name": "Сидоров Дмитрий",
                        "rating": 5,
                        "review": "Подходит для моей машины, работает исправно."
                    },
                    {
                        "name": "Козлова Ольга",
                        "rating": 3,
                        "review": "Немного шумит, но в целом нормально."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7964371800.jpg",
                "oldprice": "450",
                "price": "300",
                "review": "4.1"
            },
            "Свечи зажигания": {
                "article": "778899001",
                "assessment": [
                    {
                        "name": "Никитина Анна",
                        "rating": 5,
                        "review": "Надежные свечи, двигатель заводится лучше."
                    },
                    {
                        "name": "Федоров Сергей",
                        "rating": 4,
                        "review": "Качество хорошее, долго служат."
                    },
                    {
                        "name": "Захарова Елена",
                        "rating": 4,
                        "review": "Удобная упаковка, легко устанавливать."
                    },
                    {
                        "name": "Морозов Павел",
                        "rating": 5,
                        "review": "Рекомендую, не подвели ни разу."
                    },
                    {
                        "name": "Волкова Наталья",
                        "rating": 4,
                        "review": "Цена выгодная, но могли бы быть оригинальнее."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-m/wc500/7141305622.jpg",
                "oldprice": "800",
                "price": "500",
                "review": "4.3"
            },
            "Тормозные колодки передние": {
                "article": "223344556",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Тормоза стали лучше, шум меньше."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Качество среднее, но износостойкие."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 4,
                        "review": "Подходят для моей модели, не скрипят."
                    },
                    {
                        "name": "Лебедева Светлана",
                        "rating": 3,
                        "review": "Хорошие, но цена высоковата."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-m/wc500/7420764694.jpg",
                "oldprice": "4000",
                "price": "2500",
                "review": "4.0"
            }
        },
        "Автохимия": {
            "Антифриз G11 синий": {
                "article": "443322110",
                "assessment": [
                    {
                        "name": "Никитина Анна",
                        "rating": 5,
                        "review": "Не замерзает зимой, система охлаждения в норме."
                    },
                    {
                        "name": "Федоров Сергей",
                        "rating": 4,
                        "review": "Качество среднее, но работает."
                    },
                    {
                        "name": "Захарова Елена",
                        "rating": 4,
                        "review": "Легко смешивается, нет осадка."
                    },
                    {
                        "name": "Морозов Павел",
                        "rating": 5,
                        "review": "Рекомендую для бюджетного ремонта."
                    },
                    {
                        "name": "Волкова Наталья",
                        "rating": 3,
                        "review": "Цвет яркий, но запах сильный."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-5/wc500/6063768317.jpg",
                "oldprice": "1200",
                "price": "800",
                "review": "4.0"
            },
            "Моторное масло синтетическое 5W-30": {
                "article": "998877665",
                "assessment": [
                    {
                        "name": "Иванов Алексей",
                        "rating": 5,
                        "review": "Хорошее масло, двигатель работает тихо."
                    },
                    {
                        "name": "Петрова Мария",
                        "rating": 4,
                        "review": "Качество на уровне, не густеет на холоде."
                    },
                    {
                        "name": "Сидоров Дмитрий",
                        "rating": 5,
                        "review": "Подходит для моей машины, расход нормальный."
                    },
                    {
                        "name": "Козлова Ольга",
                        "rating": 4,
                        "review": "Цена выгодная, но упаковка простая."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8155985302.jpg",
                "oldprice": "1800",
                "price": "1200",
                "review": "4.2"
            },
            "Тормозная жидкость DOT-4": {
                "article": "556677889",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Тормоза отзывчивые, без пузырей."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Качество хорошее, не кипит при нагреве."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 5,
                        "review": "Легко заливать, цена приемлемая."
                    },
                    {
                        "name": "Лебедева Светлана",
                        "rating": 4,
                        "review": "Работает исправно, но флакон маленький."
                    },
                    {
                        "name": "Кузнецов Михаил",
                        "rating": 5,
                        "review": "Надежная жидкость, рекомендую."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/8351150245.jpg",
                "oldprice": "700",
                "price": "450",
                "review": "4.3"
            }
        },
        "Аудио и видео": {
            "Автоколонки компонентные": {
                "article": "CAR-AUDIO-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Бас мощный, звук объемный в салоне."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Качество сборки хорошее, установка простая."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Не искажают на высокой громкости."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Цена приемлемая для такого качества."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-h/wc500/8194313141.jpg",
                "oldprice": "11000",
                "price": "8000",
                "review": "4.3"
            },
            "Автомагнитола с сенсорным экраном": {
                "article": "CAR-AUDIO-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Удобный интерфейс, поддержка Android Auto."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Звук чистый, но экран бликует на солнце."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Легко устанавливается, цена выгодная."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Хорошая интеграция с телефоном."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/7768936107.jpg",
                "oldprice": "20000",
                "price": "15000",
                "review": "4.4"
            },
            "Автомобильный монитор для задних сидений": {
                "article": "CAR-VIDEO-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Дети довольны, картинка четкая."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Легко крепить, но питание от прикуривателя."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Поддержка HDMI, качество хорошее."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 3,
                        "review": "Цена низкая, но экран маленький."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-d/wc500/6736538641.jpg",
                "oldprice": "9000",
                "price": "6000",
                "review": "4.0"
            },
            "Автомобильный сабвуфер": {
                "article": "CAR-AUDIO-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Бас глубокий, не вибрирует кузов."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Мощность высокая, но требует усилителя."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Звук потрясающий для музыки."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Компактный размер, легко разместить."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7711568669.jpg",
                "oldprice": "16000",
                "price": "12000",
                "review": "4.5"
            },
            "Видеорегистратор с GPS": {
                "article": "CAR-VIDEO-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Качество видео отличное, ночной режим работает."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Компактный, но батарея слабая."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "GPS точный, легко монтировать."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Запись плавная, рекомендую для безопасности."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8051553406.jpg",
                "oldprice": "7000",
                "price": "5000",
                "review": "4.2"
            }
        },
        "Безопасность": {
            "GPS-трекер для автомобиля": {
                "article": "CAR-SAFE-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Точное отслеживание, приложение удобное."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Помогает найти машину на парковке."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Батарея держит долго, но сигнал слабый в туннелях."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Дешево и эффективно для безопасности."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8325151066.jpg",
                "oldprice": "3500",
                "price": "2500",
                "review": "4.5"
            },
            "Автосигнализация с иммобилайзером": {
                "article": "CAR-SAFE-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Надежная защита, брелок удобный."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Дистанционный запуск двигателя полезный."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Не срабатывает ложных тревог."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Цена высокая, но качество оправдывает."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/7207521037.jpg",
                "oldprice": "11000",
                "price": "8000",
                "review": "4.3"
            },
            "Видеорегистратор с камерой заднего вида": {
                "article": "CAR-SAFE-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Отличное качество видео, помогает в спорах с ГИБДД."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Легко монтировать, ночной режим работает."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Цена выгодная, запись без сбоев."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Компактный, но батарея слабая."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7397286257.jpg",
                "oldprice": "6000",
                "price": "4500",
                "review": "4.4"
            },
            "Датчики парковки с камерой": {
                "article": "CAR-SAFE-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Звуковой сигнал точный, предотвращает царапины."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Камера четкая, но дальность датчиков средняя."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Легко устанавливать, цена приемлемая."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 5,
                        "review": "Помогает в тесных парковках."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/7384222287.jpg",
                "oldprice": "4500",
                "price": "3000",
                "review": "4.2"
            },
            "Камера кругового обзора": {
                "article": "CAR-SAFE-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Видимость 360 градусов, парковка легче."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Картинка четкая, но установка сложная."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 3,
                        "review": "Полезно в городе, но цена высокая."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Улучшает безопасность при движении задом."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/8012712362.jpg",
                "oldprice": "16000",
                "price": "12000",
                "review": "4.0"
            }
        },
        "Инструменты": {
            "Автомобильный компрессор": {
                "article": "CAR-TOOL-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Накачивает шины быстро, манометр точный."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Питание от прикуривателя, компактный."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Шумный, но эффективный."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Цена выгодная, батарея держит."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-m/wc500/7518403282.jpg",
                "oldprice": "2500",
                "price": "1800",
                "review": "4.3"
            },
            "Автомобильный пылесос": {
                "article": "CAR-TOOL-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Мощный, чистит салон быстро."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Компактный, но фильтр слабый."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Питание от сети, цена низкая."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 3,
                        "review": "Удобно хранить, но шумный."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/7600470186.jpg",
                "oldprice": "1800",
                "price": "1200",
                "review": "4.0"
            },
            "Гидравлический домкрат": {
                "article": "CAR-TOOL-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Надежный, поднимает машину быстро."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Компактный, но требует смазки."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Цена низкая, качество приемлемое."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 3,
                        "review": "Легко использовать, но тяжелый."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/8328146801.jpg",
                "oldprice": "3500",
                "price": "2500",
                "review": "4.2"
            },
            "Набор автомобильных инструментов": {
                "article": "CAR-TOOL-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Полный набор, все инструменты качественные."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Легко хранить в багажнике, цена выгодная."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 4,
                        "review": "Не хватает некоторых размеров, но в целом хорошо."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 5,
                        "review": "Удобный кейс, инструменты не ржавеют."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/7928746523.jpg",
                "oldprice": "5000",
                "price": "3500",
                "review": "4.4"
            },
            "Пускозарядное устройство": {
                "article": "CAR-TOOL-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Запускает двигатель с разряженного аккумулятора."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Мощный, но тяжелый для переноски."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Индикаторы удобные, цена оправдана."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Сохраняет заряд, рекомендую."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/7634132756.jpg",
                "oldprice": "6500",
                "price": "4500",
                "review": "4.5"
            }
        },
        "Мототехника": {
            "Мотоциклетная куртка с защитой": {
                "article": "MOTO-GEAR-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Материал прочный, защита от падений."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Водонепроницаемая, но жесткая на ощупь."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Размеры точные, вентиляция отличная."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Цена оправдана качеством."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-q/wc500/7348437998.jpg",
                "oldprice": "16000",
                "price": "12000",
                "review": "4.4"
            },
            "Мотоциклетные ботинки": {
                "article": "MOTO-GEAR-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Защита голеностопа надежная."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Комфортные, но тяжелые."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Водостойкие, подошва цепкая."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Размер в размер, качество топ."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/8379147051.jpg",
                "oldprice": "11000",
                "price": "8000",
                "review": "4.5"
            },
            "Мотоциклетные перчатки": {
                "article": "MOTO-GEAR-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Удобные, не скользят на руле."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Защита пальцев хорошая, но тонкие."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Цвет яркий, видно на дороге."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Дешево и практично."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-i/wc500/7941259890.jpg",
                "oldprice": "3500",
                "price": "2500",
                "review": "4.3"
            },
            "Мотоциклетный интерком": {
                "article": "MOTO-GEAR-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Связь четкая, батарея держит долго."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Шумоподавление работает, но настройка сложная."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Подходит для группы, цена приемлемая."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 3,
                        "review": "Качество звука хорошее, но водонепроницаемость слабая."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/8366912001.jpg",
                "oldprice": "6000",
                "price": "4500",
                "review": "4.2"
            },
            "Мотоциклетный шлем с визором": {
                "article": "MOTO-GEAR-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Отличная вентиляция, комфорт на длинных поездках."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 5,
                        "review": "Вес легкий, дизайн стильный."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 4,
                        "review": "Защита хорошая, но цена высокая."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 5,
                        "review": "Визор не запотевает, рекомендую."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/8183975005.jpg",
                "oldprice": "7500",
                "price": "5500",
                "review": "4.6"
            }
        },
        "Навигация": {
            "Автомобильный GPS-навигатор": {
                "article": "NAV-AUTO-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Точные маршруты, обновления карт бесплатные."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Экран яркий, но глючит при сильном солнце."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 4,
                        "review": "Голосовые подсказки четкие, цена выгодная."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 5,
                        "review": "Прост в установке, держит заряд долго."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-2/wc500/8361315722.jpg",
                "oldprice": "11000",
                "price": "8000",
                "review": "4.2"
            },
            "Интеллектуальный автомобильный навигатор": {
                "article": "NAV-AUTO-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "ИИ предлагает альтернативные маршруты."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Интеграция с камерой заднего вида."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Шумоподавление отличное, но дорого."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Технологии на уровне, батарея мощная."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7724827821.jpg",
                "oldprice": "22000",
                "price": "18000",
                "review": "4.5"
            },
            "Навигатор с картами России": {
                "article": "NAV-AUTO-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Карты точные для российских дорог."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Информация о пробках полезная."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Установка простая, но размер экрана мал."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Надежный, рекомендую для поездок."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-9/wc500/6725750517.jpg",
                "oldprice": "8500",
                "price": "6500",
                "review": "4.3"
            },
            "Навигатор с сенсорным экраном": {
                "article": "NAV-AUTO-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Быстрый поиск, интеграция с телефоном."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Экран чувствительный, но нагревается."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Обновления регулярные, качество звука подсказок."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Цена высокая, но функционал богатый."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7334748641.jpg",
                "oldprice": "15000",
                "price": "12000",
                "review": "4.4"
            },
            "Портативный автомобильный навигатор": {
                "article": "NAV-AUTO-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Компактный, легко переносить."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Карты детальные, но интерфейс устаревший."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 3,
                        "review": "Батарея слабая, но точность хорошая."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 5,
                        "review": "Дешево и практично для города."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/7525597081.jpg",
                "oldprice": "6000",
                "price": "4500",
                "review": "4.0"
            }
        },
        "Уход за авто": {
            "Автомобильный воск для полировки": {
                "article": "CARE-AUTO-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Блеск отличный, легко наносится."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 5,
                        "review": "Запах приятный, держится долго."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 4,
                        "review": "Цена приемлемая, качество хорошее."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Не оставляет разводов, рекомендую."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7296156123.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.4"
            },
            "Антидождь для стекол автомобиля": {
                "article": "CARE-AUTO-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Вода скатывается, видимость улучшается."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Долговечное покрытие, легко наносить."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Цена оправдана, работает в дождь."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Безопасно для стекол, эффект wow."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-q/wc500/7810525934.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.5"
            },
            "Средство для ухода за шинами": {
                "article": "CARE-AUTO-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Шины блестят, защита от трещин."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Легко наносится, держится неделю."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 3,
                        "review": "Запах резкий, но эффект заметный."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Бюджетный вариант, рекомендую."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7883678136.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.1"
            },
            "Средство для чистки салона авто": {
                "article": "CARE-AUTO-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Удаляет пятна эффективно."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Безопасно для тканей, запах нейтральный."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Экономично расходуется, но пена слабая."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 5,
                        "review": "Дешево и практично для регулярной уборки."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/8309248305.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.2"
            },
            "Шампунь для мойки автомобиля": {
                "article": "CARE-AUTO-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Пена обильная, смывается легко."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Не царапает краску, запах свежий."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Цена низкая, результат хороший."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Подходит для всех типов кузова."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-4/wc500/7982091004.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.3"
            }
        },
        "Шины и диски": {
            "Восстановитель шин и герметик": {
                "article": "TIRES-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Быстро ремонтирует проколы."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Легко использовать, спасает в дороге."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Дешево, но не для больших дыр."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Полезная вещь в багажнике."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/7725246010.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.0"
            },
            "Зимние шины с шипами": {
                "article": "TIRES-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Отличное сцепление на льду, надежные."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Шипы не теряются, но шумные."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Долговечные, цена оправдана."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Легко монтируются, рекомендую."
                    }
                ],
                "country": "Финляндия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/8177580317.jpg",
                "oldprice": "15000",
                "price": "12000",
                "review": "4.5"
            },
            "Комплект шин и дисков": {
                "article": "TIRES-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Все подходит, экономия на покупке."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Шины хорошие, диски стильные."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Монтаж включен, но вес большой."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Цена выгодная, рекомендую."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7078160973.jpg",
                "oldprice": "30000",
                "price": "25000",
                "review": "4.2"
            },
            "Легкосплавные диски для авто": {
                "article": "TIRES-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Красивый дизайн, легкие и прочные."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Не ржавеют, но дорогие."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Хорошо балансируются, качество сборки."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Внешний вид улучшает авто."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-j/wc500/6860192851.jpg",
                "oldprice": "20000",
                "price": "15000",
                "review": "4.3"
            },
            "Летние шины для автомобиля": {
                "article": "TIRES-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Хорошее сцепление на сухой дороге, тихие."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Износостойкие, цена приемлемая."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 4,
                        "review": "Шум минимальный, но в дождь скользко."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 5,
                        "review": "Рекомендую для города, качество отличное."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/7105081525.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.4"
            }
        }
    },
    "Детские товары": {
        "Безопасность": {
            "Ворота безопасности для лестницы": {
                "article": "SAFETY-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Прочные, легко устанавливаются, ребенок в безопасности."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Не царапают стены, удобно снимать."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 4,
                        "review": "Бюджетный вариант, работает отлично."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 5,
                        "review": "Надежные, рекомендую для малышей."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/7748062305.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.3"
            },
            "Детский видеомонитор с камерой": {
                "article": "SAFETY-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Хорошая картинка ночью, звук четкий."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Дальность большая, удобно следить."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Батарейка долго держит, но цена кусается."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Родителям спокойствие, ребенок спит хорошо."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-n/wc500/6380698979.jpg",
                "oldprice": "6000",
                "price": "5000",
                "review": "4.2"
            },
            "Заглушки для электрических розеток": {
                "article": "SAFETY-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 4,
                        "review": "Легко вставляются, надежная защита."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Дешевые, но ребенок может вытащить."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Обязательны для дома, спасают от беды."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Качество хорошее, рекомендую."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/7114765478.jpg",
                "oldprice": "300",
                "price": "200",
                "review": "4.0"
            },
            "Замки безопасности для шкафов и ящиков": {
                "article": "SAFETY-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Легко клеятся, держат крепко, не портят мебель."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Эффективные, ребенок не открывает."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 3,
                        "review": "Дешево, но для умных детей может не хватить."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Полезно в доме, спокойно за ребенка."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-q/wc500/7387424954.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.1"
            },
            "Защитные накладки на углы столов": {
                "article": "SAFETY-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Мягкие, хорошо держатся, ребенок не ушибется."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Легко клеятся, дизайн незаметный."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Цена низкая, но для острых углов идеально."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 5,
                        "review": "Спасли от синяков, спасибо."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/7678041688.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.2"
            }
        },
        "Гигиена": {
            "Влажные салфетки для детей": {
                "article": "HYGIENE-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Без запаха, мягкие, удобно в сумке."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Не сушат кожу, гипоаллергенные."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Цена приемлемая, хватает надолго."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 5,
                        "review": "Для смены подгузников идеально."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7339913265.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.3"
            },
            "Детская зубная паста": {
                "article": "HYGIENE-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Вкус фруктовый, ребенок чистит зубы с удовольствием."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Без фтора, безопасно для малышей."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Пена нежная, не вызывает аллергии."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Качество хорошее, цена доступная."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/7663558312.jpg",
                "oldprice": "200",
                "price": "150",
                "review": "4.1"
            },
            "Детский крем от опрелостей": {
                "article": "HYGIENE-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Быстро впитывается, успокаивает кожу."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Без парабенов, безопасно для ребенка."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Помогает при раздражениях, рекомендую."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Цена низкая, эффект заметный."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/7809357447.jpg",
                "oldprice": "500",
                "price": "400",
                "review": "4.2"
            },
            "Детский шампунь без слез": {
                "article": "HYGIENE-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Не щиплет глаза, пенится хорошо."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Запах приятный, кожа не сохнет."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Экономно расходуется, для малышей."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Качество хорошее, покупаю снова."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/7227516541.jpg",
                "oldprice": "350",
                "price": "250",
                "review": "4.4"
            },
            "Подгузники для новорожденных": {
                "article": "HYGIENE-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Мягкие, впитывают хорошо, без раздражения."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Экономичны, ребенок спит спокойно."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Качество отличное, рекомендую."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Легко надеваются, держат долго."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/8330605681.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.5"
            }
        },
        "Детская мебель": {
            "Детская кроватка с бортиками": {
                "article": "FURNITURE-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Прочная, легко разбирается, ребенок спит спокойно."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Дизайн стильный, материал безопасный."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Удобно убирать, рекомендую для новорожденных."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена высокая, но качество оправдывает."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/7201227973.jpg",
                "oldprice": "18000",
                "price": "15000",
                "review": "4.5"
            },
            "Детский письменный стол и стул": {
                "article": "FURNITURE-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Эргономичный, ребенок рисует с удовольствием."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Прочный, выдерживает нагрузку, дизайн яркий."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Легко собирается, для школьников подойдет."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Качество материалов хорошее, рекомендую."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7552016692.jpg",
                "oldprice": "15000",
                "price": "12000",
                "review": "4.2"
            },
            "Детский стульчик для кормления": {
                "article": "FURNITURE-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Съемный поднос, легко мыть, ребенок сидит удобно."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Регулируется высота, безопасно для малышей."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Компактный, складывается, экономит место."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Цена приемлемая, качество отличное."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-2/wc500/7709272490.jpg",
                "oldprice": "6000",
                "price": "5000",
                "review": "4.4"
            },
            "Комод для детской комнаты": {
                "article": "FURNITURE-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Много ящиков, удобно хранить вещи."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Стильно смотрится, легко чистить."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Прочный, не шатается, для игрушек идеально."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Качество хорошее, сборка простая."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7886088048.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.3"
            },
            "Шкаф для детской одежды": {
                "article": "FURNITURE-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Много полок, удобно вешать одежду."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Компактный, не занимает много места."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 5,
                        "review": "Материал экологичный, запаха нет."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена высокая, но функциональность на уровне."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/7512206749.jpg",
                "oldprice": "22000",
                "price": "18000",
                "review": "4.1"
            }
        },
        "Игрушки": {
            "Конструктор Lego": {
                "article": "TOYS-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Развивает фантазию, ребенок строит часами."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Детали качественные, не ломаются."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Для мальчиков и девочек, универсально."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Цена высокая, но стоит того."
                    }
                ],
                "country": "Дания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-n/wc500/7669867883.jpg",
                "oldprice": "4000",
                "price": "3000",
                "review": "4.3"
            },
            "Кукла Barbie": {
                "article": "TOYS-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Красивая, с аксессуарами, дочь в восторге."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Материал безопасный, легко мыть."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Развивает ролевые игры, рекомендую."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Качество хорошее, цена приемлемая."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/8049194737.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.4"
            },
            "Машинка на радиоуправлении": {
                "article": "TOYS-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Быстрая, батарея держит долго."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Сын гоняет по квартире, весело."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Управление простое, для детей от 5 лет."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Цена снизилась, купила в подарок."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/8365522663.jpg",
                "oldprice": "5000",
                "price": "4000",
                "review": "4.2"
            },
            "Пазл 500 элементов": {
                "article": "TOYS-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Картинка красивая, собираем всей семьей."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Развивает терпение, ребенок гордится."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Качество кусочков хорошее, не крошатся."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена низкая, для развития ума идеально."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/7324496036.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.1"
            },
            "Плюшевый медвежонок": {
                "article": "TOYS-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Мягкий, ребенок обожает, спит с ним."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Качество отличное, не линяет, рекомендую."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Размер удобный, для объятий идеально."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена снизилась, купила сразу."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7439272553.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.5"
            }
        },
        "Коляски": {
            "Беговая коляска": {
                "article": "STROLLER-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Для бега идеальна, амортизация отличная."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Легкая, ребенок не трясется на неровностях."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Скорость регулируется, безопасно."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Купила для активного образа жизни, довольна."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/8080095436.jpg",
                "oldprice": "25000",
                "price": "20000",
                "review": "4.4"
            },
            "Двойная коляска": {
                "article": "STROLLER-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Для двоих детей, удобно в парке."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Широкая, дети сидят рядом, весело."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Складывается легко, экономит место."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Цена высока, но функциональность оправдывает."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/7848557031.jpg",
                "oldprice": "50000",
                "price": "45000",
                "review": "4.2"
            },
            "Классическая детская коляска": {
                "article": "STROLLER-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Легкая, складывается одной рукой, ребенок спит комфортно."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Колеса большие, легко катить по неровностям."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Качество материалов отличное, рекомендую."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена снизилась, купила для прогулок."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/8302600231.jpg",
                "oldprice": "30000",
                "price": "25000",
                "review": "4.5"
            },
            "Коляска для новорожденных": {
                "article": "STROLLER-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Мягкая корзина, ребенок лежит ровно."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "С капюшоном от солнца, безопасно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Легко чистить, материал дышащий."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Качество отличное, для первых прогулок."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8008262182.jpg",
                "oldprice": "35000",
                "price": "30000",
                "review": "4.1"
            },
            "Коляска-трансформер": {
                "article": "STROLLER-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "От рождения до 3 лет, очень удобная."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Превращается в прогулку, ребенок сидит лицом вперед."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Складывается компактно, помещается в багажник."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Качество хорошее, но цена высокая."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/8160752816.jpg",
                "oldprice": "40000",
                "price": "35000",
                "review": "4.3"
            }
        },
        "Обувь": {
            "Детские босоножки": {
                "article": "SHOES-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Легкие, для лета идеально, дочь любит."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Крепкие застежки, не слетают."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Цвет яркий, ребенок радуется."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Купила по акции, довольна покупкой."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7972826888.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.4"
            },
            "Детские ботинки": {
                "article": "SHOES-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Утепленные, для холодов подходят."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Сын носит в школу, удобные."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Шнуровка надежная, не развязываются."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Качество материалов на высоте."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-v/wc500/7903363423.jpg",
                "oldprice": "4500",
                "price": "3500",
                "review": "4.2"
            },
            "Детские кроссовки": {
                "article": "SHOES-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Комфортные, ребенок бегает весь день без усталости."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Качество отличное, не скользят, рекомендую."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Размер подошел идеально, легкие."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена снизилась, купила на осень."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/7434908133.jpg",
                "oldprice": "4000",
                "price": "3000",
                "review": "4.5"
            },
            "Детские сапоги": {
                "article": "SHOES-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Водонепроницаемые, для дождливой погоды."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Теплые, ребенок не мерзнет зимой."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Материал мягкий, легко надевать."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Качество хорошее, но цена могла быть ниже."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-i/wc500/7668889578.jpg",
                "oldprice": "3200",
                "price": "2500",
                "review": "4.3"
            },
            "Детские тапочки": {
                "article": "SHOES-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Мягкие, для дома идеально."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Не скользят, ребенок бегает безопасно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Цвета яркие, легко стирать."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена низкая, качество хорошее."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7785437227.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.1"
            }
        },
        "Одежда": {
            "Детская куртка": {
                "article": "CLOTH-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Водонепроницаемая, для дождя идеально."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Легкая, ребенок двигается свободно."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Молнии крепкие, не ломаются."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Качество хорошее, рекомендую."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7135204156.jpg",
                "oldprice": "3200",
                "price": "2500",
                "review": "4.3"
            },
            "Детская пижама": {
                "article": "CLOTH-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Мягкая, ребенок спит спокойно."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Удобная, легко надевать."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Цвета милые, стирается хорошо."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена доступная, качество на уровне."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7478038891.jpg",
                "oldprice": "1300",
                "price": "1000",
                "review": "4.1"
            },
            "Детская футболка": {
                "article": "CLOTH-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Цвет яркий, дочь любит."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Ткань мягкая, комфортно."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Легко стирать, не мнется."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Качество материалов хорошее."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/8308299637.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.2"
            },
            "Детские штаны": {
                "article": "CLOTH-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Удобные, сын носит в сад."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Материал дышащий, не потеет."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Карманы практичные, ребенок радуется."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Купила по акции, довольна."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7984509372.jpg",
                "oldprice": "1600",
                "price": "1200",
                "review": "4.4"
            },
            "Детский комбинезон": {
                "article": "CLOTH-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Теплый, ребенок не мерзнет на прогулке."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Качество ткани отличное, легко стирать."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Размер подошел, удобный капюшон."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена снизилась, купила на зиму."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/8320454751.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.5"
            }
        },
        "Питание": {
            "Детская каша": {
                "article": "NUTR-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Быстро готовится, питательная."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Без сахара, полезно для здоровья."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Вкусная, ребенок ест с удовольствием."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Упаковка удобная, хранится долго."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/8373013579.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.3"
            },
            "Детская смесь": {
                "article": "NUTR-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Ребенок хорошо усваивает, без аллергии."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Удобно готовить, вкус нравится малышу."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Качество высокое, рекомендую."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена приемлемая, купила по акции."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-q/wc500/8362087514.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.5"
            },
            "Детский йогурт": {
                "article": "NUTR-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Полезный, с пробиотиками."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Вкус сладкий, без добавок."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Удобная упаковка, не проливается."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Качество хорошее, покупаю регулярно."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7084268492.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.2"
            },
            "Детский сок": {
                "article": "NUTR-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Натуральный, без консервантов."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Витаминный, полезно для иммунитета."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Маленькие порции, удобно."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена низкая, качество приемлемое."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7361858972.jpg",
                "oldprice": "500",
                "price": "400",
                "review": "4.1"
            },
            "Детское пюре": {
                "article": "NUTR-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Натуральные ингредиенты, вкусно."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Легко открывать, удобно кормить."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Разнообразие вкусов, ребенок радуется."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Купила оптом, цена выгодная."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7997432128.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.4"
            }
        },
        "Творчество": {
            "Краски акриловые": {
                "article": "CREAT-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Быстро сохнут, яркие оттенки."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Удобные тюбики, не проливается."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Ребенок создает шедевры, радуется."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Купила по акции, довольна."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/7308637698.jpg",
                "oldprice": "1600",
                "price": "1200",
                "review": "4.4"
            },
            "Набор для лепки": {
                "article": "CREAT-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Разнообразные формы, развивает фантазию."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Безопасно, легко мыть."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Цвета яркие, ребенок в восторге."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена доступная, качество на уровне."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7992560818.jpg",
                "oldprice": "1400",
                "price": "1100",
                "review": "4.1"
            },
            "Набор для рисования": {
                "article": "CREAT-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Много цветов, ребенок рисует часами."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Качество красок отличное, не размазывается."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Удобный набор, легко хранить."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена снизилась, купила на день рождения."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7420817052.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.5"
            },
            "Пластилин": {
                "article": "CREAT-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Не липнет к рукам, яркие цвета."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Мягкий, легко лепить фигурки."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Без запаха, безопасно для детей."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Качество хорошее, рекомендую."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7588749535.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.3"
            },
            "Цветные карандаши": {
                "article": "CREAT-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Много цветов, острые грифели."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Не ломаются, удобно держать."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Качество материалов хорошее."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Цвета насыщенные, ребенок любит."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7396146664.jpg",
                "oldprice": "1200",
                "price": "900",
                "review": "4.2"
            }
        },
        "Товары для школы": {
            "Краски акриловые": {
                "article": "CREAT-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Быстро сохнут, яркие оттенки."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Удобные тюбики, не проливается."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Ребенок создает шедевры, радуется."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Купила по акции, довольна."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/7308637698.jpg",
                "oldprice": "1600",
                "price": "1200",
                "review": "4.4"
            },
            "Набор для лепки": {
                "article": "CREAT-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Разнообразные формы, развивает фантазию."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Безопасно, легко мыть."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Цвета яркие, ребенок в восторге."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Цена доступная, качество на уровне."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7992560818.jpg",
                "oldprice": "1400",
                "price": "1100",
                "review": "4.1"
            },
            "Набор для рисования": {
                "article": "CREAT-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Много цветов, ребенок рисует часами."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Качество красок отличное, не размазывается."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Удобный набор, легко хранить."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена снизилась, купила на день рождения."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7420817052.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.5"
            },
            "Пластилин": {
                "article": "CREAT-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Не липнет к рукам, яркие цвета."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Мягкий, легко лепить фигурки."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Без запаха, безопасно для детей."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Качество хорошее, рекомендую."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7588749535.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.3"
            },
            "Цветные карандаши": {
                "article": "CREAT-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Много цветов, острые грифели."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Не ломаются, удобно держать."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Качество материалов хорошее."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Цвета насыщенные, ребенок любит."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/8185754055.jpg",
                "oldprice": "1200",
                "price": "900",
                "review": "4.2"
            }
        }
    },
    "Дом и сад": {
        "Бытовая техника": {
            "Микроволновая печь": {
                "article": "HOME-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Разогревает равномерно, вкусно."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Много режимов, для разных блюд."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Легко чистить, поверхность гладкая."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Компактная, не занимает много места."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-v/wc500/7647696931.jpg",
                "oldprice": "15000",
                "price": "12000",
                "review": "4.3"
            },
            "Пылесос": {
                "article": "HOME-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Мощный всасывание, убирает пыль идеально."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Легкий, удобно маневрировать."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Шумит не сильно, для дома подходит."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Фильтр HEPA, аллергикам в радость."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/8374418511.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.6"
            },
            "Садовый измельчитель": {
                "article": "HOME-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Измельчает ветки быстро, без усилий."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Шумный, но эффективный для сада."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Прочная конструкция, не ломается."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Удобно хранить компост."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/7417387055.jpg",
                "oldprice": "18000",
                "price": "15000",
                "review": "4.5"
            },
            "Электрический гриль": {
                "article": "HOME-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Жарит мясо без масла, полезно."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Регулировка температуры удобная."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Легко мыть, антипригарное покрытие."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для пикников на даче — идеально."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/8376455595.jpg",
                "oldprice": "6500",
                "price": "5000",
                "review": "4.2"
            },
            "Электрический чайник": {
                "article": "HOME-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Быстро закипает, экономит время."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Автоотключение, безопасно."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Красивый дизайн, подходит к интерьеру."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 5,
                        "review": "Качество металла отличное, не царапается."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/7403069193.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.4"
            }
        },
        "Декор": {
            "Ваза": {
                "article": "DECOR-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Элегантная форма, для цветов идеально."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Стекло прозрачное, легко мыть."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Не скользит, устойчивая на столе."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Цена доступная, качество отличное."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/8346185376.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.3"
            },
            "Зеркало": {
                "article": "DECOR-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Рама стильная, увеличивает пространство."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "Стекло без искажений, четкое отражение."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 5,
                        "review": "Легко вешать, крепления надежные."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для прихожей — идеальный выбор."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8315194690.jpg",
                "oldprice": "5500",
                "price": "4500",
                "review": "4.6"
            },
            "Картина": {
                "article": "DECOR-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Красивый пейзаж, отлично вписывается в интерьер."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Качество печати высокое, цвета яркие."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Рама прочная, не царапается."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Повесила в гостиной, гости хвалят."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-h/wc500/8107517681.jpg",
                "oldprice": "4500",
                "price": "3500",
                "review": "4.5"
            },
            "Коврик": {
                "article": "DECOR-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Мягкий, приятно ходить босиком."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Не скользит, антискользящая основа."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Цвета не выгорают на солнце."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Компактный, легко стирать."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7750719799.jpg",
                "oldprice": "2500",
                "price": "2000",
                "review": "4.2"
            },
            "Подсвечник": {
                "article": "DECOR-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Металл тяжелый, не падает."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Дизайн минималистичный, подходит к любому стилю."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Создает уютный свет, рекомендую."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Купила для вечеринок, всем нравится."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7250836944.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.4"
            }
        },
        "Инструменты": {
            "Дрель": {
                "article": "TOOL-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Мощная, сверлит бетон легко."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Шум не сильный, для квартиры подходит."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Регулировка скорости удобная."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Комплект бит включен, экономит."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8346597310.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.6"
            },
            "Молоток": {
                "article": "TOOL-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Прочная ручка, не скользит в руке."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Легкий, удобно забивать гвозди."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Сталь качественная, не гнется."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Цена низкая, качество отличное."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-m/wc500/8284375678.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.5"
            },
            "Отвертка": {
                "article": "TOOL-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Набор с разными насадками, удобно."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Ручка эргономичная, не устает рука."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Магнитная, винты не теряются."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Для ремонта дома — идеально."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7350587381.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.3"
            },
            "Плоскогубцы": {
                "article": "TOOL-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Режут провода без усилий."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Ручки изолированные, безопасно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Компактные, помещаются в карман."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Качество металла высокое, не тупятся."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7887081331.jpg",
                "oldprice": "550",
                "price": "400",
                "review": "4.2"
            },
            "Уровень": {
                "article": "TOOL-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Пузырек четкий, точные измерения."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Длина 60 см, для стен подходит."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Легкий, не устает рука при работе."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Для ремонта — незаменимый инструмент."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/7796891606.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.4"
            }
        },
        "Кухонная утварь": {
            "Контейнер для хранения": {
                "article": "KITCHEN-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Пластик пищевой, герметичный."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Удобно брать на пикник в сад."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Легко мыть, не впитывает запахи."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Разные размеры, для разных продуктов."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/8346149530.jpg",
                "oldprice": "500",
                "price": "400",
                "review": "4.4"
            },
            "Набор для барбекю": {
                "article": "KITCHEN-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Шпагаты, щипцы и лопатка — все в комплекте."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Металл не нагревается, безопасно."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Для садовых вечеринок — незаменимо."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Качество высокое, долго служит."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7319480808.jpg",
                "oldprice": "3200",
                "price": "2500",
                "review": "4.6"
            },
            "Нож кухонный": {
                "article": "KITCHEN-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Острая заточка, удобно резать овощи и фрукты."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Лезвие из нержавеющей стали, не ржавеет."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Ручка эргономичная, не скользит в руке."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Идеально для пикников в саду."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-4/wc500/8343785740.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.5"
            },
            "Разделочная доска": {
                "article": "KITCHEN-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Дерево прочное, не впитывает запахи."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Легко мыть, подходит для мяса и овощей."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Компактная, удобно хранить."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Для кухни и барбекю — отличный выбор."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/7590756501.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.3"
            },
            "Термос": {
                "article": "KITCHEN-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Держит тепло долго, для чая на даче."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Нержавейка внутри, безопасно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Компактный, помещается в сумку."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для кухни и сада — универсальный."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-2/wc500/8253936866.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.2"
            }
        },
        "Мебель": {
            "Гамак": {
                "article": "FURN-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Ткань прочная, выдерживает вес до 150 кг."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Легко вешать, для отдыха в саду."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Комфортно лежать, не качается сильно."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Цвет яркий, украшает двор."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/7684561393.jpg",
                "oldprice": "4000",
                "price": "3000",
                "review": "4.6"
            },
            "Садовый стол": {
                "article": "FURN-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Прочная конструкция, выдерживает вес."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Легко складывается, удобно хранить."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Дерево устойчиво к погоде."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Идеально для пикников в саду."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/7831806222.jpg",
                "oldprice": "6500",
                "price": "5000",
                "review": "4.5"
            },
            "Садовый стул": {
                "article": "FURN-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Комфортная спинка, удобно сидеть."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Легкий, легко переносить."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Материал не нагревается на солнце."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Для террасы — отличный выбор."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7831538686.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.3"
            },
            "Скамейка": {
                "article": "FURN-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Длина 2 м, помещается вся семья."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Дерево обработано, не гниет."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Устойчивая, не шатается."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Для беседок в саду — идеально."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7657632843.jpg",
                "oldprice": "5000",
                "price": "4000",
                "review": "4.4"
            },
            "Шезлонг": {
                "article": "FURN-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Регулируется наклон, удобно загорать."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Легкий алюминий, переносной."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Ткань водостойкая, для бассейна."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для отдыха дома и в саду — универсальный."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7941891333.jpg",
                "oldprice": "3200",
                "price": "2500",
                "review": "4.2"
            }
        },
        "Посуда": {
            "Бокал для вина": {
                "article": "DISH-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Хрусталь прозрачный, блестит красиво."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Форма удобная, вино раскрывается лучше."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Тонкие стенки, элегантно."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Для романтических ужинов — идеально."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/7260129867.jpg",
                "oldprice": "550",
                "price": "400",
                "review": "4.4"
            },
            "Салатница": {
                "article": "DISH-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Большой объем, для большой семьи."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Стекло ударопрочное, не разбивается."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Крышка плотно закрывается."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для салатов и закусок — удобно."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-i/wc500/8256079818.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.2"
            },
            "Столовый набор": {
                "article": "DISH-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Ножи острые, вилки удобные."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Нержавеющая сталь, не ржавеет."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Для 4 человек, полный комплект."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Легко чистить, в посудомоечной машине."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/7490673901.jpg",
                "oldprice": "1600",
                "price": "1200",
                "review": "4.6"
            },
            "Тарелка обеденная": {
                "article": "DISH-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Керамика качественная, не бьется легко."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Дизайн простой, подходит для повседневного использования."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Легко мыть, не впитывает запахи."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Для семейных обедов — идеально."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/7489029755.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.5"
            },
            "Чашка кофе": {
                "article": "DISH-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Фарфор тонкий, держит тепло долго."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Удобная ручка, не обжигает."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Для утреннего кофе — незаменима."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Цвет яркий, радует глаз."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/7634210732.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.3"
            }
        },
        "Садовый инвентарь": {
            "Вилы садовые": {
                "article": "GARDEN-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Широкие зубья, для компоста."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Прочные, не ломаются."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Для перекопки — удобно."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Легко чистить после использования."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7804165817.jpg",
                "oldprice": "1300",
                "price": "1000",
                "review": "4.4"
            },
            "Грабли садовые": {
                "article": "GARDEN-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Металлические зубья, хорошо собирают листья."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Длинная ручка, удобно работать стоя."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Легкие, не устают руки."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Для осенней уборки — незаменимы."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/8160767717.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.5"
            },
            "Лейка садовая": {
                "article": "GARDEN-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Большой объем, хватает на весь сад."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Насадка регулирует струю."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Пластик прочный, не трескается."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для полива цветов — идеально."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-m/wc500/8338101034.jpg",
                "oldprice": "900",
                "price": "700",
                "review": "4.2"
            },
            "Лопата садовая": {
                "article": "GARDEN-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Острое лезвие, легко входит в землю."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Прочная ручка, не скользит."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Для посадки растений — идеально."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Не гнется, выдерживает нагрузку."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/8301768213.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.3"
            },
            "Тяпка": {
                "article": "GARDEN-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Острая, рыхлит почву быстро."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Легкая, для длительной работы."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Убирает сорняки без усилий."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Эргономичная ручка, комфортно."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-h/wc500/7447606865.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.6"
            }
        },
        "Текстиль": {
            "Коврик для ванной": {
                "article": "TEXT-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Антискользящий, безопасно."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Впитывает воду, не скользит."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Мягкий, приятно ногам."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Легко чистить, в стиральной машине."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8230674970.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.2"
            },
            "Полотенце банное": {
                "article": "TEXT-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Впитывает воду быстро, не линяет."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Мягкое на ощупь, комфортно."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Размер большой, для взрослых."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "После стирки остается пушистым."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7946023623.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.3"
            },
            "Постельное белье": {
                "article": "TEXT-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Хлопок мягкий, приятно спать."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Размер стандартный, подходит на кровать."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Не мнется, легко стирать."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Для семейного отдыха — идеально."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/8080046150.jpg",
                "oldprice": "3200",
                "price": "2500",
                "review": "4.5"
            },
            "Скатерть": {
                "article": "TEXT-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Ткань плотная, не пропускает воду."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Дизайн элегантный, для праздников."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Легко гладить, не мнется."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Для стола на 6 человек — удобно."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-v/wc500/8294359783.jpg",
                "oldprice": "1100",
                "price": "800",
                "review": "4.6"
            },
            "Шторы": {
                "article": "TEXT-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Ткань светонепроницаемая, хорошо затемняет."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Длина регулируется, легко вешать."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Цвет не выгорает на солнце."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Для спальни — уютно."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/7641452669.jpg",
                "oldprice": "2000",
                "price": "1500",
                "review": "4.4"
            }
        },
        "Хранение вещей": {
            "Корзина для белья": {
                "article": "STORE-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "С вентиляцией, вещи не пахнут."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Колеса для передвижения, удобно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Размер средний, для ванной."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Материал прочный, не рвется."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8152489342.jpg",
                "oldprice": "550",
                "price": "400",
                "review": "4.2"
            },
            "Коробка для обуви": {
                "article": "STORE-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Вентилируемая, обувь не плесневеет."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Компактная, помещается в шкаф."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Легко складывается, для хранения."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Дизайн простой, функциональный."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/7474736151.jpg",
                "oldprice": "300",
                "price": "200",
                "review": "4.6"
            },
            "Пластиковый контейнер": {
                "article": "STORE-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Прозрачный, легко найти вещи внутри."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Крышка плотно закрывается, герметичный."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Размеры удобные, для кухни."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Легкий, легко передвигать."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7635045760.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.5"
            },
            "Полка настенная": {
                "article": "STORE-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Прочная, выдерживает вес книг."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Легко монтируется, без инструментов."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Длина большая, для декора."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Не царапает стену при установке."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/8007661335.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.4"
            },
            "Шкаф для хранения": {
                "article": "STORE-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Много полок, вместительный."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Двери раздвижные, экономит место."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Качество сборки отличное."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Для одежды — идеально."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/7385022934.jpg",
                "oldprice": "6500",
                "price": "5000",
                "review": "4.3"
            }
        }
    },
    "Книги": {
        "Бизнес-литература": {
            "Книга \"7 навыков высокоэффективных людей\"": {
                "article": "AUDIO-BUS-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Изменяет взгляд на эффективность."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Полезно для саморазвития."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Чтец передает мудрость автора."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Рекомендую всем, кто хочет расти."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/7331234644.jpg",
                "oldprice": "1900",
                "price": "1500",
                "review": "4.6"
            },
            "Книга \"Богатый папа, бедный папа\"": {
                "article": "AUDIO-BUS-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Открывает глаза на финансы."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Практические советы по инвестициям."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Легко слушать, много полезного."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Изменяет мышление о деньгах."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-i/wc500/8302316310.jpg",
                "oldprice": "1600",
                "price": "1200",
                "review": "4.3"
            },
            "Книга \"Думай и богатей\"": {
                "article": "AUDIO-BUS-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Классика мотивации, полезные советы для успеха."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Чтец передает энтузиазм автора отлично."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Идеально для начинающих предпринимателей."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Много практических идей, рекомендую."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-i/wc500/7417842750.jpg",
                "oldprice": "1800",
                "price": "1400",
                "review": "4.5"
            },
            "Книга \"Как завоевывать друзей и оказывать влияние на людей\"": {
                "article": "AUDIO-BUS-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Книга о коммуникациях, актуальна всегда."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Помогает в работе и личной жизни."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Чтец делает материал легким для восприятия."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Классика, которую стоит перечитать."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/8033898700.jpg",
                "oldprice": "1700",
                "price": "1300",
                "review": "4.4"
            },
            "Книга \"Монах, который продал свой Феррари\"": {
                "article": "AUDIO-BUS-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "История о балансе жизни и работы."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Мотивация и духовность в одном."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Чтец делает повествование увлекательным."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Для тех, кто ищет гармонию."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-e/wc500/6712495322.jpg",
                "oldprice": "1400",
                "price": "1100",
                "review": "4.2"
            }
        },
        "Детские книги": {
            "Книга \"Алиса в Стране чудес\"": {
                "article": "AUDIO-CHILD-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Волшебная история, дети в восторге."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Чтец передает фантазию отлично."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Идеально для семейного прослушивания."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Классика, которая увлекает с детства."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7303843901.jpg",
                "oldprice": "1200",
                "price": "900",
                "review": "4.4"
            },
            "Книга \"Винни-Пух\"": {
                "article": "AUDIO-CHILD-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Забавные приключения медвежонка."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Чтец голосом оживает персонажей."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Для детей и взрослых — улыбка гарантирована."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Книга, которая остается в сердце."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/8223236526.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.6"
            },
            "Книга \"Карлсон, который живет на крыше\"": {
                "article": "AUDIO-CHILD-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Веселые истории о дружбе."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Чтец делает Карлсона живым."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Дети смеются от души."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Классика детской литературы."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/7786063130.jpg",
                "oldprice": "1100",
                "price": "850",
                "review": "4.3"
            },
            "Книга \"Маленький принц\"": {
                "article": "AUDIO-CHILD-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Философия для детей и взрослых."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Чтец передает нежность истории."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Учит важным вещам о жизни."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Красочная и трогательная сказка."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-h/wc500/8210239325.jpg",
                "oldprice": "1250",
                "price": "950",
                "review": "4.5"
            },
            "Книга \"Спокойной ночи\"": {
                "article": "AUDIO-CHILD-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "История о верности и любви."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Чтец передает эмоции трогательно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Для любителей собак и детей."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Учит заботе о животных."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/7411971575.jpg",
                "oldprice": "950",
                "price": "750",
                "review": "4.2"
            }
        },
        "Иностранные языки": {
            "Книга \"Английский язык для начинающих\"": {
                "article": "AUDIO-LANG-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Простые уроки, легко запоминаются."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Чтец объясняет грамматику доступно."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Идеально для самообучения."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Много практики, рекомендую."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-a/wc500/6091591174.jpg",
                "oldprice": "2500",
                "price": "2000",
                "review": "4.5"
            },
            "Книга \"Испанский язык интенсив\"": {
                "article": "AUDIO-LANG-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Быстрое погружение в язык."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Чтец с энтузиазмом обучает."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Полезно для поездок в Латинскую Америку."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Много диалогов и упражнений."
                    }
                ],
                "country": "Испания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/8327631363.jpg",
                "oldprice": "2900",
                "price": "2300",
                "review": "4.3"
            },
            "Книга \"Итальянский язык для любителей\"": {
                "article": "AUDIO-LANG-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Уроки с акцентом на культуру."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Чтец делает язык мелодичным."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Для тех, кто любит Италию."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Легко и приятно слушать."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-h/wc500/8223204689.jpg",
                "oldprice": "3000",
                "price": "2400",
                "review": "4.2"
            },
            "Книга \"Немецкий язык для всех\"": {
                "article": "AUDIO-LANG-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Структурированные занятия."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Много аудио-практики."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Чтец передает правильное произношение."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Рекомендую для саморазвития."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/6998612118.jpg",
                "oldprice": "2600",
                "price": "2100",
                "review": "4.6"
            },
            "Книга \"Французский язык с нуля\"": {
                "article": "AUDIO-LANG-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Уроки с носителем языка."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Помогает освоить базовый разговорный."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 4,
                        "review": "Чтец делает обучение веселым."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Для путешествий идеально."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/8299967952.jpg",
                "oldprice": "2800",
                "price": "2200",
                "review": "4.4"
            }
        },
        "Комиксы": {
            "Комикс \"Бэтмен: Темный рыцарь\"": {
                "article": "COMICS-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Глубокий персонаж, отличная графика."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "История о добре и зле, завораживает."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "DC на высоте, жду продолжения."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Для взрослых, с психологическим подтекстом."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-2/wc500/6728764826.jpg",
                "oldprice": "1600",
                "price": "1300",
                "review": "4.6"
            },
            "Комикс \"Супермен: Человек из стали\"": {
                "article": "COMICS-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Классический супергерой, актуально и сегодня."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 4,
                        "review": "История о силе и ответственности."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "DC в лучших традициях."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Для коллекции обязательно."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-i/wc500/7146870714.jpg",
                "oldprice": "1550",
                "price": "1250",
                "review": "4.2"
            },
            "Комикс \"Халк: Разрушитель\"": {
                "article": "COMICS-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Эпичные бои и драма."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Халк — мой любимый персонаж."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Marvel всегда радует качеством."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Хороший экшн, но немного предсказуемо."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-2/wc500/6643294238.jpg",
                "oldprice": "1300",
                "price": "1000",
                "review": "4.3"
            },
            "Комикс \"Человек-Паук: Возвращение\"": {
                "article": "COMICS-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Классика Marvel, захватывающий сюжет."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Рисунки потрясающие, история держит в напряжении."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Идеально для фанатов супергероев."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Рекомендую всем любителям комиксов."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-u/wc500/6585639762.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.5"
            },
            "Комикс \"Чудо-Женщина: Легенда\"": {
                "article": "COMICS-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 4,
                        "review": "Сильная героиня, вдохновляющая история."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Красивые иллюстрации, тема равенства."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Первая прочитала — не разочарована."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "DC отлично передал мифологию."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8082463222.jpg",
                "oldprice": "1400",
                "price": "1100",
                "review": "4.4"
            }
        },
        "Кулинария": {
            "Книга \"Азиатская кухня: специи и вкусы\"": {
                "article": "AUDIO-COOK-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Разнообразие рецептов, от тайской до японской."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Чтец объясняет специи доступно."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Идеально для расширения кулинарного горизонта."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Много вегетарианских вариантов."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7435709295.jpg",
                "oldprice": "2100",
                "price": "1700",
                "review": "4.5"
            },
            "Книга \"Здоровое питание: рецепты для всей семьи\"": {
                "article": "AUDIO-COOK-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 4,
                        "review": "Полезные советы по питанию."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Чтец мотивирует на здоровый образ жизни."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 4,
                        "review": "Рецепты простые и вкусные."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Для мам с детьми — must-have."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/7985401770.jpg",
                "oldprice": "2000",
                "price": "1600",
                "review": "4.4"
            },
            "Книга \"Итальянская кухня: от пасты к пицце\"": {
                "article": "AUDIO-COOK-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Вкусные рецепты, легко приготовить дома."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Чтец рассказывает с энтузиазмом, вдохновляет."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Идеально для любителей итальянской еды."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Много полезных советов, рекомендую."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/multimedia/wc500/1000501764.jpg",
                "oldprice": "2200",
                "price": "1800",
                "review": "4.7"
            },
            "Книга \"Русская кухня: традиции и рецепты\"": {
                "article": "AUDIO-COOK-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Классика русской кухни, ностальгия."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Чтец с теплом рассказывает о блюдах."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "От борща до пирогов — все подробно."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Рекомендую для семейных обедов."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-p/wc500/6023587369.jpg",
                "oldprice": "1900",
                "price": "1500",
                "review": "4.3"
            },
            "Книга \"Французские десерты: искусство сладкого\"": {
                "article": "AUDIO-COOK-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 4,
                        "review": "Рецепты от простых до сложных."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 5,
                        "review": "Чтец делает обучение приятным."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Для тех, кто любит выпечку."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Вдохновение для кулинарных экспериментов."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/8285052686.jpg",
                "oldprice": "2400",
                "price": "1900",
                "review": "4.6"
            }
        },
        "Учебники": {
            "Учебник \"Алгебра и геометрия для 10 класса\"": {
                "article": "TEXT-MATH-001",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Хорошие объяснения и примеры."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Полезно для подготовки к экзаменам."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Много задач для практики."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Рекомендую школьникам."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-g/wc500/6350683504.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.5"
            },
            "Учебник \"Английский язык для начинающих\"": {
                "article": "TEXT-ENG-004",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Простой и доступный."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Много аудио упражнений."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Хорошо для самообучения."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Недостаточно практики."
                    }
                ],
                "country": "Великобритания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-3/wc500/7169928159.jpg",
                "oldprice": "900",
                "price": "700",
                "review": "4.4"
            },
            "Учебник \"Биология для 9 класса\"": {
                "article": "TEXT-BIO-005",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 5,
                        "review": "Красивые иллюстрации и факты."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Помогает понять эволюцию."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Для любознательных учеников."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 4,
                        "review": "Хороший базовый уровень."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-k/wc500/6643269200.jpg",
                "oldprice": "1050",
                "price": "850",
                "review": "4.5"
            },
            "Учебник \"История России с древнейших времен\"": {
                "article": "TEXT-HIST-003",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Подробный и интересный материал."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 4,
                        "review": "Много карт и схем."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 5,
                        "review": "Для глубокого изучения."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 4,
                        "review": "Рекомендую учителям."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/7034890113.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.7"
            },
            "Учебник \"Физика для 11 класса\"": {
                "article": "TEXT-PHYS-002",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Четкие формулы и иллюстрации."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Помогает понять сложные темы."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Хороший для ЕГЭ."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Немного устаревший, но полезный."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-6/wc500/6528601002.jpg",
                "oldprice": "1100",
                "price": "900",
                "review": "4.6"
            }
        }
    },
    "Красота и здоровье": {
        "Аптечка": {
            "Аспирин 50 мг": {
                "article": "482739156",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Эффективно снимает головную боль."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Дешево и надежно, всегда в аптечке."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Помогает при температуре."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Рекомендую, проверено временем."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7010774491.jpg",
                "oldprice": "200",
                "price": "150",
                "review": "4.6"
            },
            "Витамин C 1000 мг": {
                "article": "715826493",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Повышает иммунитет зимой."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Легко глотать, без вкуса."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Хорошая доза для профилактики."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Цена доступная, результат заметен."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/8160758238.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.7"
            },
            "Мазь от ожогов \"Пантенол\"": {
                "article": "936147852",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Быстро успокаивает кожу."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Обязательно в домашней аптечке."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Помогает при солнечных ожогах."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Без запаха, приятно наносить."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/7342820864.jpg",
                "oldprice": "350",
                "price": "250",
                "review": "4.8"
            },
            "Пластыри бактерицидные": {
                "article": "271583649",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Хорошо держатся, стерильные."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Удобно для мелких ран."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Дешево и практично."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Всегда в сумке на всякий случай."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7352757956.jpg",
                "oldprice": "150",
                "price": "100",
                "review": "4.4"
            },
            "Сироп от кашля \"Гербион\"": {
                "article": "584962371",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Вкусный и эффективный для детей."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Успокаивает кашель за пару дней."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Натуральный состав, нравится."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Не вызывает сонливости."
                    }
                ],
                "country": "Словения",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/7367653002.jpg",
                "oldprice": "450",
                "price": "350",
                "review": "4.5"
            }
        },
        "Бритье и стрижка": {
            "Гель после бритья \"Nivea\"": {
                "article": "692174835",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Успокаивает кожу после бритья."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Без запаха, быстро впитывается."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Предотвращает раздражение."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Хорошая цена за качество."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/8354146975.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.4"
            },
            "Крем для бритья \"Gillette\"": {
                "article": "519827463",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Мягко скользит, увлажняет кожу."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Запах приятный, без аллергии."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Хорошо пенится, экономно."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Рекомендую для чувствительной кожи."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/8376288945.jpg",
                "oldprice": "500",
                "price": "400",
                "review": "4.6"
            },
            "Машинка для стрижки \"Panasonic\"": {
                "article": "427583916",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Мощная, стрижет быстро."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Низкий шум, удобно дома."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Много насадок для разных длин."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Легкая и компактная."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7631290819.jpg",
                "oldprice": "2200",
                "price": "1800",
                "review": "4.5"
            },
            "Ножницы для стрижки \"Wahl\"": {
                "article": "836491572",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Острые лезвия, легко стригут."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Удобная ручка, не устают руки."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Профессиональное качество."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Держат заточку долго."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7590244735.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.8"
            },
            "Электрическая бритва \"Philips\"": {
                "article": "748392156",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Бреет гладко, без раздражения."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Удобная зарядка и дизайн."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Идеально для ежедневного использования."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Держит заряд долго."
                    }
                ],
                "country": "Нидерланды",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7763399049.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.7"
            }
        },
        "Гигиена": {
            "Дезодорант \"Rexona\"": {
                "article": "428571693",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Держит запах весь день."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Не оставляет следов на одежде."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Свежий аромат, не навязчивый."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Экономно расходуется."
                    }
                ],
                "country": "Великобритания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/8249000267.jpg",
                "oldprice": "230",
                "price": "180",
                "review": "4.5"
            },
            "Зубная паста \"Colgate\"": {
                "article": "284739561",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Отбеливает зубы, свежий вкус."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Защищает от кариеса, экономно."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Пена не слишком густая, удобно."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Рекомендую для всей семьи."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/7844696438.jpg",
                "oldprice": "200",
                "price": "150",
                "review": "4.6"
            },
            "Мыло \"Dove\"": {
                "article": "517492836",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Мягко очищает, увлажняет кожу."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Приятный запах, не сушит."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Идеально для чувствительной кожи."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Хорошая цена, долго хватает."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7411194190.jpg",
                "oldprice": "160",
                "price": "120",
                "review": "4.7"
            },
            "Туалетная бумага \"Zewa\"": {
                "article": "759283461",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Мягкая, не рвет кожу."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Хорошо впитывает, чисто."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Доступная цена, качественная."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Удобная упаковка, легко брать."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/8253164245.jpg",
                "oldprice": "120",
                "price": "90",
                "review": "4.4"
            },
            "Шампунь \"Head & Shoulders\"": {
                "article": "693814572",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Борется с перхотью эффективно."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Волосы мягкие и блестящие."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Не вызывает аллергии."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Объем волос увеличивается."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/8207323704.jpg",
                "oldprice": "320",
                "price": "250",
                "review": "4.8"
            }
        },
        "Косметика": {
            "Блеск для губ \"Clinique\"": {
                "article": "321654987",
                "assessment": [
                    {
                        "name": "Петров Андрей",
                        "rating": 4,
                        "review": "Добавляет объема, увлажняет."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Натуральный блеск, комфортно."
                    },
                    {
                        "name": "Козлов Сергей",
                        "rating": 4,
                        "review": "Долго держится без размазывания."
                    },
                    {
                        "name": "Морозова Ольга",
                        "rating": 5,
                        "review": "Идеально для повседневного макияжа."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/8373013787.jpg",
                "oldprice": "650",
                "price": "500",
                "review": "4.4"
            },
            "Крем для лица \"L'Oreal\"": {
                "article": "456789123",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Увлажняет кожу, светлая текстура."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Подходит для жирной кожи."
                    },
                    {
                        "name": "Лебедев Олег",
                        "rating": 4,
                        "review": "Быстро впитывается, без блеска."
                    },
                    {
                        "name": "Кузнецова Светлана",
                        "rating": 5,
                        "review": "Улучшает тон кожи."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/8299061827.jpg",
                "oldprice": "750",
                "price": "600",
                "review": "4.8"
            },
            "Лак для ногтей \"Essie\"": {
                "article": "789123456",
                "assessment": [
                    {
                        "name": "Никитин Алексей",
                        "rating": 5,
                        "review": "Долго держится, яркий цвет."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 4,
                        "review": "Легко наносить, быстро сохнет."
                    },
                    {
                        "name": "Сидоров Никита",
                        "rating": 5,
                        "review": "Не скалывается неделями."
                    },
                    {
                        "name": "Федорова Юлия",
                        "rating": 4,
                        "review": "Приятный запах, не токсичный."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7467911112.jpg",
                "oldprice": "320",
                "price": "250",
                "review": "4.5"
            },
            "Помада \"Maybelline\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Иванов Сергей",
                        "rating": 5,
                        "review": "Долго держится, насыщенный цвет."
                    },
                    {
                        "name": "Петрова Анна",
                        "rating": 4,
                        "review": "Увлажняет губы, не сохнет."
                    },
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Легко наносить, приятный аромат."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 4,
                        "review": "Хорошая палитра цветов."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/7269719751.jpg",
                "oldprice": "400",
                "price": "300",
                "review": "4.6"
            },
            "Тени для век \"NYX\"": {
                "article": "987654321",
                "assessment": [
                    {
                        "name": "Федоров Михаил",
                        "rating": 5,
                        "review": "Пигментированные, легко смешиваются."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 4,
                        "review": "Долго держатся без осыпания."
                    },
                    {
                        "name": "Тимофеев Павел",
                        "rating": 5,
                        "review": "Разнообразие оттенков."
                    },
                    {
                        "name": "Захарова Наталья",
                        "rating": 4,
                        "review": "Доступная цена для качества."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-g/wc500/6011505364.jpg",
                "oldprice": "550",
                "price": "450",
                "review": "4.7"
            }
        },
        "Макияж": {
            "Подводка для глаз \"NYX\"": {
                "article": "778899001",
                "assessment": [
                    {
                        "name": "Дмитриев Андрей",
                        "rating": 4,
                        "review": "Тонкая линия, легко наносить."
                    },
                    {
                        "name": "Егорова Мария",
                        "rating": 5,
                        "review": "Долго держится без размазывания."
                    },
                    {
                        "name": "Фомин Константин",
                        "rating": 4,
                        "review": "Водостойкая, идеально для макияжа."
                    },
                    {
                        "name": "Ларина Виктория",
                        "rating": 5,
                        "review": "Приятный запах, не раздражает глаза."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/7669811375.jpg",
                "oldprice": "360",
                "price": "280",
                "review": "4.4"
            },
            "Помада \"Revlon\"": {
                "article": "112233445",
                "assessment": [
                    {
                        "name": "Смирнов Алексей",
                        "rating": 5,
                        "review": "Долго держится, насыщенный цвет."
                    },
                    {
                        "name": "Коваленко Марина",
                        "rating": 4,
                        "review": "Увлажняет губы, не сохнет."
                    },
                    {
                        "name": "Белова Анна",
                        "rating": 5,
                        "review": "Легко наносить, приятный аромат."
                    },
                    {
                        "name": "Романов Дмитрий",
                        "rating": 4,
                        "review": "Хорошая палитра цветов."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/7590187864.jpg",
                "oldprice": "450",
                "price": "350",
                "review": "4.6"
            },
            "Пудра \"Max Factor\"": {
                "article": "998877665",
                "assessment": [
                    {
                        "name": "Левченко Иван",
                        "rating": 5,
                        "review": "Матирует кожу, естественный вид."
                    },
                    {
                        "name": "Ткаченко Наталья",
                        "rating": 5,
                        "review": "Не забивает поры, легкая."
                    },
                    {
                        "name": "Герасимов Павел",
                        "rating": 4,
                        "review": "Долго держится весь день."
                    },
                    {
                        "name": "Михайлова Светлана",
                        "rating": 5,
                        "review": "Улучшает тон кожи."
                    }
                ],
                "country": "Великобритания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7118813674.jpg",
                "oldprice": "700",
                "price": "550",
                "review": "4.8"
            },
            "Румяна \"MAC\"": {
                "article": "443322110",
                "assessment": [
                    {
                        "name": "Зайцев Олег",
                        "rating": 5,
                        "review": "Натуральный румянец, легко растушевывается."
                    },
                    {
                        "name": "Кравченко Юлия",
                        "rating": 4,
                        "review": "Долго держится, не тускнеет."
                    },
                    {
                        "name": "Бондаренко Никита",
                        "rating": 5,
                        "review": "Разнообразие оттенков."
                    },
                    {
                        "name": "Савченко Александра",
                        "rating": 4,
                        "review": "Не вызывает аллергии."
                    }
                ],
                "country": "Канада",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/6944482949.jpg",
                "oldprice": "800",
                "price": "650",
                "review": "4.5"
            },
            "Тушь для ресниц \"L'Oréal\"": {
                "article": "556677889",
                "assessment": [
                    {
                        "name": "Новиков Сергей",
                        "rating": 5,
                        "review": "Удлиняет ресницы, не склеивает."
                    },
                    {
                        "name": "Шевченко Ольга",
                        "rating": 4,
                        "review": "Долго держится без размазывания."
                    },
                    {
                        "name": "Васильева Екатерина",
                        "rating": 5,
                        "review": "Легко смывается водой."
                    },
                    {
                        "name": "Попов Михаил",
                        "rating": 4,
                        "review": "Доступная цена для качества."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/8320323879.jpg",
                "oldprice": "500",
                "price": "400",
                "review": "4.7"
            }
        },
        "Парфюмерия": {
            "Духи \"Calvin Klein\"": {
                "article": "112233445",
                "assessment": [
                    {
                        "name": "Антонов Михаил",
                        "rating": 5,
                        "review": "Элегантный аромат, подходит для повседневного использования."
                    },
                    {
                        "name": "Беляева София",
                        "rating": 4,
                        "review": "Долго держится, не выветривается к вечеру."
                    },
                    {
                        "name": "Васильев Дмитрий",
                        "rating": 5,
                        "review": "Натуральные ноты, мягкий для аллергиков."
                    },
                    {
                        "name": "Григорьева Ольга",
                        "rating": 5,
                        "review": "Повышает настроение, свежий шлейф."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7723293312.jpg",
                "oldprice": "7200",
                "price": "6000",
                "review": "4.7"
            },
            "Одеколон \"Hugo Boss\"": {
                "article": "334455669",
                "assessment": [
                    {
                        "name": "Никитин Роман",
                        "rating": 5,
                        "review": "Привлекательный и уверенный запах."
                    },
                    {
                        "name": "Осипова Людмила",
                        "rating": 4,
                        "review": "Легкий, подходит для офисной среды."
                    },
                    {
                        "name": "Павлов Станислав",
                        "rating": 5,
                        "review": "Идеален для активных мужчин."
                    },
                    {
                        "name": "Рыбакова Надежда",
                        "rating": 4,
                        "review": "Качественный флакон, удобно носить с собой."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7349429408.jpg",
                "oldprice": "6300",
                "price": "5200",
                "review": "4.5"
            },
            "Парфюм \"Yves Saint Laurent\"": {
                "article": "990011223",
                "assessment": [
                    {
                        "name": "Ильин Сергей",
                        "rating": 5,
                        "review": "Женственный и утонченный, для романтиков."
                    },
                    {
                        "name": "Ковалевская Мария",
                        "rating": 4,
                        "review": "Хорошо сочетается с дневным макияжем."
                    },
                    {
                        "name": "Лазарев Павел",
                        "rating": 5,
                        "review": "Долговечный эффект, не требует перезаправки."
                    },
                    {
                        "name": "Медведева Анна",
                        "rating": 4,
                        "review": "Универсальный для весны и лета."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7518266625.jpg",
                "oldprice": "9200",
                "price": "7800",
                "review": "4.6"
            },
            "Парфюмерная вода \"Dolce & Gabbana\"": {
                "article": "778899001",
                "assessment": [
                    {
                        "name": "Семенов Вадим",
                        "rating": 4,
                        "review": "Энергичный и позитивный аромат."
                    },
                    {
                        "name": "Тарасова Зоя",
                        "rating": 5,
                        "review": "Долго держится, нравится близким."
                    },
                    {
                        "name": "Успенский Лев",
                        "rating": 4,
                        "review": "Не вызывает аллергии, гипоаллергенный."
                    },
                    {
                        "name": "Фомина Эмилия",
                        "rating": 5,
                        "review": "Отличная цена за премиум-качество."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/8045293391.jpg",
                "oldprice": "8100",
                "price": "6800",
                "review": "4.4"
            },
            "Туалетная вода \"Tom Ford\"": {
                "article": "556677889",
                "assessment": [
                    {
                        "name": "Денисов Алексей",
                        "rating": 5,
                        "review": "Роскошный и соблазнительный, для особых случаев."
                    },
                    {
                        "name": "Ефимова Наталия",
                        "rating": 4,
                        "review": "Легко впитывается, не оставляет пятен."
                    },
                    {
                        "name": "Жаров Виктор",
                        "rating": 5,
                        "review": "Мужественный аромат, идеален для вечера."
                    },
                    {
                        "name": "Зорина Елена",
                        "rating": 5,
                        "review": "Стойкий, держится более 24 часов."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7506816316.jpg",
                "oldprice": "11000",
                "price": "9500",
                "review": "4.8"
            }
        },
        "Спортпитание": {
            "BCAA \"Scivation\"": {
                "article": "777888999",
                "assessment": [
                    {
                        "name": "Иванов Павел",
                        "rating": 5,
                        "review": "Ускоряет восстановление, снижает усталость после интенсивных нагрузок."
                    },
                    {
                        "name": "Кузьмина Ольга",
                        "rating": 4,
                        "review": "Вкусный напиток, удобно пить во время тренировки."
                    },
                    {
                        "name": "Леонов Роман",
                        "rating": 5,
                        "review": "Стойкий эффект, поддерживает энергию весь день."
                    },
                    {
                        "name": "Михайлова Дарья",
                        "rating": 4,
                        "review": "Натуральные аминокислоты, подходит для веганов."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-g/wc500/6017034460.jpg",
                "oldprice": "3900",
                "price": "3200",
                "review": "4.5"
            },
            "Гейнер \"Universal Nutrition\"": {
                "article": "000111222",
                "assessment": [
                    {
                        "name": "Николаев Виктор",
                        "rating": 4,
                        "review": "Помогает набрать вес, калории усваиваются хорошо."
                    },
                    {
                        "name": "Ольга Светлана",
                        "rating": 5,
                        "review": "Вкус шоколада отличный, легко готовить коктейль."
                    },
                    {
                        "name": "Петров Артем",
                        "rating": 5,
                        "review": "Стойкий результат, мышцы растут быстрее."
                    },
                    {
                        "name": "Романова Екатерина",
                        "rating": 4,
                        "review": "Натуральные ингредиенты, без искусственных добавок."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-0/wc500/6321522588.jpg",
                "oldprice": "4600",
                "price": "3800",
                "review": "4.4"
            },
            "Креатин \"Dymatize\"": {
                "article": "444555666",
                "assessment": [
                    {
                        "name": "Дмитриев Алексей",
                        "rating": 5,
                        "review": "Повышает силу и выносливость, заметен прогресс в тренировках."
                    },
                    {
                        "name": "Егорова Наталья",
                        "rating": 4,
                        "review": "Легко смешивается, не вызывает дискомфорта в желудке."
                    },
                    {
                        "name": "Жуков Михаил",
                        "rating": 5,
                        "review": "Натуральный креатин, без примесей, безопасен для здоровья."
                    },
                    {
                        "name": "Золотова Анна",
                        "rating": 4,
                        "review": "Удобная упаковка, хватает надолго, экономично."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-3/wc500/6701086947.jpg",
                "oldprice": "3400",
                "price": "2800",
                "review": "4.6"
            },
            "Мультивитамины \"NOW Foods\"": {
                "article": "333444555",
                "assessment": [
                    {
                        "name": "Сидоров Олег",
                        "rating": 5,
                        "review": "Комплекс витаминов, улучшает общее самочувствие и иммунитет."
                    },
                    {
                        "name": "Тимофеева Ирина",
                        "rating": 5,
                        "review": "Удобно принимать, одна таблетка в день."
                    },
                    {
                        "name": "Ульянов Андрей",
                        "rating": 4,
                        "review": "Стойкий эффект, энергия повышается без кофеина."
                    },
                    {
                        "name": "Федорова Анна",
                        "rating": 5,
                        "review": "Натуральные источники, безопасны для долгосрочного использования."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/7354311792.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.8"
            },
            "Протеиновый порошок \"Optimum Nutrition\"": {
                "article": "111222333",
                "assessment": [
                    {
                        "name": "Андреев Сергей",
                        "rating": 5,
                        "review": "Отлично растворяется, вкус приятный, помогает в наборе мышечной массы."
                    },
                    {
                        "name": "Богданова Мария",
                        "rating": 5,
                        "review": "Высококачественный протеин, без лишних добавок, натуральный состав."
                    },
                    {
                        "name": "Викторов Олег",
                        "rating": 4,
                        "review": "Удобно брать с собой, быстро усваивается после тренировки."
                    },
                    {
                        "name": "Галина Елена",
                        "rating": 5,
                        "review": "Стойкий эффект, чувствуется энергия и восстановление мышц."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-v/wc500/7751885791.jpg",
                "oldprice": "5500",
                "price": "4500",
                "review": "4.7"
            }
        },
        "Уход за волосами": {
            "Кондиционер \"Pantene Pro-V\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Данилова Ольга",
                        "rating": 5,
                        "review": "Разглаживает волосы, делает их шелковистыми и послушными."
                    },
                    {
                        "name": "Егоров Алексей",
                        "rating": 4,
                        "review": "Легко смывается, не оставляет пленки, освежает."
                    },
                    {
                        "name": "Жукова Екатерина",
                        "rating": 5,
                        "review": "С натуральными маслами, питает от корней до кончиков."
                    },
                    {
                        "name": "Зайцев Иван",
                        "rating": 4,
                        "review": "Стойкий эффект, волосы блестят даже без фена."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/8243712745.jpg",
                "oldprice": "1400",
                "price": "1100",
                "review": "4.6"
            },
            "Маска для волос \"Garnier Fructis\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Иванова Светлана",
                        "rating": 5,
                        "review": "Восстанавливает поврежденные волосы, возвращает объем."
                    },
                    {
                        "name": "Козлов Павел",
                        "rating": 4,
                        "review": "Быстро впитывается, не жирнит, удобна для домашнего использования."
                    },
                    {
                        "name": "Лебедева Наталья",
                        "rating": 5,
                        "review": "Натуральные фруктовые экстракты, приятный запах надолго."
                    },
                    {
                        "name": "Морозов Андрей",
                        "rating": 4,
                        "review": "Эффективна против секущихся кончиков, волосы здоровее."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/8254014577.jpg",
                "oldprice": "1200",
                "price": "900",
                "review": "4.5"
            },
            "Масло для волос \"Moroccanoil\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Никитина Елена",
                        "rating": 5,
                        "review": "Защищает от тепла, волосы гладкие и сияющие после укладки."
                    },
                    {
                        "name": "Орлов Роман",
                        "rating": 5,
                        "review": "Легкое масло, не утяжеляет, идеально для тонких волос."
                    },
                    {
                        "name": "Петрова Ирина",
                        "rating": 4,
                        "review": "Натуральный аргановый состав, увлажняет глубоко."
                    },
                    {
                        "name": "Рыбаков Михаил",
                        "rating": 5,
                        "review": "Стойкий блеск, волосы выглядят ухоженными весь день."
                    }
                ],
                "country": "Израиль",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/7334174446.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.8"
            },
            "Сыворотка от выпадения \"Vichy Dercos\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Смирнова Татьяна",
                        "rating": 4,
                        "review": "Снижает выпадение, волосы становятся крепче через месяц."
                    },
                    {
                        "name": "Титов Сергей",
                        "rating": 5,
                        "review": "Легко наносится на кожу головы, не пачкает волосы."
                    },
                    {
                        "name": "Уварова Виктория",
                        "rating": 4,
                        "review": "Клинически протестирована, натуральные активные ингредиенты."
                    },
                    {
                        "name": "Федоров Дмитрий",
                        "rating": 5,
                        "review": "Видимый эффект, рост новых волос, удобный аппликатор."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/8302541470.jpg",
                "oldprice": "2200",
                "price": "1800",
                "review": "4.4"
            },
            "Шампунь \"L'Oreal Paris\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Александрова Анна",
                        "rating": 5,
                        "review": "Мягко очищает, волосы остаются свежими весь день, приятный аромат."
                    },
                    {
                        "name": "Борисов Дмитрий",
                        "rating": 4,
                        "review": "Подходит для сухих волос, увлажняет без утяжеления."
                    },
                    {
                        "name": "Волкова Мария",
                        "rating": 5,
                        "review": "Натуральные экстракты, не вызывает раздражения кожи головы."
                    },
                    {
                        "name": "Горбунов Сергей",
                        "rating": 5,
                        "review": "Удобная упаковка, хватает надолго, экономичный расход."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/8254015103.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.7"
            }
        },
        "Уход за кожей": {
            "Крем для лица \"Nivea\"": {
                "article": "123987654",
                "assessment": [
                    {
                        "name": "Алексеева Марина",
                        "rating": 5,
                        "review": "Мягко увлажняет, подходит для сухой кожи, экономичный расход."
                    },
                    {
                        "name": "Богданов Кирилл",
                        "rating": 4,
                        "review": "Натуральные ингредиенты, кожа становится гладкой без жирности."
                    },
                    {
                        "name": "Виноградова Ольга",
                        "rating": 5,
                        "review": "Легкая текстура, быстро впитывается, идеален для повседневного ухода."
                    },
                    {
                        "name": "Гаврилов Андрей",
                        "rating": 4,
                        "review": "Стойкий эффект увлажнения, не вызывает аллергии."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/8354146901.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.5"
            },
            "Маска для лица \"Garnier\"": {
                "article": "345765432",
                "assessment": [
                    {
                        "name": "Ильина Анна",
                        "rating": 5,
                        "review": "Очищает поры, кожа становится чистой и сияющей."
                    },
                    {
                        "name": "Кузнецов Павел",
                        "rating": 4,
                        "review": "С фруктовыми кислотами, мягко отшелушивает без раздражения."
                    },
                    {
                        "name": "Лазарева Виктория",
                        "rating": 5,
                        "review": "Натуральный состав, увлажняет и тонизирует одновременно."
                    },
                    {
                        "name": "Медведев Роман",
                        "rating": 4,
                        "review": "Удобная одноразовая упаковка, эффективна против черных точек."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7735807652.jpg",
                "oldprice": "800",
                "price": "600",
                "review": "4.6"
            },
            "Сыворотка \"Clinique\"": {
                "article": "234876543",
                "assessment": [
                    {
                        "name": "Денисова Екатерина",
                        "rating": 5,
                        "review": "Разглаживает морщины, кожа выглядит моложе и свежее."
                    },
                    {
                        "name": "Ефимов Сергей",
                        "rating": 5,
                        "review": "Гипоаллергенная формула, безопасна для чувствительной кожи."
                    },
                    {
                        "name": "Жданова Наталья",
                        "rating": 4,
                        "review": "Натуральные экстракты, глубоко питает и восстанавливает."
                    },
                    {
                        "name": "Зотов Михаил",
                        "rating": 5,
                        "review": "Удобный флакон, стойкий результат после нескольких применений."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-u/wc500/8123302794.jpg",
                "oldprice": "5500",
                "price": "4500",
                "review": "4.7"
            },
            "Тоник \"Vichy\"": {
                "article": "456654321",
                "assessment": [
                    {
                        "name": "Новикова Елена",
                        "rating": 5,
                        "review": "Восстанавливает баланс, подготавливает кожу к макияжу."
                    },
                    {
                        "name": "Осипов Алексей",
                        "rating": 5,
                        "review": "Без спирта, не сушит, освежает и успокаивает."
                    },
                    {
                        "name": "Пономарева Дарья",
                        "rating": 4,
                        "review": "С минеральной водой, натуральные ингредиенты для здоровой кожи."
                    },
                    {
                        "name": "Рожков Сергей",
                        "rating": 5,
                        "review": "Стойкий эффект, кожа выглядит увлажненной весь день."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-n/wc500/8107627343.jpg",
                "oldprice": "2200",
                "price": "1800",
                "review": "4.8"
            },
            "Увлажнитель \"Kiehl's\"": {
                "article": "567543210",
                "assessment": [
                    {
                        "name": "Соколова Татьяна",
                        "rating": 4,
                        "review": "Интенсивное увлажнение, идеален для зрелой кожи."
                    },
                    {
                        "name": "Тарасов Михаил",
                        "rating": 5,
                        "review": "Легкая формула, не оставляет жирного блеска, удобен для лета."
                    },
                    {
                        "name": "Фомина Ольга",
                        "rating": 4,
                        "review": "Натуральные масла, кожа эластичная и упругая после применения."
                    },
                    {
                        "name": "Хромов Дмитрий",
                        "rating": 5,
                        "review": "Стойкий результат, защищает от внешних факторов."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7534424340.jpg",
                "oldprice": "3800",
                "price": "3200",
                "review": "4.4"
            }
        }
    },
    "Одежда": {
        "Аксессуары": {
            "Бижутерия: колье с жемчугом": {
                "article": "687123954",
                "assessment": [
                    {
                        "name": "Данилова София",
                        "rating": 5,
                        "review": "Очень красивое колье, смотрится дорого. Застежка надежная"
                    },
                    {
                        "name": "Егорова Ксения",
                        "rating": 4,
                        "review": "Нравится дизайн, но жемчуг немного тускловат"
                    },
                    {
                        "name": "Михайлова Анастасия",
                        "rating": 4,
                        "review": "Хорошее качество за такую цену. Ношу с платьями и блузками"
                    },
                    {
                        "name": "Степанова Юлия",
                        "rating": 5,
                        "review": "Длина регулируется, что очень удобно. Смотрится элегантно"
                    },
                    {
                        "name": "Фролова Дарья",
                        "rating": 3,
                        "review": "Красиво, но хлипковато смотрится. Надеваю по особым случаям"
                    }
                ],
                "country": "Польша",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7256026375.jpg",
                "oldprice": "1199",
                "price": "799",
                "review": "4.3"
            },
            "Кожаная сумка-кроссбоди": {
                "article": "345678912",
                "assessment": [
                    {
                        "name": "Романова Алиса",
                        "rating": 5,
                        "review": "Удобная и вместительная сумка. Качество кожи превосходное"
                    },
                    {
                        "name": "Сорокина Екатерина",
                        "rating": 4,
                        "review": "Хорошая сумка, но ремешок мог бы быть подлиннее"
                    },
                    {
                        "name": "Тарасова Марина",
                        "rating": 5,
                        "review": "Идеальный размер для повседневного использования. Очень стильная"
                    },
                    {
                        "name": "Белова Анна",
                        "rating": 5,
                        "review": "Носить удобно, внутри несколько отделений. Качество отличное"
                    }
                ],
                "country": "Испания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-q/wc500/7152114518.jpg",
                "oldprice": "4599",
                "price": "3499",
                "review": "4.6"
            },
            "Кожаный ремень с металлической пряжкой": {
                "article": "563728491",
                "assessment": [
                    {
                        "name": "Орлова Мария",
                        "rating": 5,
                        "review": "Качество кожи отличное, пряжка стильная. Подходит к джинсам и брюкам"
                    },
                    {
                        "name": "Волков Алексей",
                        "rating": 4,
                        "review": "Хороший ремень, но немного жестковат. Надеюсь, разносится"
                    },
                    {
                        "name": "Никитина Анна",
                        "rating": 5,
                        "review": "Идеальная длина, качество на высоте. Очень доволен покупкой"
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-w/wc500/6895749740.jpg",
                "oldprice": "1899",
                "price": "1299",
                "review": "4.7"
            },
            "Солнечные очки авиаторы": {
                "article": "874562139",
                "assessment": [
                    {
                        "name": "Кузнецов Дмитрий",
                        "rating": 5,
                        "review": "Стильные очки, хорошая защита от солнца. Сидят удобно"
                    },
                    {
                        "name": "Павлова Светлана",
                        "rating": 4,
                        "review": "Качество линз отличное, но оправа немного великовата"
                    },
                    {
                        "name": "Медведев Артем",
                        "rating": 5,
                        "review": "Удобные, не давят на переносицу. Дизайн современный"
                    },
                    {
                        "name": "Алексеева Виктория",
                        "rating": 4,
                        "review": "Хорошие очки за свои деньги. Футляр качественный"
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/6972688235.jpg",
                "oldprice": "2199",
                "price": "1599",
                "review": "4.5"
            },
            "Шелковый платок с цветочным принтом": {
                "article": "218493765",
                "assessment": [
                    {
                        "name": "Семенова Елена",
                        "rating": 5,
                        "review": "Шелк невероятно нежный, принт яркий и четкий. Украшает любой наряд"
                    },
                    {
                        "name": "Ковалева Ирина",
                        "rating": 4,
                        "review": "Красивый платок, но размером меньше, чем ожидала"
                    },
                    {
                        "name": "Федорова Ольга",
                        "rating": 5,
                        "review": "Идеальное качество! Ношу на шее и как повязку на сумку"
                    },
                    {
                        "name": "Григорьева Наталья",
                        "rating": 5,
                        "review": "Цвета насыщенные, не линяет после стирки. Очень довольна"
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7179925628.jpg",
                "oldprice": "1299",
                "price": "899",
                "review": "4.8"
            }
        },
        "Головные уборы": {
            "Берет женский": {
                "article": "920183745",
                "assessment": [
                    {
                        "name": "Михайлова Елена",
                        "rating": 5,
                        "review": "Очень красивый и удобный берет! Приятная ткань."
                    },
                    {
                        "name": "Захарова Ольга",
                        "rating": 4,
                        "review": "Не совсем мой стиль, но в целом неплохой аксессуар."
                    },
                    {
                        "name": "Лебедева Татьяна",
                        "rating": 5,
                        "review": "Берет замечательно сидит на голове, мне очень нравится."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7982393616.jpg",
                "oldprice": 1299,
                "price": 899,
                "review": 4.7
            },
            "Кепка спортивная": {
                "article": "573920184",
                "assessment": [
                    {
                        "name": "Смирнов Дмитрий",
                        "rating": 4,
                        "review": "Кепка хорошая, но немного жестковата по материалу."
                    },
                    {
                        "name": "Павлова Екатерина",
                        "rating": 3,
                        "review": "Отлично сидит, удобно носить, но материал не самый лучший."
                    },
                    {
                        "name": "Федоров Алексей",
                        "rating": 4,
                        "review": "Хорошая кепка, стильная, но слишком сильно давит на голову."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-2/wc500/6758132690.jpg",
                "oldprice": 999,
                "price": 799,
                "review": 4.3
            },
            "Фетровая шляпа": {
                "article": "432018956",
                "assessment": [
                    {
                        "name": "Сергеева Юлия",
                        "rating": 5,
                        "review": "Очень качественная шляпа, приятный материал и хороший стиль."
                    },
                    {
                        "name": "Гаврилов Артем",
                        "rating": 4,
                        "review": "Шляпа отличная, но немного не подошла по форме головы."
                    },
                    {
                        "name": "Кузнецова Марина",
                        "rating": 4,
                        "review": "Шляпа классная, но хотелось бы, чтобы была чуть мягче."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7305602371.jpg",
                "oldprice": 2499,
                "price": 1799,
                "review": 4.6
            },
            "Шапка зимняя": {
                "article": "384920173",
                "assessment": [
                    {
                        "name": "Петров Иван",
                        "rating": 5,
                        "review": "Отличная шапка! Теплая и стильная."
                    },
                    {
                        "name": "Иванова Мария",
                        "rating": 4,
                        "review": "Шапка удобная, но мне показалась чуть великоватой."
                    },
                    {
                        "name": "Сидоров Сергей",
                        "rating": 4,
                        "review": "Хороший товар за свою цену, но немного царапается на голове."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/8028729273.jpg",
                "oldprice": 1799,
                "price": 1299,
                "review": 4.5
            },
            "Шляпа летняя": {
                "article": "839012746",
                "assessment": [
                    {
                        "name": "Леонова Ирина",
                        "rating": 5,
                        "review": "Очень красивая шляпа! Идеально подходит для летних прогулок."
                    },
                    {
                        "name": "Королева Анна",
                        "rating": 4,
                        "review": "Шляпа очень стильная, но немного велика по размеру."
                    },
                    {
                        "name": "Баранов Андрей",
                        "rating": 5,
                        "review": "Понравилась, легкая и удобная, не жаркая в летнюю погоду."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7613114374.jpg",
                "oldprice": 1999,
                "price": 1499,
                "review": 4.8
            }
        },
        "Детская одежда": {
            "Детское платье розовое": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Иванова Анна",
                        "rating": 5,
                        "review": "Очаровательное платье, дочке очень нравится. Качество хорошее."
                    },
                    {
                        "name": "Петров Сергей",
                        "rating": 4,
                        "review": "Неплохо, но ткань немного тонкая. Цена адекватная."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 3,
                        "review": "Не подошло по размеру, жаль. Но выглядит симпатично."
                    },
                    {
                        "name": "Кузнецова Мария",
                        "rating": 5,
                        "review": "Рекомендую, стирается хорошо и не мнется."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7214924756.jpg",
                "oldprice": "1800",
                "price": "1200",
                "review": "4.2"
            },
            "Куртка зимняя детская теплая": {
                "article": "789123456",
                "assessment": [
                    {
                        "name": "Лебедев Роман",
                        "rating": 5,
                        "review": "Отличная куртка, теплая и легкая."
                    },
                    {
                        "name": "Коваленко Светлана",
                        "rating": 4,
                        "review": "Хорошая, но немного жестковата для ребенка."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 5,
                        "review": "Качество на уровне, сын мерзнет редко."
                    },
                    {
                        "name": "Михайлова Дарья",
                        "rating": 3,
                        "review": "Средне, могла бы быть дешевле."
                    },
                    {
                        "name": "Егоров Максим",
                        "rating": 5,
                        "review": "Рекомендую, отличная защита от холода."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/7892173392.jpg",
                "oldprice": "4500",
                "price": "3200",
                "review": "4.4"
            },
            "Пижама детская с принтами": {
                "article": "321654987",
                "assessment": [
                    {
                        "name": "Новиков Иван",
                        "rating": 5,
                        "review": "Мягкая и удобная пижама, ребенок спит хорошо."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 5,
                        "review": "Качество отличное, стирается без проблем."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Рекомендую, принты яркие и не тускнеют."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 4,
                        "review": "Хорошая, но немного великовата."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/8352185329.jpg",
                "oldprice": "1500",
                "price": "1000",
                "review": "4.6"
            },
            "Футболка для мальчика синяя": {
                "article": "987654321",
                "assessment": [
                    {
                        "name": "Алексеев Дмитрий",
                        "rating": 5,
                        "review": "Удобная футболка, сын носит с удовольствием."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 3,
                        "review": "Среднее качество, но быстро стирается."
                    },
                    {
                        "name": "Николаев Павел",
                        "rating": 4,
                        "review": "Хорошая, цвет яркий и не выцветает."
                    },
                    {
                        "name": "Васильева Наталья",
                        "rating": 4,
                        "review": "Нормально, но ожидала лучшего кроя."
                    },
                    {
                        "name": "Григорьев Михаил",
                        "rating": 2,
                        "review": "Не подошла, слишком маленькая."
                    }
                ],
                "country": "Вьетнам",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/8025162227.jpg",
                "oldprice": "1200",
                "price": "800",
                "review": "4.0"
            },
            "Штаны для девочки джинсовые": {
                "article": "456789123",
                "assessment": [
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Комфортные штаны, дочь в восторге."
                    },
                    {
                        "name": "Федоров Виктор",
                        "rating": 2,
                        "review": "Качество так себе, быстро изнашиваются."
                    },
                    {
                        "name": "Зайцева Кристина",
                        "rating": 3,
                        "review": "Хорошие, но цвет не такой, как на фото."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 4,
                        "review": "Подходят для школы, рекомендую."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-p/wc500/6642668905.jpg",
                "oldprice": "2200",
                "price": "1500",
                "review": "3.8"
            }
        },
        "Джинсы": {
            "Джинсы бойфренды голубые": {
                "article": "456789123",
                "assessment": [
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Комфортные и модные, люблю такой стиль."
                    },
                    {
                        "name": "Федоров Виктор",
                        "rating": 2,
                        "review": "Качество так себе, быстро изнашиваются."
                    },
                    {
                        "name": "Зайцева Кристина",
                        "rating": 3,
                        "review": "Хорошие, но цвет не такой яркий, как на фото."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 4,
                        "review": "Подходят для повседневки, рекомендую."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-d/wc500/7194531757.jpg",
                "oldprice": "5800",
                "price": "4200",
                "review": "3.8"
            },
            "Джинсы классические синие": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Иванова Анна",
                        "rating": 5,
                        "review": "Отличные джинсы, сидят идеально. Качество на высоте."
                    },
                    {
                        "name": "Петров Сергей",
                        "rating": 4,
                        "review": "Хорошие, но немного жесткие после стирки. Цена оправдана."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 3,
                        "review": "Не подошли по цвету, но материал прочный."
                    },
                    {
                        "name": "Кузнецова Мария",
                        "rating": 5,
                        "review": "Рекомендую, носят долго и не деформируются."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/8087604900.jpg",
                "oldprice": "6000",
                "price": "4500",
                "review": "4.2"
            },
            "Джинсы рваные светлые": {
                "article": "789123456",
                "assessment": [
                    {
                        "name": "Лебедев Роман",
                        "rating": 5,
                        "review": "Стильные и удобные, выглядят круто."
                    },
                    {
                        "name": "Коваленко Светлана",
                        "rating": 4,
                        "review": "Хорошие, но немного колются от рваных краев."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 3,
                        "review": "Качество отличное, но цена высокая."
                    },
                    {
                        "name": "Михайлова Дарья",
                        "rating": 5,
                        "review": "Идеально сидят, рекомендую всем."
                    },
                    {
                        "name": "Егоров Максим",
                        "rating": 3,
                        "review": "Средне, ничего особенного."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7049812845.jpg",
                "oldprice": "7000",
                "price": "5000",
                "review": "4.4"
            },
            "Джинсы узкие черные": {
                "article": "987654321",
                "assessment": [
                    {
                        "name": "Алексеев Дмитрий",
                        "rating": 5,
                        "review": "Удобные и стильные, подходят для любого случая."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 3,
                        "review": "Среднее качество, ткань тонкая, но цена приемлемая."
                    },
                    {
                        "name": "Николаев Павел",
                        "rating": 4,
                        "review": "Хорошие джинсы, но цвет выцветает после стирки."
                    },
                    {
                        "name": "Васильева Наталья",
                        "rating": 4,
                        "review": "Нормально, ожидала лучшего кроя."
                    },
                    {
                        "name": "Григорьев Михаил",
                        "rating": 2,
                        "review": "Не подошли по размеру, жаль."
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-n/wc500/6881344619.jpg",
                "oldprice": "5200",
                "price": "3800",
                "review": "4.0"
            },
            "Джинсы широкие серые": {
                "article": "321654987",
                "assessment": [
                    {
                        "name": "Новиков Иван",
                        "rating": 5,
                        "review": "Очень удобные, идеально для дома или прогулок."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 4,
                        "review": "Качество на уровне, стираются без проблем."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Рекомендую, материал прочный и не мнется."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 4,
                        "review": "Хорошие, но могли бы быть дешевле."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7438569104.jpg",
                "oldprice": "6500",
                "price": "4800",
                "review": "4.6"
            }
        },
        "Женская одежда": {
            "Джинсы с завышенной талией": {
                "article": "567312489",
                "assessment": [
                    {
                        "name": "Волкова Светлана",
                        "rating": 4,
                        "review": "Удобные джинсы, хорошая посадка. Ткань плотная, не тянется"
                    },
                    {
                        "name": "Орлова Надежда",
                        "rating": 3,
                        "review": "Цвет как на фото, но ткань немного жестковата. Надеюсь, после стирки станет мягче"
                    },
                    {
                        "name": "Тихонова Юлия",
                        "rating": 5,
                        "review": "Идеально сидят на фигуре груша. Очень довольна!"
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/7729284179.jpg",
                "oldprice": "3499",
                "price": "2899",
                "review": "4.2"
            },
            "Утепленное пальто с капюшоном": {
                "article": "291845673",
                "assessment": [
                    {
                        "name": "Козлова Виктория",
                        "rating": 5,
                        "review": "Очень теплое и стильное пальто. Отлично подошло на рост 170 см"
                    },
                    {
                        "name": "Николаева Ольга",
                        "rating": 4,
                        "review": "Качество хорошее, но цвет на фото ярче, чем в реальности"
                    },
                    {
                        "name": "Фролова Ирина",
                        "rating": 4,
                        "review": "Теплое, но тяжеловатое. Для очень холодной зимы - то что нужно"
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/8273957901.jpg",
                "oldprice": "8999",
                "price": "7899",
                "review": "4.4"
            },
            "Шерстяной свитер оверсайз": {
                "article": "918273645",
                "assessment": [
                    {
                        "name": "Громова Анастасия",
                        "rating": 5,
                        "review": "Прекрасный свитер! Шерсть качественная, не колется. Очень теплый и стильный"
                    },
                    {
                        "name": "Данилова Екатерина",
                        "rating": 5,
                        "review": "Идеальный oversize, как я и хотела. Цвет насыщенный, не линяет"
                    },
                    {
                        "name": "Ефимова Марина",
                        "rating": 5,
                        "review": "Очень понравился! Ношу с юбками и джинсами. Универсальная вещь"
                    }
                ],
                "country": "Польша",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/8145733488.jpg",
                "oldprice": "5299",
                "price": "4299",
                "review": "4.8"
            },
            "Элегантное платье-миди с цветочным принтом": {
                "article": "734829156",
                "assessment": [
                    {
                        "name": "Иванова Анна",
                        "rating": 5,
                        "review": "Платье сидит идеально, ткань очень качественная. Цветочный принт выглядит даже лучше, чем на фото"
                    },
                    {
                        "name": "Петрова Мария",
                        "rating": 4,
                        "review": "Хорошее платье, но размер маломерит. Рекомендую брать на размер больше"
                    },
                    {
                        "name": "Сидорова Елена",
                        "rating": 5,
                        "review": "Очень довольна покупкой! Ношу с удовольствием, все швы аккуратные"
                    }
                ],
                "country": "Италия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-i/wc500/6716308050.jpg",
                "oldprice": "4299",
                "price": "3299",
                "review": "4.6"
            },
            "Юбка-карандаш с защипами": {
                "article": "384756192",
                "assessment": [
                    {
                        "name": "Зайцева Вероника",
                        "rating": 5,
                        "review": "Отличная юбка для офиса. Сидит идеально, материал не мнется"
                    },
                    {
                        "name": "Ильина Дарья",
                        "rating": 4,
                        "review": "Хорошее качество пошива. Длина подобрана удачно"
                    },
                    {
                        "name": "Кузьмина Алла",
                        "rating": 5,
                        "review": "Юбка как на фото. Подходит для делового стиля. Рекомендую"
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/7223624034.jpg",
                "oldprice": "2999",
                "price": "2399",
                "review": "4.5"
            }
        },
        "Куртки и пальто": {
            "Куртка ветровка легкая": {
                "article": "667788990",
                "assessment": [
                    {
                        "name": "Новиков Иван",
                        "rating": 5,
                        "review": "Легкая и удобная куртка, подходит для весны."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 5,
                        "review": "Качество отличное, стирается без проблем."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Рекомендую, не продувается ветром."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 4,
                        "review": "Хорошая, но немного великовата."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7112029192.jpg",
                "oldprice": "4000",
                "price": "2800",
                "review": "4.6"
            },
            "Куртка зимняя с капюшоном": {
                "article": "998877665",
                "assessment": [
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Комфортная куртка, сын в восторге от капюшона."
                    },
                    {
                        "name": "Федоров Виктор",
                        "rating": 2,
                        "review": "Качество так себе, быстро изнашивается."
                    },
                    {
                        "name": "Зайцева Кристина",
                        "rating": 3,
                        "review": "Хорошая, но цвет не такой, как на фото."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 4,
                        "review": "Подходит для зимы, рекомендую."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/8079825917.jpg",
                "oldprice": "6500",
                "price": "4500",
                "review": "3.8"
            },
            "Куртка осенняя для девочки": {
                "article": "112233445",
                "assessment": [
                    {
                        "name": "Иванова Анна",
                        "rating": 5,
                        "review": "Куртка теплая и стильная, дочке нравится. Качество хорошее."
                    },
                    {
                        "name": "Петров Сергей",
                        "rating": 4,
                        "review": "Неплохо, но немного легкая для осени. Цена адекватная."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 3,
                        "review": "Не подошло по размеру, жаль. Но выглядит симпатично."
                    },
                    {
                        "name": "Кузнецова Мария",
                        "rating": 5,
                        "review": "Рекомендую, стирается хорошо и не мнется."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/7107812349.jpg",
                "oldprice": "5000",
                "price": "3500",
                "review": "4.2"
            },
            "Платье вечернее с блеском": {
                "article": "443322110",
                "assessment": [
                    {
                        "name": "Лебедев Роман",
                        "rating": 5,
                        "review": "Отличное платье, выглядит празднично и удобно."
                    },
                    {
                        "name": "Коваленко Светлана",
                        "rating": 4,
                        "review": "Хорошее, но материал немного жесткий."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 5,
                        "review": "Качество на уровне, блеск не осыпается."
                    },
                    {
                        "name": "Михайлова Дарья",
                        "rating": 3,
                        "review": "Средне, могла бы быть дешевле."
                    },
                    {
                        "name": "Егоров Максим",
                        "rating": 5,
                        "review": "Рекомендую, идеально для торжеств."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/8227140668.jpg",
                "oldprice": "5800",
                "price": "4000",
                "review": "4.4"
            },
            "Платье летнее цветочное": {
                "article": "556677889",
                "assessment": [
                    {
                        "name": "Алексеев Дмитрий",
                        "rating": 5,
                        "review": "Удобное платье, дочь носит с удовольствием."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 3,
                        "review": "Среднее качество, ткань тонкая, но яркие цвета."
                    },
                    {
                        "name": "Николаев Павел",
                        "rating": 4,
                        "review": "Хорошее, цвет не выцветает после стирки."
                    },
                    {
                        "name": "Васильева Наталья",
                        "rating": 4,
                        "review": "Нормально, ожидала лучшего кроя."
                    },
                    {
                        "name": "Григорьев Михаил",
                        "rating": 2,
                        "review": "Не подошло, слишком маленькое."
                    }
                ],
                "country": "Вьетнам",
                "img": "https://ir-8.ozone.ru/s3/multimedia-c/wc500/6703462272.jpg",
                "oldprice": "3200",
                "price": "2200",
                "review": "4.0"
            }
        },
        "Мужская одежда": {
            "Джинсы с зауженным кроем": {
                "article": "563298741",
                "assessment": [
                    {
                        "name": "Максим Волков",
                        "rating": 4,
                        "review": "Плотные джинсы, не вытягиваются после стирки. Узкие в бедрах."
                    },
                    {
                        "name": "Артем Новиков",
                        "rating": 3,
                        "review": "Сидит хорошо, но ткань жестковата. Надеюсь, разносится."
                    },
                    {
                        "name": "Сергей Орлов",
                        "rating": 5,
                        "review": "Отличные джинсы за свои деньги. Цвет насыщенный."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7277303556.jpg",
                "oldprice": "3599",
                "price": "2899",
                "review": "4.0"
            },
            "Классические брюки чинос": {
                "article": "874215036",
                "assessment": [
                    {
                        "name": "Иван Петров",
                        "rating": 4,
                        "review": "Удобные брюки, хорошо сидят. Немного длинные, пришлось укорачивать."
                    },
                    {
                        "name": "Алексей Смирнов",
                        "rating": 5,
                        "review": "Качество отличное, ткань приятная к телу. Ношу с удовольствием."
                    },
                    {
                        "name": "Дмитрий Козлов",
                        "rating": 4,
                        "review": "Цвет соответствует фото. Размер подошел идеально."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/7142211693.jpg",
                "oldprice": "4299",
                "price": "3499",
                "review": "4.3"
            },
            "Рубашка офисная белая": {
                "article": "456123789",
                "assessment": [
                    {
                        "name": "Владимир Лебедев",
                        "rating": 5,
                        "review": "Отличная рубашка для офиса. Ткань дышащая, не мнется."
                    },
                    {
                        "name": "Егор Соколов",
                        "rating": 4,
                        "review": "Плотная ткань, хорошие швы. Воротник немного жесткий."
                    },
                    {
                        "name": "Константин Виноградов",
                        "rating": 5,
                        "review": "Идеально села по фигуре. Качество пошива на высоте."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/7558442682.jpg",
                "oldprice": "2999",
                "price": "2299",
                "review": "4.7"
            },
            "Толстовка с капюшоном": {
                "article": "789654123",
                "assessment": [
                    {
                        "name": "Станислав Федоров",
                        "rating": 5,
                        "review": "Очень теплая и удобная толстовка. Капюшон хорошего размера."
                    },
                    {
                        "name": "Георгий Медведев",
                        "rating": 5,
                        "review": "Материал качественный, молния не заедает. Цвет как на фото."
                    },
                    {
                        "name": "Борис Егоров",
                        "rating": 5,
                        "review": "Сидит отлично, карманы удобные. Носить комфортно."
                    }
                ],
                "country": "Португалия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/8079869711.jpg",
                "oldprice": "4999",
                "price": "4199",
                "review": "4.8"
            },
            "Футболка базовая хлопковая": {
                "article": "128745963",
                "assessment": [
                    {
                        "name": "Андрей Морозов",
                        "rating": 5,
                        "review": "Мягкая ткань, не линяет после стирки. Размер соответствует."
                    },
                    {
                        "name": "Павел Зайцев",
                        "rating": 4,
                        "review": "Хорошая базовая футболка. Немного просвечивает."
                    },
                    {
                        "name": "Роман Павлов",
                        "rating": 5,
                        "review": "Отличное качество за такую цену. Купил несколько штук."
                    }
                ],
                "country": "Бангладеш",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7945615425.jpg",
                "oldprice": "1299",
                "price": "899",
                "review": "4.5"
            }
        },
        "Нижнее белье": {
            "Колготки теплые для девочек": {
                "article": "456789123",
                "assessment": [
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Комфортные колготки, дочь в восторге от тепла."
                    },
                    {
                        "name": "Федоров Виктор",
                        "rating": 2,
                        "review": "Качество так себе, быстро изнашиваются."
                    },
                    {
                        "name": "Зайцева Кристина",
                        "rating": 3,
                        "review": "Хорошие, но цвет не такой, как на фото."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 4,
                        "review": "Подходят для зимы, рекомендую."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/7865568757.jpg",
                "oldprice": "1200",
                "price": "800",
                "review": "3.8"
            },
            "Майка детская с коротким рукавом": {
                "article": "987654321",
                "assessment": [
                    {
                        "name": "Алексеев Дмитрий",
                        "rating": 5,
                        "review": "Удобная майка, сын носит с удовольствием."
                    },
                    {
                        "name": "Морозова Елена",
                        "rating": 3,
                        "review": "Среднее качество, ткань тонкая, но дышащая."
                    },
                    {
                        "name": "Николаев Павел",
                        "rating": 4,
                        "review": "Хорошее, цвет не выцветает после стирки."
                    },
                    {
                        "name": "Васильева Наталья",
                        "rating": 4,
                        "review": "Нормально, ожидала лучшего кроя."
                    },
                    {
                        "name": "Григорьев Михаил",
                        "rating": 2,
                        "review": "Не подошло, слишком маленькое."
                    }
                ],
                "country": "Вьетнам",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7594070487.jpg",
                "oldprice": "600",
                "price": "400",
                "review": "4.0"
            },
            "Носки короткие цветные": {
                "article": "789123456",
                "assessment": [
                    {
                        "name": "Лебедев Роман",
                        "rating": 5,
                        "review": "Отличные носки, яркие и удобные."
                    },
                    {
                        "name": "Коваленко Светлана",
                        "rating": 4,
                        "review": "Хорошие, но материал немного жесткий."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 5,
                        "review": "Качество на уровне, не скользят."
                    },
                    {
                        "name": "Михайлова Дарья",
                        "rating": 3,
                        "review": "Средне, могла бы быть дешевле."
                    },
                    {
                        "name": "Егоров Максим",
                        "rating": 5,
                        "review": "Рекомендую, идеально для повседневки."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7796186312.jpg",
                "oldprice": "450",
                "price": "300",
                "review": "4.4"
            },
            "Трусики хлопковые белые": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Иванова Анна",
                        "rating": 5,
                        "review": "Мягкие и удобные, дочке нравится. Качество хорошее."
                    },
                    {
                        "name": "Петров Сергей",
                        "rating": 4,
                        "review": "Неплохо, но немного тонкие. Цена адекватная."
                    },
                    {
                        "name": "Сидорова Ольга",
                        "rating": 3,
                        "review": "Не подошло по размеру, жаль. Но материал приятный."
                    },
                    {
                        "name": "Кузнецова Мария",
                        "rating": 5,
                        "review": "Рекомендую, стираются хорошо и не садятся."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-h/wc500/7385437745.jpg",
                "oldprice": "700",
                "price": "500",
                "review": "4.2"
            },
            "Трусы хлопковые для мальчиков": {
                "article": "321654987",
                "assessment": [
                    {
                        "name": "Новиков Иван",
                        "rating": 5,
                        "review": "Комфортные и мягкие, сын доволен."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 5,
                        "review": "Качество отличное, стираются без проблем."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Рекомендую, не жмут."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 4,
                        "review": "Хорошие, но немного великоваты."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/8317323753.jpg",
                "oldprice": "650",
                "price": "450",
                "review": "4.6"
            }
        },
        "Спортивная одежда": {
            "Леггинсы спортивные для девочек": {
                "article": "445566778",
                "assessment": [
                    {
                        "name": "Кузнецов Михаил",
                        "rating": 4,
                        "review": "Комфортные леггинсы, хорошо тянутся."
                    },
                    {
                        "name": "Алексеева Дарья",
                        "rating": 3,
                        "review": "Средне, материал немного скользкий."
                    },
                    {
                        "name": "Борисов Артем",
                        "rating": 5,
                        "review": "Подходят для йоги, дочь в восторге."
                    },
                    {
                        "name": "Титова Кристина",
                        "rating": 4,
                        "review": "Хорошие, но цвет выцветает."
                    },
                    {
                        "name": "Егорова Валерия",
                        "rating": 3,
                        "review": "Не очень удобные для бега, жмут."
                    }
                ],
                "country": "Вьетнам",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/8180996596.jpg",
                "oldprice": "1500",
                "price": "1000",
                "review": "3.8"
            },
            "Спортивный костюм для мальчиков": {
                "article": "112233445",
                "assessment": [
                    {
                        "name": "Григорьев Иван",
                        "rating": 5,
                        "review": "Теплый и удобный костюм для зимних тренировок."
                    },
                    {
                        "name": "Соколова Ирина",
                        "rating": 5,
                        "review": "Качество отличное, не сковывает движения."
                    },
                    {
                        "name": "Тимофеев Олег",
                        "rating": 4,
                        "review": "Хороший, но размер оказался маловат."
                    },
                    {
                        "name": "Лебедева Светлана",
                        "rating": 5,
                        "review": "Служит уже полгода, не изнашивается."
                    }
                ],
                "country": "Россия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/7832813856.jpg",
                "oldprice": "3000",
                "price": "2000",
                "review": "4.5"
            },
            "Топ спортивный для девочек": {
                "article": "889900112",
                "assessment": [
                    {
                        "name": "Новиков Роман",
                        "rating": 5,
                        "review": "Легкий топ, идеален для лета."
                    },
                    {
                        "name": "Семенова Валерия",
                        "rating": 4,
                        "review": "Качество неплохое, быстро сохнет после пота."
                    },
                    {
                        "name": "Попов Андрей",
                        "rating": 5,
                        "review": "Удобный, не сползает во время занятий."
                    },
                    {
                        "name": "Михайлов Максим",
                        "rating": 4,
                        "review": "Цена хорошая, но могло бы быть лучшее качество швов."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-v/wc500/7832984899.jpg",
                "oldprice": "750",
                "price": "500",
                "review": "4.3"
            },
            "Футболка спортивная для мальчиков": {
                "article": "223344556",
                "assessment": [
                    {
                        "name": "Иванов Алексей",
                        "rating": 5,
                        "review": "Отличная футболка для тренировок, дышащая и удобная."
                    },
                    {
                        "name": "Петрова Мария",
                        "rating": 4,
                        "review": "Качество хорошее, но цвет немного бледнее, чем на фото."
                    },
                    {
                        "name": "Сидоров Дмитрий",
                        "rating": 5,
                        "review": "Сын носит на каждом занятии, не жалуется."
                    },
                    {
                        "name": "Козлова Ольга",
                        "rating": 3,
                        "review": "Нормально, но после стирки села немного."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/8143897872.jpg",
                "oldprice": "1200",
                "price": "800",
                "review": "4.2"
            },
            "Шорты спортивные для девочек": {
                "article": "667788990",
                "assessment": [
                    {
                        "name": "Никитина Анна",
                        "rating": 5,
                        "review": "Легкие и комфортные, идеально для бега."
                    },
                    {
                        "name": "Федоров Сергей",
                        "rating": 4,
                        "review": "Хорошие шорты, но ткань немного тонкая."
                    },
                    {
                        "name": "Захарова Елена",
                        "rating": 4,
                        "review": "Подошли по размеру, дочь довольна."
                    },
                    {
                        "name": "Морозов Павел",
                        "rating": 3,
                        "review": "Цена приемлемая, но могли бы быть ярче."
                    },
                    {
                        "name": "Волкова Наталья",
                        "rating": 5,
                        "review": "Рекомендую для активных игр."
                    }
                ],
                "country": "Турция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/7522840485.jpg",
                "oldprice": "900",
                "price": "600",
                "review": "4.0"
            }
        }
    },
    "Спорт": {
        "Велоспорт": {
            "Велосипед горный \"Giant\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Петрова Мария",
                        "rating": 5,
                        "review": "Качественная сборка, натуральный алюминий, удобный для длительных поездок, эффективен на трассах."
                    },
                    {
                        "name": "Рыбакова Анна",
                        "rating": 4,
                        "review": "Легкий, надежный, с натуральными материалами, удобно регулировать, идеален для спорта."
                    },
                    {
                        "name": "Сидорова Екатерина",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для активного отдыха."
                    },
                    {
                        "name": "Трофимова Дарья",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, сытный для езды, бодрит."
                    }
                ],
                "country": "Тайвань",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/7488096278.jpg",
                "oldprice": "30000",
                "price": "25000",
                "review": "4.7"
            },
            "Замок для велосипеда \"Abus\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Воробьева Елена",
                        "rating": 4,
                        "review": "Надежный, натуральный металл, с кодом, без химии, защищает велосипед."
                    },
                    {
                        "name": "Гаврилова Татьяна",
                        "rating": 5,
                        "review": "Качественный замок, вкусный для безопасности, удобно использовать, для парковки."
                    },
                    {
                        "name": "Дмитриева Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, прочный, для спокойствия."
                    },
                    {
                        "name": "Егорова Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеально фиксирует."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-b/wc500/6641469983.jpg",
                "oldprice": "2500",
                "price": "2000",
                "review": "4.4"
            },
            "Насос для шин \"Topeak\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Юрьева Виктория",
                        "rating": 5,
                        "review": "Компактный, натуральный металл, с манометром, без искусственных ароматизаторов, для быстрой накачки."
                    },
                    {
                        "name": "Яшина София",
                        "rating": 4,
                        "review": "Качественный насос, вкусный для использования, полезен для шин, удобно хранить."
                    },
                    {
                        "name": "Андреева Александра",
                        "rating": 5,
                        "review": "Свежий, прочный, натуральные материалы, идеален для путешествий."
                    },
                    {
                        "name": "Белякова Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективный инструмент."
                    }
                ],
                "country": "Тайвань",
                "img": "https://ir-8.ozone.ru/s3/multimedia-f/wc500/6242250675.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.6"
            },
            "Перчатки велосипедные \"Giro\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Чайкина Мария",
                        "rating": 5,
                        "review": "Удобные, натуральный материал, с амортизацией, без консервантов, для комфорта."
                    },
                    {
                        "name": "Шаповалова Анна",
                        "rating": 5,
                        "review": "Качественные перчатки, вкусные для рук, удобно держать руль, дети любят."
                    },
                    {
                        "name": "Щербакова Екатерина",
                        "rating": 5,
                        "review": "Свежие, мягкие, натуральные ткани, идеальны для долгих поездок."
                    },
                    {
                        "name": "Энгельгардт Дарья",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, освежают руки."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-8/wc500/8208177308.jpg",
                "oldprice": "1800",
                "price": "1500",
                "review": "4.8"
            },
            "Шлем велосипедный \"Shoei\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Успенская Виктория",
                        "rating": 5,
                        "review": "Легкий, натуральный пластик, с вентиляцией, без химии, защищает голову."
                    },
                    {
                        "name": "Филатова София",
                        "rating": 4,
                        "review": "Качественный шлем, удобный, полезен для безопасности, легко надевать."
                    },
                    {
                        "name": "Хохлова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, ароматный дизайн, идеален для тренировок."
                    },
                    {
                        "name": "Цветкова Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без ГМО, сытный для защиты, эффективен."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/6939982269.jpg",
                "oldprice": "6000",
                "price": "5000",
                "review": "4.5"
            }
        },
        "Водные виды": {
            "Весло для каяка \"Werner\"": {
                "article": "012345678",
                "assessment": [
                    {
                        "name": "Шубина Елена",
                        "rating": 4,
                        "review": "Надежное, натуральный карбон, с эргономичной ручкой, без химии, для гребли."
                    },
                    {
                        "name": "Щукина Татьяна",
                        "rating": 5,
                        "review": "Качественное весло, удобное, полезно для скорости, для активного отдыха."
                    },
                    {
                        "name": "Юдина Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкое, для спокойных водных прогулок."
                    },
                    {
                        "name": "Яковлева Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеально балансирует."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7575551805.jpg",
                "oldprice": "3500",
                "price": "3000",
                "review": "4.4"
            },
            "Гидрокостюм \"Rip Curl\"": {
                "article": "890123456",
                "assessment": [
                    {
                        "name": "Павлова Елена",
                        "rating": 5,
                        "review": "Теплый, натуральный неопрен, с амортизацией, без консервантов, для комфорта в воде."
                    },
                    {
                        "name": "Романова Татьяна",
                        "rating": 5,
                        "review": "Качественный костюм, удобный, полезен для тепла, легко надевать, для долгих сессий."
                    },
                    {
                        "name": "Семенова Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные ткани, идеальны для холодной воды."
                    },
                    {
                        "name": "Титова Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, согревает эффективно."
                    }
                ],
                "country": "Австралия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7743019136.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.8"
            },
            "Доска для серфинга \"Quiksilver\"": {
                "article": "678901234",
                "assessment": [
                    {
                        "name": "Жукова Мария",
                        "rating": 5,
                        "review": "Качественная доска, натуральный полиуретан, удобная для волн, эффективна в воде."
                    },
                    {
                        "name": "Зайцева Анна",
                        "rating": 4,
                        "review": "Легкая, надежная, с натуральными материалами, удобно балансировать, идеальна для спорта."
                    },
                    {
                        "name": "Иванова Екатерина",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для активного отдыха."
                    },
                    {
                        "name": "Козлова Дарья",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, устойчивая на воде, бодрит."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/8376828670.jpg",
                "oldprice": "18000",
                "price": "15000",
                "review": "4.7"
            },
            "Плавательные очки \"Speedo\"": {
                "article": "789012345",
                "assessment": [
                    {
                        "name": "Лебедева Виктория",
                        "rating": 5,
                        "review": "Удобные, натуральный силикон, с антизапотевающим покрытием, без химии, защищают глаза."
                    },
                    {
                        "name": "Морозова София",
                        "rating": 4,
                        "review": "Качественные очки, комфортные, полезны для видимости, легко надевать."
                    },
                    {
                        "name": "Николаева Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, герметичные, идеальны для тренировок."
                    },
                    {
                        "name": "Орлова Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективны в бассейне."
                    }
                ],
                "country": "Великобритания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/7302018772.jpg",
                "oldprice": "1500",
                "price": "1200",
                "review": "4.5"
            },
            "Спасательный жилет \"Mustang\"": {
                "article": "901234567",
                "assessment": [
                    {
                        "name": "Ульянова Виктория",
                        "rating": 5,
                        "review": "Компактный, натуральный материал, с манометром плавучести, без искусственных ароматизаторов, для безопасности."
                    },
                    {
                        "name": "Федорова София",
                        "rating": 4,
                        "review": "Качественный жилет, удобный, полезен для плавания, легко регулировать."
                    },
                    {
                        "name": "Хмельницкая Александра",
                        "rating": 5,
                        "review": "Свежий, прочный, натуральные материалы, идеален для водных видов спорта."
                    },
                    {
                        "name": "Чернова Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективный для спасения."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/7502432329.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.6"
            }
        },
        "Зимние виды": {
            "Горнолыжный шлем \"Smith\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Семенова Елена",
                        "rating": 4,
                        "review": "Надежный шлем, натуральный пеноматериал, с эргономичной формой, без химии, для защиты."
                    },
                    {
                        "name": "Титова Татьяна",
                        "rating": 5,
                        "review": "Качественный, удобный, полезен для безопасности, для активного катания."
                    },
                    {
                        "name": "Ульянова Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкий, для скоростных спусков."
                    },
                    {
                        "name": "Федорова Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеально защищает."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-2/wc500/8375960342.jpg",
                "oldprice": "18000",
                "price": "15000",
                "review": "4.8"
            },
            "Коньки \"CCM\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Дмитриева Виктория",
                        "rating": 5,
                        "review": "Удобные коньки, натуральный лед, с острым лезвием, без химии, для катания."
                    },
                    {
                        "name": "Егорова София",
                        "rating": 4,
                        "review": "Качественные, комфортные, полезны для скорости, легко надевать."
                    },
                    {
                        "name": "Жукова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для тренировок."
                    },
                    {
                        "name": "Зайцева Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективны на льду."
                    }
                ],
                "country": "Канада",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7287903468.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.7"
            },
            "Лыжи \"Rossignol\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Андреева Мария",
                        "rating": 5,
                        "review": "Качественные лыжи, натуральный материал, удобные для склонов, эффективны в снегу."
                    },
                    {
                        "name": "Борисова Анна",
                        "rating": 4,
                        "review": "Легкие, надежные, с натуральными элементами, удобно кататься, идеальны для спорта."
                    },
                    {
                        "name": "Васильева Екатерина",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для зимнего отдыха."
                    },
                    {
                        "name": "Григорьева Дарья",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, устойчивые на снегу, бодрят."
                    }
                ],
                "country": "Франция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/7942084137.jpg",
                "oldprice": "30000",
                "price": "25000",
                "review": "4.6"
            },
            "Санки \"Stiga\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Николаева Виктория",
                        "rating": 5,
                        "review": "Компактные санки, натуральный материал, с манометром прочности, без искусственных ароматизаторов, для зимнего веселья."
                    },
                    {
                        "name": "Орлова София",
                        "rating": 4,
                        "review": "Качественные, удобные, полезны для спуска, легко складывать."
                    },
                    {
                        "name": "Павлова Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для снежных горок."
                    },
                    {
                        "name": "Романова Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективны для семейного отдыха."
                    }
                ],
                "country": "Швеция",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7154722279.jpg",
                "oldprice": "3500",
                "price": "3000",
                "review": "4.4"
            },
            "Снегоступы \"Tubbs\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Иванова Елена",
                        "rating": 5,
                        "review": "Теплые снегоступы, натуральный материал, с амортизацией, без консервантов, для прогулок по снегу."
                    },
                    {
                        "name": "Козлова Татьяна",
                        "rating": 5,
                        "review": "Качественные, удобные, полезны для баланса, легко регулировать, для долгих походов."
                    },
                    {
                        "name": "Лебедева Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные ткани, идеальны для холодного снега."
                    },
                    {
                        "name": "Морозова Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, согревают эффективно."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/8189100189.jpg",
                "oldprice": "15000",
                "price": "12000",
                "review": "4.5"
            }
        },
        "Йога": {
            "Блок для йоги \"Jade Yoga\"": {
                "article": "789012346",
                "assessment": [
                    {
                        "name": "Дмитриева Виктория",
                        "rating": 5,
                        "review": "Удобный блок, натуральный EVA, с эргономичной формой, без химии, для поддержки."
                    },
                    {
                        "name": "Егорова София",
                        "rating": 4,
                        "review": "Качественный, комфортный, полезен для поз, легко использовать."
                    },
                    {
                        "name": "Жукова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для тренировок."
                    },
                    {
                        "name": "Зайцева Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективен для растяжки."
                    }
                ],
                "country": "Индия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/7352708400.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.6"
            },
            "Болстер для йоги \"Hugger Mugger\"": {
                "article": "901234568",
                "assessment": [
                    {
                        "name": "Николаева Виктория",
                        "rating": 5,
                        "review": "Компактный болстер, натуральный материал, с наполнителем, без искусственных ароматизаторов, для релаксации."
                    },
                    {
                        "name": "Орлова София",
                        "rating": 4,
                        "review": "Качественный, удобный, полезен для поз, легко позиционировать."
                    },
                    {
                        "name": "Павлова Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для медитации."
                    },
                    {
                        "name": "Романова Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективен для комфорта."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-d/wc500/6344963101.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.7"
            },
            "Коврик для йоги \"Manduka\"": {
                "article": "678901235",
                "assessment": [
                    {
                        "name": "Андреева Мария",
                        "rating": 5,
                        "review": "Качественный коврик, натуральный каучук, удобный для асан, эффективен для баланса."
                    },
                    {
                        "name": "Борисова Анна",
                        "rating": 4,
                        "review": "Легкий, надежный, с натуральными элементами, удобно практиковать, идеален для йоги."
                    },
                    {
                        "name": "Васильева Екатерина",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для ежедневных занятий."
                    },
                    {
                        "name": "Григорьева Дарья",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, устойчивый, бодрит."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/8243852025.jpg",
                "oldprice": "6000",
                "price": "5000",
                "review": "4.8"
            },
            "Подушка для медитации \"Sakura\"": {
                "article": "012345679",
                "assessment": [
                    {
                        "name": "Семенова Елена",
                        "rating": 4,
                        "review": "Надежная подушка, натуральный хлопок, с эргономичной формой, без химии, для сидения."
                    },
                    {
                        "name": "Титова Татьяна",
                        "rating": 5,
                        "review": "Качественная, удобная, полезна для фокуса, для активной медитации."
                    },
                    {
                        "name": "Ульянова Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкая, для спокойных практик."
                    },
                    {
                        "name": "Федорова Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеально поддерживает."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/7316936889.jpg",
                "oldprice": "1800",
                "price": "1500",
                "review": "4.4"
            },
            "Ремень для йоги \"Gaiam\"": {
                "article": "890123457",
                "assessment": [
                    {
                        "name": "Иванова Елена",
                        "rating": 5,
                        "review": "Теплый ремень, натуральный хлопок, с регулировкой, без консервантов, для асан."
                    },
                    {
                        "name": "Козлова Татьяна",
                        "rating": 5,
                        "review": "Качественный, удобный, полезен для фиксации, легко регулировать, для долгих сессий."
                    },
                    {
                        "name": "Лебедева Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные ткани, идеальны для йоги."
                    },
                    {
                        "name": "Морозова Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, помогает с гибкостью."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7340538183.jpg",
                "oldprice": "750",
                "price": "600",
                "review": "4.5"
            }
        },
        "Одежда для спорта": {
            "Кроссовки \"Puma\"": {
                "article": "345678902",
                "assessment": [
                    {
                        "name": "Иванова Елена",
                        "rating": 5,
                        "review": "Теплые кроссовки, натуральный материал, с амортизацией, без консервантов, для бега."
                    },
                    {
                        "name": "Козлова Татьяна",
                        "rating": 5,
                        "review": "Качественные, удобные, полезны для поддержки, легко регулировать, для долгих тренировок."
                    },
                    {
                        "name": "Лебедева Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные ткани, идеальны для спорта."
                    },
                    {
                        "name": "Морозова Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, согревают эффективно."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-q/wc500/8230442534.jpg",
                "oldprice": "7500",
                "price": "6000",
                "review": "4.8"
            },
            "Леггинсы \"Adidas\"": {
                "article": "234567891",
                "assessment": [
                    {
                        "name": "Дмитриева Виктория",
                        "rating": 5,
                        "review": "Удобные леггинсы, натуральный эластик, с поддержкой, без химии, для фитнеса."
                    },
                    {
                        "name": "Егорова София",
                        "rating": 4,
                        "review": "Качественные, комфортные, полезны для растяжки, легко надевать."
                    },
                    {
                        "name": "Жукова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для йоги."
                    },
                    {
                        "name": "Зайцева Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективны для движений."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7354380112.jpg",
                "oldprice": "4000",
                "price": "3500",
                "review": "4.6"
            },
            "Спортивная майка \"Nike\"": {
                "article": "123456780",
                "assessment": [
                    {
                        "name": "Андреева Мария",
                        "rating": 5,
                        "review": "Качественная майка, натуральный хлопок, удобная для тренировок, эффективна для вентиляции."
                    },
                    {
                        "name": "Борисова Анна",
                        "rating": 4,
                        "review": "Легкая, надежная, с натуральными элементами, удобно носить, идеальна для бега."
                    },
                    {
                        "name": "Васильева Екатерина",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для активного образа жизни."
                    },
                    {
                        "name": "Григорьева Дарья",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, дышащая, бодрит."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/8201546789.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.7"
            },
            "Футболка \"Under Armour\"": {
                "article": "456789013",
                "assessment": [
                    {
                        "name": "Николаева Виктория",
                        "rating": 5,
                        "review": "Компактная футболка, натуральный материал, с манометром прочности, без искусственных ароматизаторов, для тренировок."
                    },
                    {
                        "name": "Орлова София",
                        "rating": 4,
                        "review": "Качественная, удобная, полезна для вентиляции, легко стирать."
                    },
                    {
                        "name": "Павлова Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для активного отдыха."
                    },
                    {
                        "name": "Романова Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективна для комфорта."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7265420060.jpg",
                "oldprice": "3200",
                "price": "2800",
                "review": "4.5"
            },
            "Шорты \"Reebok\"": {
                "article": "567890124",
                "assessment": [
                    {
                        "name": "Семенова Елена",
                        "rating": 4,
                        "review": "Надежные шорты, натуральный хлопок, с эргономичной формой, без химии, для бега."
                    },
                    {
                        "name": "Титова Татьяна",
                        "rating": 5,
                        "review": "Качественные, удобные, полезны для свободы движений, для активного спорта."
                    },
                    {
                        "name": "Ульянова Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкие, для летних тренировок."
                    },
                    {
                        "name": "Федорова Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеально сидят."
                    }
                ],
                "country": "Великобритания",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-p/wc500/7669879441.jpg",
                "oldprice": "2600",
                "price": "2200",
                "review": "4.4"
            }
        },
        "Тренажеры": {
            "Беговая дорожка \"NordicTrack\"": {
                "article": "678901236",
                "assessment": [
                    {
                        "name": "Галина Сергеевна",
                        "rating": 5,
                        "review": "Качественная дорожка, надежная конструкция, удобная для бега, эффективна для кардио."
                    },
                    {
                        "name": "Денисова Ольга",
                        "rating": 4,
                        "review": "Легкая в использовании, с натуральными материалами, удобно регулировать, идеальна для дома."
                    },
                    {
                        "name": "Евгеньева Анна",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для активных тренировок."
                    },
                    {
                        "name": "Жданова Мария",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, прочная, бодрит."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/8139873540.jpg",
                "oldprice": "180000",
                "price": "150000",
                "review": "4.8"
            },
            "Велотренажер \"Peloton\"": {
                "article": "890123458",
                "assessment": [
                    {
                        "name": "Максимова Елена",
                        "rating": 5,
                        "review": "Тихий велотренажер, натуральный материал, с экраном, без консервантов, для интервальных тренировок."
                    },
                    {
                        "name": "Новикова Татьяна",
                        "rating": 5,
                        "review": "Качественный, удобный, полезен для выносливости, легко подключать."
                    },
                    {
                        "name": "Осипова Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные ткани, идеальны для езды."
                    },
                    {
                        "name": "Петрова Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, помогает с формой."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/8271154387.jpg",
                "oldprice": "230000",
                "price": "200000",
                "review": "4.7"
            },
            "Гребной тренажер \"Concept2\"": {
                "article": "901234569",
                "assessment": [
                    {
                        "name": "Рыжова Виктория",
                        "rating": 5,
                        "review": "Компактный тренажер, натуральный материал, с мониторингом, без искусственных ароматизаторов, для гребли."
                    },
                    {
                        "name": "Сидорова София",
                        "rating": 4,
                        "review": "Качественный, удобный, полезен для мышц, легко хранить."
                    },
                    {
                        "name": "Тимофеева Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для симуляции."
                    },
                    {
                        "name": "Успенская Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективен для тренировки."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-r/wc500/7930473039.jpg",
                "oldprice": "95000",
                "price": "80000",
                "review": "4.5"
            },
            "Силовой тренажер \"Bowflex\"": {
                "article": "012345680",
                "assessment": [
                    {
                        "name": "Фомина Елена",
                        "rating": 4,
                        "review": "Надежный тренажер, натуральный металл, с эргономичной формой, без химии, для силовых упражнений."
                    },
                    {
                        "name": "Хохлова Татьяна",
                        "rating": 5,
                        "review": "Качественный, удобный, полезен для наращивания, для домашних занятий."
                    },
                    {
                        "name": "Цветкова Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкие, для комплексных тренировок."
                    },
                    {
                        "name": "Черепанова Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеально укрепляет."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/7247512698.jpg",
                "oldprice": "120000",
                "price": "100000",
                "review": "4.4"
            },
            "Эллиптический тренажер \"LifeFitness\"": {
                "article": "789012347",
                "assessment": [
                    {
                        "name": "Зиновьева Виктория",
                        "rating": 5,
                        "review": "Удобный тренажер, надежный механизм, с поддержкой, без химии, для фитнеса."
                    },
                    {
                        "name": "Ильина София",
                        "rating": 4,
                        "review": "Качественный, комфортный, полезен для суставов, легко пользоваться."
                    },
                    {
                        "name": "Коваленко Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для тренировок."
                    },
                    {
                        "name": "Лазарева Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективен для сжигания калорий."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-2/wc500/7233105638.jpg",
                "oldprice": "140000",
                "price": "120000",
                "review": "4.6"
            }
        },
        "Фитнес": {
            "Гантели": {
                "article": "678901234",
                "assessment": [
                    {
                        "name": "Шаповалова Мария",
                        "rating": 5,
                        "review": "Качественные гантели, надежная конструкция, удобны в использовании, эффективны для тренировок."
                    },
                    {
                        "name": "Щербакова Ольга",
                        "rating": 4,
                        "review": "Легкие и прочные, с натуральными материалами, удобно держать, идеальны для фитнеса."
                    },
                    {
                        "name": "Юдина Анна",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для комфортных занятий."
                    },
                    {
                        "name": "Яковлева Елена",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, прочные, бодрят во время упражнений."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-e/wc500/7495079306.jpg",
                "oldprice": "6000",
                "price": "5000",
                "review": "4.7"
            },
            "Коврик для фитнеса \"Under Armour\"": {
                "article": "901234567",
                "assessment": [
                    {
                        "name": "Ильина Виктория",
                        "rating": 5,
                        "review": "Компактный коврик, натуральный материал, с антискольжением, без искусственных ароматизаторов, для упражнений."
                    },
                    {
                        "name": "Кузнецова София",
                        "rating": 4,
                        "review": "Качественный, удобный, полезен для изоляции, легко сворачивать."
                    },
                    {
                        "name": "Лазарева Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для фитнеса."
                    },
                    {
                        "name": "Морозова Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективен для комфорта."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7555676133.jpg",
                "oldprice": "4500",
                "price": "4000",
                "review": "4.5"
            },
            "Степпер \"Reebok\"": {
                "article": "890123456",
                "assessment": [
                    {
                        "name": "Денисова Елена",
                        "rating": 5,
                        "review": "Тихий степпер, натуральный материал, с амортизацией, без консервантов, для кардио-тренировок."
                    },
                    {
                        "name": "Ефимова Татьяна",
                        "rating": 5,
                        "review": "Качественный, удобный, полезен для сжигания калорий, легко собирать."
                    },
                    {
                        "name": "Жданова Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные ткани, идеальны для комфорта."
                    },
                    {
                        "name": "Зотова Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, помогает в тренировках."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/8277215652.jpg",
                "oldprice": "18000",
                "price": "15000",
                "review": "4.8"
            },
            "Турник \"Bowflex\"": {
                "article": "012345678",
                "assessment": [
                    {
                        "name": "Новикова Елена",
                        "rating": 4,
                        "review": "Надежный турник, натуральный корпус, с креплениями, без химии, для подтягиваний."
                    },
                    {
                        "name": "Осипова Татьяна",
                        "rating": 5,
                        "review": "Качественный, удобный, полезен для силы, для домашних тренировок."
                    },
                    {
                        "name": "Петрова Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкие, для безопасного использования."
                    },
                    {
                        "name": "Рыжова Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеален для фитнеса."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-c/wc500/7729884408.jpg",
                "oldprice": "14000",
                "price": "12000",
                "review": "4.4"
            },
            "Эспандер": {
                "article": "789012345",
                "assessment": [
                    {
                        "name": "Александрова Виктория",
                        "rating": 5,
                        "review": "Удобный эспандер, надежный механизм, с поддержкой, без химии, для домашних тренировок."
                    },
                    {
                        "name": "Беляева София",
                        "rating": 4,
                        "review": "Качественный, комфортный, полезен для растяжки, легко хранить."
                    },
                    {
                        "name": "Волкова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для фитнеса."
                    },
                    {
                        "name": "Гаврилова Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективен для укрепления мышц."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/7971828630.jpg",
                "oldprice": "3500",
                "price": "3000",
                "review": "4.6"
            }
        }
    },
    "Электроника": {
        "Аксессуары для телефонов": {
            "Держатель для телефона \"Baseus\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Абрамова Виктория",
                        "rating": 5,
                        "review": "Компактный держатель, натуральный материал, с антискольжением, без искусственных ароматизаторов, для фиксации."
                    },
                    {
                        "name": "Боброва София",
                        "rating": 4,
                        "review": "Качественный, удобный, полезен для авто, легко устанавливать."
                    },
                    {
                        "name": "Васильева Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для использования."
                    },
                    {
                        "name": "Григорьева Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективен для комфорта."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-k/wc500/7398566156.jpg",
                "oldprice": "1200",
                "price": "1000",
                "review": "4.5"
            },
            "Зарядное устройство \"Xiaomi\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Щукина Елена",
                        "rating": 5,
                        "review": "Быстрое зарядное, натуральный материал, с защитой, без консервантов, для быстрой зарядки."
                    },
                    {
                        "name": "Энгельгардт Татьяна",
                        "rating": 5,
                        "review": "Качественное, удобное, полезно для батареи, легко использовать."
                    },
                    {
                        "name": "Юрьева Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные компоненты, идеальны для комфорта."
                    },
                    {
                        "name": "Яшина Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, помогает в зарядке."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7186945485.jpg",
                "oldprice": "1800",
                "price": "1500",
                "review": "4.8"
            },
            "Защитное стекло \"Belkin\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Дмитриева Елена",
                        "rating": 4,
                        "review": "Надежное стекло, натуральный корпус, с креплениями, без химии, для защиты экрана."
                    },
                    {
                        "name": "Егорова Татьяна",
                        "rating": 5,
                        "review": "Качественное, удобное, полезно для экрана, для безопасного использования."
                    },
                    {
                        "name": "Жукова Ольга",
                        "rating": 4,
                        "review": "Свежие механизмы, натуральные, легкие, для повседневной защиты."
                    },
                    {
                        "name": "Зайцева Ирина",
                        "rating": 5,
                        "review": "Натуральный состав, без добавок, идеален для телефона."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7238250019.jpg",
                "oldprice": "1000",
                "price": "800",
                "review": "4.4"
            },
            "Наушники беспроводные \"Samsung\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Харитонова Виктория",
                        "rating": 5,
                        "review": "Удобные наушники, надежный звук, с поддержкой, без химии, для комфортного прослушивания."
                    },
                    {
                        "name": "Цветкова София",
                        "rating": 4,
                        "review": "Качественные, комфортные, полезны для музыки, легко заряжать."
                    },
                    {
                        "name": "Чернова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для ежедневного использования."
                    },
                    {
                        "name": "Шевченко Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективны для звука."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/7771862264.jpg",
                "oldprice": "6000",
                "price": "5000",
                "review": "4.6"
            },
            "Чехол для iPhone \"Apple\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Сидорова Мария",
                        "rating": 5,
                        "review": "Качественный чехол, надежная защита, удобен в использовании, эффективен для сохранения телефона."
                    },
                    {
                        "name": "Тихонова Ольга",
                        "rating": 4,
                        "review": "Легкий и прочный, с натуральными материалами, удобно держать, идеален для повседневного использования."
                    },
                    {
                        "name": "Успенская Анна",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для комфортной защиты."
                    },
                    {
                        "name": "Федорова Елена",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, прочные, бодрят в использовании."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/7340854542.jpg",
                "oldprice": "3000",
                "price": "2500",
                "review": "4.7"
            }
        },
        "Игровые консоли": {
            "Nintendo Switch \"Nintendo\"": {
                "article": "345678902",
                "assessment": [
                    {
                        "name": "Семенова Елена",
                        "rating": 5,
                        "review": "Портативная консоль, натуральный материал, с защитой, без консервантов, для мобильных игр."
                    },
                    {
                        "name": "Тарасова Татьяна",
                        "rating": 5,
                        "review": "Качественная, удобная, полезна для семейных игр, легко использовать."
                    },
                    {
                        "name": "Ульянова Ольга",
                        "rating": 5,
                        "review": "Свежие, эластичные, натуральные компоненты, идеальны для комфорта."
                    },
                    {
                        "name": "Фомина Ирина",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, помогает в развлечении."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/7304469695.jpg",
                "oldprice": "35000",
                "price": "30000",
                "review": "4.6"
            },
            "PlayStation 4 \"Sony\"": {
                "article": "456789013",
                "assessment": [
                    {
                        "name": "Хохлова Виктория",
                        "rating": 5,
                        "review": "Компактная консоль, натуральный материал, с антискольжением, без искусственных ароматизаторов, для ретро-игр."
                    },
                    {
                        "name": "Цветкова София",
                        "rating": 4,
                        "review": "Качественная, удобная, полезна для коллекции игр, легко подключать."
                    },
                    {
                        "name": "Черепанова Александра",
                        "rating": 5,
                        "review": "Свежие, прочные, натуральные материалы, идеальны для использования."
                    },
                    {
                        "name": "Шишкина Надежда",
                        "rating": 5,
                        "review": "Натуральный рецепт, без консервантов, эффективен для комфорта."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/7178331791.jpg",
                "oldprice": "28000",
                "price": "25000",
                "review": "4.5"
            },
            "PlayStation 5 \"Sony\"": {
                "article": "123456780",
                "assessment": [
                    {
                        "name": "Иванова Мария",
                        "rating": 5,
                        "review": "Качественная консоль, надежная производительность, удобна в использовании, эффективна для игр."
                    },
                    {
                        "name": "Козлова Ольга",
                        "rating": 4,
                        "review": "Легкая и прочная, с натуральными материалами, удобно держать контроллер, идеальна для гейминга."
                    },
                    {
                        "name": "Лебедева Анна",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные компоненты, без дефектов, для комфортного развлечения."
                    },
                    {
                        "name": "Макарова Елена",
                        "rating": 5,
                        "review": "Натуральные материалы, без синтетики, прочные, бодрят во время игры."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-w/wc500/8191476536.jpg",
                "oldprice": "50000",
                "price": "45000",
                "review": "4.8"
            },
            "Xbox Series X \"Microsoft\"": {
                "article": "234567891",
                "assessment": [
                    {
                        "name": "Николаева Виктория",
                        "rating": 5,
                        "review": "Удобная консоль, надежная графика, с поддержкой, без химии, для домашних развлечений."
                    },
                    {
                        "name": "Орлова София",
                        "rating": 4,
                        "review": "Качественная, комфортная, полезна для игр, легко подключать."
                    },
                    {
                        "name": "Павлова Александра",
                        "rating": 5,
                        "review": "Свежие материалы, натуральные, прочные, идеальны для консолей."
                    },
                    {
                        "name": "Романова Надежда",
                        "rating": 4,
                        "review": "Натуральный состав, без добавок, эффективны для производительности."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/6917110414.jpg",
                "oldprice": "52000",
                "price": "47000",
                "review": "4.7"
            }
        },
        "Наушники": {
            "AirPods Pro \"Apple\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Лебедева Лидия",
                        "rating": 5,
                        "review": "Беспроводные TWS-наушники, натуральный силикон в наконечниках, с защитой от влаги, для активного образа жизни."
                    },
                    {
                        "name": "Морозова Марина",
                        "rating": 4,
                        "review": "Компактные, удобные в ушах, полезны для звонков, легко синхронизируются."
                    },
                    {
                        "name": "Назарова Надежда",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные материалы, без дефектов, для seamless интеграции."
                    },
                    {
                        "name": "Орлова Ольга",
                        "rating": 5,
                        "review": "Натуральные компоненты, без раздражителей, эффективны для спорта."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-n/wc500/7477394783.jpg",
                "oldprice": "24000",
                "price": "20000",
                "review": "4.6"
            },
            "Наушники \"Bose QuietComfort 45\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Дмитриева Жанна",
                        "rating": 5,
                        "review": "Премиум-шумодав, надежный бас, удобны для путешествий, эффективны в шумных местах."
                    },
                    {
                        "name": "Егорова Зоя",
                        "rating": 4,
                        "review": "Комфортные, с мягкими подушками из натуральных материалов, легко носить, полезны для фокуса."
                    },
                    {
                        "name": "Захарова Ирина",
                        "rating": 5,
                        "review": "Качественная сборка, натуральные элементы, прочные, идеальны для повседневного использования."
                    },
                    {
                        "name": "Кузнецова Кира",
                        "rating": 5,
                        "review": "Без лишних добавок в конструкции, эффективны для чистого звука, удобны в управлении."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7618177937.jpg",
                "oldprice": "32000",
                "price": "28000",
                "review": "4.7"
            },
            "Наушники \"JBL Tune 760NC\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Уварова Ульяна",
                        "rating": 4,
                        "review": "Доступные наушники с ANC, натуральный пластик, с креплением, без химических запахов, для бюджетного гейминга."
                    },
                    {
                        "name": "Федорова Фаина",
                        "rating": 5,
                        "review": "Легкие, удобные, полезны для музыки, для безопасного ношения."
                    },
                    {
                        "name": "Харитонова Христина",
                        "rating": 4,
                        "review": "Свежая сборка, натуральные элементы, легкие, для ежедневного прослушивания."
                    },
                    {
                        "name": "Чернова Чеслава",
                        "rating": 5,
                        "review": "Натуральный дизайн, без лишнего, идеален для басового звука."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/7476658108.jpg",
                "oldprice": "10000",
                "price": "8000",
                "review": "4.4"
            },
            "Наушники \"Sennheiser HD 450BT\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Петрова Полина",
                        "rating": 5,
                        "review": "Балансированный звук, натуральная отделка, с регулировкой, без искусственных шумов, для аудиофилов."
                    },
                    {
                        "name": "Родионова Раиса",
                        "rating": 4,
                        "review": "Удобные для головы, комфортные амбушюры, полезны для работы, легко заряжать."
                    },
                    {
                        "name": "Смирнова София",
                        "rating": 5,
                        "review": "Прочные, натуральные материалы, идеальны для длительных сессий."
                    },
                    {
                        "name": "Тимофеева Тамара",
                        "rating": 5,
                        "review": "Без добавок в электронике, эффективны для высококачественного аудио."
                    }
                ],
                "country": "Германия",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-o/wc500/7609604424.jpg",
                "oldprice": "18000",
                "price": "15000",
                "review": "4.5"
            },
            "Наушники \"Sony WH-1000XM4\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Абрамова Анна",
                        "rating": 5,
                        "review": "Отличные наушники с шумоподавлением, качественный звук, удобны для длительного ношения, эффективны в изоляции."
                    },
                    {
                        "name": "Борисова Виктория",
                        "rating": 5,
                        "review": "Прочные и легкие, натуральные материалы в амбушюрах, удобно регулировать, идеальны для музыки."
                    },
                    {
                        "name": "Васильева Дарья",
                        "rating": 4,
                        "review": "Современный дизайн, качественные компоненты, без помех, для комфортного прослушивания."
                    },
                    {
                        "name": "Григорьева Елена",
                        "rating": 5,
                        "review": "Натуральная кожа на оголовье, без синтетики, прочные, улучшают качество аудио."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-a/wc500/7669844614.jpg",
                "oldprice": "30000",
                "price": "25000",
                "review": "4.8"
            }
        },
        "Ноутбуки": {
            "Ноутбук \"ASUS ROG Strix G15\"": {
                "article": "901234567",
                "assessment": [
                    {
                        "name": "Петрова Полина",
                        "rating": 5,
                        "review": "Игровой ноутбук, натуральный пластик и металл, с охлаждением, без искусственных шумов, для геймеров."
                    },
                    {
                        "name": "Родионова Раиса",
                        "rating": 4,
                        "review": "Удобные для игр, комфортные клавиши, полезен для мультиплеера, легко охлаждается."
                    },
                    {
                        "name": "Смирнова София",
                        "rating": 5,
                        "review": "Прочные, натуральные материалы, идеален для длительных сессий."
                    },
                    {
                        "name": "Тимофеева Тамара",
                        "rating": 5,
                        "review": "Без добавок в электронике, эффективен для высококачественных игр."
                    }
                ],
                "country": "Тайвань",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/8223829637.jpg",
                "oldprice": "120000",
                "price": "100000",
                "review": "4.5"
            },
            "Ноутбук \"Apple MacBook Air\"": {
                "article": "678901234",
                "assessment": [
                    {
                        "name": "Абрамова Анна",
                        "rating": 5,
                        "review": "Легкий и компактный ноутбук, качественный алюминиевый корпус из натуральных материалов, удобен для работы, эффективен для многозадачности."
                    },
                    {
                        "name": "Борисова Виктория",
                        "rating": 5,
                        "review": "Долгое время автономной работы, натуральный дизайн, без лишних элементов, идеален для путешествий."
                    },
                    {
                        "name": "Васильева Дарья",
                        "rating": 4,
                        "review": "Высокая производительность, комфортная клавиатура, полезен для творчества, без дефектов."
                    },
                    {
                        "name": "Григорьева Елена",
                        "rating": 5,
                        "review": "Натуральные материалы в сборке, прочный, улучшает эффективность работы."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-n/wc500/7669906727.jpg",
                "oldprice": "140000",
                "price": "120000",
                "review": "4.8"
            },
            "Ноутбук \"Dell XPS 13\"": {
                "article": "789012345",
                "assessment": [
                    {
                        "name": "Дмитриева Жанна",
                        "rating": 5,
                        "review": "Тонкий и легкий, премиум-сборка с натуральными элементами, удобен для офиса, эффективен в батареи."
                    },
                    {
                        "name": "Егорова Зоя",
                        "rating": 4,
                        "review": "Качественный экран, мягкие подушки для рук, полезен для видео, без химических запахов."
                    },
                    {
                        "name": "Захарова Ирина",
                        "rating": 5,
                        "review": "Прочный алюминиевый корпус, натуральные материалы, идеален для длительной работы."
                    },
                    {
                        "name": "Кузнецова Кира",
                        "rating": 5,
                        "review": "Без лишних добавок, эффективен для высокопроизводительных задач, удобен в переноске."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7280501897.jpg",
                "oldprice": "110000",
                "price": "90000",
                "review": "4.7"
            },
            "Ноутбук \"HP Pavilion 15\"": {
                "article": "012345678",
                "assessment": [
                    {
                        "name": "Уварова Ульяна",
                        "rating": 4,
                        "review": "Доступный ноутбук, натуральный пластик, с портами, без химических запахов, для повседневного использования."
                    },
                    {
                        "name": "Федорова Фаина",
                        "rating": 5,
                        "review": "Легкий, удобный, полезен для учебы, для безопасного хранения."
                    },
                    {
                        "name": "Харитонова Христина",
                        "rating": 4,
                        "review": "Свежая сборка, натуральные элементы, легкий, для ежедневных задач."
                    },
                    {
                        "name": "Чернова Чеслава",
                        "rating": 5,
                        "review": "Натуральный дизайн, без лишнего, идеален для мультимедиа."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-9/wc500/7802849781.jpg",
                "oldprice": "75000",
                "price": "60000",
                "review": "4.4"
            },
            "Ноутбук \"Lenovo ThinkPad X1 Carbon\"": {
                "article": "890123456",
                "assessment": [
                    {
                        "name": "Лебедева Лидия",
                        "rating": 5,
                        "review": "Бизнес-класс, натуральный карбон в корпусе, с защитой от влаги, для активного использования."
                    },
                    {
                        "name": "Морозова Марина",
                        "rating": 4,
                        "review": "Удобная клавиатура, полезен для презентаций, легко синхронизируется."
                    },
                    {
                        "name": "Назарова Надежда",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные материалы, без дефектов, для seamless работы."
                    },
                    {
                        "name": "Орлова Ольга",
                        "rating": 5,
                        "review": "Натуральные компоненты, без раздражителей, эффективен для корпоративных задач."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7126185175.jpg",
                "oldprice": "170000",
                "price": "150000",
                "review": "4.6"
            }
        },
        "Планшеты": {
            "Планшет \"Amazon Fire HD 10\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Макарова Ульяна",
                        "rating": 4,
                        "review": "Доступный планшет, натуральный пластик, с Alexa, без химических запахов, для повседневного использования."
                    },
                    {
                        "name": "Николаева Фаина",
                        "rating": 5,
                        "review": "Легкий, удобный, полезен для чтения, для безопасного хранения данных."
                    },
                    {
                        "name": "Осипова Христина",
                        "rating": 4,
                        "review": "Свежая сборка, натуральные элементы, легкий, для ежедневных задач."
                    },
                    {
                        "name": "Павлова Чеслава",
                        "rating": 5,
                        "review": "Натуральный дизайн, без лишнего, идеален для развлечений."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-1/wc500/8267709925.jpg",
                "oldprice": "25000",
                "price": "20000",
                "review": "4.4"
            },
            "Планшет \"Apple iPad Pro\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Шарова Анна",
                        "rating": 5,
                        "review": "Легкий и мощный планшет, натуральный алюминиевый корпус, удобен для творчества, эффективен для графики."
                    },
                    {
                        "name": "Щербакова Виктория",
                        "rating": 5,
                        "review": "Долгое время работы, натуральный дизайн без лишних элементов, идеален для чтения и просмотра."
                    },
                    {
                        "name": "Эдуардова Дарья",
                        "rating": 4,
                        "review": "Высокая производительность, комфортный экран, полезен для работы, без дефектов."
                    },
                    {
                        "name": "Юрьева Елена",
                        "rating": 5,
                        "review": "Натуральные материалы в сборке, прочный, улучшает эффективность использования."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/8276049717.jpg",
                "oldprice": "110000",
                "price": "95000",
                "review": "4.8"
            },
            "Планшет \"Lenovo Tab P12 Pro\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Зайцева Полина",
                        "rating": 5,
                        "review": "Мощный для развлечений, натуральный пластик и металл, с Dolby Atmos, без искусственных шумов, для медиа."
                    },
                    {
                        "name": "Иванова Раиса",
                        "rating": 4,
                        "review": "Удобный для просмотра, комфортные кнопки, полезен для фильмов, легко заряжается."
                    },
                    {
                        "name": "Ковалев София",
                        "rating": 5,
                        "review": "Прочные, натуральные материалы, идеален для длительных сессий."
                    },
                    {
                        "name": "Лапина Тамара",
                        "rating": 5,
                        "review": "Без добавок в электронике, эффективен для высококачественного контента."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-x/wc500/8276049717.jpg",
                "oldprice": "70000",
                "price": "55000",
                "review": "4.5"
            },
            "Планшет \"Microsoft Surface Pro 9\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Гаврилова Лидия",
                        "rating": 5,
                        "review": "Гибридный планшет, натуральный магниево-алюминиевый корпус, с клавиатурой, для активного использования."
                    },
                    {
                        "name": "Денисова Марина",
                        "rating": 4,
                        "review": "Удобная подставка, полезен для презентаций, легко подключается."
                    },
                    {
                        "name": "Ефимова Надежда",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные материалы, без дефектов, для seamless работы."
                    },
                    {
                        "name": "Жукова Ольга",
                        "rating": 5,
                        "review": "Натуральные компоненты, без раздражителей, эффективен для корпоративных задач."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-f/wc500/7549680651.jpg",
                "oldprice": "140000",
                "price": "120000",
                "review": "4.6"
            },
            "Планшет \"Samsung Galaxy Tab S8\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Яковлева Жанна",
                        "rating": 5,
                        "review": "Тонкий и стильный, премиум-сборка с натуральными элементами, удобен для мультимедиа, эффективен в батареи."
                    },
                    {
                        "name": "Андреева Зоя",
                        "rating": 4,
                        "review": "Качественный дисплей, мягкие грани, полезен для видео, без химических запахов."
                    },
                    {
                        "name": "Беляева Ирина",
                        "rating": 5,
                        "review": "Прочный корпус из натуральных материалов, идеален для длительного использования."
                    },
                    {
                        "name": "Власова Кира",
                        "rating": 5,
                        "review": "Без лишних добавок, эффективен для задач на ходу, удобен в переноске."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-y/wc500/8316626794.jpg",
                "oldprice": "80000",
                "price": "65000",
                "review": "4.7"
            }
        },
        "Смартфоны": {
            "Смартфон \"Apple iPhone 15\"": {
                "article": "678901234",
                "assessment": [
                    {
                        "name": "Романова Анна",
                        "rating": 5,
                        "review": "Высококачественная сборка, натуральный титановый корпус, удобен для повседневного использования, эффективен для фото."
                    },
                    {
                        "name": "Сидорова Виктория",
                        "rating": 5,
                        "review": "Долгое время работы, натуральный дизайн без лишних элементов, идеален для общения и развлечений."
                    },
                    {
                        "name": "Тимофеева Дарья",
                        "rating": 4,
                        "review": "Прочный экран, комфортные функции, полезен для работы, без дефектов."
                    },
                    {
                        "name": "Успенская Елена",
                        "rating": 5,
                        "review": "Натуральные материалы в сборке, легкий, улучшает эффективность использования."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-z/wc500/8227596419.jpg",
                "oldprice": "95000",
                "price": "85000",
                "review": "4.8"
            },
            "Смартфон \"Google Pixel 8\"": {
                "article": "890123456",
                "assessment": [
                    {
                        "name": "Шевченко Лидия",
                        "rating": 5,
                        "review": "Чистый Android, натуральный алюминиевый корпус, с отличной камерой, для активного использования."
                    },
                    {
                        "name": "Щукина Марина",
                        "rating": 4,
                        "review": "Удобная эргономика, полезен для фотографий, легко обновляется."
                    },
                    {
                        "name": "Энгельгардт Надежда",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные материалы, без дефектов, для seamless работы."
                    },
                    {
                        "name": "Юдина Ольга",
                        "rating": 5,
                        "review": "Натуральные компоненты, без раздражителей, эффективен для повседневных задач."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-2/wc500/7471832690.jpg",
                "oldprice": "75000",
                "price": "65000",
                "review": "4.6"
            },
            "Смартфон \"OnePlus 11\"": {
                "article": "012345678",
                "assessment": [
                    {
                        "name": "Григорьева Ульяна",
                        "rating": 4,
                        "review": "Быстрая зарядка, натуральный алюминиевый корпус, без химических запахов, для повседневного использования."
                    },
                    {
                        "name": "Дмитриева Фаина",
                        "rating": 5,
                        "review": "Легкий, удобный, полезен для звонков, для безопасного хранения данных."
                    },
                    {
                        "name": "Егорова Христина",
                        "rating": 4,
                        "review": "Свежая сборка, натуральные элементы, легкий, для ежедневных задач."
                    },
                    {
                        "name": "Жданова Чеслава",
                        "rating": 5,
                        "review": "Натуральный дизайн, без лишнего, идеален для производительности."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/7204137969.jpg",
                "oldprice": "65000",
                "price": "55000",
                "review": "4.4"
            },
            "Смартфон \"Samsung Galaxy S23\"": {
                "article": "789012345",
                "assessment": [
                    {
                        "name": "Федорова Жанна",
                        "rating": 5,
                        "review": "Тонкий и стильный, премиум-сборка с натуральными элементами, удобен для мультимедиа, эффективен в батареи."
                    },
                    {
                        "name": "Харитонова Зоя",
                        "rating": 4,
                        "review": "Качественный дисплей, мягкие грани, полезен для видео, без химических запахов."
                    },
                    {
                        "name": "Цветкова Ирина",
                        "rating": 5,
                        "review": "Прочный корпус из натуральных материалов, идеален для длительного использования."
                    },
                    {
                        "name": "Чернова Кира",
                        "rating": 5,
                        "review": "Без лишних добавок, эффективен для задач на ходу, удобен в переноске."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-b/wc500/8043213647.jpg",
                "oldprice": "85000",
                "price": "70000",
                "review": "4.7"
            },
            "Смартфон \"Xiaomi 13\"": {
                "article": "901234567",
                "assessment": [
                    {
                        "name": "Яковенко Полина",
                        "rating": 5,
                        "review": "Мощный для игр, натуральный пластик и металл, с быстрой зарядкой, без искусственных шумов, для развлечений."
                    },
                    {
                        "name": "Абрамова Раиса",
                        "rating": 4,
                        "review": "Удобный для просмотра, комфортные кнопки, полезен для фильмов, легко заряжается."
                    },
                    {
                        "name": "Боброва София",
                        "rating": 5,
                        "review": "Прочные, натуральные материалы, идеален для длительных сессий."
                    },
                    {
                        "name": "Воронова Тамара",
                        "rating": 5,
                        "review": "Без добавок в электронике, эффективен для высококачественного контента."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-6/wc500/8056089870.jpg",
                "oldprice": "60000",
                "price": "50000",
                "review": "4.5"
            }
        },
        "Телевизоры": {
            "Телевизор \"LG OLED 65\"\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Михайлова Дина",
                        "rating": 5,
                        "review": "Тонкий и стильный OLED-дисплей, премиум-сборка с натуральными элементами, удобен для мультимедиа, эффективен в цветопередаче."
                    },
                    {
                        "name": "Николаева Ева",
                        "rating": 4,
                        "review": "Качественный звук, мягкие линии дизайна, полезен для музыки, без химических запахов."
                    },
                    {
                        "name": "Орлова Женя",
                        "rating": 5,
                        "review": "Прочный корпус из натуральных материалов, идеален для длительного просмотра."
                    },
                    {
                        "name": "Петрова Зина",
                        "rating": 5,
                        "review": "Без лишних добавок, эффективен для развлечений, удобен в установке."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-0/wc500/8163172440.jpg",
                "oldprice": "220000",
                "price": "180000",
                "review": "4.7"
            },
            "Телевизор \"Samsung QLED 55\"\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Зайцева Алла",
                        "rating": 5,
                        "review": "Высококачественная QLED-технология, натуральный корпус без лишних элементов, удобен для просмотра фильмов, эффективен для игр."
                    },
                    {
                        "name": "Иванова Берта",
                        "rating": 5,
                        "review": "Долгое время работы, натуральный дизайн, идеален для семейных вечеров, без дефектов."
                    },
                    {
                        "name": "Козлова Валентина",
                        "rating": 4,
                        "review": "Прочный экран, комфортные настройки звука, полезен для спорта, легко подключается."
                    },
                    {
                        "name": "Лебедева Галина",
                        "rating": 5,
                        "review": "Натуральные материалы в сборке, легкий, улучшает качество изображения."
                    }
                ],
                "country": "Южная Корея",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-s/wc500/7369069420.jpg",
                "oldprice": "150000",
                "price": "120000",
                "review": "4.8"
            },
            "Телевизор \"Sony BRAVIA 55\"\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Романова Ира",
                        "rating": 5,
                        "review": "Чистый HDR, натуральный алюминиевый корпус, с отличной камерой для звонков, для активного использования."
                    },
                    {
                        "name": "Сидорова Кристина",
                        "rating": 4,
                        "review": "Удобная эргономика, полезен для сериалов, легко обновляется."
                    },
                    {
                        "name": "Тимофеева Лариса",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные материалы, без дефектов, для seamless просмотра."
                    },
                    {
                        "name": "Успенская Мария",
                        "rating": 5,
                        "review": "Натуральные компоненты, без раздражителей, эффективен для домашних задач."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-5/wc500/8040640145.jpg",
                "oldprice": "170000",
                "price": "140000",
                "review": "4.6"
            },
            "Телевизор \"TCL 4K UHD 65\"\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Федорова Наталья",
                        "rating": 5,
                        "review": "Мощный для потокового видео, натуральный пластик и металл, с быстрой настройкой, без искусственных шумов, для развлечений."
                    },
                    {
                        "name": "Харитонова Ольга",
                        "rating": 4,
                        "review": "Удобный для просмотра, комфортные порты, полезен для фильмов, легко заряжается от сети."
                    },
                    {
                        "name": "Цветкова Полина",
                        "rating": 5,
                        "review": "Прочные, натуральные материалы, идеален для длительных сессий просмотра."
                    },
                    {
                        "name": "Чернова Раиса",
                        "rating": 5,
                        "review": "Без добавок в электронике, эффективен для высококачественного контента."
                    }
                ],
                "country": "Китай",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-7/wc500/7669884751.jpg",
                "oldprice": "110000",
                "price": "90000",
                "review": "4.5"
            },
            "Телевизор \"Vizio M-Series 55\"\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Шевченко София",
                        "rating": 4,
                        "review": "Быстрая настройка, натуральный корпус, без химических запахов, для повседневного использования."
                    },
                    {
                        "name": "Щукина Тамара",
                        "rating": 5,
                        "review": "Легкий, удобный, полезен для новостей, для безопасного подключения."
                    },
                    {
                        "name": "Энгельгардт Ульяна",
                        "rating": 4,
                        "review": "Свежая сборка, натуральные элементы, легкий, для ежедневных развлечений."
                    },
                    {
                        "name": "Юдина Фаина",
                        "rating": 5,
                        "review": "Натуральный дизайн, без лишнего, идеален для семейного просмотра."
                    }
                ],
                "country": "США",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/8034391423.jpg",
                "oldprice": "85000",
                "price": "70000",
                "review": "4.4"
            }
        },
        "Фотоаппараты": {
            "Фотоаппарат \"Canon EOS R5\"": {
                "article": "123456789",
                "assessment": [
                    {
                        "name": "Андреева Анна",
                        "rating": 5,
                        "review": "Высококачественная оптика из натуральных материалов, удобна для профессиональной съемки, эффективна для динамичных сцен, без лишних шумов."
                    },
                    {
                        "name": "Борисова Вера",
                        "rating": 5,
                        "review": "Долгое время работы, натуральный дизайн корпуса, идеальна для пейзажей, без дефектов."
                    },
                    {
                        "name": "Васильева Галина",
                        "rating": 4,
                        "review": "Прочный корпус, комфортные настройки, полезна для портретов, легко синхронизируется."
                    },
                    {
                        "name": "Григорьева Дарья",
                        "rating": 5,
                        "review": "Натуральные компоненты в электронике, легкая, улучшает качество фотографий."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-j/wc500/7059882403.jpg",
                "oldprice": "400000",
                "price": "350000",
                "review": "4.8"
            },
            "Фотоаппарат \"Fujifilm X-T4\"": {
                "article": "456789012",
                "assessment": [
                    {
                        "name": "Орлова Ольга",
                        "rating": 5,
                        "review": "Мощный стабилизатор, натуральный корпус, с быстрой автофокусировкой, без искусственных шумов, для активной съемки."
                    },
                    {
                        "name": "Петрова Полина",
                        "rating": 4,
                        "review": "Удобна для видео, комфортные ручки, полезна для путешествий, легко подключается."
                    },
                    {
                        "name": "Романова Раиса",
                        "rating": 5,
                        "review": "Прочные, натуральные материалы, идеальна для стрит-фотографии."
                    },
                    {
                        "name": "Сидорова Светлана",
                        "rating": 5,
                        "review": "Без добавок в электронике, эффективна для творчества."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-t/wc500/7106258081.jpg",
                "oldprice": "240000",
                "price": "200000",
                "review": "4.5"
            },
            "Фотоаппарат \"Leica Q2\"": {
                "article": "567890123",
                "assessment": [
                    {
                        "name": "Тимофеева Татьяна",
                        "rating": 4,
                        "review": "Быстрая настройка, натуральный корпус, без химических запахов, для премиум-съемки."
                    },
                    {
                        "name": "Успенская Ульяна",
                        "rating": 5,
                        "review": "Легкая, удобная, полезна для портретов, для безопасного хранения."
                    },
                    {
                        "name": "Федорова Фаина",
                        "rating": 4,
                        "review": "Свежая сборка, натуральные элементы, легкая, для художественной фотографии."
                    },
                    {
                        "name": "Харитонова Христина",
                        "rating": 5,
                        "review": "Натуральный дизайн, без лишнего, идеальна для классики."
                    }
                ],
                "country": "Германия",
                "img": "https://share.google/X5ASYl5vr4v1KXFUG",
                "oldprice": "600000",
                "price": "500000",
                "review": "4.4"
            },
            "Фотоаппарат \"Nikon Z7\"": {
                "article": "234567890",
                "assessment": [
                    {
                        "name": "Дмитриева Елена",
                        "rating": 5,
                        "review": "Тонкий и стильный дизайн, премиум-сборка с натуральными элементами, удобна для видео, эффективна в низком освещении."
                    },
                    {
                        "name": "Ефимова Жанна",
                        "rating": 4,
                        "review": "Качественный сенсор, мягкие линии корпуса, полезна для путешествий, без химических запахов."
                    },
                    {
                        "name": "Зайцева Зоя",
                        "rating": 5,
                        "review": "Прочный ремешок из натуральных материалов, идеальна для длительной съемки."
                    },
                    {
                        "name": "Иванова Инна",
                        "rating": 5,
                        "review": "Без лишних добавок, эффективна для макросъемки, удобна в настройке."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-l/wc500/8091663681.jpg",
                "oldprice": "300000",
                "price": "250000",
                "review": "4.7"
            },
            "Фотоаппарат \"Sony A7R IV\"": {
                "article": "345678901",
                "assessment": [
                    {
                        "name": "Козлова Кира",
                        "rating": 5,
                        "review": "Чистая цветопередача, натуральный металлический корпус, с отличной батареей для студийной работы."
                    },
                    {
                        "name": "Лебедева Лилия",
                        "rating": 4,
                        "review": "Удобная эргономика, полезна для спорта, легко обновляется."
                    },
                    {
                        "name": "Михайлова Марина",
                        "rating": 5,
                        "review": "Свежий дизайн, качественные материалы, без дефектов, для творческой съемки."
                    },
                    {
                        "name": "Николаева Надежда",
                        "rating": 5,
                        "review": "Натуральные компоненты, без раздражителей, эффективна для портфолио."
                    }
                ],
                "country": "Япония",
                "img": "https://ir-8.ozone.ru/s3/multimedia-1-g/wc500/8352415744.jpg",
                "oldprice": "380000",
                "price": "320000",
                "review": "4.6"
            }
        }
    }
}



//


let search = {
    "cat": [],
    "pod": [],
    "tov": []
}
for (let i in tableCard) {
    search['cat'].push(i)
    for (let j in tableCard[i]) {
        search['pod'].push(j)
        for (let p in tableCard[i][j]) {
            search['tov'].push(p)
        }
    }
}
const searchDB = JSON.parse(JSON.stringify(search))



