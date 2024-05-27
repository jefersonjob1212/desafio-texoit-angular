import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingComponent, NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [],
  imports: [NgxLoadingModule.forRoot({ fullScreenBackdrop: true })],
  exports: [NgxLoadingComponent]
})
export class LoaderModule {}
