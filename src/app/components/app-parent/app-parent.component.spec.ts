import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppParentComponent } from './app-parent.component';
import { ConsoleLoggerService } from '../../services/console-logger.service';
import { LOGGER_TOKEN } from '../../models';

describe('AppParentComponent', () => {
  let component: AppParentComponent;
  let fixture: ComponentFixture<AppParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
