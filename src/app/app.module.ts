import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarraNavegacionComponent } from './componente/barra-navegacion/barra-navegacion.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './componente/login/login.component';

import { AngularFirestore } from '@angular/fire/firestore';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';
import { ProductosComponent } from './componente/productos/productos.component';
import { CarritoComprasComponent } from './componente/carrito-compras/carrito-compras.component';






const config = {
  apiKey: 'AIzaSyAmbxymxlFIRgkKVa7UFwrCPukFkfC9bCY',
  authDomain: 'tarea-add74.firebaseapp.com',
  databaseURL: 'https://tarea-add74.firebaseio.com',
  projectId: 'tarea-add74',
  storageBucket: 'tarea-add74.appspot.com',
  messagingSenderId: '233270919658',
  appId: '1:233270919658:web:394b20ccac433117'
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BarraNavegacionComponent,
    ProductosComponent,
    CarritoComprasComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [AngularFirestore, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
