document.addEventListener( "DOMContentLoaded", ourprophets);

var titlename = 0;   
var nameBox = 0;
var outerBox = 0;
var headbox = 0;
var returnButton = 0;

function ourprophets(){
    titlename = document.getElementById("titlename");   
    nameBox = document.getElementById("nameBox");
    outerBox = document.getElementById("outerBox");
    headbox = document.getElementById("headbox");
    returnButton = document.getElementById("returnButton");
    createButtons();
}

function createButtons(){
    for(let i = 0; i < names.length; i++){
        let button = document.createElement("button");
            button.innerHTML = names[i];
            button.classList.add("button");
            button.addEventListener("click", function(){showChapter(i);});
        var br = document.createElement('br');    
        nameBox.appendChild(button);
        nameBox.appendChild(br);    
    }  
}

function showChapter(nameid){
    nameBox.style.transform = "translateX(-100%)";
    nameBox.style.opacity = "0%";
    titlename.innerHTML = names[nameid];
    setTimeout(() => {
        nameBox.style.display = "none";
        const chapterBox = document.createElement("div");
        chapterBox.id = "chapterBox";
        outerBox.appendChild(chapterBox);
        for(let i = 0; i < chapters[nameid][1].length; i++){
                let button = document.createElement("button");
                    button.innerHTML = chapters[nameid][1][i];
                    button.classList.add("button");
                var br = document.createElement('br');    
                chapterBox.appendChild(button);
                chapterBox.appendChild(br);    
            }      
        chapterBox.style.transform = "translateX(100%)";
        chapterBox.style.opacity = "0%";
        requestAnimationFrame(() => {
            chapterBox.style.transform = "translateX(0%)";
            chapterBox.style.opacity = "100%";
        });
        setTimeout(() => {
            returnButton.addEventListener("click", showNames);
            requestAnimationFrame(() => {
                returnButton.style.opacity = "100%";
                headbox.style.fontSize = "250%";
                titlename.style.opacity = "100%";
            });
        }, 500);
    }, 500);
}

function showNames(){
    const chapterBox = document.getElementById("chapterBox");
    chapterBox.style.transform = "translateX(100%)";
    chapterBox.style.opacity = "0%";
    setTimeout(() => {
        chapterBox.remove();
        nameBox.style.display = "inline-block";
        requestAnimationFrame(() => {
            nameBox.style.transform = "translateX(0%)";
            nameBox.style.opacity = "100%";
        });
        setTimeout(() => {
            requestAnimationFrame(() => {
                returnButton.style.opacity = "0%";
                headbox.style.fontSize = "350%";
                titlename.style.opacity = "0%";
            });
        }, 500);
    }, 500);
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

const chapters = [["Adam",
                        ["Erschaffung von Adam",
                         "Adams Stellung im Paradies",
                         "Die Erschaffung von Hawwa",
                         "Vertreibung aus dem Paradies",
                         "Adams Wissen",
                         "Die Versuchung durch Satan",
                         "Die Folgen der Sünde",
                         "Adams Tawba (Reue)",
                         "Adams Nachkommenschaft",
                         "Adams Weisheit und Wissen",
                         "Adams Bedeutung für die Menschheit"]],
                  ["Idris",
                        ["Leben vor der Prophetie",
                         "Berufung zum Propheten",
                         "Als Prediger",
                         "Und die Engel",
                         "Und die Sterne",
                         "Und die Schriftrollen",
                         "Tawba (Reue)",
                         "Nachkommenschaft",
                         "In der islamischen Überlieferung"]],
                  ["Nuh",
                        ["Berufung zum Prophetentum",
                         "Predigt der Botschaft",
                         "Herausforderungen der Ungläubigen",
                         "Bau der Arche",
                         "Sintflut",
                         "Rettung der Anhänger",
                         "Bestrafung der Ungläubigen",
                         "Nachkommen",
                         "In der islamischen Überlieferung"]],
                  ["Hud", 
                        ["Die Missachtung von Hud durch sein Volk",  
                         "Huds Ruf zur Einheit Allahs", 
                         "Die Ablehnung der Botschaft durch die Ungläubigen", 
                          "Die Bestrafung durch Allah: Die große Flut",  
                          "Die Rettung der Gläubigen durch Allah",  
                          "Die Vernichtung der Ungläubigen durch die Flut", 
                          "Huds Gebet für sein Volk",  
                          "Die Früchte der Geduld und des Glaubens"]],
                  ["Saleh", []],
                  ["Lut", []],
                  ["Ibrahim", []],
                  ["Ismail", []],
                  ["Ishaq", []],
                  ["Yaqub", []],
                  ["Yusuf", []],
                  ["Shu'aib", []],
                  ["Ayyub", []],
                  ["Dhulkifl", []],
                  ["Musa", []],
                  ["Harun", []],
                  ["Dawud", []],
                  ["Sulayman",[]],
                  ["Ilyas", []],
                  ["Alyasa", []],
                  ["Yunus", []],
                  ["Zakariya", []],
                  ["Yahya", []],
                  ["Isa", []],
                  ["Muhammad &#65018", []]];

const stories = [];