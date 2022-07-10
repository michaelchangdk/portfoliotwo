import { useState, useEffect } from "react";

// Used in Featured
export const tagsFeaturing = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      string += ` & ${array[i]}`;
    } else if (i === array.length - 2) {
      string += `${array[i]}`;
    } else if (i !== array.length - 1 && i !== 0) {
      string += `${array[i]}, `;
    } else if (i === 0) {
      string += `${array[i]} feat. `;
    }
  }
  return string;
};

// Used in AllProjects
export const joinString = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      string += `${array[i]}`;
    } else {
      string += `${array[i]}, `;
    }
  }
  return string;
};

// Used in AllProjects
export const SortTable = (loading, data) => {
  const [sortedProjects, setSortedProjects] = useState([]);
  const [titleSort, setTitleSort] = useState(false);
  const [titleSelect, setTitleSelect] = useState(false);
  const [dateSort, setDateSort] = useState(true);
  const [dateSelect, setDateSelect] = useState(true);

  useEffect(() => {
    if (!loading) {
      setSortedProjects(data[0].allprojects);
    }
  }, [loading, data]);

  const sortByDate = () => {
    if (dateSort) {
      setSortedProjects((project) => [
        ...project.sort((a, b) => (a.published > b.published ? 1 : -1)),
      ]);
      setDateSort(false);
      setDateSelect(true);
      setTitleSelect(false);
      setTitleSort(false);
    } else if (!dateSort) {
      setSortedProjects((project) => [
        ...project.sort((a, b) => (a.published > b.published ? -1 : 1)),
      ]);
      setDateSort(true);
      setDateSelect(true);
      setTitleSelect(false);
      setTitleSort(false);
    }
  };

  const sortByTitle = () => {
    if (!titleSort) {
      setSortedProjects((project) => [
        ...project.sort((a, b) => (a.title > b.title ? 1 : -1)),
      ]);
      setTitleSort(true);
      setTitleSelect(true);
      setDateSelect(false);
      setDateSort(false);
    } else if (titleSort) {
      setSortedProjects((project) => [
        ...project.sort((a, b) => (a.title > b.title ? -1 : 1)),
      ]);
      setTitleSort(false);
      setTitleSelect(true);
      setDateSelect(false);
      setDateSort(false);
    }
  };

  return [
    sortedProjects,
    sortByDate,
    sortByTitle,
    titleSelect,
    titleSort,
    dateSelect,
    dateSort,
  ];
};
