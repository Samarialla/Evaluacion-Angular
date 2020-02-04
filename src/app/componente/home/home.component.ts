import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
/*import { HttpService } from './http.service';*/
import { Response } from '@angular/http';
import { HttpService } from 'src/app/http.service';
import { CarritoService } from 'src/app/carrito.service';
import { BarraNavegacionComponent } from 'src/app/componente/barra-navegacion/barra-navegacion.component';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any = [];
  textoBusqueda: string;
  buscar: string;
  nombreProducto: string;
  nombreprod: string;
  product: any = [];
  nombre: string;
  cantidad: number;
  productoSeleccionado: any;
  cant: number;
  codigo: string;
  idAnad: string;

  /*.subscribe((data: IUsers[]) =>*/

  constructor(private router: Router, private httpService: HttpService, private route: ActivatedRoute, carritoService: CarritoService) {

    this.nombreprod = this.route.snapshot.params.producto;
  }
  ngOnInit() {

    this.httpService.allproductos().subscribe((res => this.productos = res));
    this.buscar = '';

  }

  getPrecioProducto(producto) {
    for (const item of this.product) {
      if (item.producto === producto) {
        console.log(item.precio);
        return item.precio;
      }
    }
  }

  onaddCarrito(producto, cantidad, imagen, precio) {
    let pedido = {nombre: producto, cantidad: cantidad, imagen: imagen, precio: precio };
    this.httpService.addcarrito(pedido);
  }

  cantidades(id, cantidad) {
    this.codigo = id;
    this.cant = cantidad;
    cantidad = Number(this.cant);
    this.cantidad = cantidad;
  }

  anadirProductos() {
    console.log('añadirproductos ' + this.cantidad, (this.cantidad));
    this.httpService.setCantidades(this.codigo, this.cantidad, this.idAnad);
  }



  onAnadir = (id, value) => {
    this.idAnad = id.target[0].id;
    this.httpService.setId(id.target[0].id);
    const cant = id.target[1].value;
    const idCant = id.target[0].id;
    this.cantidades(idCant, cant);
    this.anadirProductos();
  }

  onCantidad = cantidad => {
    const cant = cantidad.target.value;
    const idCant = cantidad.target.id;
    this.cantidades(idCant, cant);
    console.log('oncantidad ' + idCant, cant);
  }





}
