
// スクロールJS編集用
// window.addEventListener("scroll", function(){
//   let scroll = document.documentElement.scrollTop;
//   console.log(scroll);
//   document.getElementById("scroll").textContent = scroll; //JS編集用
// });


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
//

// workポップアップスクリーン
document.getElementById("shibui").addEventListener("click", function(){
  document.getElementById("shibui-popup").classList.add("show");
});

document.getElementById("shibui-popup").addEventListener("click", function(){
  document.getElementById("shibui-popup").classList.remove("show");
});
