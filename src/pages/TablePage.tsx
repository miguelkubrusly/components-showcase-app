import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const tableContent: Fruit[] = [
    { name: "Orange", color: "bg-orange-400", quantity: 5 },
    { name: "Apple", color: "bg-red-700", quantity: 3 },
    { name: "Banana", color: "bg-yellow-300", quantity: 12 },
    { name: "Lime", color: "bg-green-400", quantity: 4 },
  ];

  const tableConfig: TableConfig<Fruit>[] = [
    {
      label: "Name",
      render: (item: Fruit) => item.name,
      sortValue: (item: Fruit) => item.name,
    },
    {
      label: "Color",
      render: (item: Fruit) => (
        <div className={`w-8 h-8 ${item.color} mx-auto`}></div>
      ),
    },
    {
      label: "Quantity",
      render: (item: Fruit) => item.quantity,
      sortValue: (item: Fruit) => item.quantity,
    },
  ];

  const keyFn = (item: Fruit) => item.name;

  return (
    <div>
      {/* <Table currentData={tableContent} config={tableConfig} keyFn={keyFn} /> */}
      <SortableTable data={tableContent} config={tableConfig} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
