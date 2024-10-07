function Table({ data }: TableProp) {
  const renderedData = data.map((item: TableItem) => {
    const renderedItem = Object.values(item).map((value) => {
      return <td>{value}</td>;
    });
    return <tr>{renderedItem}</tr>;
  });

  const keys = Object.keys(data[0]);
  const renderedKeys = keys.map((key) => {
    return <th>{key}</th>;
  });

  return (
    <table>
      <thead>
        <tr>{renderedKeys}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;
