import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoUserComponent } from './repo-user.component';

describe('RepoUserComponent', () => {
  let component: RepoUserComponent;
  let fixture: ComponentFixture<RepoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
