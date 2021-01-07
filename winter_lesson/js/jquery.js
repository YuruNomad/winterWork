$(function(){

  $('a[href^="#"]').click(function(){

      /* http://www.jquerystudy.info/reference/selectors/start.html */
      var speed = 500;
      var href= $(this).attr("href");
      /* aタグのhrefの要素 */
      var target = $(href == "#" || href == "" ? 'html' : href);
      /* href == "#" || href == ""　であれば　true=html→一番上 false=href→必ずしも一番上へスクロールしないのでその位置 */
      var position = target.offset().top;
      /* ドキュメントの一番上からの距離 */
      $("html, body").animate({scrollTop:position}, speed, "swing");
      /* scrollTopはブラウザの画面をスクロールした時の位置　.animateは初期状態から指定の状態へと変更するタグ　swing or linear... 動きの変化*/
　　　　　/* scrollTopはjQueryが用意したCSS用のプロパティです。*/
      /* scrollTopの説明URL　https://itstudio.co/2015/03/09/3666/ */
      return false;
    });

    $('.menu').on('click', function(){
        $('.menu_container').removeClass('active');
        $('.menu_button').toggleClass('line');
      });

    $('.menu_button').on('click', function(){
        $('.menu_container, menu_button').toggleClass('active');
        $('.menu_button').toggleClass('line');
    });
});
