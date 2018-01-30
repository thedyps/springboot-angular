import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUpdateComponent } from './reg-update.component';

describe('RegUpdateComponent', () => {
  let component: RegUpdateComponent;
  let fixture: ComponentFixture<RegUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
