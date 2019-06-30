import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { PromocaoCadastroComponent } from './components/promocao-cadastro/promocao-cadastro.component';
import { PromocaoDetalhesComponent } from './components/promocao-detalhes/promocao-detalhes.component';
import { PromocaoEdicaoComponent } from './components/promocao-edicao/promocao-edicao.component';
import { SitesComponent } from './components/sites/sites.component';
import { SiteCadastroComponent } from './components/site-cadastro/site-cadastro.component';
import { SiteDetalhesComponent } from './components/site-detalhes/site-detalhes.component';
import { SiteEdicaoComponent } from './components/site-edicao/site-edicao.component';
import { TeatrosComponent } from './components/teatros/teatros.component';
import { TeatroCadastroComponent } from './components/teatro-cadastro/teatro-cadastro.component';
import { TeatroDetalhesComponent } from './components/teatro-detalhes/teatro-detalhes.component';
import { TeatroEdicaoComponent } from './components/teatro-edicao/teatro-edicao.component';

const routes: Routes = [
  {
      path: 'promocoes', component: PromocoesComponent , data: { title: 'Lista de Promocoes' }
    },
    {
      path: 'promocao-detalhes/:id', component: PromocaoDetalhesComponent, data: { title: 'Detalhes da Promocao' }
    },
    {
      path: 'promocao-cadastro', component: PromocaoCadastroComponent, data: { title: 'Cadastro Promocao' }
    },
    {
      path: 'promocao-edicao/:id', component: PromocaoEdicaoComponent, data: { title: 'Edição Promocao' }
    },
    { 
       path: '', redirectTo: '/promocoes', pathMatch: 'full'
    }
  ];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
