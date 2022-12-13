const dataCompanies = "/wdd230/chamber/json/data.json"

async function displaySpotlightComp() {
    const business = await getGoldAndSilverCom();
    const randomComps = threeRandomComps();

    const business1 = business[randomComps[0]];
    const business2 = business[randomComps[1]];
    const business3 = business[randomComps[2]];

    console.log(business1)

    for (let i=1; i<4; i++) {
        let business;
        switch (i) {
            case 1:
                business = business1;
                break;
            case 2:
                business = business2;
                break;
            default:
                business = business3;
        }

        const spotlight = document.querySelector(`#sl${i}`);
        spotlight.children[0].textContent = business.name;
        spotlight.children[1].setAttribute("src", business.img);
        spotlight.children[2].textContent = business.phoneNumber;
        spotlight.children[3].children[0].setAttribute("href", business.url);

    }
}

displaySpotlightComp();

async function getGoldAndSilverCom() {
    const request = await fetch(dataCompanies);

    if (request.ok) {
        const response = await request.json();
        const companies = await response["business"];

        let goldAndSilverCom = [];
        for (const company of companies) {
            if (company.membershipLevel === "Silver Membership" || company.membershipLevel === "Gold Membership") {
                goldAndSilverCom.push(company)
            }
        }
        return goldAndSilverCom;
    }
};

function threeRandomComps() {
    let randomComps = new Map();
    for (let i=0; i<3; i++) {
        while (randomComps.size !=3) {
            const number = Math.floor(Math.random() * 7 );
            randomComps.set(number, number);
        }
    }
    return [...randomComps.keys()];
}
threeRandomComps();