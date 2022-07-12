//Variable Section
let cardLetters = [
    "A","2","3","4","5","6","7","8","9","10","J","Q","K"
]
let suitImages = [
    "./assets/cut_images_pAl7wND24adfSq2/image_part_001.jpg",
    "./assets/cut_images_pAl7wND24adfSq2/image_part_002.jpg",
    "./assets/cut_images_pAl7wND24adfSq2/image_part_003.jpg",
    "./assets/cut_images_pAl7wND24adfSq2/image_part_004.jpg"
]

//Function section
let randomSuitSelector = () =>{return Math.floor(Math.random() * (4-1+1)+1)}
let randomCardNumberSelector = () => {return Math.floor(Math.random() * (13-1+1)+1)}

function cardNumberChanger(cardLetters){
    switch(randomCardNumberSelector()){
        case 1:
            return cardLetters[0]
        case 2:
            return cardLetters[1]
        case 3:
            return cardLetters[2]
        case 4:
            return cardLetters[3]
        case 5:
            return cardLetters[4]
        case 6:
            return cardLetters[5]
        case 7:
            return cardLetters[6]
        case 8:
            return cardLetters[7]
        case 9:
            return cardLetters[8]
        case 10:
            return cardLetters[9]
        case 11:
            return cardLetters[10]
        case 12:
            return cardLetters[11]
        case 13:
            return cardLetters[12]
    }
}

function cardSuitChanger(suitImages, result){
    switch(result){
        case 1:
            return suitImages[0]
        case 2:
            return suitImages[1]
        case 3:
            return suitImages[2]
        case 4:
            return suitImages[3]
    }
}

window.onload = () =>{
//Body attributes
    let body = document.body
    body.style.backgroundColor = "green"
    body.style.display = "flex"
    body.style.alignItems = "center"
    body.style.justifyContent = "center"
//Body attributes end

//Card attributes
    let card = document.querySelector("#app")
    card.style.width="20rem"
    card.style.height= "30rem"
    card.style.borderRadius="20px"
    card.style.backgroundColor="white"
    card.style.position="relative"
    card.style.display="flex"
    card.style.justifyContent="center"
    card.style.alignItems="center"
//Card attributes end

//ContainerSuit1 attributes
    let containerSuit1 = document.createElement("div")
    containerSuit1.style.position="absolute"
    containerSuit1.style.border="1px solid black"

    containerSuit1.style.margin="15px"
    containerSuit1.style.top="1px"
    containerSuit1.style.left="1px"
    containerSuit1.style.height="50px"
    containerSuit1.style.width="50px"
//ContainerSuit1 attributes end

//ContainerSuit2 attributes
    let containerSuit2 = document.createElement("div")
    containerSuit2.style.position="absolute"
    containerSuit2.style.border="1px solid black"
    
    containerSuit2.style.margin="10px"
    containerSuit2.style.right="5px"
    containerSuit2.style.top="400px"
    containerSuit2.style.height="50px"
    containerSuit2.style.width="50px"

    containerSuit1.style.backgroundImage="cover"
//ContainerSuit2 attributtes end 

//ContainerNumber attributes
    let containerNumber= document.createElement("p")
    containerNumber.textContent= cardNumberChanger(cardLetters)
    containerNumber.style.fontSize="10rem"
//Container attributes end

let suitSelector = randomSuitSelector()
//suitImg1 attributes
    let suitImg1 = document.createElement("img")
    suitImg1.src= cardSuitChanger(suitImages, suitSelector)
    suitImg1.style.maxWidth="100%"
    suitImg1.style.maxHeight="100%"   
//suitImg1 attributes end

//suitImg1 attributes
    let suitImg2 = document.createElement("img")
    suitImg2.src=cardSuitChanger(suitImages, suitSelector)
    suitImg2.style.maxWidth="100%"
    suitImg2.style.maxHeight="100%"
    suitImg2.style.transform="scaleY(-1)"
//suitImg1 attributes end

//Element appending 
    card.appendChild(containerSuit1)
    containerSuit1.appendChild(suitImg1)
    card.appendChild(containerNumber)
    card.appendChild(containerSuit2)
    containerSuit2.appendChild(suitImg2)
//Element appending end
}