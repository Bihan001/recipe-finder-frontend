imageappear();

function section1appear()
{
    $(".cards").animate({"opacity":1},2000);

      $(".within1").animate({"opacity":1},2000);

}
function imageappear()
{
      $("#animationlogo").animate({"opacity":1},1500);
   $(".cardimage").animate({"opacity":1},2000);
    $("#heading").animate({"opacity":1},1800);

    $(".zoom").animate({width:"300px","opacity":1},1800);
    $(".secondcardpart").fadeIn("slow");


    section1appear();
}





