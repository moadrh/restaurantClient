import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasPrincipalComponent } from './repas-principal.component';

describe('RepasPrincipalComponent', () => {
  let component: RepasPrincipalComponent;
  let fixture: ComponentFixture<RepasPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
