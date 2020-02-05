export default function getBaseUrl() {
     if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3004/';
    }

    // the same, because we don't have another api url
    return 'http://localhost:3004/';
}
