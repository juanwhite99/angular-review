import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarativeDataAccessComponent } from './components';
import { DeclarativeDataAccessService } from './services/declarative-data-access.service';

@NgModule({
  declarations: [DeclarativeDataAccessComponent],
  imports: [CommonModule],
  exports: [DeclarativeDataAccessComponent],
  providers: [DeclarativeDataAccessService],
})
export class PatternsModule {}
