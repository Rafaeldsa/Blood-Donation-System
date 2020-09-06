import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsListagemComponent } from './donations-listagem.component';

describe('DonationsListagemComponent', () => {
  let component: DonationsListagemComponent;
  let fixture: ComponentFixture<DonationsListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
