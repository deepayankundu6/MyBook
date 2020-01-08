import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatDialogModule } from '@angular/material';
import { EditBookComponent } from './edit-book/edit-book.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    MatDialogModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditBookComponent]
})
export class AppModule { }
