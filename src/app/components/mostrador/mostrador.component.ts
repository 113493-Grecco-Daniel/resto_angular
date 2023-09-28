import { Component, OnInit } from '@angular/core';
import{ PedidosService } from '../../services/pedidos.service';
import { EstadoPedido, Pedido } from '../../clases/pedido';



@Component({
  selector: 'app-mostrador',
  templateUrl: './mostrador.component.html',
  styleUrls: ['./mostrador.component.css']
})
export class MostradorComponent implements OnInit {
listaPedidos: Pedido[] = [];
pedidoNuevo: Pedido = new Pedido();

  constructor( private pedidosService: PedidosService) { 
  }

  ngOnInit(): void {
    this.listaPedidos = this.pedidosService.listaPedidos;
  }


  tomarPedido(){
    this.pedidosService.agregarPedido(this.pedidoNuevo);
    this.pedidoNuevo = new Pedido();
  }

  Entregar(numero: number){
    this.pedidosService.modificarEstado(numero, EstadoPedido.Entregado);
  }

}
