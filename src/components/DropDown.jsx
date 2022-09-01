import { MenuItem, TextField } from "@mui/material";

/**
 *
 * Muestra las opciones en formato dropdown
 * @param {Object[]} options - opciones en dropdown, con formato "value" y "label"
 * @param {string} options[].value - Valor.
 * @param {string} options[].label - Etiqueta.
 */

export const Dropdown = ({ valueByDefault, handleChange, options, label }) => {
  console.log(options);
  return (
    <TextField
      id="filter"
      name="filter"
      fullWidth
      select
      label={label}
      value={valueByDefault}
      onChange={handleChange}
      size="small"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {console.log(option)}
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
