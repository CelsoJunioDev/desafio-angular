import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CepModel } from './shared/cep.model';
import { CepService } from './shared/cep.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { element } from 'protractor';

@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.component.html',
  styleUrls: ['./via-cep.component.scss'],
})
export class ViaCepComponent implements OnInit {
  constructor(private cepService: CepService, private _snackBar: MatSnackBar) {}

  ELEMENT_DATA: any[] = [];

  listaLocalStorage: any[] = [];

  listaCep = new MatTableDataSource(this.ELEMENT_DATA);

  displayedColumns: string[] = [
    'uf',
    'localidade',
    'logradouro',
    'cep',
    'acao',
  ];

  form: FormGroup = new FormGroup({});

  setForm() {
    this.form = new FormGroup({
      cep: new FormControl('', Validators.required),
      cepFiltro: new FormControl(''),
      ufFiltro: new FormControl(''),
      cidadeFiltro: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //useEffect
    this.setForm();
  }
  openSnackBar(text: string) {
    this._snackBar.open(text, '', {
      duration: 2000,
    });
  }
  adicionarCep() {
    const element = this.listaLocalStorage.find(
      (element) => element.cep === this.form.get('cep')?.value.replace('.', '')
    );

    if (
      this.form.invalid ||
      this.form.get('cep')?.value.length < 5 ||
      element
    ) {
      this.openSnackBar('Insira um CEP válido');
    } else {
      this.consultarCep(this.removerMascaraDoCep());
      this.form.get('cep')?.setValue('');
    }
  }

  mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  maskFilter = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  consultarCep(cep: string) {
    this.cepService.getCep(cep).subscribe(
      (res: any) => {
        if (res.erro) {
          this.openSnackBar('CEP não existe');
        } else {
          console.log('RESPONSE: ', res);

          this.ELEMENT_DATA.push(res);
          this.listaLocalStorage.push(res);
          localStorage.setItem(
            'storage',
            JSON.stringify(this.listaLocalStorage)
          );
          this.listaCep = new MatTableDataSource(this.ELEMENT_DATA);
        }
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  contemData() {
    return this.listaCep.data.length;
  }

  excluirTodos() {
    this.listaCep = new MatTableDataSource();
  }

  removerMascaraDoCep(): string {
    return this.form.get('cep')?.value.replace('.', '').replace('/', '');
  }

  removerCep(index: number) {
    this.ELEMENT_DATA.splice(index, 1);
    this.listaCep = new MatTableDataSource(this.ELEMENT_DATA);
  }

  pesquisarCep() {
    const cep = this.form.get('cepFiltro')?.value;
    const uf = this.form.get('ufFiltro')?.value;
    const cidade = this.form.get('cidadeFiltro')?.value;
    const listaFiltrada = this.ELEMENT_DATA.filter((element) => {
      if (
        element.cep === cep ||
        element.uf === uf ||
        element.localidade === cidade
      ) {
        return element;
      }
    });
    this.listaCep = new MatTableDataSource(listaFiltrada);
  }

  refresh() {
    this.listaCep = new MatTableDataSource(this.listaLocalStorage);
    this.form.get('cepFiltro')?.setValue('');
    this.form.get('ufFiltro')?.setValue('');
    this.form.get('cidadeFiltro')?.setValue('');
  }
}
