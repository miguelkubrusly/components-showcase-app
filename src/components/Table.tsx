import { Fragment } from "react";

function Table({ data, config, keyFn }: TableProp<Fruit>) {
  const rendersData = (item: Fruit) => {
    return (
      <tr className="border-b border-gray-300" key={keyFn(item)}>
        {config.map((column, index) => {
          return (
            <td
              className="py-3 px-4 text-center align-middle"
              key={`${keyFn(item)}-${index}`}
            >
              {column.render(item)}
            </td>
          );
        })}
      </tr>
    );
  };

  const renderedData = data.map((item) => rendersData(item));

  const renderedLabels = config.map((configItem) => {
    if (configItem.header && configItem.sort) {
      return <Fragment key={configItem.label}>{configItem.header}</Fragment>;
    }
    return <th key={configItem.label}>{configItem.label}</th>;
  });

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
