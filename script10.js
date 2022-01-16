$('#load1').load("./index12.html .date, .name", function() {

    var data = new Array($('.date').length);
    for (var i = 0; i < $('.date').length; i++) {
        data[i] = [$('.name')[i].innerHTML, $('.date')[i].innerHTML];
    }

    data = data.sort(function(a, b) {
        return b[1] > a[1] ? 1 : b[1] < a[1] ? -1 : 0;
    });

    $('#name1').text(data[0][0]);
    $('#date1').text(data[0][1]);
    $('#name2').text(data[1][0]);
    $('#date2').text(data[1][1]);
    $('#name3').text(data[2][0]);
    $('#date3').text(data[2][1]);

    console.table(data);
});