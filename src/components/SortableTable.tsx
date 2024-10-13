import useSort from "../hooks/use-sort";
import Table from "./Table";
import {
  LiaSortDownSolid,
  LiaSortUpSolid,
  LiaSortSolid,
} from "react-icons/lia";

function SortableTable(props: TableProp<Fruit>) {
  const { data, config } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  function makeIcon(label: number | string) {
    if (label !== sortBy || sortOrder === null) {
      return (
        <div>
          <LiaSortSolid />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <LiaSortUpSolid />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <LiaSortDownSolid />
        </div>
      );
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-zinc-200"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {column.label}
            {makeIcon(column.label)}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
