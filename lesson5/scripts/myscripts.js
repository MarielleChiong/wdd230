const input = document.querySelector(".input");
const button = document.querySelector("button.submit");
const list = document.querySelector(".listcontainer");

let listChap = document.querySelectorAll("li");

const addChapterInput = document.querySelector("#favchap");
const addChapterBtn = document.querySelector("button")
const listChapters = document.getElementsByTagName("li")

const deleteBtn = document.querySelector("button.delete");

button.addEventListener("click", () => {
    let chapList = document.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = addChapterInput.value;
    let appendedChap = chapList.appendChild(li);

    for (let i = 0; i < appendedChap.length; i++) {
        console.log(appendedChap)
    }

    });


deleteBtn.addEventListener("click", () => {
    let list = document.querySelector("ul");
    let li = document.querySelector("li:last-child");
    list.removeChild(li);
});