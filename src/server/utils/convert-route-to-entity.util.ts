const mapping: Record<string, string> = {
  developers: 'developer',
  'organization-owners': 'organization_owner',
  projects: 'project',
  tasks: 'task',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
