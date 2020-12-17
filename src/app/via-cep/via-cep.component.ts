import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CepService } from './shared/cep.service';

@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.component.html',
  styleUrls: ['./via-cep.component.scss']
})
export class ViaCepComponent implements OnInit {
  form: FormGroup= new FormGroup({});
  constructor(private cepService: CepService) {

  }

  setForm(){
    this.form = new FormGroup({
      cep: new FormControl('')
    })
  }

  ngOnInit(): void { //useEffect
   this.setForm();
  }

  adicionarCep() {

   this.consultarCep(this.form.get('cep')?.value)

  }

  consultarCep(cep: string){
    this.cepService.getCep(cep).subscribe(
      res => {
        console.log(res);

      },
      error => {

      }
    )
  }

}
