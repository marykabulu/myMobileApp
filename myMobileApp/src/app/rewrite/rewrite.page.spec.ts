import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RewritePage } from './rewrite.page';

describe('RewritePage', () => {
  let component: RewritePage;
  let fixture: ComponentFixture<RewritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RewritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
