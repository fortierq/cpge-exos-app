import * as React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { attributes, translate } from "../lib/constants";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ setSelectedOptions }) => {
  const [selects, setSelects] = React.useState({});

  function change(attribute) {
    return (_, value) =>
      setSelectedOptions((options) => {
        const a = { ...options, [attribute]: value };
        if (value.length == 0) {
          delete a[attribute];
        }
        return a;
      });
  }

  React.useEffect(
    () =>
      (async () => {
        const ans = await fetch(`api/attributes`);
        setSelects(await ans.json());
      })(),
    []
  );

  return (
    <Stack spacing={1.5}>
      {attributes.map((attribute) => {
        if (!(attribute in selects)) return;
        const options = selects[attribute].map((e) => e.name);
        return (
          <Autocomplete
            disableCloseOnSelect
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {translate(option)}
              </li>
            )}
            options={options}
            onChange={change(attribute)}
            multiple
            renderInput={(params) => (
              <TextField {...params} label={translate(attribute)} />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={translate(option)} {...getTagProps({ index })} />
              ))
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          ></Autocomplete>
        );
      })}
    </Stack>
  );
};
