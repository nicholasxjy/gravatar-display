var grid = $('#grid');
var img = '';
for (var i = 1; i <= 50; i++) {
    img += '<img src="http://thecodeplayer.com/u/uifaces/' + i + '.jpg" />';
}
grid.append(img);
var d = 0,
    s, ty, tz;
$('.animate').on('click', function() {
    $('img').each(function() {
        d = Math.random() * 1000;
        $(this).delay(d).animate({
            opacity: 0
        }, {
            step: function(n) {
                s = 1 - n;
                $(this).css('transform', 'scale(' + s + ')');
            },
            duration: 1000
        });
    }).promise().done(function() {
        storm();
    });
});

function storm() {
    $('img').each(function() {
        d = Math.random() * 1000;
        $(this).delay(d).animate({
            opacity: 1
        }, {
            step: function(n) {
                ty = (1 - n) * 360;
                tz = (1 - n) * 1000;
                $(this).css('transform', 'rotateY(' + ty + 'deg)translateZ(' + tz + 'px)');
            },
            duration: 3000,
            easing: 'easeOutQuint'
        });
    });
}