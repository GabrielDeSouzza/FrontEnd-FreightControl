interface IPhysicalPerson {
  idPhysicalPerson?: number;
  name: string;
  cpf: string;
  gener: string;
  birth_date: Date;
  rg: string;
  email: string;
  phone1?: string;
  phone2?: string;
  phone3?: string;
  public_place: string;
  cep: string;
  neighborhood: string;
  city: string;
  uf: string;
  number_adress: string;
  complement?: string;
}

export type { IPhysicalPerson };
