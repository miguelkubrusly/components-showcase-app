function Table({ data }: TableProp) {
  //specific for fruits
  const renderedColors = data.map((item) => {
    return `p-3 m-2 ${item.color}`;
  });

  //generalization
  const renderedData = data.map((item: TableItem, index) => {
    const renderedItem = Object.entries(item).map(([key, value]) => {
      return key === "color" ? (
        <div
          className={`w-8 h-8 ${renderedColors[index]} mx-auto`}
          key={value}
        ></div>
      ) : (
        <td className="py-6 px-3 text-center align-middle" key={value}>
          {value}
        </td>
      );
    });
    return (
      <tr className="border-b border-gray-300" key={item.name}>
        {renderedItem}
      </tr>
    );
  });

  const keys = Object.keys(data[0]);
  const renderedKeys = keys.map((key) => {
    const capitalizedKey =
      key.slice(0, 1).toLocaleUpperCase() + key.slice(1).toLocaleLowerCase();
    return (
      <th key={key} className="px-6 py-3 text-gray-800">
        {capitalizedKey}
      </th>
    );
  });

  return (
    <table className="table-auto border-spacing-6">
      <thead>
        <tr className="border-b-2 border-black">{renderedKeys}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;
