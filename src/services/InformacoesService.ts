import api from './api';

export interface Informacoes {
    id: number;
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}
//criar os dados
export async function updateInformacoes(informacoes: Informacoes): Promise<Informacoes> {
    const response = await api.put<Informacoes>('/informacoes/1', informacoes);
    return response.data;
}

//ler os dados criados
export async function getInformacoes(): Promise<Informacoes> {
    const response = await api.get<Informacoes>('/informacoes/1',);
    return response.data;
}
