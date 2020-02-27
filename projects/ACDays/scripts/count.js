const countdiv = document.querySelector(".countdown");
const daysCount = countdiv.querySelector("h1");
const message = countdiv.querySelector("h2");
const release = new Date(2020, 02, 20);

function update() {
	const date = new Date();
	const daysLeft = Math.round((release - date) / (24 * 60 * 60 * 1000));
	
	if (daysLeft > 0) {
		daysCount.textContent = daysLeft;
	}
	else {
		daysCount.style = "display: none";
		message.textContent = "New Horizons is out !";
		message.style = "font-size: 400%"; 
	}
}

update();
setInterval(update, 1000);
