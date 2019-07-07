import { Site } from './site';
import { Teatro } from './teatro';

export class Promocao {
    id: string;
    nomePeca : string;
    data: string;
    preco: number;
    horario: string;
    site: Site;
    teatro: Teatro;
}