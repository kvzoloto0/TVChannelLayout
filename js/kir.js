/*start Get Your Promo for 3 Days*/
var element = document.getElementById('phone');

var maskOptions = {
    mask: '+38(000)000-00-00',
    lazy: false,
} 

var mask = new IMask(element, maskOptions);
/*end Get Your Promo for 3 Days*/



/*start checbocks under the form with the price*/
$(".radioLognInBlock input").on("click", function (e) {
  console.clear(); console.log(this.checked); // всегда true;
  e.preventDefault();
  
  setTimeout(
    () => $(this).prop("checked", !this.checked).trigger("change")
  );
});
/*end checbocks under the form with the price*/







