import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CepModel } from './shared/cep.model';
import { CepService } from './shared/cep.service';

@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.component.html',
  styleUrls: ['./via-cep.component.scss']
})
export class ViaCepComponent implements OnInit {

  ELEMENT_DATA: any [] = [

  ]

  listaLocalStorage: any [] = [


  ]


  listaCep = new MatTableDataSource(this.ELEMENT_DATA)

  displayedColumns: string[] = ['uf', 'localidade', 'logradouro', 'cep', 'acao'];

  colunas: any = [
    {field: 'ufFiltro', label: 'UF'},
    {field: 'cidadeFiltro', label: 'Cidade'},
    {field: 'logradouroFiltro', label: 'Logradouro'},
    {field: 'cepFiltro', label: 'CEP'},
  ]

  form: FormGroup= new FormGroup({});
  constructor(private cepService: CepService) {

  }

  setForm(){
    this.form = new FormGroup({
      cep: new FormControl(''),
      cepFiltro: new FormControl(''),
      ufFiltro: new FormControl(''),
      cidadeFiltro: new FormControl('')

    })
  }

  ngOnInit(): void { //useEffect
   this.setForm();
  }

  adicionarCep() {

    if(this.form.get('cep')?.value === '' || this.form.get('cep')?.value.length < 8 ){
      alert('Digite um CEP válido')
    }else{

      this.consultarCep(this.form.get('cep')?.value);
      console.log(this.listaCep);
      this.form.get('cep')?.setValue('')
    }



  }

  consultarCep(cep: string){
    this.cepService.getCep(cep).subscribe(
      res => {
        this.ELEMENT_DATA.push(res);
        this.listaLocalStorage.push(res);
        localStorage.setItem('storage', JSON.stringify(this.listaLocalStorage));
        this.listaCep = new MatTableDataSource(this.ELEMENT_DATA);

      },
      error => {
        console.log(error);

      }
    );
  }

  removerCep(index: number){
    this.ELEMENT_DATA.splice(index, 1);
    this.listaCep = new MatTableDataSource(this.ELEMENT_DATA);
  }

  pesquisarCep(){
    const cep = this.form.get('cepFiltro')?.value;
    const uf = this.form.get('ufFiltro')?.value;
    const cidade = this.form.get('cidadeFiltro')?.value;
    const listaFiltrada =

    this.ELEMENT_DATA.filter(element => {
      if(element.cep === cep || element.uf === uf || element.localidade === cidade){
        return element;
      }
    })
    this.listaCep = new MatTableDataSource(listaFiltrada);
  }

  refresh() {

   this.listaCep = new MatTableDataSource(this.listaLocalStorage);
  //  this.listaLocalStorage = [];
  }
}
