$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("nav").addClass("putih");
        $(".logo img").attr("src", "asset/logo-black.png");
      } else {
        $("nav").removeClass("putih");
        $(".logo img").attr("src", "asset/logo-white.png");
      }
    });
  
    $(".tombol-menu").click(function () {
      $(".menu ul").toggleClass("show");
    });
  });
  
  let currentEventIndex = 0;
  
  function moveEvent(step) {
    const events = document.querySelectorAll('.event-list .event');
    const totalEvents = events.length;
    currentEventIndex = (currentEventIndex + step + totalEvents) % totalEvents;
    document.querySelector('.event-list').style.transform = `translateX(-${currentEventIndex * 100}%)`;
  }
  