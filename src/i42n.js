function i42nApply(lang){
  lang = (typeof lang !== 'undefined') ? lang : (navigator.language || navigator.userLanguage);
  document.querySelectorAll("[data-content]").forEach( (el) => {
    el.innerHTML = i42n[String(lang)][ el.getAttribute("data-content") ]
  });
};

function i42nInit(lang){
return function(){
  document.querySelectorAll(".i42n").forEach( (el) => {
    el.addEventListener('click', function () {
      i42nApply(el.getAttribute("data-lang"))
    });
  });
  i42nApply(lang);
 }
}