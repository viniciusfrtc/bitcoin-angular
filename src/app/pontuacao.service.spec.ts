import { TestBed, inject } from '@angular/core/testing';

import { PontuacaoService } from './pontuacao.service';

describe('PontuacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PontuacaoService]
    });
  });

  it('should be created', inject([PontuacaoService], (service: PontuacaoService) => {
    expect(service).toBeTruthy();
  }));
});
