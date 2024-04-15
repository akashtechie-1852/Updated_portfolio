(function ($) {
  "use strict";

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  $(document).ready(function () {
    $("a.btn[href='#footer']").on("click", function (event) {
      event.preventDefault(); // Prevent the default anchor click behavior

      var targetOffset = $($(this).attr("href")).offset().top - 45; // Get the target offset

      // Animate scrolling to the target offset
      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        1500,
        "easeInOutExpo"
      );
    });
  });

  // Typed Initiate
  if ($(".hero .hero-text h2").length == 1) {
    var typed_strings = $(".hero .hero-text .typed-text").text();
    var typed = new Typed(".hero .hero-text h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Skills
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // Portfolio filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-filter li").on("click", function () {
    $("#portfolio-filter li").removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
  //For mailto:akashtechie1852@gmail.com
  document.addEventListener("DOMContentLoaded", function () {
    var emailLink = document.getElementById("emailLink");
    emailLink.addEventListener("click", function () {
      var emailAddress = this.textContent.trim();
      var subject = "Regarding your website";
      var body = "Hello,";
      var mailtoLink =
        "mailto:" +
        encodeURIComponent(emailAddress) +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = mailtoLink;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Get the paragraph element
    var contactInfo = document.getElementById("contactInfo");

    // Add a click event listener to the paragraph
    contactInfo.addEventListener("click", function () {
      // Get the phone number from the paragraph's text content
      var phoneNumber = contactInfo.textContent.trim();

      // Remove non-digit characters from the phone number
      phoneNumber = phoneNumber.replace(/\D/g, "");

      // Format the WhatsApp URL
      var whatsappURL = "https://wa.me/" + phoneNumber;

      // Open the WhatsApp chat link in a new tab
      window.open(whatsappURL, "_blank");
    });
  });
})(jQuery);
