import { Component, OnInit, Input } from '@angular/core';
import { PontuacaoService } from '../pontuacao.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  
  pontuar

  constructor(service: PontuacaoService) { 
    this.pontuar = service.pontuar
  }

  posicao = {
    horizontalMin: -20,
    horizontalMax: 140,
    verticalMin: 30,
    verticalMax: 90
  }

  esquerda = "-20vw"
  topo = "50%"
  translate = horizontal => `translate(${horizontal}vw)` 
  translateCss = ''
  transitionCss = "transform 4s ease-in-out"


  mudaTransicao = () => {
    this.translateCss = 
      this.translateCss === this.translate(this.posicao.horizontalMin) ?
      this.translate(this.posicao.horizontalMax) : 
      this.translate(this.posicao.horizontalMin)
    this.topo = `${this.randomVertical()}%`
  }

  randomVertical = () => Math.floor(Math.random() * (this.posicao.verticalMax - this.posicao.verticalMin + 1)) + this.posicao.verticalMin
  
  ngOnInit() {
    this.mudaTransicao()
    setInterval(this.mudaTransicao, 4000)
  }
  
}
