const form = document.getElementById("RegistrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const Name = document.getElementById("Name").value;

    const Email = document.getElementById("Email").value;

    const SelectedEvent = document.getElementById("Event").value;

    alert(
        "Thank you " + Name +
        "! You have registered for the " +
        SelectedEvent +
        " event. Confirmation sent to: " +
        Email
    );

});