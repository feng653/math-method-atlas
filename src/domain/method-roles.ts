import type { Question } from './schema';

type Role = Question['methodLinks'][number]['role'];
const labels = { primary: '主方法', supporting: '辅助方法', unclassified: '待分类' };
export const methodRoleLabel = (role: Role) => labels[role ?? 'unclassified'];
