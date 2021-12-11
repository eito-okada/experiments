$.getJSON("https://api.countapi.xyz/hit/hatchokada.lsv.jp/visits", function(response) {
    $("#visits").text(response.value);
});