console.log("Starting")

$(document).ready(function () {

    $.getJSON("./data.json", function (json) {
        console.log("JSON Data: " + json);
    });
    //$("#main_container").append('<div class="col"><div class="card h-100"><img src="img/grey_400x300.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This is a short card.</p></div></div></div>');

});

