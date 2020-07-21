import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgbsComponent } from './agbs.component';

describe('AgbsComponent', () => {
  let component: AgbsComponent;
  let fixture: ComponentFixture<AgbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgbsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
