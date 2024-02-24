import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonTitleComponent } from './common-title.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CommonTitleComponent
  ],
  exports: [
    CommonTitleComponent
  ]
})
export class CommonTitleModule {

}
