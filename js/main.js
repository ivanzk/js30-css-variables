const controls = document.querySelectorAll('.input-controls');

controls.forEach(input => {
	input.addEventListener('change', handleUpdate);
	input.addEventListener('mousemove', handleUpdate);
});

	
function handleUpdate(){
	const unit = this.dataset.unit || '';
	document.documentElement.style.setProperty(`--${this.id}`, this.value + unit);
}
