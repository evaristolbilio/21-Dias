class Computador {
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
      this.tipo = tipo; // "desktop" ou "notebook"
      this.processador = processador; // Nome do processador, ex: "Ryzen 5"
      this.video = video; // "Integrado" ou "Dedicado"
      this.armazenamento = armazenamento; // Número em GB, ex: 500 ou 1000
      this.memoriaRam = memoriaRam; // Número em GB, ex: 4, 8 ou 16
      this.ssd = ssd; // Booleano: true ou false
    }
  
    // Método para exibir as informações no console
    exibirInformacoes() {
      console.log(`Tipo: ${this.tipo}`);
      console.log(`Processador: ${this.processador}`);
      console.log(`Vídeo: ${this.video}`);
      console.log(`Armazenamento: ${this.armazenamento} GB`);
      console.log(`Memória RAM: ${this.memoriaRam} GB`);
      console.log(`Possui SSD: ${this.ssd ? "Sim" : "Não"}`);
    }
  }
  
  // Exemplo de uso
  const meuComputador = new Computador(
    "notebook",
    "Intel Core i7",
    "Dedicado",
    1000,
    16,
    true
  );
  
  // Chamando o método para exibir as informações
  meuComputador.exibirInformacoes();