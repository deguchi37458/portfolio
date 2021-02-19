// クリック　スクロール
document.getElementById("btn-work").addEventListener("click",  function(){
  window.scroll({
    top: 726,
    behavior: "smooth"
  });
});
document.getElementById("btn-about").addEventListener("click",  function(){
  window.scroll({
    top: 1305,
    behavior: "smooth"
  });
});
document.getElementById("btn-toppage").addEventListener("click",  function(){
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});



window.addEventListener("scroll", function(){
  let scroll = document.documentElement.scrollTop;
  console.log(scroll);
  document.getElementById("scroll").textContent = scroll;

  // if(scroll > ){

  // }


});