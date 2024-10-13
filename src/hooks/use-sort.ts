import { useState } from "react";

function useSort(data: any[], config: any[]) {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const sorts = (label: string) => {
    if (label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortBy && sortOrder) {
    const sortValue = config.find((column: any) => column.label === sortBy)!
      .sortValue!;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "number" && typeof valueB === "number") {
        return (valueA - valueB) * reverseOrder;
      } else if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        throw Error(
          "Array items must be all the same type to be sorted, and should be either a string or a number."
        );
      }
    });
  }
  return {
    sortBy,
    sortOrder,
    sortedData,
    sorts,
  };
}

export default useSort;
