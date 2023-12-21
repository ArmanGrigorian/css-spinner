"use strict";

const wheel = document.querySelector(".Spinner__wheel");
const sectors = document.querySelectorAll(".Spinner__sector");
const button = document.querySelector(".Spinner__button");
const result = [];
let winNum = Math.trunc(Math.random() * (10000 - 1000) + 1000);
let value = 3600;
let data = [
	winNum,
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
	Math.trunc(Math.random() * (10000 - 1000) + 1000),
];

function handleClick() {
	winNum = Math.trunc(Math.random() * (10000 - 1000) + 1000);
	const sectors = document.querySelectorAll(".Spinner__sector");
	wheel.style.transform = `rotate(${value}deg)`;
	value += 3600;

	const timer = setInterval(() => {
		for (let i = 0; i < sectors.length; i++) {
			sectors[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
				Math.random() * 255,
			)},${Math.round(Math.random() * 255)})`;
		}
	}, 200);

	setTimeout(() => {
		clearInterval(timer);
	}, 5000);
}

function handleWin() {
	setTimeout(() => {
		alert(result[0]);
		winNum = Math.trunc(Math.random() * (10000 - 1000) + 1000);
		const newData = data.toSpliced(0, 1, winNum);
		render(newData);
	});
}

function render(data) {
	wheel.innerHTML = "";
	result.length = 0;
	const frag = new DocumentFragment();

	data.map((val) => {
		const div = document.createElement("div");
		const span = document.createElement("span");

		if (val % 10 === 0) {
			val += 1;
		}
		val = (val % 10) * 1000;
		result.push(val);

		div.className = "Spinner__sector";
		div.setAttribute("class", "Spinner__sector");
		span.textContent = val;

		div.appendChild(span);
		frag.appendChild(div);
	});

	return wheel.appendChild(frag);
}

button.addEventListener("click", handleClick);
wheel.addEventListener("transitionend", handleWin);
document.addEventListener("DOMContentLoaded", () => render(data));
