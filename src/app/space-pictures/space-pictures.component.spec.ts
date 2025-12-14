import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';

import { SpacePicturesComponent } from './space-pictures.component';

describe('SpacePicturesComponent', () => {
  let component: SpacePicturesComponent;
  let fixture: ComponentFixture<SpacePicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacePicturesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
