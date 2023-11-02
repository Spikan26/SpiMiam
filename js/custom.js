console.log("Starting")

$(document).ready(function () {

    $.getJSON("https://raw.githubusercontent.com/Spikan26/SpiMiam/main/data.json", function (json) {
        $.each(json, function (key, value) {
            console.log(key + " " + value.nom);
            $("#main_container").append('<div class="col" id="' + value.id + '"><div class="card h-100"><img src="' + value.photo + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + value.nom + '</h5><p class="card-text">This is a short card.</p></div></div></div>');
        });

    });
});