DisplayProjects();

$("#filters :checkbox").click(function() {
    DisplayProjects();
});

function DisplayProjects(){
    $(".projects").css('display', 'none');
    $("#filters :checkbox:checked").each(function() {
        $("." + $(this).val()).css('display', 'inline-block');
    });
};