import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Teatro } from '../../models/teatro';

@Component({
  selector: 'app-teatros',
  templateUrl: './teatros.component.html',
  styleUrls: ['./teatros.component.css']
})
export class TeatrosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cidade', 'email', 'senha', 'cnpj'];
  livros: Teatro[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
