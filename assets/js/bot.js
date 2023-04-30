document.getElementById('submit-btn').onclick = function() {
	var phone = document.getElementById("phone").value;
	var name = document.getElementById("name").value;
	var details = document.getElementById("details").value;
	var address = document.getElementById("address").value;


	if (phone.length <= 1) {
		alert("Пожалуйста введите номер телефона");
	} else if (name.length <= 1 && name.length === " ") {
		alert("Пожалуйста введите имя");
	} else {
		var token = "6092971916:AAHDcmiEBR_49glpteQgI73EKt_fOcHVMsI";
		let xHttp = new XMLHttpRequest();
	    let message = "Имя: " + name + " " + "Номер: " + phone + " " + "Детали: " + details + " " + "Адрес: " + address;
	    const chatId = "-1001944150384";
	    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&text=' + message;
	    xHttp.open("GET", url, true);
	    xHttp.send();

	    alert('Successfully sent');
	}
}