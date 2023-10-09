interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Developer'],
  customerRoles: [],
  tenantRoles: ['Organization Owner', 'Project Manager', 'Developer', 'End User'],
  tenantName: 'Team',
  applicationName: 'dApp Tools',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage teams', 'Manage projects', 'Manage tasks'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f021d635-8be9-4660-9767-6d187dfea6f0',
};
