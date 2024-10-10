import { useState } from "react";
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
  const [nextSortOrder, setNextSortOrder] = useState<SortOrderInput>(0);
  const [activeColumn, setActiveColumn] = useState(-1);

  const sortsColumn = (sortingMethod: (a: Fruit, b: Fruit) => number) => {
    if (nextSortOrder === 0) {
      onSort([...originalData]);
      setNextSortOrder(1);
      return;
    }
    const newData = [...currentData].sort((a, b) => {
      return nextSortOrder * sortingMethod(a, b);
    });
    setNextSortOrder(nextSortOrder === 1 ? -1 : 0);
    onSort(newData);
  };

  const handleClick = (columnIndex: number) => {
    if (activeColumn !== columnIndex) {
      setActiveColumn(columnIndex);
      setNextSortOrder(0);
    } else {
      switch (nextSortOrder) {
        case 1:
          setNextSortOrder(-1);
          break;
        case 0:
          setNextSortOrder(1);
          break;
        case -1:
          setNextSortOrder(0);
      }
    }
    sortsColumn(config[columnIndex].sort!);
  };

  const updatedConfig = config.map((column, index) => {
    let sortIcon: string = "";
    if (activeColumn === index) {
      console.log("sort order: ", nextSortOrder);
      switch (nextSortOrder) {
        case 1:
          sortIcon = "null";
          break;
        case 0:
          sortIcon = "descending";
          break;
        case -1:
          sortIcon = "ascending";
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
