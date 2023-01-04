class Atleta {
    constructor(nome, idade, peso, altura, notas, categoria){
     this.nome = nome;
     this.idade = idade;
     this.peso = peso;
     this.altura = altura;
     this.notas = notas;
     this.categoria = categoria;
     
    } calcularCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return Atleta.ca + "Categoria infantil"
        } else {
            return "Categoria nao válida"
        }
    }
}


let atleta1 = new Atleta("Cesar Abascal", 11, 87,1.80,[10, 9.34, 8.42, 10, 7.88],);
let atleta2 = new Atleta("Fernando Puntel",23,85, 1.85,[8, 10, 10, 7, 9.33] );
let atleta3 = new Atleta("Daiane Jelinsky",);
let atleta4 = new Atleta("Bruno Castro",);

function dadosAtletas(atleta){
    return console.log(atleta.calcularCategoria(atleta1))
   
}
console.log(atleta1)
console.log(dadosAtletas(atleta1))

