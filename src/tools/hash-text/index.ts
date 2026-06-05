export const tool = {
    name: 'Hash text',
    path: '/hash-text',
    category: 'Crypto',
    description: 'Hash text using MD5, SHA1, SHA256, SHA512',
    component: () => import('./HashText.vue'),
};