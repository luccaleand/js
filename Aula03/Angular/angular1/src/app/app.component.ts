import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}


































































































































/*
  controle = true;

  msg: string = "ola mundo!";
  img: string = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_960_720.jpg";

  descricao: string = "O data binging pega uma informação no arquivo .ts e leva para o arquivo. html";

  msgDois: string = "Event binding";
  descricaoDois: string = "O Event binging pega uma informação no arquivo .ts e leva para o arquivo .html";


  ///criando objetos
  pessoa = {
    nome: "Aario Abreu",
    idade: 35
  };

  //array de objetos
  pessoaCaixa = [
    { nome: "Maria Silva", idade: 23, altura: 1.70 },
    { nome: "Leo", idade: 56, altura: 1.80 },
    { nome: "Gabi", idade: 17, altura: 1.60 },
  ]


  //método do botão
  clicou() {
    this.controle ? this.msg = "agr sou ternario" : this.msg = "Data binding";
    this.controle ? this.img = "https://cdn.pixabay.com/photo/2023/06/29/22/04/barn-swallow-8097199_640.jpg" : this.img = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_960_720.jpg";
    return this.controle = !this.controle;

    /*     if (this.controle) {
      this.controle = !this.controle;
      this.msg = "shazamm carai";
      this.descricao= "VOLTA MALUCO";
      this.img = "https://media.tenor.com/cJRcMyUAiMcAAAAd/ah-shit-here-we-go-again-ah-shit.gif";
      this.msgDois="VOLTA CARA"
      this.descricaoDois= "VC AINDA N VOLTOU???";
    } else {
      this.controle = !this.controle;
      this.msg="ola mundo!";
      this.descricao= "O data binging pega uma informação no arquivo .ts e leva para o arquivo. html";
      this.img="https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_960_720.jpg";
      this.msgDois= "Event binding";
      this.descricaoDois= "O Event binging pega uma informação no arquivo .ts e leva para o arquivo .html";
    }
   }
}
 */