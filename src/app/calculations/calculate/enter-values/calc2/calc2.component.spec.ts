import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Calc2Component } from './calc2.component';

describe('Calc2Component', () => {
  let component: Calc2Component;
  let fixture: ComponentFixture<Calc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calc2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Calc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
