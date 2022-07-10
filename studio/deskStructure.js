import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Portfolio")
    .items([
      S.listItem()
        .title("Bio")
        .child(
          S.editor()
            .schemaType("bio")
            .documentId("4c2ca52d-a928-41bb-a1d0-312cb225cd9c")
        ),
      S.listItem()
        .title("Skills & Exp")
        .child(
          S.editor()
            .schemaType("tech")
            .documentId("f4194196-873c-443e-a3a6-ae05fa1b09b3")
        ),
      S.listItem()
        .title("Featured Projects")
        .child(
          S.editor()
            .schemaType("featuredprojects")
            .documentId("a56489e6-1c8f-483c-a0e1-2a80ffbbe794")
        ),
      S.listItem()
        .title("All Projects")
        .child(
          S.editor()
            .schemaType("allprojects")
            .documentId("84d4a27f-f0fe-4d02-838f-7c08a2acada2")
        ),
      S.listItem()
        .title("Projects")
        .schemaType("projects")
        .child(S.documentTypeList("projects").title("Projects")),
      // S.listItem()
      //   .title("Test")
      //   .child(S.document().schemaType("teampage").documentId("teampage")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "bio",
            "tech",
            "featuredprojects",
            "allprojects",
            "projects",
          ].includes(listItem.getId())
      ),
    ]);
