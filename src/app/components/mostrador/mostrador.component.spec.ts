import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorComponent } from './mostrador.component';

describe('MostradorComponent', () => {
  let component: MostradorComponent;
  let fixture: ComponentFixture<MostradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostradorComponent]
    });
    fixture = TestBed.createComponent(MostradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
