import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
/*import 'rxjs/Rx';*/
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Productos {
  cantidad: string;
 
}


@Injectable()
export class HttpService {
  private cantproducto = new BehaviorSubject<number>(0);
  productosUrl = 'https://tarea-add74.firebaseio.com/bodega/.json';
  codigo: string;
  idCant: string;
  cant: number;
  idAnad: string;
  total: number;
  nombres = [];
  nomTemp = [];
  carrito = [];
  productseleccionado: any = [ ];

  constructor(private http: HttpClient, public db: AngularFirestore) { }

  allproductos() {
    return this.http.get(this.productosUrl);
  }

  setCantidades(id, cantidad: number, idAnadir) {
    var nombre = id.split(' ')[0];
    var precio = id.split(' ')[1];
    var url = id.split(' ')[3];
    var subtotal =  precio * cantidad;
    var encontrado = this.carrito.map(e => e.id).indexOf(nombre);
    if (encontrado != -1) {
      this.carrito[encontrado].cantidad = this.carrito[encontrado].cantidad + cantidad;
    } else {
      this.carrito.push({ id: nombre,cantidad: cantidad, precio:precio, url:url, subtotal:subtotal })
    }
    this.shoppCartBadge();
  }

  setId(id) {
    this.codigo = id;
    /*console.log('http sedid ' + id);*/
  }

  shoppCartBadge() {
    this.total = 0;
    for(let i = 0; i < this.carrito.length; i++) {
      this.total += this.carrito[i].cantidad;
      console.log('0' + JSON.stringify(this.carrito[i].id));
    }
    this.cantproducto.next(this.total);
  }

  addcarrito(pedido) {
    this.productseleccionado.push(pedido);
  }

  updateBodega(producto, cantidad) {
    console.log(cantidad);
    /*db.collection("app").document("users").collection(uid).document("notifications")*/
    console.log(this.db.collection('bodega').doc(producto).set({cantidad}))
    return this.db.collection('bodega').doc(producto).set({producto,cantidad});
   }

}
