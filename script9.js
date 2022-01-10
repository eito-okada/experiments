$(function() {
    var options = {
        valueNames: ['name', 'date', 'visits'],
        pagination: true,
        outerWindow: 1,
        searchColumns: ['name'],
        page: 10
    }

    var postList = new List('articles', options);

    var listSize = postList.size();
    $('.search').attr('placeholder', 'Search ' + listSize + ' articles...');


    $('.showsort').click(function() {
        if ($('.sortoptions').css('display') === 'none') {
            $('.sortoptions').css({
                display: 'block',
                position: 'relative'
            });
        } else {
            $('.sortoptions').css('display', 'none');
        }
    })

})