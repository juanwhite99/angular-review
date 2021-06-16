import { Component, OnInit } from '@angular/core';
import { DeclarativeDataAccessService } from '../../services';

@Component({
  selector: 'app-declarative-data-access',
  templateUrl: './declarative-data-access.component.html',
  styleUrls: ['./declarative-data-access.component.scss'],
})
export class DeclarativeDataAccessComponent implements OnInit {
  products$ = this.declarativeDataAccessService.products$;

  constructor(
    private declarativeDataAccessService: DeclarativeDataAccessService
  ) {}

  ngOnInit(): void {}
}
