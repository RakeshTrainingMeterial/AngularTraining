import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAttributeComponentComponent } from './directive-attribute-component.component';

describe('DirectiveAttributeComponentComponent', () => {
  let component: DirectiveAttributeComponentComponent;
  let fixture: ComponentFixture<DirectiveAttributeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveAttributeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveAttributeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
