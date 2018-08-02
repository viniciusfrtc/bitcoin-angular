import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from '../pontuacao.service';

@Component({
  selector: 'app-mina',
  templateUrl: './mina.component.html',
  styleUrls: ['./mina.component.css']
})
export class MinaComponent implements OnInit {

  pontuacao 
  zerarPontuacao
  ruim
// https://angular.io/guide/component-interaction#!#bidirectional-service
  constructor(service: PontuacaoService) { 
    this.pontuacao = service.pontuacao
    this.zerarPontuacao = service.zerarPontuacao
    this.ruim = service.ruim
  }

  ngOnInit() {
  }

}
