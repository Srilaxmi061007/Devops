const form = document.getElementById("myform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const Gender = document.getElementById("gender").value;

    const Age = parseInt(document.getElementById("age").value);

    const Seattype = document.getElementById("seattype").value;

    if (isNaN(Age) || Age < 18) {

        alert("You are not eligible for the admission because your age is less than 18.");

        return;

    }

    else if (Seattype === "reserved" && Gender !== "female") {

        alert("You are not eligible for the admission because you are not female.");

        return;

    }

    else {

        alert("You are eligible for the admission!");

    }

});