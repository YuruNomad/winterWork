$(function(){

  $('.header__sp--button').on('click', function () {
      $('.header__sp--container, .header__sp--line').toggleClass('active');
      $('body').toggleClass('active');
      /* bodyにfixedを付けて無駄なスクロール消す */
  });


      $('.sp__menu--open').click(function () {
          //クリックしたjs-accordion-title以外の全てのopenを取る
          $(".sp__menu--open").not(this).removeClass("open");
          //クリックされたtitle以外のcontentを閉じる
          $(".sp__menu--open").not(this).next().slideUp(300);
          //thisにopenクラスを付与
          $(this).toggleClass("open");
          //thisのcontentを展開、開いていれば閉じる
          $(this).next().slideToggle(300);
          return false;
      });

    /* 参考url(https://webdesignday.jp/inspiration/technique/css/5670/)　*/

  lightbox.option({
    'showImageNumberLabel': false,         //falseにすると画像番号が非表示になる
    'wrapAround': true,                  //trueにすると最後のスライド画像の後に最初のスライド画像に戻る
  })

});
