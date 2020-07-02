function executeWhenLoaded() {
  alert("DOM is Loaded");
}

//Short hand:
// $(function() {
//     alert("DOM is Loaded");
//   });

$(document).ready(executeWhenLoaded);

$(document).ready(function () {
  $("a").click(function (event) {
    alert("Hi jQuery! I Love You!!");
  });
});
