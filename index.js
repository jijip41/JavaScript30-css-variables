const inputs = document.querySelectorAll('.tool input');


inputs.forEach(input => input.addEventListener('change', controlUpdate));
inputs.forEach(input => input.addEventListener('mousemove', controlUpdate));


function controlUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}