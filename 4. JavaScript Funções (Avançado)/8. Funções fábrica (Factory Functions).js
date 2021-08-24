// Factory function (Função fábrica)
function createPeople(name, surname, height, weigth) {
    return {
      name: name,
      surname: surname,
  
      // Getter
      get nameComplete() {
        return `${this.name} ${this.surname}`;
      },
  
      // Setter
      set nameComplete(value) {
        value = value.split(' ');
        this.name = value.shift();
        this.surname = value.join(' ');
      },
  
      fala(subject = 'falando sobre NADA') {
        return `${this.name} está ${subject}.`;
      },
  
      height: height,
      weigth: weigth,
  
      // Getter
      get imc() {
        const index = this.weigth / (this.height ** 2);
        return index.toFixed(2);
      }
    };
  }
  
  const p1 = createPeople('Luiz', 'Otávio', 1.8, 80);
  const p2 = createPeople('João', 'Otávio', 1.90, 57);
  const p3 = createPeople('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);
  
  