export const tool = {
    name: 'Token Generator',
    path: '/token-generator',
    category: 'Crypto',
    description: 'Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols.',
    component: () => import('./TokenGenerator.vue'),
};