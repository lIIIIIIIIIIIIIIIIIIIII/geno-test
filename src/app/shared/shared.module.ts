import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ], exports: [
    MaterialModule,
    TranslateModule
  ]
})
export class SharedModule {
}
