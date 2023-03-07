import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainpageComponent } from './mainpage/mainpage.component';
import { CharactersComponent } from './characters/characters.component';
import { FormCharacterComponent } from './form-character/form-character.component';

import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainpageComponent,
    CharactersComponent,
    FormCharacterComponent
  ],
  exports: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
