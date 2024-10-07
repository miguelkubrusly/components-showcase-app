function Table({ data }: TableProp) {
  //specific for fruits
  const renderedColors = data.map((item) => {
    return `p-3 m-2 ${item.color}`;
  });

  //generalization
  const renderedData = data.map((item: TableItem, index) => {
    const renderedItem = Object.entries(item).map(([key, value]) => {
      return key === "color" ? (
        <div className={renderedColors[index]} key={value}></div>
      ) : (
        <td className="p-3" key={value}>
          {value}
        </td>
      );
    });
    return (
      <tr className="border-b" key={item.name}>
        {renderedItem}
      </tr>
    );
  });

  const keys = Object.keys(data[0]);
  const renderedKeys = keys.map((key) => {
    return <th key={key}>{key}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedKeys}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;
