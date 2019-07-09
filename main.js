const progress = document.querySelectorAll('.progress');
const precentageValue = document.querySelector('.precentage-value');
const precentage = document.querySelector('.precentage');
const slider = document.querySelector('.progress-bar-precentage')

slider.value = 0;

setTimeout(function() {
	progress[0].style.transition = '.1s linear';
}, 1000);

slider.addEventListener('input', () => {
	precentage.innerText = slider.value + '%';
	modifiedSlider = Math.abs(slider.value - 100);
	progress[0].style.width = modifiedSlider + '%';
	if (slider.value < 3) {
		progress[0].style.borderBottomLeftRadius = '.5rem';
	} else {
		progress[0].style.borderBottomLeftRadius = '0';
	}
});

progress.forEach( function(element, index) {
	const width = Math.abs(element.dataset.precentage - 100) + '%';
	element.style.width = width;
});