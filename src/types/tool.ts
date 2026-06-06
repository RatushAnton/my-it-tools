export interface Tool {
    name: string;
    path: string;
    category: string;
    description: string;
    component: () => Promise<any>;
}