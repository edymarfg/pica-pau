export interface FarmaceuticoModel {
  id: string;
  nome: string;
  niver: string;
  cpf: string;
  oferta_dia: string;
  idade?: string;
  documento?: string;
  documentoValido?: boolean;
}
