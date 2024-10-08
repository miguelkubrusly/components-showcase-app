declare global {
  type ExcludeFromObject<T extends any[], U> = {
    [K in keyof T]: T[K] extends U ? never : T[K];
  }[number];

  type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
    ? E extends string
      ? Record<E, U> & { [k in ExcludeFromObject<T, E>]?: never }
      : never
    : never;

  type MapObject<T, O extends object> = {
    [K in keyof O]: T;
  };

  type TableConfig<T> = {
    label: string | number | null;
    render: (item: T) => React.ReactNode;
    sort?: (a: T, b: T) => number;
    header?: React.JSX;
    index?: number;
  };

  type TableProp<T> = {
    data: T[];
    config: TableConfig<T>[];
    keyFn: (item: T) => string | number;
  };

  type SortableTableProp<T> = {
    currentData: T[];
    originalData: T[];
    config: TableConfig<T>[];
    onSort: (newData: Fruit[]) => void;
    keyFn: (item: T) => string | number;
  };

  type ArrayUnion<T extends readonly number[]> = T[number];
}

export {};
