import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterValuesPage } from './enter-values.page';

describe('EnterValuesPage', () => {
  let component: EnterValuesPage;
  let fixture: ComponentFixture<EnterValuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterValuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterValuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
