export default {
  name: "tech",
  title: "Tech Stack Page",
  type: "document",
  __experimental_actions: [/*"create",*/ "update", /*"delete",*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "color",
      title: "Header color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              title: "Category",
              type: "string",
            },
            {
              name: "items",
              title: "Items",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
