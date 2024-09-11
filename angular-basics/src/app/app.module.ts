import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleService } from './sample/sample.service';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './binding/summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputFormatDirective } from './directives/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BindingComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    DirectivesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    NavigationComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
