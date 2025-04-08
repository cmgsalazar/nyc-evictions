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

// load external JSON
fetch("evictions.json")
.then(response => response.json())
.then(json => {
    // dynamically display attributes
    json.forEach(function(item) {
        showEvictions(
            item["Eviction Address"],
            item["NTA"],
            item["BOROUGH"],
            item["Eviction Postcode"],
            item["Docket Number"],
            item["Executed Date"]
        )
    });
    console.log(json);
.catch(error => console.error('Error loading JSON:', error));
});
