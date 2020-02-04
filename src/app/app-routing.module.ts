import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './componente/login/login.component';
import { BarraNavegacionComponent } from './componente/barra-navegacion/barra-navegacion.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { CarritoComprasComponent } from './componente/carrito-compras/carrito-compras.component';




const routes: Routes = [
  {path : '' , component : LoginComponent },
  {path : 'home' , component : HomeComponent },
  {path : 'productos/:producto' , component : ProductosComponent },
  {path : 'carrito-compras' , component : CarritoComprasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
