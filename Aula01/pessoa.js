export class Pessoa {
    /* 
        nome;
        idade;
     */
    constructor(nome, idade) {
        this.nome = nome,
            this.idade = idade
    }

    returnPessoa() {
        ///metodo
        return this.nome + " " + this.idade
    }
}
/*
//const aluno = new Pessoa("pedro", 23);


 
//caso n tenha construtor
const aluno = new Pessoa();
aluno.idade = "235"
aluno.nome = "pedro"
 

//console.log(aluno.returnPessoa());
*/