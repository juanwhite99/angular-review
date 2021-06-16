import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarativeDataAccessComponent } from './patterns/components';

const routes: Routes = [
  {
    path: '',
    component: DeclarativeDataAccessComponent,
  },
  {
    path: 'declarative-data-accsss',
    component: DeclarativeDataAccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
