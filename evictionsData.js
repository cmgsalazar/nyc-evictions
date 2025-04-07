// this is throwing an error?
    // fetch("evictions.json")
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.error('Error loading JSON:', error));

const evictions = [
    {
        "Court Index Number":"300182\/23",
        "Docket Number":30106,
        "Eviction Address":"41-09 VERNON BLVD.",
        "Eviction Apartment Number":"05B",
        "Executed Date":"09\/06\/2023",
        "BOROUGH":"QUEENS",
        "Eviction Postcode":11101,
        "NTA":"Queensbridge-Ravenswood-Long Island City"
    },
    {
        "Court Index Number":"10693\/17",
        "Docket Number":109126,
        "Eviction Address":"154 AVE D",
        "Eviction Apartment Number":"04C",
        "Executed Date":"06\/05\/2017",
        "BOROUGH":"MANHATTAN",
        "Eviction Postcode":10009,
        "NTA":"Lower East Side"
    },
    {
        "Court Index Number":"20612\/18",
        "Docket Number":6882,
        "Eviction Address":"395 LEXINGTON AVE.",
        "Eviction Apartment Number":"03F",
        "Executed Date":"10\/09\/2019",
        "BOROUGH":"BROOKLYN",
        "Eviction Postcode":11216,
        "NTA":"Bedford"
    },
    {
        "Court Index Number":"19013\/16",
        "Docket Number":108406,
        "Eviction Address":"930 EAST 4TH WALK",
        "Eviction Apartment Number":"14B",
        "Executed Date":"04\/07\/2017",
        "BOROUGH":"MANHATTAN",
        "Eviction Postcode":10009,
        "NTA":"Lower East Side"
    },
    {
        "Court Index Number":"19657\/17",
        "Docket Number":61631,
        "Eviction Address":"642 PARK AVENUE",
        "Eviction Apartment Number":"03C",
        "Executed Date":"09\/14\/2018",
        "BOROUGH":"BROOKLYN",
        "Eviction Postcode":11206,
        "NTA":"Bedford"
    },
    {
        "Court Index Number":"014504\/16",
        "Docket Number":69490,
        "Eviction Address":"2971 EIGHTH AVENUE",
        "Eviction Apartment Number":"11B",
        "Executed Date":"10\/12\/2017",
        "BOROUGH":"MANHATTAN",
        "Eviction Postcode":10039,
        "NTA":"Central Harlem North-Polo Grounds"
    },
    {
        "Court Index Number":"10173\/17",
        "Docket Number":5728,
        "Eviction Address":"2945-49 WEST 23 ST",
        "Eviction Apartment Number":"14D",
        "Executed Date":"08\/22\/2018",
        "BOROUGH":"BROOKLYN",
        "Eviction Postcode":11224,
        "NTA":"Seagate-Coney Island"
    },
    {
        "Court Index Number":"805177\/16",
        "Docket Number":327883,
        "Eviction Address":"905 TINTON AVENUE",
        "Eviction Apartment Number":"1F",
        "Executed Date":"01\/31\/2018",
        "BOROUGH":"BRONX",
        "Eviction Postcode":10456,
        "NTA":"Morrisania-Melrose"
    },
    {
        "Court Index Number":"021333\/13",
        "Docket Number":152267,
        "Eviction Address":"325 ROEBLING ST.",
        "Eviction Apartment Number":"4E",
        "Executed Date":"02\/05\/2019",
        "BOROUGH":"BROOKLYN",
        "Eviction Postcode":11211,
        "NTA":"North Side-South Side"
    },
    {
        "Court Index Number":"51955\/20",
        "Docket Number":9206,
        "Eviction Address":"111-64 166 STREET",
        "Eviction Apartment Number":"APT # 2",
        "Executed Date":"04\/27\/2022",
        "BOROUGH":"QUEENS",
        "Eviction Postcode":11433,
        "NTA":"South Jamaica"
    }
]

let container = document.getElementById("container");

function showEvictions(address, neighborhood, borough, zipCode, docketNum, dateExecuted) {

    // create `div` to hold each card
    let perCard = document.createElement("div");
    perCard.classList.add("card");

    // create `div` to hold `location`
    let perLocation = document.createElement("div");
    perLocation.classList.add("location");

    // create `div` to hold `eviction-details`
    let perDetail = document.createElement("div");
    perDetail.classList.add("eviction-details");

    // set up Address Line 1
    let addressLine1 = `<h2 class="address">${address} </h2>`;

    // make Address Line 2
    let addressLine2 = `<p><span class="neighborhood">${neighborhood}</span>, <span class="borough">${borough}</span> <span class="zip-code">${zipCode}</span></p>`;

    // add inside `location` div
    perLocation.innerHTML = addressLine1 + addressLine2;

    // set up `eviction-details` content
    let docket = `<p class="docket">Docket number: <span class="docket-num">${docketNum}</span></p>`;
    let date = `<p class="date">Executed date: <span class="date-executed">${dateExecuted}</span></p>`;
    
    // add to `eviction-details` div
    perDetail.innerHTML = docket + date;

    // append to `card` container
    perCard.append(perLocation);
    perCard.append(perDetail);

    // append the card to container
    container.append(perCard);

    // set data attributes
    perCard.setAttribute("data-borough", borough);
    let yearExecuted = dateExecuted.split("/")[2]; 
    perCard.setAttribute("data-year", yearExecuted);
}

evictions.forEach(function(item) {
    showEvictions(
        item["Eviction Address"],
        item["NTA"],
        item["BOROUGH"],
        item["Eviction Postcode"],
        item["Docket Number"],
        item["Executed Date"]
    );
});