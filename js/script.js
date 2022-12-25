$('a[href^="#"]').on('click',  function() {
  var header = $('header').innerHeight(); //ヘッダーが浮いている場合要素が下に潜り込んでしまうのでヘッダーの高さ分下に下げる
  var id = $(this).attr('href');
  var position = 0;
  if(id != "#") {
    position = $(id).offset().top - header; //この記述がないとトップに戻る時にスクロールしない
  };
  $('html,body').animate({
    scrollTop: position
  },
  300);
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 20,
  width: 274,
  loop: true,
  loopedSlide: 6,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  breakpoints: {
    // 768px以上の場合
    768: {
      speed: 400,
      spaceBetween: 40,
      width: 400,
      loop: true,
      loopedSlide: 6,
    },
  }
});



jQuery(".drawer-icon").on("click", function(e) {
	e.preventDefault();

  jQuery(".drawer-icon").toggleClass("active");
  jQuery(".drawer-content").toggleClass("active");
  jQuery(".drawer-bg").toggleClass("active");

	return false;
});//アイコンがクリックされた時にactiveクラスの付け外しをする

jQuery('.qa-q').click(function() {
  //QAのAは隠しておき、指定したところがクリックされた時に出てくるようにする
  jQuery(this).next().slideToggle(); 
  // 子要素にopenクラスを与える
  jQuery(this).children('.q-icons').toggleClass( 'open' );
});

let $submit = $('#js-submit')
$('#js-form input, #js-form textarea').on('change',function() {
  if(
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[name="entry.322050309"]').prop('checked') === true
  ) {
    $submit.addClass('active')
    $submit.prop('disabled', false)
  } else {
    $submit.removeClass('active')
    $submit.prop('disabled', true)
  }
})

//google formへ送信
let $form = $('#js-form')
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(), 
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $form.slideUp();
        $("#js-success").slideDown();
      },
      200: function () {
        $form.slideUp();
        $("#js-error").slideDown();
      }
    }
  });
  return false;
});

//topへ戻るボタン
$('#pagetop').hide();

$(window).on('scroll', function() {
  if($(this).scrollTop() > 100) {
    $('#pagetop').fadeIn();
  } else {
    $('#pagetop').fadeOut();

  }
});

new WOW().init();