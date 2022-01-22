export class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function() {
              return cpf.replace(/\D+/g, '');
            }
        });
    }

    validaCPF() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
    
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
    
        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
  
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
          ac += (regressivo * Number(val));
          regressivo--;
          return ac;
        }, 0);
      
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    eSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

console.log('Cheguei!!')