console.log("Header");

jQuery(document).ready(function ($) {
    console.log("Haho");
    var myUrl = window.location.href;
    var myPage = window.location.pathname;
    if (myPage == "/lifepath/") {
        document.getElementById("demo").innerHTML = "The full URL of this page is:<br>" + myUrl;
    }
    alert("I am Tibi");
});


console.log("Footer");