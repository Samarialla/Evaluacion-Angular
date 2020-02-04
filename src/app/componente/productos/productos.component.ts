import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, observable } from 'rxjs';
/*import { HttpService } from './http.service';*/
import { Response } from '@angular/http';
import { HttpService } from 'src/app/http.service';
import { BarraNavegacionComponent } from 'src/app/componente/barra-navegacion/barra-navegacion.component';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  buscar: string;
  nombreProducto: string;
  nombreprod: string;
  product: any = [];
  nombre: string;
  cantidad: [];
  productoSeleccionado: any;
  /*data: any = [];*/


  constructor(private router: Router, private route: ActivatedRoute, private data: HttpService) {
    this.nombreprod = this.route.snapshot.params.producto;
    this.productoSeleccionado = { producto: '', precio: '', cantidad: '' };
  }

  ngOnInit() {
    /*this.product = this.data.allproductos();
    this.buscar = '';
    console.log(this.product);*/
    this.data.allproductos().subscribe(
      (data: any) => {

        for (const item of data) {
          if (item.producto === this.nombreprod) {
            this.productoSeleccionado = item;
            console.log(item);
          }
        }

      }
    );
  }
}
