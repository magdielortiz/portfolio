$(".show-info").on("click", function () {
  $(this).next().slideToggle()

  return false
})

$('.scrollup').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 800);
  return false;
});
