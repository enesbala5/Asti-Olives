
function validateForm() {
	let x = document.forms["Form"]["emri"].value;
	if (x == "") {
		alert("Ju lutem shkruani emrin dhe provojeni perseri.");
		return false;
	}
}


