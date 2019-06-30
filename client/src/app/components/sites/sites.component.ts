import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Site } from '../../models/site';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'url', 'email', 'senha', 'telefone'];
  livros: Site[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
