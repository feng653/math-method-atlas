import { atlasSchema, type AtlasData } from '../domain/schema';

const modules = {
  libraries: import.meta.glob('../../content/libraries/*/library.json', { eager: true, import: 'default' }),
  methods: import.meta.glob('../../content/libraries/*/methods/*.json', { eager: true, import: 'default' }),
  papers: import.meta.glob('../../content/libraries/*/papers/*.json', { eager: true, import: 'default' }),
  questions: import.meta.glob('../../content/libraries/*/questions/*.json', { eager: true, import: 'default' }),
};

export const data: AtlasData = atlasSchema.parse(Object.fromEntries(
  Object.entries(modules).map(([key, records]) => [key, Object.values(records)]),
));
