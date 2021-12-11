var options = {
    valueNames: ['date', 'visited'],
    page: 9,
    pagination: true
};

var postList = new List('articles', options);

$('.search').attr('placeholder', 'Search ' + $('.post').length + ' articles...');