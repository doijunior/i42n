function i42nApply(lang){
  lang = (typeof lang !== 'undefined') ? lang : (navigator.language || navigator.userLanguage);

  var els = document.body.getElementsByTagName("*");
  for(var i = 0; i < els.length; i++) {
    var el = els[i];
    if(el.classList.contains("i42n")){
      el.innerHTML = i42n[String(lang)][el.getAttribute("id")];
    }
  }
};

function i42nInit(){
  return function(){
    var a = document.getElementsByTagName('a');
    for(var i = 0; i < a.length; i++) {
      console.log("OI");
      var el = a[i];
      if(el.classList.contains("i42n-action")){
        el.addEventListener('click', function () {
          i42nApply(this.getAttribute("data-lang"));
        });
      }
    }
    i42nApply();
  }
}
