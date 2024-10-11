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
    label: string;
    render: (item: T) => React.ReactNode;
    sortValue?: (item: T) => string | number;
    header?: () => React.ReactNode;
  };

  type TableProp<T> = {
    data: T[];
    config: TableConfig<T>[];
    keyFn: (item: T) => string | number;
  };

  type SortableTableProps<T> = {
    data: T[];
    config: TableConfig<T>[];
    keyFn: (item: T) => string | number;
  };

  type ArrayUnion<T extends readonly number[]> = T[number];
}

export {};
