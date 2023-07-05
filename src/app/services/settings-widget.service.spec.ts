import { TestBed } from '@angular/core/testing';

import { SettingsWidgetService } from './settings-widget.service';

describe('SettingsWidgetService', () => {
  let service: SettingsWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
