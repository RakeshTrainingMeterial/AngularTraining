import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModelComponent } from './http-model.component';

describe('HttpModelComponent', () => {
  let component: HttpModelComponent;
  let fixture: ComponentFixture<HttpModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
