import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Calc3Component } from './calc3.component';

describe('Calc3Component', () => {
  let component: Calc3Component;
  let fixture: ComponentFixture<Calc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calc3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Calc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
