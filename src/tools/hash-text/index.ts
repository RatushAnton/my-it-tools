export const hashTextTool = {
    name: 'Hash Text',
    path: '/hash-text',
    category: 'Crypto',
    description: 'Hash text using MD5, SHA1, SHA256, and SHA512',
    component: () => import('./HashText.vue'),
};