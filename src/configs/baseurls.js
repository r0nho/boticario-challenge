export default function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'https://demo6515803.mockable.io';
  }

  // the same, because we don't have another api url
  return 'https://demo6515803.mockable.io';
}
