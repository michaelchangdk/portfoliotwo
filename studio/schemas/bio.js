export default {
  name: "bio",
  title: "Bio",
  type: "document",
  __experimental_actions: [/*"create",*/ "update", "delete", "publish"],
  fields: [
    {
      name: "title",
      title: "Component Title",
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
      name: "image",
      title: "Profile Image",
      type: "image",
      description: "Make sure the image is square",
    },
    {
      name: "header",
      title: "Header text",
      type: "string",
    },
    {
      name: "sentences",
      title: "Sentences",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "resume",
      title: "PDF resume",
      type: "file",
    },
  ],
};
