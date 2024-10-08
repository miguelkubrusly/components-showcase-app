function Table({ data, config }: TableProp<Fruit>) {
  const renderedLabels = config.map((configItem, index) => (
    <th key={index}>{configItem.label}</th>
  ));

  const renderData = (item: Fruit) => {
    return (
      <tr className="border-b border-gray-300" key={String(item)}>
        {config.map((column, index) => {
          return (
            <td className="py-3 px-4 text-center align-middle" key={index}>
              {column.render(item)}
            </td>
          );
        })}
      </tr>
    );
  };

  const renderedData = data.map((item) => renderData(item));

  return (
    <table className="table-auto border-spacing-6">
      <thead>
        <tr className="border-b-2 border-black">{renderedLabels}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;
