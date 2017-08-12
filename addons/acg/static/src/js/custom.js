function setREVStartSize(e) {
  try {
    var i = jQuery(window).width(),
      t = 9999,
      r = 0,
      n = 0,
      l = 0,
      f = 0,
      s = 0,
      h = 0;
    if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
        f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
      }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
      var u = (e.c.width(), jQuery(window).height());
      if (void 0 != e.fullScreenOffsetContainer) {
        var c = e.fullScreenOffsetContainer.split(",");
        if (c) jQuery.each(c, function(e, i) {
          u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
        }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
      }
      f = u
    } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
    e.c.closest(".rev_slider_wrapper").css({
      height: f
    })
  } catch (d) {
    console.log("Failure at Presize of Slider:" + d)
  }
};
var $ = jQuery;
$(document).on('click', '.cs-forgot-switch', function() {
  $('.cs-login-pbox').hide();
  $('.cs-forgot-pbox').show();
});
$(document).on('click', '.cs-login-switch', function() {
  $('.cs-forgot-pbox').hide();
  $('.cs-login-pbox').show();
});
setREVStartSize({
  c: jQuery('#rev_slider_1_1'),
  responsiveLevels: [1240, 1024, 778, 480],
  gridwidth: [1920, 1024, 778, 480],
  gridheight: [650, 680, 480, 380],
  sliderLayout: 'auto'
});

var revapi1,
  tpj = jQuery;
tpj.noConflict();
tpj(document).ready(function() {
  if (tpj("#rev_slider_1_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  } else {
    revapi1 = tpj("#rev_slider_1_1").show().revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 6000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          style: "uranus",
          enable: true,
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: false,
          tmp: '',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          }
        }
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1920, 1024, 778, 480],
      gridheight: [650, 680, 480, 380],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner0",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "on",
        disableFocusListener: false,
      }
    });
  }

}); /*ready*/

jQuery(document).ready(function() {
  jQuery("#ex6412672905").slider();
  jQuery("#ex6412672905").on("slide", function(slideEvt) {
    jQuery("#ex6SliderVal412672905").text(slideEvt.value);
  });

  jQuery('#location_redius_popup412672905').click(function(event) {
    event.preventDefault();
    jQuery("#popup412672905").css('display', 'block') //to show
    return false;
  });
  jQuery('#cs_close412672905').click(function() {
    jQuery("#popup412672905").css('display', 'none') //to show
    return false;
  });
});
function revslider_showDoubleJqueryError(sliderID) {
  var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
  errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
  errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
  errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
  errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
  jQuery(sliderID).show().html(errorMessage);
}

var cs_vars = {
  "currency_sign": "$",
  "currency_position": "left",
  "there_is_prob": "There is some Problem.",
  "oops_nothing_found": "Oops, nothing found!",
  "title": "Title"
};

var cs_func_vars = {
  "more": "More",
  "name_error": "Please Fill in Name.",
  "email_error": "Please Enter Email.",
  "valid_email_error": "Please Enter valid Email address.",
  "subject_error": "Please Fill in Subject.",
  "msg_error": "Please Fill in Message."
};

var jobhunt_functions_vars = {
  "select_file": "Select File",
  "add_file": "Add File",
  "geolocation_error_msg": "Geolocation is not supported by this browser.",
  "title": "Title",
  "plugin_options_replace": "Current Plugin options will be replaced with the default options.",
  "delete_backup_file": "This action will delete your selected Backup File. Are you want to continue?",
  "valid_email_error": "Please Enter valid Email address.",
  "shortlist": "Shortlist",
  "shortlisted": "Shortlisted",
  "are_you_sure": "Are you sure to do this?",
  "cancel": "Cancel",
  "delete": "Delete",
  "drag_marker": "Drag this Marker",
  "couldnt_find_coords": "Couldn't find coordinates for this place",
  "active": "Active",
  "inactive": "Inactive"
};

jQuery(document).ready(function() {
  if (jQuery('#ex63210639').slider() !== undefined) {
    jQuery('#ex63210639').slider().on('slideStop', function (ev) {
      this.form.submit();
    });
  }
});

jQuery(document).ready(function() {
  jQuery(".btn-primary").click(function() {
    jQuery(".collapse").collapse('toggle');
  });
  jQuery(document).on('click', '.cs-expand-filters', function() {
    if (jQuery(this).hasClass('cs-colapse')) {
      jQuery(".collapse").collapse('hide');
      jQuery(this).html('<i class="icon-plus8"></i> Mở rộng bộ lọc');
      jQuery(this).removeClass('cs-colapse');
    } else {
      jQuery(".collapse").collapse('show');
      jQuery(this).html('<i class="icon-minus8"></i> Thu gọn bộ lọc');
      jQuery(this).addClass('cs-colapse');
    }
  });
  jQuery("#ex63210639").slider({});
  jQuery("#ex63210639").on("blur", function(slideEvt) {
    alert('123');
  });
  jQuery("#ex63210639").on("slide", function(slideEvt) {
    jQuery("#ex6SliderVal3210639").text(slideEvt.value);
  });
  jQuery('#location_redius_popup3210639').click(function(event) {
    event.preventDefault();
    jQuery("#popup3210639").css('display', 'block') //to show
    return false;
  });
  jQuery('#cs_close3210639').click(function() {
    jQuery("#popup3210639").css('display', 'none') //to hide
    return false;
  });
  $('a[href="/web/login"]').on('click', function ($event) {
	$event.preventDefault();
    $('#sign-in').modal('show');
  });
  if ($('#oe_main_menu_navbar').length) {
    $('body').addClass('o_connected_user');
  }
  jQuery('.blog-slide').slick({
      slidesToShow:3,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:2000,
      prevArrow:jQuery('.blog-slider-prev'),
      nextArrow:jQuery('.blog-slider-next'),
      responsive:[{
          breakpoint:600,
          settings: {
              slidesToShow:1,
              slidesToScroll:1
          }
      },{
          breakpoint:480,
          settings: {
              slidesToShow:1,
              slidesToScroll:1,
              dots:false
          }
      }]
  });
});