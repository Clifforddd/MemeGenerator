const div = document.querySelector(".main-generator");
const memeImg = document.querySelector("input[name='imgUrl']");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const addMeme = document.querySelector("#addMeme");


function addImage(fileName) {
    const img = new Image(300, 300);
    img.src = fileName;

    let textTop = document.createElement("div");
    let imgDiv = document.createElement("div");
    let textBottom = document.createElement(("div"))

    imgDiv.classList = "divImage";
    textTop.classList = "divText";
    textBottom.classList = "divTextBt";

    textTop.innerHTML = `<span style="background-color: transparent;">${topText.value}<\span>`;
    textBottom.innerHTML = `<span style="background-color: transparent;">${bottomText.value}<\span>`;
    
    imgDiv.appendChild(img);
    imgDiv.appendChild(textTop);
    imgDiv.appendChild(textBottom);

    imgDiv.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG"){
            e.target.parentElement.remove();
        }

    })

    return imgDiv;
}


const imgList = addMeme.addEventListener("submit", function(e){
    e.preventDefault();

    const newImg = addImage(memeImg.value);
    document.body.appendChild(newImg);
});



