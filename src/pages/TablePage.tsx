import Table from "../components/Table";

function TablePage() {
  const tableContent = [
    { name: "Orange", color: "bg-orange-500", quantity: 5 },
    { name: "Apple", color: "bg-red-500", quantity: 3 },
    { name: "Banana", color: "bg-yellow-500", quantity: 12 },
    { name: "Lime", color: "bg-green-500", quantity: 4 },
  ];

  return (
    <div>
      <Table data={tableContent} />
    </div>
  );
}

export default TablePage;
