export enum EstadoPedido {

    Pendiente = 'Pendiente',
    EnPreparacion = 'En preparación',
    EnElHorno = 'En el horno',
    ListoParaEntregar = 'Listo para entregar',
    Entregado = 'Entregado'
}

export class Pedido {
    numero: number;
    detalle: string;
    estado: EstadoPedido;

    constructor() {
        this.numero = Math.floor(Math.random() * 1000) + 1;
        this.detalle = '';
        this.estado = EstadoPedido.Pendiente;
    }
}
