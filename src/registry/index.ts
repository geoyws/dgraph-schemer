import { GQLType } from "../decorators/type";

export const _defaultSchemaKey = "default";

export interface SchemaMap {
  [_defaultSchemaKey]: GQLType[];
  [key: string]: GQLType[];
}

export const schemaMap: SchemaMap = {
  default: [],
};

export class MainRegistry {
  // list of all types have to be put here
  constructor(public schemaMap: SchemaMap) {}
}
