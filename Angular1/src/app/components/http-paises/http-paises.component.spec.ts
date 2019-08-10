import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPaisesComponent } from './http-paises.component';

describe('HttpPaisesComponent', () => {
  let component: HttpPaisesComponent;
  let fixture: ComponentFixture<HttpPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
