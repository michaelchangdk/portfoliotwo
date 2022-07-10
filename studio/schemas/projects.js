export default {
  name: "projects",
  title: "Projects",
  type: "document",
  __experimental_actions: ["create", "update", "delete", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "emoji",
      title: "Emoji icon",
      type: "string",
      description: "Just one emoji!",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Make sure the image is square",
    },
    { name: "shortDescription", title: "Short Description", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "published", title: "Published", type: "datetime" },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "github",
      title: "Github link",
      type: "url",
    },
    {
      name: "live",
      title: "Live link",
      type: "url",
    },
  ],
};
