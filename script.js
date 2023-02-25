document.addEventListener( "DOMContentLoaded", createButtons);

    
function createButtons(){
    const outerBox = document.getElementById("outerBox");
    for(let i = 0; i < names.length; i++){
        let innerBox = document.createElement("div");
            innerBox.addEventListener("click", changeWebsite);
            innerBox.classList.add("innerBox");
        outerBox.appendChild(innerBox);
        let num = document.createElement("div");
            num.innerHTML = i+1 + ".";
            num.classList.add("num");
        innerBox.appendChild(num);
        let button = document.createElement("button");
            button.innerHTML = names[i];
            button.classList.add("button");
        var br = document.createElement('br');    
        innerBox.appendChild(button);
        outerBox.appendChild(br);    
    }  
}

function changeWebsite(){
    const outerBox = document.getElementById("outerBox");
    outerBox.style.transform = "translateX(-100%)";
}


const names = ["Adam", 
               "Idris", 
               "Nuh", 
               "Hud", 
               "Saleh", 
               "Lut", 
               "Ibrahim", 
               "Ismail", 
               "Ishaq", 
               "Yaqub", 
               "Yusuf", 
               "Shu'aib",
               "Ayyub", 
               "Dhulkifl", 
               "Musa", 
               "Harun", 
               "Dawud", 
               "Sulayman", 
               "Ilyas", 
               "Alyasa", 
               "Yunus", 
               "Zakariya", 
               "Yahya", 
               "Isa", 
               "Muhammad &#65018"];

