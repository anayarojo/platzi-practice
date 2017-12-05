
class Toggable {
    constructor(el) {
        // inicializar el estado interno
        this.el = el
        this.el.innerHTML = 'Off'
        this.activated = false
        this.onClick = this.onClick.bind(this)
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick(ev) {
        this.activated = !this.activated
        this.toggleText()
    }

    toggleText() {
        this.el.innerHTML = this.activated ? 'On' : 'Off'
    }
}

const btnToggle = document.getElementById('btnToggle')

const ToggleButton = new Toggable(btnToggle)