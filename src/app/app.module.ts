import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { CatComponent } from './views/cat/cat.component';
import { PreviewComponent } from './views/preview/preview.component';
import { PreviewPaginationComponent } from "./views/preview-pagination/preview-pagination.component";
import { PreviewActionComponent } from './views/preview-action/preview-action.component';
import { PreviewZoomComponent } from './views/preview-zoom/preview-zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    PreviewComponent,
    PreviewPaginationComponent,
    PreviewActionComponent,
    PreviewZoomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AsyncPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
