function i42nApply(lang){
  lang = (typeof lang !== 'undefined') ? lang : (navigator.language || navigator.userLanguage);

  $('*').each(function() {
    if ( $(this).hasClass('i42n')) {
      $(this).html(i42n[String(lang)][$(this).attr("id")]);
    }
  })
};

function i42nInit(){
  $('a').click(function(){
    if( $(this).hasClass('i42n-action') )
      i42nApply($(this).attr("data-lang"));
  })
  i42nApply();
}
