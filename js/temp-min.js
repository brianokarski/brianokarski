$(document).ready(function () {
    $(".bg").hover(function() {
        link_id = $(this).attr('id');
        $("html").addClass("bg" + link_id);
        $("a.bg").addClass("recenthover")
    },
    function() {
        $("html").removeClass("bg" + link_id);
        $("a.bg").removeClass("recenthover")
    });

    var dots = 0;
    setInterval(type, 600);

    function type() {
        if (dots < 3) {
            $("#dots").append(".");
            dots++
        } else {
            $("#dots").html("");
            dots = 0
        }
    }
});