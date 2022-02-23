
var anoAtual = document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("idade").innerHTML = anoAtual - 1996;

var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}
		x[slideIndex-1].style.display = "block";
	setTimeout(carousel, 3500);
}

