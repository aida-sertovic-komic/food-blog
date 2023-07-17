import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipecreationComponent } from './recipe-creation.component';

describe('RecipecreationComponent', () => {
  let component: RecipecreationComponent;
  let fixture: ComponentFixture<RecipecreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipecreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
