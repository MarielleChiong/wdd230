const jsonFile = "https://chillyall.github.io/wdd230/chamber/json/data.json"
const directory = document.querySelector(".directory");

fetch(jsonFile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject["business"]
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p")
    let phone = document.createElement("p");
    let link = document.createElement("p");
    let img = document.createElement("img");
    let membershiplv = document.createElement("p");
    let info = document.createElement("p");

    name.textContent = `${business.name}`
    address.textContent = `${business.address}`
    phone.textContent = business.phoneNumber
    link.textContent = "<a href='"+ business.url.split('href=')[1]+"' >"+business.url.split('href=')[1]+"</a>"







    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(link);
    card.appendChild(img);
    card.appendChild(membershiplv);
    card.appendChild(info);



    document.querySelector("div.directory").appendChild(card)
}