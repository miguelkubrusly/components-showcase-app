import { ChangeEvent, useState } from "react"

function Dropdown({ options }: OptionsProp) {
  const setValue = useState<string | undefined>(undefined)[1]

  const renderedOptions = options.map((option: Option) => {
    return (
      <option value={option.value}>{option.label}</option>
    )
  })

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <select onChange={handleChange}>
        {renderedOptions}
      </select>
    </div>
  )
}

export default Dropdown