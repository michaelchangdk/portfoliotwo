import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import intro from "./intro";
import bio from "./bio";
import tech from "./tech";
import projects from "./projects";
import featuredprojects from "./featuredprojects";
import allprojects from "./allprojects";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    intro,
    bio,
    tech,
    projects,
    featuredprojects,
    allprojects,
  ]),
});
