export enum DirectiveEnum {
  AUTH = "AUTH",
  CASCADE = "CASCADE",
  CUSTOM = "CUSTOM",
  DEPRECATED = "DEPRECATED",
  DGRAPH = "DGRAPH",
  GENERATE = "GENERATE",
  HAS_INVERSE = "HAS_INVERSE",
  ID = "ID",
  INCLUDE = "INCLUDE",
  LAMBDA = "LAMBDA",
  LAMBDA_ON_MUTATE = "LAMBDA_ON_MUTATE",
  REMOTE = "REMOTE",
  REMOTE_RESPONSE = "REMOTE_RESPONSE",
  SEARCH = "SEARCH",
  SECRET = "SECRET",
  SKIP = "SKIP",
  WITH_SUBSCRIPTION = "WITH_SUBSCRIPTION",
}

export const DirectiveLabelMap = {
  [DirectiveEnum.AUTH]: "AUTH",
  [DirectiveEnum.CASCADE]: "CASCADE",
  [DirectiveEnum.CUSTOM]: "CUSTOM",
  [DirectiveEnum.DEPRECATED]: "DEPRECATED",
  [DirectiveEnum.DGRAPH]: "DGRAPH",
  [DirectiveEnum.GENERATE]: "GENERATE",
  [DirectiveEnum.HAS_INVERSE]: "HAS_INVERSE",
  [DirectiveEnum.ID]: "ID",
  [DirectiveEnum.INCLUDE]: "INCLUDE",
  [DirectiveEnum.LAMBDA]: "LAMBDA",
  [DirectiveEnum.LAMBDA_ON_MUTATE]: "LAMBDA_ON_MUTATE",
  [DirectiveEnum.REMOTE]: "REMOTE",
  [DirectiveEnum.REMOTE_RESPONSE]: "REMOTE_RESPONSE",
  [DirectiveEnum.SEARCH]: "SEARCH",
  [DirectiveEnum.SECRET]: "SECRET",
  [DirectiveEnum.SKIP]: "SKIP",
  [DirectiveEnum.WITH_SUBSCRIPTION]: "WITH_SUBSCRIPTION",
};

export interface Directive {
  __type: DirectiveEnum;
}
