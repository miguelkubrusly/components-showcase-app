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
  const [sortOrder, setSortOrder] = useState<SortOrderInput>(0);

  const [activeColumn, setActiveColumn] = useState(-1);

  const sortsColumn = (sortingMethod: (a: Fruit, b: Fruit) => number) => {
    if (sortOrder === 0) {
      setSortOrder(1);
      onSort([...originalData]);
      return;
    }
    const newData = [...currentData].sort((a, b) => {
      return sortOrder * sortingMethod(a, b);
    });
    const nextOrder = sortOrder === 1 ? -1 : 0;
    setSortOrder(nextOrder);

    onSort(newData);
  };

  const handleClick = (columnIndex: number) => {
    if (activeColumn !== columnIndex) {
      setActiveColumn(columnIndex);
      setSortOrder(0);
    } else {
      switch (sortOrder) {
        case 1:
          setSortOrder(-1);
          break;
        case 0:
          setSortOrder(1);
          break;
        case -1:
          setSortOrder(0);
      }
    }

    sortsColumn(config[columnIndex].sort!);
  };

  const updatedConfig = config.map((column, index) => {
    if (column.sort) {
      column.header = (
        <th key={column.label} onClick={() => handleClick(index)}>
          {column.label}
        </th>
      );
      return column;
    }
    return column;
  });

  return <Table data={currentData} config={updatedConfig} keyFn={keyFn} />;
}
export default SortableTable;
