const div = document.querySelector(".main-generator");
const memeImg = document.querySelector("input[name='imgUrl']");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const addMeme = document.querySelector("#addMeme");


function addImage(fileName) {
    const img = new Image(300, 300);
    img.src = fileName;
    // document.body.appendChild(img);
    // return img;
    let textTop = document.createElement("div");
    let imgDiv = document.createElement("div");
    let textBottom = document.createElement(("div"))

    imgDiv.classList = "divImage";
    textTop.classList = "divText";
    textBottom.classList = "divTextBt";

    textTop.innerHTML = `<span>${topText.value}<\span>`;
    textBottom.innerHTML = `<span>${bottomText.value}<\span>`;
    imgDiv.appendChild(textTop);
    imgDiv.appendChild(img);
    imgDiv.appendChild(textBottom);

    imgDiv.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG"){
            e.target.parentElement.remove();
        }
        //console.log(e.target.tagName);
    })

    return imgDiv;
}

const imgList = addMeme.addEventListener("submit", function(e){
    e.preventDefault();

    //for (let img of newImg) {
     //   const newImg = image(memeImg.value);
    //}
    const newImg = addImage(memeImg.value);
    document.body.appendChild(newImg);

    //const newDiv = document.createElement("div");
    //const newImg = image(memeImg.value);
    //document.newDiv.appendChild(newImg);
    
});



// let textTop = document.createElement("div");
// let imgDiv = document.createElement("div");

// imgDiv.classList = "divImage";
// textTop.classList = "divText";
// textTop.innerHTML = `<div>${topText}<\div>`;
// imgDiv.appandChild(textTop);

