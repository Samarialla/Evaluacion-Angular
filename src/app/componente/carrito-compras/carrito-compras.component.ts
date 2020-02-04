import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  pedidos: any = [];
  cantidad: any = [];

  totalpagar: number;
  mostrar = false;
  producto: any = [];
  item: Observable<any[]>;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.pedidos = this.httpService.carrito;
    /*console.log(this.pedidos);*/

    /*for (let i = 0; i < this.pedidos.length; i++) {
       this.totalpagar =  this.pedidos[i].subtotal + this.totalpagar;
       console.log(this.totalpagar);
    }*/

  }
  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.pedidos.length; i++) {
      total = total + this.pedidos[i].subtotal;
      console.log(total);
    }
    return total;
  }

  pagar() {
    for (let i = 0; i < this.pedidos.length; i++) {
      var producto = this.pedidos[i].id;
      var cantidad = this.pedidos[i].cantidad;
      this.httpService.updateBodega(producto, cantidad).then(
        res => {
        this.router.navigate(['/home']);
        }
      )
    }
  }


}
