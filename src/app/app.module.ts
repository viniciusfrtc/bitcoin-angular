import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MinaComponent } from './mina/mina.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

import { PontuacaoService } from './pontuacao.service'

@NgModule({
  declarations: [
    AppComponent,
    MinaComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PontuacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
