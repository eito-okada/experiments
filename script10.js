$('#load1').load("./index12.html .date, .name, .post", function() {

    var data = new Array($('.date').length);
    for (var i = 0; i < $('.date').length; i++) {
        data[i] = [$('.name')[i].innerHTML, $('.date')[i].innerHTML, $('.post').eq(i).attr('data-genre')];
    }

    $.getScript('./script11.js', function() {
        $(document).ajaxStop(function() {

            for (i = 0; i < data.length; i++) {
                data[i][3] = visitsdata[i]
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

            data = data.sort(function(a, b) {
                return b[3] > a[3] ? 1 : b[3] < a[3] ? -1 : 0;
            })

            $('#name4').text(data[0][0]);
            $('#date4').text(data[0][1]);
            $('#visits1').text(data[0][3])
            $('#name5').text(data[1][0]);
            $('#date5').text(data[1][1]);
            $('#visits2').text(data[1][3])
            $('#name6').text(data[2][0]);
            $('#date6').text(data[2][1]);
            $('#visits3').text(data[2][3])
        })
    });
});