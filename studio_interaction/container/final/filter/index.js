$(function(){

 $("select").on("change",function(){

  $("h1").css("opacity","0");
  $("."+this.value).css("opacity","1")

 });

});

$(function(){

 $("select").on("change",function(){

  $("img").css("opacity","0");
  $("."+this.value).css("opacity","1")

 });

});
