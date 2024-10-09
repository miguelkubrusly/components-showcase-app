import { Fragment, useState } from "react";
import Table from "./Table";

function SortableTable({
  data,
  config,
  onSort,
  keyFn,
}: SortableTableProp<Fruit>) {
  const [sortOrder, setSortOrder] = useState(0);

  const sortsColumn = (sortingMethod: (a: Fruit, b: Fruit) => number) => {
    if (sortOrder === 0) {
      setSortOrder(1);
      onSort(data);
      return;
    }
    const newData = [...data].sort((a, b) => {
      return sortOrder * sortingMethod(a, b);
    });
    const nextOrder = sortOrder === 1 ? -1 : 1;
    setSortOrder(nextOrder);
    onSort(newData);
  };

  const sortableColumns = config.map((column) => {
    if (column.sort) {
      column.header = (
        <th key={column.label} onClick={() => sortsColumn(column.sort!)}>
          {column.label}
        </th>
      );
      return column;
    }
    return column;
  });

  return <Table data={data} config={sortableColumns} keyFn={keyFn} />;
}
export default SortableTable;
