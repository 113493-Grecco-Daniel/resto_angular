import { Component } from '@angular/core';
import{ PedidosService } from '../../services/pedidos.service';
import { EstadoPedido, Pedido } from '../../clases/pedido';


@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {
  listaPedidos: Pedido[] = [];
  //pedidoNuevo: Pedido = new Pedido();


  constructor( private pedidosService: PedidosService) {     
  }
  
  ngOnInit(): void {
    this.listaPedidos = this.pedidosService.listaPedidos;
  }


  CambiarAEnPreparacion(numero: number):void{
    this.pedidosService.modificarEstado(numero, EstadoPedido.EnPreparacion);    
  }

  CambiarAEnElHorno(numero: number):void{
    this.pedidosService.modificarEstado(numero, EstadoPedido.EnElHorno);    
  }

  CambiarAListoParaEntregar(numero: number):void{
    this.pedidosService.modificarEstado(numero, EstadoPedido.ListoParaEntregar);    
  }




}
