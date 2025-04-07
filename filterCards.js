// select all cards
let allCards = document.querySelectorAll("#container > .card");

// select all buttons to filter
let btnBorough = document.querySelectorAll("#filter-boroughs button");
let btnYear = document.querySelectorAll("#filter-years button");

// add hover event
btnBorough.forEach(function(btn) {
    btn.addEventListener("mouseenter", function() {
        this.classList.add("hover");
    });

    btn.addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });
});

btnYear.forEach(function(btn) {
    btn.addEventListener("mouseenter", function() {
        this.classList.add("hover");
    });

    btn.addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });
});

// create function for filtering
function filterCards() {
    let selectedBorough = document.querySelector("#filter-boroughs .clicked")?.getAttribute("value") || "all";
    let selectedYear = document.querySelector("#filter-years .clicked")?.getAttribute("value") || "all";

    allCards.forEach(item => {
        let borough = item.getAttribute("data-borough");
        let yearExecuted = item.getAttribute("data-year");

        // show the card if both filters match or if "all" is selected for either filter
        if (
            (selectedBorough === "all" || borough === selectedBorough) &&
            (selectedYear === "all" || yearExecuted === selectedYear)
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// setting `show all` as default
document.getElementById("all-boroughs").classList.add("clicked");
document.getElementById("all-years").classList.add("clicked");

// add click events for filtering
btnBorough.forEach(function(btn) {
    btn.addEventListener("click", function() {

        // reset all buttons by removing `clicked` class
        btnBorough.forEach(b => b.classList.remove("clicked"));

        // add `clicked` class to button
        this.classList.add("clicked");
        
        filterCards();

    });
});

btnYear.forEach(function(btn) {
    btn.addEventListener("click", function() {

        // reset all buttons by removing `clicked` class
        btnYear.forEach(b => b.classList.remove("clicked"));

        // add `clicked` class to button
        this.classList.add("clicked");
        
        filterCards();

    });
});



