import './assets/css/style.css';
import { GeraCPF } from './modules/GeraCPF';

(function() {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.gera-cpf')
    cpfGerado.innerHTML = gera.geraNovoCpf()
})()
