//Check off specific towatchs by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete towatch
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new towatch text from input
        var towatchText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + towatchText + "</li>");

    }
});

$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle();
});