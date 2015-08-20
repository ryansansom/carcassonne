$("document").ready(function () {
    $("button").click(function () {
        if ($(this).hasClass('active')) {
            $(this).toggleClass("active inactive");
        } else {
            $(".active").toggleClass("active inactive");
            $(this).toggleClass("active inactive");
            toggleInput(this);
        }
    })
});

function toggleInput(obj) {
    var len = $(obj).val() - 2;
    $('input').hide();
    for (var i = len; i >= 0; i--) {
        $($('input').get(i)).show();
    }
}
