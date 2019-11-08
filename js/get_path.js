jQuery(document).ready(function( $ ){
  var myUrl = window.location.href;
  var myPage = window.location.pathname;
  if (myPage == "/lifepath/"){
    document.getElementById("demo").innerHTML = "The full URL of this page is:<br>" + myUrl;
  }
  document.alert("I am Tibi");
});
