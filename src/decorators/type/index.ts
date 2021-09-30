export enum GQLTypeEnum {
  DIRECTIVE = "DIRECTIVE",
  ENUM = "ENUM",
  INPUT = "INPUT",
  INTERFACE = "INTERFACE",
  OBJECT = "OBJECT",
  SCALAR = "SCALAR",
  SCHEMA = "SCHEMA",
  UNION = "UNION",
}

export const GQLTypeLabelMap = {
  [GQLTypeEnum.DIRECTIVE]: "directive",
  [GQLTypeEnum.ENUM]: "enum",
  [GQLTypeEnum.INPUT]: "input",
  [GQLTypeEnum.INTERFACE]: "interface",
  [GQLTypeEnum.OBJECT]: "object",
  [GQLTypeEnum.SCALAR]: "scalar",
  [GQLTypeEnum.SCHEMA]: "schema",
  [GQLTypeEnum.UNION]: "union",
};

export interface GQLTypeMetadata {
  __type: GQLTypeEnum;
  __name: string;
}

export type GQLType = Function & GQLTypeMetadata;
