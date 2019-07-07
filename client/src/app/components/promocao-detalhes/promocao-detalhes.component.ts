import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Promocao } from '../../models/promocao';
import { Site } from '../../models/site';
import { Teatro } from '../../models/teatro';


@Component({
  selector: 'app-promocao-detalhes',
  templateUrl: './promocao-detalhes.component.html',
  styleUrls: ['./promocao-detalhes.component.css']
})
export class PromocaoDetalhesComponent implements OnInit {

  promocao: Promocao = { id: '', nomePeca: '', preco: null, data:'', horario: '', site: new Site(), teatro: new Teatro() };
isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  async getData(id) {
    this.promocao = await this.api.getPromocao(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  deletePromocao(id) {
    this.isLoadingResults = true;
    this.api.deletePromocao(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/promocoes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
