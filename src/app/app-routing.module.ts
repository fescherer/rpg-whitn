import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracterSheetComponent } from './pages/caracter-sheet/caracter-sheet.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page/:id', component: CaracterSheetComponent },
  { path: '**',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
