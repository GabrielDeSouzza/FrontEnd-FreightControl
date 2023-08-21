import { IPhysicalPerson } from './IPhysicalPerson';
type IDriver = {
  idDriver?: number;
  PhysicalPerson: IPhysicalPerson;
  cnhCategory: string;
  cnh: string;
  isOwn: boolean;
  create_at?: Date;
  update_at?: Date;
  create_by?: string;
  update_by?: string;
  licencePlate?: string;
};

export type { IDriver };
