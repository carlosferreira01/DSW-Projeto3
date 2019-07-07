import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Site } from '../../models/site';
import { Teatro } from '../../models/teatro';
import { Promocao } from 'src/app/models/promocao';

@Component({
  selector: 'app-promocao-edicao',
  templateUrl: './promocao-edicao.component.html',
  styleUrls: ['./promocao-edicao.component.css']
})
export class PromocaoEdicaoComponent implements OnInit {

  promocaoForm: FormGroup;
  id: string = '';
  selected_site: Site = null;
  sites: Site[];
  selected_teatro: Teatro = null;
  teatros: Teatro[];
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.promocaoForm = this.formBuilder.group({
      nomePeca: [null, Validators.required],
      data: [null, Validators.required],
      horario: [null, Validators.required],
      preco: [null, Validators.required],
      site: [new Site(), Validators.required],
      teatro: [new Teatro(), Validators.required]
    });
    this.getData(this.route.snapshot.params['id']);
  }

  async getData(id) {
    this.sites = await this.api.getSites().toPromise();
    this.teatros = await this.api.getTeatros().toPromise();
    let promocao: Promocao = await this.api.getPromocao(id).toPromise();
    this.id = promocao.id;
    this.promocaoForm.setValue({
      nomePeca: promocao.nomePeca,
      data: promocao.data,
      horario: promocao.horario,
      preco: promocao.preco,
      site: promocao.site,
      teatro: promocao.teatro
    });
    this.selected_site = promocao.site;
    this.selected_teatro = promocao.teatro;
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updatePromocao(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/promocao-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  promocaoDetalhes() {
    this.router.navigate(['/promocao-detalhes', this.id]);
  }

}
