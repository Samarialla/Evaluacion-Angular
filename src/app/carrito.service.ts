import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productosUrl = 'https://tarea-add74.firebaseio.com/bodega/.json';

  private cantproducto = new BehaviorSubject<number>(0);
  cast = this.cantproducto.asObservable();
  private nomproducto = new BehaviorSubject<string>('');
  castnom = this.nomproducto.asObservable();
  productosCollection: AngularFirestoreCollection;
  productoDoc: AngularFirestoreDocument;

  codigo: string;
  idCant: string;
  cant: number;
  idAnad: string;
  total: number;
  nombres = [];
  nomTemp = [];
  get: any;

  constructor(private productosService: CarritoService) { }

  allproductos() {
    return this.productosService.get(this.productosUrl);

  }

  setCantidades(id, cantidad: number, idAnadir) {
    this.idCant = id;
    this.cant = cantidad;
    this.idAnad = idAnadir;

    const idC = this.idCant.substr(5);
    const idA = this.idAnad.substr(7);
    console.log(this.idCant, this.cant, this.idAnad);
    console.log(idC, idA);

    if (idC === idA) {
      this.shoppCartBadge();
      this.setIdProCart(idC);
    } else {
      console.log('Por favor añada la cantidad digitada');
    }
  }

  shoppCartBadge() {
    const total = this.total;
    console.log(this.cant, typeof (this.cant));
    this.total = total + this.cant;
    console.log(this.total, typeof (this.total));
    this.cantproducto.next(this.total);
  }

  setIdProCart(nom) {
    console.log(this.nombres);
    let cantidad = 0;
    let nombres = [];
    let boleano = false;
    console.log(this.nomTemp);
    this.nomTemp.forEach(temp => {
      console.log(temp);
      if (temp === nom) {
        boleano = true;
      }
    });
    console.log(boleano);
    this.nomTemp.push(nom);

    if (nom !== '' && nom !== undefined) {
      console.log(nom);
      if (Object.keys(this.nombres).length === 0) {
        this.nombres.push({
          nombre: nom,
          cantidad: this.cant
        });
      } else if (boleano) {
        nombres = this.nombres;
        console.log(nombres);
        nombres.forEach((duplicado, index) => {
          console.log(duplicado.nombre);
          if (duplicado.nombre === nom) {
            console.log(index);
            console.log(nom);
            console.log(this.cant);
            console.log(duplicado.cantidad);
            const cant = duplicado.cantidad;
            console.log(cant);
            cantidad = this.cant;
            console.log(cantidad);
            const cantid = cant + cantidad;
            console.log(cantid);

            console.log(this.nombres);

            this.nombres.splice(index, 1, { nombre: nom, cantidad: cantid });
            console.log(this.nombres);
          }
        });
      } else {

        this.nombres.push({
          nombre: nom,
          cantidad: this.cant
        });
        console.log(this.nombres);
      }
    } else {
      this.nombres = [];
      this.cant = 0;
      this.total = 0;
      this.nomTemp = [];
    }
    console.log(this.nombres);
  }




}
