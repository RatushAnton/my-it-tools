export const tokenGeneratorTool = {
    name: 'Token Generator',
    path: '/token-generator',
    category: 'Crypto',
    description: 'Generate random secure tokens using letters, numbers, and symbols.',
    component: () => import('./TokenGenerator.vue'),
};