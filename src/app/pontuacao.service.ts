import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PontuacaoService {

  pontuacao = 0
  ruim = true

  pontuar = () => {
    this.pontuacao++
    new Audio('../../assets/shot.mp3').play()
    if(this.pontuacao > 10) this.ruim = false
  }

  zerarPontuacao = () => this.pontuacao = 0


}
