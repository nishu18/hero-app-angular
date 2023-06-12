import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeroComponent } from './top-hero.component';

describe('TopHeroComponent', () => {
  let component: TopHeroComponent;
  let fixture: ComponentFixture<TopHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHeroComponent]
    });
    fixture = TestBed.createComponent(TopHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
