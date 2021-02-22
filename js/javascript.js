 $(document).ready(function(){
  
  $("#navigation").waypoint(function(direction){
    $("#header-img").addClass("animate__animated animate__fadeInUp")
    $("#website-header1").addClass("animate__animated animate__fadeInUp")
    $("#website-header2").addClass("animate__animated animate__fadeInUp")
    $("#website-tagline").addClass("animate__animated animate__fadeInUp")
  })

  $("#features").waypoint(function(direction){
    $("#features-header1").addClass("animate__animated animate__fadeInUp")
    $("#features-header2").addClass("animate__animated animate__fadeInUp")
    $(".features-body-box").addClass("animate__animated animate__zoomIn animate__delay-1s")

  }, {
    offset: '50%'
  })

  $("#section3").waypoint(function(direction){
    $(".services-info").addClass("animate__animated animate__lightSpeedInLeft")
    $(".services-heading").addClass("animate__animated animate__lightSpeedInLeft animate__delay-0.3s")
    $(".services-message").addClass("animate__animated animate__lightSpeedInLeft animate__delay-0.6s")
    $(".services-list").addClass("animate__animated animate__lightSpeedInLeft animate__delay-0.9s")

    $(".img1").addClass("animate__animated animate__fadeInLeft animate__delay-3s")
    $(".img2").addClass("animate__animated animate__fadeInDown animate__delay-2s")
    $(".img3").addClass("animate__animated animate__fadeInRight animate__delay-1s")
    $(".img1-xs").addClass("animate__animated animate__fadeInLeft animate__delay-1s")
    $(".img2-xs").addClass("animate__animated animate__fadeInDown animate__delay-1.5s")
    $(".img3-xs").addClass("animate__animated animate__fadeInRight animate__delay-2s")
  }, {
    offset: '50%'
  })

  $("#section4").waypoint(function(direction){
    $("#twitter-review").addClass("animate__animated animate__fadeInLeft animate__slow")
    $("#review-form").addClass("animate__animated animate__fadeInLeft animate__slow")
    $(".review-form").addClass("animate__animated animate__fadeInLeft animate__slow")
  }, {
    offset: '50%'
  })

  $(".owner-page").waypoint(function(direction){
    $(".owner-name").addClass("animate__animated animate__fadeInLeft animate__slow")
    $(".owner-msg").addClass("animate__animated animate__fadeInRight animate__slow")
    $(".owner-name-text").addClass("animate__animated animate__fadeInLeft animate__slow")
  }, {
    offset: '50%'
  })

  $("#section5").waypoint(function(direction){
    $("#pb1").addClass("animate__animated animate__fadeInUp animate__slow")
    $("#pb2").addClass("animate__animated animate__fadeInUp animate__slow")
    $("#pb3").addClass("animate__animated animate__fadeInUp animate__slow")
    $("#pb4").addClass("animate__animated animate__fadeInUp animate__slow")
    $("#pb5").addClass("animate__animated animate__fadeInUp animate__slow")
    $("#pb6").addClass("animate__animated animate__fadeInUp animate__slow")
    $("#pb1-xs").addClass("animate__animated animate__fadeInRight animate__slow")
    $("#pb2-xs").addClass("animate__animated animate__fadeInLeft animate__slow")
    $("#pb3-xs").addClass("animate__animated animate__fadeInRight animate__slow")
    $("#pb4-xs").addClass("animate__animated animate__fadeInLeft animate__slow")
  }, {
    offset: '50%'
  })

  $("#section7").waypoint(function(direction){
    $(".au-1").addClass("animate__animated animate__fadeInUp animate__slow")
    $(".au-2").addClass("animate__animated animate__fadeInUp animate__slow")
    $(".au-3").addClass("animate__animated animate__rubberBand animate__delay-2s")
  }, {
    offset: '50%'
  })

  $("#show-map").click(function(){
    $("iframe").fadeToggle(1000)
  })

  // FeedBack Form

  $("#submit_btn").click(function(e){
    
    e.preventDefault();
    var username = $("#username").val()
    var t_account = $("#t_account").val()
    var message = $("textarea#message").val()

    if(username == "" || t_account == "" || message == ""){
      alert("Please Fill All The Given Field")
    }else{
      $(".item").css("visibility","visible")
      $("h3#user_name").prepend(username)
      $("#user_account_name").prepend(t_account)
      $("p#message").prepend(message)
      alert("Your form has been submitted.")
    }
    
  })
  $("input[type='reset']").click(function(){
    var ans1 = confirm("do you want to reset form?")
    
    if(true){
      $("h3#user_name").text(" ")
      $("#user_account_name").text(" ")
      $("p#message").text(" ")
      $("#item").css("visibility","hidden")
    }
  })
})