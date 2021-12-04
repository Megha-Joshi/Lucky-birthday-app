const DOB = document.querySelector("#date-of-birth");
const LN = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const opMessage = document.querySelector("#op");
checkButton.addEventListener("click", checkIfBirthdateIsLucky)


function checkIfBirthdateIsLucky() {
	const bdate = DOB.value;
	const ln = Number(LN.value);
	const sum = checkSum(bdate);
	if (sum && ln) {


		if ((sum % ln === 0) && (ln > 0)) {
			opMessage.innerText = "Congrats 🤩 You have a lucky birthdate";
		} else if (ln < 0) {
			opMessage.innerText = "Enter the lucky number greater than o";
		} else {
			opMessage.innerText = "Sorry 😐 Not a lucky birthdate";
		}
	} else {
		opMessage.innerText = "Please fill both of the fields or maybe you entered lucky number as less than 1."
	}
}



function checkSum(bdate) {
	bdate = bdate.replaceAll("-", "");
	let sum = 0;

	for (let i = 0; i < bdate.length; i++) {
		sum = sum + Number(bdate.charAt(i));
	}

	return sum;

}