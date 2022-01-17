console.time();


function visitsCount() {
    function array() {
        var array = new Array($('.post').length);
        for (var i = 0; i < 4; i++) {
            array[i] = new Array($('.post').length);
        }
        for (var j = 0; j < array.length; j++) {
            array[0][j] = $('.name')[j].textContent;
            array[1][j] = $('.date')[j].textContent;
            array[2][j] = visitsdata[j];
            array[3][j] = $('#thumbnail' + [j + 1]).css('background-image');
        }
    }
}


$(document).ajaxStop(function() {

    var options = {
        valueNames: ['name', 'date', 'visits'],
        pagination: true,
        outerWindow: 1,
        searchColumns: ['name'],
        page: 10
    }

    var postList = new List('articles', options);
    postList.sort('date', { order: "desc" });
    $('.sortNewest').click(function() {
        postList.sort('date', { order: "desc" });
        $(this).addClass('activesort');
        $('.sortoption').not(this).removeClass('activesort');
        $('.sortoption').not(this).css({
            display: "none"
        })
    })
    $('.sortOldest').click(function() {
        postList.sort('date', { order: "asc" });
        $(this).addClass('activesort');
        $('.sortoption').not(this).removeClass('activesort');
        $('.sortoption').not(this).css({
            display: "none"
        })
    })
    $('.sortVisits').click(function() {
        postList.sort('visits', { order: "desc" });
        $(this).addClass('activesort');
        $('.sortoption').not(this).removeClass('activesort');
        $('.sortoption').not(this).css({
            display: "none"
        })
    })



    $('#toggleoptions').click(function() {
        $(this).text($(this).text() == '∨' ? '∧' : '∨');
        $('.sortoption').not('.activesort').toggle(50);
    })



    var listSize = postList.size();
    $('.search').attr('placeholder', 'Search ' + listSize + ' articles...');

    if (postList.searched) {
        if (matchingItems.length === 0) {
            $('.results').text('No results');
        } else {
            $('.results').text(matchingItems.length + ' results found');
        }
    }

    postList.update();

    console.timeEnd();
})