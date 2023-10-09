import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationOwnerInterface {
  id?: string;
  name: string;
  business_name: string;
  address: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface OrganizationOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  business_name?: string;
  address?: string;
  user_id?: string;
}
