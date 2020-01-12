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

    //var planet = $([name="flightType"]).val();
    //console.log("PLANET PLANET PLANET PLANET" + planet);
    var radiobuttons = document.getElementsByName('flightType');
    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            flightType = radiobuttons[i].value;
        }
    }

    var newFlight = $("#burgerName").val().trim();

    if (newFlight.length > 0) {
        //newFlight = flightType + newFlight;

        $.ajax("/api/burgers", {
            type: "POST",
            data: { name: newFlight }
        }).then(
            function () {
                console.log("New burger created");
                location.reload();
            }
        );
    };
}