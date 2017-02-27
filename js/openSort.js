$(document).ready(function() {
  $(".artists").on('click', function(e) {
    if ($(".sub_content_1").is(".disabled")) {
      $("#sub_list").addClass("sub_list")
      $(".sub_content_1").removeClass('disabled').addClass("active")
    }
    else if ($(".sub_content_1").is(".active")) {
      $("#sub_list").removeClass("sub_list")
      $(".sub_content_1").removeClass('active').addClass("disabled")
    }
    e.preventDefault();
  })
  $(".events").on('click', function(e) {
    if ($(".sub_content_2").is(".disabled")) {
      $("#sub_list").addClass("sub_list")
      $(".sub_content_2").removeClass('disabled').addClass("active")
    }
    else if ($(".sub_content_2").is(".active")) {
      $("#sub_list").removeClass("sub_list")
      $(".sub_content_2").removeClass('active').addClass("disabled")
    }
    e.preventDefault();
  })
})


/*
if ($(".artists").is('.active')) {
  $(".sub_list").removeClass('active').addClass("disabled")
  $(".sub_content").removeClass('active').addClass("disabled")
}
else if ($(".artists").hasClass('disabled')) {
  $(".sub_content").removeClass('disabled').addClass("active")
})
*/
