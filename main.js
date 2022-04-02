
const hr  = document.querySelector(".hour");
const mn  = document.querySelector(".minute");
const sec  = document.querySelector(".second");

setInterval(()=>{

let day  = new Date();
let hour = day.getHours();
let minutes = day.getMinutes();
let seconds = day.getSeconds();

let hrRotation = (30 * hour) + (0.5 * minutes);
let mnRotation = 6 * minutes;
let secRotation = 6 * seconds;

	hr.style.transform = `translate(-50%,-100%) rotate(${hrRotation}deg)`;
	mn.style.transform = `translate(-50%,-100%) rotate(${mnRotation}deg)`;
	sec.style.transform = `translate(-50%,-85%) rotate(${secRotation}deg)`;

},1000);

