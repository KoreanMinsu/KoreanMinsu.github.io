function youTubes_makeDynamic() {
    var $ytIframes = $('iframe[src*="youtube.com"]');
    $ytIframes.each(function (i,e) {
      var $ytFrame = $(e);
      var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];
      var $ytLoader = $('<div class="ytLoader">');
      $ytLoader.append($('<img class="cover" src="https://i.ytimg.com/vi/'+ytKey+'/maxresdefault.jpg">'));
      $ytLoader.append($('<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>'));
      $ytLoader.data('$ytFrame',$ytFrame);
      $ytFrame.replaceWith($ytLoader);
      $ytLoader.click(function () {
        var $ytFrame = $ytLoader.data('$ytFrame');
        $ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
        $ytLoader.replaceWith($ytFrame);
      });
    });
  };
  
  $(function() {
    
    youTubes_makeDynamic();
    
    $('.tab-link').on('click', function() {
      var iframeIndex = $(this).index();
      console.log(iframeIndex);
      var iframe = $('.tab-content').eq(iframeIndex).find('iframe').attr('src');
      console.log(iframe);
    });
  })