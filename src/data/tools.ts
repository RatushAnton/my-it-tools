import type { Tool } from '../types/tool';

import { tokenGeneratorTool } from '../tools/token-generator';

export const tools: Tool[] = [
    tokenGeneratorTool,
];