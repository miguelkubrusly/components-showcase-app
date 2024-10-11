import { useEffect, useState } from "react";
import Table from "./Table";

const validNumbers = [-1, 0, 1] as const;
type SortOrderInput = (typeof validNumbers)[number];

function SortableTable({
  currentData,
  originalData,
  config,
  onSort,
  keyFn,
}: SortableTableProp<Fruit>) {
  const [sortOrder, setSortOrder] = useState<SortOrderInput>(0);
  const [activeColumn, setActiveColumn] = useState(0);

  // useEffect(() => {
  //   setSortOrder(0);
  // }, [activeColumn]);

  const sortsColumn = (
    sortingMethod: (a: Fruit, b: Fruit) => number,
    columnIndex: number
  ) => {
    if (activeColumn !== columnIndex) {
      setActiveColumn(columnIndex);
      setSortOrder(0);
    }

    if (sortOrder === -1) {
      onSort([...originalData]);
      setSortOrder(0);
      return;
    }
    const newData = [...currentData].sort((a, b) => {
      return sortingMethod(a, b);
    });

    if (sortOrder === 0) {
      onSort(newData);
      setSortOrder(1);
    } else if (sortOrder === 1) {
      onSort(newData.reverse());
      setSortOrder(-1);
    }
  };

  const handleClick = (column: number) => {
    sortsColumn(config[column].sort!, column);

    console.log("columns: ", column, activeColumn);
    console.log("handleClick sort order: ", sortOrder);
    console.log(currentData);
  };

  const updatedConfig = config.map((column, index) => {
    let sortIcon: string = "";
    if (activeColumn === index) {
      console.log(
        "should be the same when consecutive: ",
        activeColumn,
        index,
        "should be zero on change (active column sort order): ",
        sortOrder
      );
      switch (sortOrder) {
        case 1:
          sortIcon = "ascending";
          break;
        case 0:
          sortIcon = "null";
          break;
        case -1:
          sortIcon = "descending";
          break;
        default:
          throw Error("sort order has an invalid value");
      }
    }
    if (column.sort) {
      column.header = (
        <th key={column.label} onClick={() => handleClick(index)}>
          {column.label}
          {sortIcon}
        </th>
      );
      return column;
    }
    return column;
  });

  return <Table data={currentData} config={updatedConfig} keyFn={keyFn} />;
}
export default SortableTable;
