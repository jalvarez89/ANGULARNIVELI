import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { RouterModule, Routes } from '@angular/router'
const approutes: Routes=[
  {path:"",component:Componente2Component},
  {path:"componente3",component:Componente3Component}
]
@NgModule({
  declarations: [
    AppComponent,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
