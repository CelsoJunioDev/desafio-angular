import { Component, OnInit } from '@angular/core';
import { CepService } from '../via-cep/shared/cep.service';

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(private cepService: CepService) {

  }

  ngOnInit(): void { //useEffect
   this.consultarCep();
  }

  adicionarCep() {

    console.log('clicou!');

  }

  consultarCep(){
    this.cepService.getCep('72450050').subscribe(
      res => {
        console.log(res);

      },
      error => {

      }
    )
  }

}
