function ApplyStyle(id) {
  var el = document.getElementById('tryresult');
  var newcss = document.getElementById('trycode').value;
  el.setAttribute('style', newcss);
}