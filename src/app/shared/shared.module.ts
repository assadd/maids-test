import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './compoents/loader/loader.component';
import { NavbarComponent } from './compoents/navbar/navbar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardHoverAnimationDirective } from './directives/card-hover.directive';
@NgModule({
  declarations: [CardHoverAnimationDirective, LoaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    NavbarComponent,
    LoaderComponent,
    CardHoverAnimationDirective
  ]
})
export class SharedModule { }
