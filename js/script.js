
$(function () {
  var new_standart = 2900;
  var new_komplexsniy = 6900;
  var new_evro = 7900;
  var secondary_standart = 3480;
  var secondary_komplexsniy = 8280;
  var secondary_evro = 9480; 

  //слайдер

  var $amount = $(".kalk5 #amount");
  var $slider = $(".kalk5 #slider-range-min");
  $slider.slider({
    range: "min",
    value: 30,
    min: 1,
    max: 150,
    slide: function slide(event, ui) {
      $amount.val(ui.value);
      calc_res();
    }
  });
  $amount.val($slider.slider("value"));
  $amount.change(function () {
    var val = $(this).val();
    $slider.slider("value", val);
  }); 

  //изменение площади

  function calc_res() {
    var val = $amount.val();
    $slider.slider("value", val);
    var repairs = $(".kalk5 .radio_repairs:checked").attr("value");
    var apartment = $(".kalk5 .radio_apartment:checked").attr("value");
    var cost = eval(apartment + '_' + repairs);
    var res = val * cost;
    res = res.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    $(".res").html("<b>" + res + "  &#8381</b>");
  }

  $(".kalk5").on('click', function () {
    calc_res();
  }); //end on

  $amount.on('keyup', function () {
    if ($amount.val() > 150) {
      $amount.val(150);
      calc_res();
    } else {
      calc_res();
    }
  }); //end on
  
  //при выбранном радио горит оранжевым соответствующая кнопка

  $(".kalk5 input:radio:checked").next(".kalk5 .div_apartment").addClass(".kalk5 radio_checked");
  $(".kalk5 input:radio:checked").next(".kalk5 .div_repairs").addClass(".kalk5 radio_checked");
  $('.kalk5 .div_apartment').on('click', function () {
    $('.kalk5 .div_apartment').each(function () {
      $(this).removeClass("radio_checked");
    }); //end each

    var name_apartment = $(this).attr("name");
    $('.kalk5 .radio_apartment[value=' + name_apartment + ']').prop("checked", "true");
    $('.kalk5 .div_apartment[name=' + name_apartment + ']').addClass("radio_checked");
  }); //end on

  $('.kalk5 .div_repairs').on('click', function () {
    $('.kalk5 .div_repairs').each(function () {
      $(this).removeClass("radio_checked");
    }); //end each

    var name_apartment = $(this).attr("name");
    $('.kalk5 .radio_repairs[value=' + name_apartment + ']').prop("checked", "true");
    $('.kalk5 .div_repairs[name=' + name_apartment + ']').addClass("radio_checked");
  }); //end on
  
}); //end ready
