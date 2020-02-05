export function getStatus(status: string) {
  switch (status) {
    case 'ACTIVE':
      return 'active';

    case 'COMPLETED':
      return 'completed';

    case 'CANCELED':
      return 'canceled';

    default:
      return 'new';
  }
}