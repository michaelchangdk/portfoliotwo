import React from "react";
import { FetchSection } from "../../services/clientFunctions";
// Component Import
import Window from "../../components/Window";
import AccordionTree from "../../components/AccordionTree";
// Styling & Asset Imports
import { List } from "@styled-icons/entypo/List";
// Query Declaration
const query = `*[_type == "tech" && !(_id in path('drafts.**'))]`;

const Tech = (constraintsRef) => {
  const [loading, data] = FetchSection(query);

  return (
    <>
      {!loading && (
        <Window
          title={!loading && data[0].title}
          navcolor="blue"
          constraintsRef={constraintsRef}
          icon={List}
          allowMaximize={false}
        >
          <AccordionTree title="MAIN" defaultOpen={true} parent={true}>
            {!loading &&
              data[0].stack.map((item) => (
                <AccordionTree
                  title={item.category}
                  key={item._key}
                  items={item.items}
                />
              ))}
          </AccordionTree>
        </Window>
      )}
    </>
  );
};

export default Tech;
