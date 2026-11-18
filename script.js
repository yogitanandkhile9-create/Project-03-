
const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");

const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

function setPeriod(period) {

    prices.forEach(function(price) {

        const amount = price.dataset[period];

        price.textContent = "₹" +
            Number(amount).toLocaleString("en-IN");

    });

    units.forEach(function(unit) {

        unit.textContent =
            period === "monthly" ? "per month" : "per year";

    });

    monthlyButton.classList.toggle(
        "active", period === "monthly"
    );

    yearlyButton.classList.toggle(
        "active", period === "yearly"
    );

    monthlyButton.setAttribute(
        "aria-pressed", String(period === "monthly")
    );

    yearlyButton.setAttribute(
        "aria-pressed", String(period === "yearly")
    );
}

monthlyButton.addEventListener("click", function() {
    setPeriod("monthly");
});

yearlyButton.addEventListener("click", function() {
    setPeriod("yearly");
});

// Plan selection buttons
const planButtons = document.querySelectorAll(".plan-button");

planButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const planName = button.dataset.plan;

        alert("You selected the " + planName + " Plan!");

    });

});

// Default billing period
setPeriod("monthly");
