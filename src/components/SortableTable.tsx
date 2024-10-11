import { useState } from "react";
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function SortableTable(props: TableProp<Fruit>) {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const { data, config } = props;

  const handleClick = (label: string) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-zinc-300"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {makeIcon(column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortBy && sortOrder) {
    const sortValue = config.find((column) => column.label === sortBy)!
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
  function makeIcon(label: number | string) {
    if (label !== sortBy || sortOrder === null) {
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoTriangleUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoTriangleDown />
        </div>
      );
    }
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
