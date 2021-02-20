
// スクロールで出現
window.addEventListener("scroll", function(){
  let scroll = document.documentElement.scrollTop;
  console.log(scroll);
  document.getElementById("scroll").textContent = scroll; //JS編集用

  //navの出現
  if(scroll > 726){
    document.querySelector("nav").classList.add("show");
  }else{
    document.querySelector("nav").classList.remove("show");
  }
});


// ボタンスクロール
document.getElementById("btn-work").addEventListener("click",  function(){
  window.scroll({
    top: 726,
    behavior: "smooth"
  });
});

document.getElementById("btn-about").addEventListener("click",  function(){
  if(window.matchMedia('(max-width: 600px)').matches) {
    window.scroll({
      top: 2235,
      behavior: "smooth"
    });
  }else if (window.matchMedia('(min-width: 600px)').matches) {
    window.scroll({
      top: 1305,
      behavior: "smooth"
    });
  };
});

document.getElementById("btn-toppage").addEventListener("click",  function(){
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
