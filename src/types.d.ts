declare global {


  type ExcludeFromObject<T extends any[], U> = {
    [K in keyof T]: T[K] extends U ? never : T[K]
  }[number]

  type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E ? E extends string ? Record<E, U> & { [k in ExcludeFromObject<T, E>]?: never } : never : never

  type MapObject<T, O extends object> = {
    [K in keyof O]: T
  }

  interface AccordionItem {
    id: number;
    label: string;
    content: string
  }

  type AccordionItemsProp = MapObject<AccordionItem, items>

  type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<{
      outline: boolean;
      rounded: boolean;
      children: React.ReactNode;
      className: string
    }> & Partial<Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>>
}

export { }