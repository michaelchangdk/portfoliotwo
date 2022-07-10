import React from "react";
import { motion } from "framer-motion";
// Function imports
import { FetchSection } from "../../services/clientFunctions";
import { SortTable } from "../../helpers/functions";
// Component Import
import Window from "../../components/Window";
// Styling and Asset Imports
import styled from "styled-components/macro";
import { SpaceBetween } from "../../styles/global";
import { FileTrayFull } from "@styled-icons/ionicons-solid/FileTrayFull";
// import { ExternalLink } from "@styled-icons/heroicons-outline/ExternalLink";
// import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { TriangleDown } from "@styled-icons/octicons/TriangleDown";
import { TriangleUp } from "@styled-icons/octicons/TriangleUp";
// Query Declaration
const query = `*[_type == "allprojects" && !(_id in path('drafts.**'))] {allprojects[]->, title, color}`;

const { format } = require("date-fns");

const AllProjects = (constraintsRef) => {
  const [loading, data] = FetchSection(query);
  const [
    sortedProjects,
    sortByDate,
    sortByTitle,
    titleSelect,
    titleSort,
    dateSelect,
    dateSort,
  ] = SortTable(loading, data);

  return (
    <Window
      title={!loading ? data[0].title : ""}
      navcolor="deeppink"
      constraintsRef={constraintsRef}
      icon={FileTrayFull}
      allowMaximize={true}
    >
      <BorderScrollDiv>
        <FileTable>
          <thead>
            <tr>
              <TableHeader>
                <TableHeaderButton
                  onClick={() => sortByTitle()}
                  selected={titleSelect}
                  pointer="cursor"
                >
                  <SpaceBetween>
                    Project Name
                    {titleSelect && titleSort ? <DownArrow /> : ""}
                    {titleSelect && !titleSort ? <UpArrow /> : ""}
                  </SpaceBetween>
                </TableHeaderButton>
              </TableHeader>
              <TableHeader>
                <TableHeaderButton
                  onClick={sortByDate}
                  selected={dateSelect}
                  pointer="cursor"
                >
                  <SpaceBetween>
                    Date
                    {dateSelect && dateSort ? <DownArrow /> : ""}
                    {dateSelect && !dateSort ? <UpArrow /> : ""}
                  </SpaceBetween>
                </TableHeaderButton>
              </TableHeader>
              {/* <TableHeader>
                <TableHeaderButton>Tags</TableHeaderButton>
              </TableHeader>
              <TableHeader>
                <TableHeaderButton>File</TableHeaderButton>
              </TableHeader>
              <TableHeader>
                <TableHeaderButton>View</TableHeaderButton>
              </TableHeader> */}
            </tr>
          </thead>
          <TableBody>
            {!loading &&
              sortedProjects.map((project) => (
                <TableDataRow key={project._id} layout>
                  <TableData>
                    <EmojiSpan>{project.emoji}</EmojiSpan> {project.title}
                  </TableData>
                  <TableData>
                    {format(new Date(project.published), "dd.MM.yy")}
                  </TableData>
                  {/* <TableData>
                    <P weight={300} size="14px">
                      {joinString(project.stack)}
                    </P>
                  </TableData>
                  <TableData>
                    <GithubIcon />
                  </TableData>
                  <TableData>
                    <LiveIcon />
                  </TableData> */}
                </TableDataRow>
              ))}
          </TableBody>
        </FileTable>
      </BorderScrollDiv>
    </Window>
  );
};

export default AllProjects;

const BorderScrollDiv = styled.div`
  border: 1px solid #343a40;
  background-color: #ced4da;
  /* overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  max-height: 70vh;
  overscroll-behavior: none; */
`;

const FileTable = styled.table`
  width: 100%;
  text-align: left;
  font-family: "Prompt", sans-serif;
  font-weight: 300;
  font-size: 14px;
  background-color: #f8f9fa;
`;

const TableHeader = styled.th`
  position: sticky;
  top: 0;
`;

const TableDataRow = styled(motion.tr)`
  :hover {
    font-weight: 400;
    cursor: pointer;
  }

  :active {
    font-weight: 400;
    cursor: pointer;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(206, 212, 218, 1) 100%
    );
  }
`;

const TableBody = styled.tbody`
  /* display: block;
  overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  height: 50vh;
  overscroll-behavior: none; */
`;

const TableHeaderButton = styled.button`
  width: 100%;
  padding: 4px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #343a40;
  text-align: left;
  font-family: "Prompt", sans-serif;
  font-weight: 400;
  font-size: 14px;
  background: rgb(255, 255, 255);
  background: ${(props) =>
    props.selected
      ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(158,202,219,1) 100%)"
      : "linear-gradient(180deg,rgba(255, 255, 255, 1) 0%,rgba(206, 212, 218, 1) 100%)"};
  color: #212529;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

const TableData = styled.td`
  padding: 4px 8px;
`;

const EmojiSpan = styled.span`
  font-size: 20px;
`;

const DownArrow = styled(TriangleDown)`
  height: 16px;
  width: 16px;
`;

const UpArrow = styled(TriangleUp)`
  height: 16px;
  width: 16px;
`;

// const GithubIcon = styled(GithubOutline)`
//   width: 20px;
//   height: 20px;
//   color: #212529;
// `;

// const LiveIcon = styled(ExternalLink)`
//   width: 20px;
//   height: 20px;
//   color: #212529;
// `;
