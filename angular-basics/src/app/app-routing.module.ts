import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { BindingComponent } from './binding/binding.component';
import { SampleResolverService } from './sample/sample-resolver.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path: '', redirectTo: '/sample', pathMatch: 'full',resolve:{data:SampleResolverService}},
  {path: 'sample', component: SampleComponent, pathMatch: 'full' ,resolve:{resolver:SampleResolverService}},
  {path: 'binding', component: BindingComponent , pathMatch: 'full'},
  {path: 'directive', component: DirectivesComponent , pathMatch: 'full'},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent , pathMatch: 'full'},
  {path: 'reactive-form', component: ReactiveFormComponent , pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
