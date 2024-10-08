import Table from "../components/Table";

type Fruit = {
  name: string;
  color: string;
  quantity: number;
};

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
      sort: (a: Fruit, b: Fruit) => a.name.localeCompare(b.name),
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
      sort: (a: Fruit, b: Fruit) => a.quantity - b.quantity,
    },
  ];

  return (
    <div>
      <Table data={tableContent} config={tableConfig} />
    </div>
  );
}

export default TablePage;
