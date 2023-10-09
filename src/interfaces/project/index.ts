import { TaskInterface } from 'interfaces/task';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  deadline?: any;
  team_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  team?: TeamInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  team_id?: string;
}
