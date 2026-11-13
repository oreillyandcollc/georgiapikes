(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('mainnav');
  if(!btn||!nav)return;
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
})();
