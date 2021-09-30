import { GQLType, GQLTypeEnum } from "..";
import { schemaMap } from "../../../registry";

export interface ObjectTypeProps {
  name?: string;
  schemaKey?: string;
}
// class decorator
export const ObjectType = (props?: ObjectTypeProps) => {
  return <T extends GQLType>(c: T) => {
    c.__name = props?.name || c.name;
    c.__type = GQLTypeEnum.OBJECT;
    c.__schemaKey = props?.schemaKey || ;
    schemaMap.default.push(c);
    //
  };
};
