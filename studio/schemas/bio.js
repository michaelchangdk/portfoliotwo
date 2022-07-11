export default {
  name: "bio",
  title: "Bio",
  type: "document",
  __experimental_actions: [/*"create",*/ "update", "delete", "publish"],
  fields: [
    { name: "title", title: "Bio Title", type: "string" },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      description: "Make sure the image is square",
    },
    {
      name: "about",
      title: "About me blurb",
      type: "array",
      of: [
        {
          type: "text",
        },
      ],
    },
  ],
};
