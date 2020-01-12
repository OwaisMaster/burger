const deleteFlight = (id, burger_name) => {
    console.log("Deleting...");
    console.log(id);
    console.log(burger_name);

    var flight = burger_name;
    $.ajax("/api/burgers/" + id, {
        type: "DELETE",
        data: { burger_name: flight, id: id }
    }).then(
        function () {
            console.log("Flight deleted");
            location.reload();
        }
    )
};

const devour = (id) => {
    console.log("Take off");
    console.log(id);

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: { devoured: true }
    }).then(
        function () {
            console.log("Status set to devoured");

            location.reload();
        }
    )
};

const onClick = (evt) => {
    var radiobuttons = document.getElementsByName('flightType');
    var planet = 'Earth';
    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            planet = radiobuttons[i].value;
        }
    }
    var newFlight = $("#burgerName").val().trim();
    
    if (newFlight.length > 0) {

        $.ajax("/api/burgers", {
            type: "POST",
            data: { name: newFlight, planet: planet }
        }).then(
            function () {
                console.log("New burger created");
                location.reload();
            }
        );
    };
}