import { useState } from "react";
import Table from "./Table";

function SortableTable({ data, config, keyFn }: TableProp<Fruit>) {
  const [isAscendent, setIsAscendent] = useState<boolean | null>(null);
  const [currentData, setCurrentData] = useState<Fruit[]>(data);
  const [column, setColumn] = useState<number | null>(null);

  const sorts = (index: number, sortingMethod: boolean | null) => {
    const configItem = config[index];
    if (!configItem.sort) {
      return currentData;
    } else if (sortingMethod === null) {
      return data;
    }
    const sortMultiplier = sortingMethod ? 1 : -1;
    const sortingConfig = configItem.sort;
    const sortedData = currentData.sort((a, b) => {
      return sortMultiplier * sortingConfig(a, b);
    });

    return sortedData;
  };
  const ordersData = () => {
    const orderedData = sorts(column!, isAscendent);
    setCurrentData(orderedData);
    const nextMethod = isAscendent
      ? false
      : isAscendent === false
      ? null
      : true;
    setIsAscendent(nextMethod);
  };

  const createsHeader = () => {
    const item = config[column!];
    item.header = (
      <th key={item.label} onClick={handleClick}>
        {item.label}
      </th>
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    const columnIndex = event.currentTarget.cellIndex;
    setColumn(columnIndex);
    if (columnIndex !== column) {
      setIsAscendent(null);
    }
    createsHeader();
    ordersData();
  };

  return <Table data={currentData} config={config} keyFn={keyFn} />;
}
export default SortableTable;
