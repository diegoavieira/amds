import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AmdsCommonToolbarModule } from '@amds/common'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmdsCommonToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
