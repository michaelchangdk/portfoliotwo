export default {
  name: "allprojects",
  title: "All Projects Section",
  type: "document",
  __experimental_actions: [/*"create",*/ "update", /*"delete",*/ "publish"],
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "color",
      title: "Header color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "allprojects",
      title: "All projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
    },
  ],
};
