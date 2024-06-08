const body = document.querySelector("body")
const bg = document.querySelector(".bg")
const card_1 = document.querySelector(".card_1")
const card_2 = document.querySelector(".card_2")
const card_3 = document.querySelector(".card_3")
const card_4 = document.querySelector(".card_4")
const card_5 = document.querySelector(".card_5")
const card_inner_1 = document.querySelector(".card_inner_1")
const card_inner_2 = document.querySelector(".card_inner_2")
const card_inner_3 = document.querySelector(".card_inner_3")
const card_inner_4 = document.querySelector(".card_inner_4")
const card_inner_5 = document.querySelector(".card_inner_5")
const leave = document.querySelector(".leave")
const dotIn = document.querySelector(".dotIn")
const text_2 = document.querySelector(".text_2")
const jumpScare_div = document.querySelector(".jumpScare_div")



body.addEventListener("click", (e) => {
    switch (true) {
        // 判斷點擊到的是卡片的正面或背面
        case e.target.classList.contains("card_1"):
            setCard(card_1, card_inner_1)
            break;
        case e.target.classList.contains("card_2"):
            setCard(card_2, card_inner_2)
            break;
        case e.target.classList.contains("card_3"):
            setCard(card_3, card_inner_3)
            break;
        case e.target.classList.contains("card_4"):
            setCard(card_4, card_inner_4)
            break;
        case e.target.classList.contains("card_inner_1"):
            setCardInner(card_1, "card_1 card", card_inner_1, 'rotateX(111deg) rotateY(0deg) rotateZ(-5deg)', '39%', '56%')
            break;
        case e.target.classList.contains("card_inner_2"):
            setCardInner(card_2, "card_2 card", card_inner_2, 'rotateX(110deg) rotateY(-1deg) rotateZ(4deg)', '39%', '30%')
            break;
        case e.target.classList.contains("card_inner_3"):
            setCardInner(card_3, "card_3 card2", card_inner_3, 'rotateX(56deg) rotateY(-1deg) rotateZ(-6deg)', '58.7%', '25%')
            break;
        case e.target.classList.contains("card_inner_4"):
            setCardInner(card_4, "card_4 card2", card_inner_4, 'rotateX(53deg) rotateY(-1deg) rotateZ(1deg)', '58.7%', '44.9%')
            break;

    }
})
function setCard(className, classInner) {
    console.dir(classInner)
    className.classList = "";
    classInner.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    classInner.style.width = '30%';
    classInner.style.height = '68%';
    classInner.style.top = '21%';
    classInner.style.left = '40%';
    classInner.style.zIndex = '2';
    if (className === card_1 || className === card_3 || className === card_4) {
        classInner.children[1].style.fontSize = "10px";
    }
}
function setCardInner(className, aaa, classInner, transform, top, left) {
    setTimeout(() => {
        className.classList = aaa;
    }, 870);
    classInner.style.transform = transform;
    classInner.style.width = '9%';
    classInner.style.height = '29%';
    classInner.style.top = top;
    classInner.style.left = left;
    classInner.style.zIndex = '0';
    if (className === card_1 || className === card_3 || className === card_4) {
        classInner.children[1].style.fontSize = "0px";
    }
}
card_5.addEventListener("click", () => {
    card_5.classList = "";
    card_inner_5.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    card_inner_5.style.width = '30%';
    card_inner_5.style.height = '68%';
    card_inner_5.style.top = '21%';
    card_inner_5.style.left = '40%';
    card_inner_5.style.zIndex = '2';
    leave.style.right = '32%';
})
let count = 0;

leave.addEventListener("click", () => {
    event.stopPropagation();
    setTimeout(() => {
        card_5.classList = "card_5 card2";
    }, 870);
    card_inner_5.style.transform = 'rotateX(55deg) rotateY(-1deg) rotateZ(19deg)';
    card_inner_5.style.width = '9%';
    card_inner_5.style.height = '29%';
    card_inner_5.style.top = '58.7%';
    card_inner_5.style.left = '66.9%';
    card_inner_5.style.zIndex = '0';
    count = 0
    text_2.textContent = ""
    text_2.style.textShadow = 'none';
    leave.style.right = '17px';
})



card_inner_5.addEventListener("click", () => {
    count++
    if (count === 1) {
        text_2.style.color = "black";
        let text = "滾開!!";
        let i = 0;
        function displayText() {
            if (i < text.length) {
                text_2.textContent += text[i];
                i++;
                setTimeout(displayText, 350); // 設置下一個文字的顯示時間
            }
        }
        displayText();
        card_inner_5.style.width = '21%';
        card_inner_5.style.height = '63%';
        card_inner_5.style.transform = 'rotateX(19deg) rotateY(6deg) rotateZ(5deg)';
        leave.style.right = '17px';
    }
    if (count === 2) {
        text_2.textContent = "";
        text_2.style.fontSize = 13 + 'px';
        text_2.style.color = "#d8281c";
        text_2.style.textShadow = '1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000';
        let text = "別碰我!這是最後一次警告!";
        let i = 0;
        displayText();
        function displayText() {
            if (i < text.length) {
                text_2.textContent += text[i];
                i++;
                setTimeout(displayText, 150);
            }
        }

        card_inner_5.style.width = '19%';
        card_inner_5.style.height = '58%';
        card_inner_5.style.transform = 'rotateX(-19deg) rotateY(-6deg) rotateZ(-5deg)';
    }
    if (count === 3) {
        text_2.textContent = "";
        setTimeout(function () {
            text_2.textContent = "這是你自找的!小子!";
            text_2.style.fontSize = 20 + 'px';
        }, 800);
        setTimeout(function () {
            card_inner_5.classList.add('jumpScare');
        }, 1100);
        setTimeout(function () {
            text_2.textContent = ""
        }, 2400);
        setTimeout(function () {
            bg.style.display = "none"
            jumpScare_div.style.display = "block";
        }, 3100);
        setTimeout(function () {
            card_inner_5.classList.remove('jumpScare');
            bg.style.display = "block";
            jumpScare_div.style.display = "none";
            card_5.classList = "card_5 card2";
            card_inner_5.style.transform = 'rotateX(55deg) rotateY(-1deg) rotateZ(19deg)';
            card_inner_5.style.width = '9%';
            card_inner_5.style.height = '29%';
            card_inner_5.style.left = '66.9%';
            card_inner_5.style.top = '58.7%';
            card_inner_5.style.zIndex = '0';
            text_2.style.textShadow = 'none';
            count = 0
        }, 4100);

    }
})

// afters.forEach(item => {
//     item.addEventListener("click", () => {
//         if (item.id === "inner_after") {
//             item.id = ""
//             return
//         }
//         // id會蓋過class
//         item.id = "inner_after";
//         switch (true) {
//             case item.classList.contains("card_1"):
//                 // card_inner_1.style.width = 30+"%"
//                 // card_inner_1.style.height= 21+"%"
//                 // card_inner_1.style.left = 40 + "%"
//                 // card_inner_1.style.top = 21 + "%"
//                 // card_inner_1.style.transform ="(rotateX(0deg), rotateY(0deg), rotateZ(0deg)"

//                 break;
//             case item.classList.contains("card_2"):
//                 break;
//             case item.classList.contains("card_3"):
//                 break;
//             case item.classList.contains("card_4"):
//                 break;
//             case item.classList.contains("card_5"):
//                 break;
//             default:
//                 break;
//         }
//     })
// })


