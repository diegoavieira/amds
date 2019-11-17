import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmdsCommonToolbarComponent } from './amds-common-toolbar.component';



@NgModule({
  declarations: [AmdsCommonToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [AmdsCommonToolbarComponent]
})
export class AmdsCommonToolbarModule { }
