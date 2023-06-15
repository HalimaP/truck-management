import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
// import { RecipesComponent } from './Recipes/recipes.component';
// import { ReadMoreComponent } from './Recipes/read-more/read-more.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
//   {path: 'home/read-more/:id', component: ReadMoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }