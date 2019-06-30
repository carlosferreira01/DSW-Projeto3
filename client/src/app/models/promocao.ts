import { Site } from './site';
import { Teatro } from './teatro';

export class Promocao {
    id: string;
    nomePeca : string
    preco: number;
    horario: number;
    site: Site;
    teatro: Teatro;
}