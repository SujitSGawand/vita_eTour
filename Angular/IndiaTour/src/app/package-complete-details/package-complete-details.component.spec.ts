import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCompleteDetailsComponent } from './package-complete-details.component';

describe('PackageCompleteDetailsComponent', () => {
  let component: PackageCompleteDetailsComponent;
  let fixture: ComponentFixture<PackageCompleteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageCompleteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageCompleteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
