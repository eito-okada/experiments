$(function() {
    visits121221();

    var visitsdata = new Array($('.post').length);

    function visits121221() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121221/visits", function(response) {
            $("#visits121221").text(response.value);
            visitsdata[0] = response.value;
        });
        visits121321();
    }


    function visits121321() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121321/visits", function(response) {
            $("#visits121321").text(response.value);
            visitsdata[1] = response.value;
        });
        visits121421();
    }


    function visits121421() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121421/visits", function(response) {
            $("#visits121421").text(response.value);
            visitsdata[2] = response.value;
        });
        visits121521();
    }


    function visits121521() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121521/visits", function(response) {
            $("#visits121521").text(response.value);
            visitsdata[3] = response.value;
        })
        visits121621();
    }



    function visits121621() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121621/visits", function(response) {
            $("#visits121621").text(response.value);
            visitsdata[4] = response.value;
        });
        visits121721();
    }



    function visits121721() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121721/visits", function(response) {
            $("#visits121721").text(response.value);
            visitsdata[5] = response.value;
        });
        visits121821();
    }



    function visits121821() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121821/visits", function(response) {
            $("#visits121821").text(response.value);
            visitsdata[6] = response.value;
        });
        visits121921();
    }




    function visits121921() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.121921/visits", function(response) {
            $("#visits121921").text(response.value);
            visitsdata[7] = response.value;
        });
        visits122021();
    }



    function visits122021() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122021/visits", function(response) {
            $("#visits122021").text(response.value);
            visitsdata[8] = response.value;
        });
        visits122121();
    }



    function visits122121() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122121/visits", function(response) {
            $("#visits122121").text(response.value);
            visitsdata[9] = response.value;
        });
        visits122221();
    }



    function visits122221() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122221/visits", function(response) {
            $("#visits122221").text(response.value);
            visitsdata[10] = response.value;
        });
        visits122321();
    }




    function visits122321() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122321/visits", function(response) {
            $("#visits122321").text(response.value);
            visitsdata[11] = response.value;
        });
        visits122421();
    }


    function visits122421() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122421/visits", function(response) {
            $("#visits122421").text(response.value);
            visitsdata[12] = response.value;
        });
        visits122521();
    }



    function visits122521() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122521/visits", function(response) {
            $("#visits122521").text(response.value);
            visitsdata[13] = response.value;
        });
        visits122621();
    }



    function visits122621() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122621/visits", function(response) {
            $("#visits122621").text(response.value);
            visitsdata[14] = response.value;
        });
        visits122721();
    }



    function visits122721() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122721/visits", function(response) {
            $("#visits122721").text(response.value);
            visitsdata[15] = response.value;
        });
        visits122821();
    }



    function visits122821() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122821/visits", function(response) {
            $("#visits122821").text(response.value);
            visitsdata[16] = response.value;
        });
        visits122921();
    }

    function visits122921() {
        $.getJSON("https://api.countapi.xyz/get/hatchokada.lsv.jp.122921/visits", function(response) {
            $('#visits122921').text(response.value);
            visitsdata[17] = response.value;
        })
    }
})