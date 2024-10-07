import Table from "../components/Table";

function TablePage() {
  const tableContent = [
    { name: "Orange", color: "bg-orange-400", quantity: 5 },
    { name: "Apple", color: "bg-red-700", quantity: 3 },
    { name: "Banana", color: "bg-yellow-300", quantity: 12 },
    { name: "Lime", color: "bg-green-400", quantity: 4 },
  ];

  return (
    <div>
      <Table data={tableContent} />
    </div>
  );
}

export default TablePage;
