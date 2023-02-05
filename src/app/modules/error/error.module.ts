import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule],
  providers: [],
  exports: [PageNotFoundComponent],
})
export class ErrorModule {}
