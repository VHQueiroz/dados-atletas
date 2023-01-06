class Atleta {
    constructor(nome, idade, peso, altura, notas, categoria){
     this.nome = nome;
     this.idade = idade;
     this.peso = peso;
     this.altura = altura;
     this.notas = notas;
     
     
    } calcularCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Categoria: Infantil";
        } else if(this.idade >=12 && this.idade <= 13 ){
            return "Categoria: Juvenil";
        } else if(this.idade >= 14 && this.idade <= 15){
            return "Categoria: Intermediário"
        } else if(this.idade >= 16 && this.idade <= 30){
            return "Categoria: Adulto"
        } else {
            return "Sem categoria";
        }
    } calculaIMC(){
        return "IMC: " + (this.peso / (this.altura * this.altura)).toFixed(2)
    } calculaMediaValida(){
        let notasGerais = this.notas;
        let notasOrganizadas = notasGerais.sort(function comparaNumeros(a,b){
            if(a==b) return 0;
            if(a<b) return -1;
            if(a>b) return 1;
        });
        let notasComputadas = notasOrganizadas.slice(1,4)
        let somaNotasComputadas = notasComputadas.reduce(function(total,atual){
            return total+atual
        },0)
          let media = (somaNotasComputadas/notasComputadas.length).toFixed(2);
          return "Média válida: " +media;
    }
    obtemNomeAtleta(){
        return "Nome: "+this.nome;
    } obtemIdadeAtleta(){
        return "Idade: "+ this.idade;
    } obtemPesoAtleta(){
        return "Peso: " + this.peso;
    
    } obtemAlturaAtleta(){
       return "Altura: " + this.altura;
    } obtemNotasAtleta(){
        return "Notas: " + this.notas.join(" , ");
    } obtemCategoria(){
        return this.calcularCategoria();
    } obtemIMC(){
        return this.calculaIMC();
    } obtemMediaValida(){
        return this.calculaMediaValida();
    }
}


let atleta1 = new Atleta("Cesar Abascal", 11, 52,1.60,[10, 9.34, 8.42, 10, 7.88],);
let atleta2 = new Atleta("Fernando Puntel",12,55, 1.67,[8, 10, 10, 7, 9.33] );
let atleta3 = new Atleta("Daiane Jelinsky",14, 66, 1.69,[7, 10, 9.5, 9.5, 8]);
let atleta4 = new Atleta("Bruno Castro", 16, 75, 1.80,[10, 10, 10, 9, 9.5]);

function dadosAtletas(atleta){
 let nome = atleta.obtemNomeAtleta();
 console.log(nome)   
 let idade = atleta.obtemIdadeAtleta();
 console.log(idade)
 let peso = atleta.obtemPesoAtleta();
 console.log(peso)
 let altura = atleta.obtemAlturaAtleta();
 console.log(altura)
 let notas = atleta.obtemNotasAtleta();
 console.log(notas)
 let categoria = atleta.obtemCategoria();
 console.log(categoria)
 let imc = atleta.obtemIMC();
 console.log(imc)
 let media = atleta.obtemMediaValida();
 console.log(media)
}
let espaço = "----------";

console.log(dadosAtletas(atleta1))
console.log(espaço)
console.log(dadosAtletas(atleta2))
console.log(espaço)
console.log(dadosAtletas(atleta3))
console.log(espaço)
console.log(dadosAtletas(atleta4))

