import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationmailComponent } from './verificationmail.component';

describe('VerificationmailComponent', () => {
  let component: VerificationmailComponent;
  let fixture: ComponentFixture<VerificationmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
