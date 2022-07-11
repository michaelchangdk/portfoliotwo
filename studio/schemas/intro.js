export default {
  name: "intro",
  title: "Intro",
  type: "document",
  __experimental_actions: [/*"create",*/ "update", "delete", "publish"],
  fields: [
    {
      name: "title",
      title: "Intro Title",
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
  ],
};
