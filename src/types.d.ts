import React from "react";

declare global {
  //Button
  type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<{
      outline: boolean;
      rounded: boolean;
      children: React.ReactNode;
      className: string;
    }> &
    Partial<
      Exclusive<
        ["primary", "secondary", "success", "warning", "danger"],
        boolean
      >
    >;

  //Accordion
  interface AccordionItem {
    id: number;
    label: string;
    content: string;
  }
  type AccordionItemsProp = MapObject<AccordionItem, items[number]>;

  //Dropdown
  interface Option {
    value: string | number;
    label: string;
  }
  type OptionsProp = MapObject<Option, options[number]>;
  interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    options: OptionsProp;
    value: string | null;
    onChange: (newChoice: string) => void;
  }

  //Panel

  type PanelProps = Partial<{
    children: React.ReactNode;
    className: string;
    [key: string]: React.ComponentProps<any>;
  }>;

  //Navigation
  type NavigationProviderProps = { children: React.ReactNode };

  type NavigationContextValues = {
    navigate: (to: string) => void;
    currentPath: string;
  };
  type RouterProps = { path: string; children: JSX.Element };

  type LinkProps = {
    children: React.ReactNode;
    to: string;
    className?: string;
    activeClassName?: string;
  };
}

export {};
