import { schemaMap, MainRegistry } from "./registry";

export class DgraphSchemer {
  constructor(public mainRegistry?: MainRegistry) {
    if (!mainRegistry) {
      mainRegistry = new MainRegistry(schemaMap);
    }
  }

  getSchema() {
    // return a string of the entire schema basically
  }
}
