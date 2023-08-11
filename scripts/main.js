const myImage = document.querySelector("img");
const title = document.querySelector("h1");

myImage.onclick = () => {
    const myScr = myImage.getAttribute("src");
    if  (myScr === "./img/firefox-icon.png"){
        myImage.setAttribute("src","./img/chrome-icon.png");
    } else {
        myImage.setAttribute("src","./img/firefox-icon.png");
    }
};

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    title.textContent = `Mozilla é legal, ${storedName}`;
}

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if(!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    title.textContent = `Mozilla é legal, ${myName}`;
}

let myButton = document.querySelector("button");

myButton.onclick = () => {
    setUserName();
};
  