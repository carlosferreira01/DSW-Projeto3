import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Promocao } from '../../models/promocao';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  displayedColumns: string[] = ['nomePeca', 'preco', 'horario', 'site', 'teatro'];
  livros: Promocao[] = [];
  isLoadingResults = true;


  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
