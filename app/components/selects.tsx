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
import { fetchJson } from "../lib/utils";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ setSelectedOptions }) => {
  const [options, setOptions] = React.useState({});

  function change(attribute: string) {
    return (_, selected: string[]) => {
      setSelectedOptions((options: Record<string, string[]>) => {
        if (selected.length != 0) {
          options[attribute] = selected;
        }
        return options;
      });
    };
  }

  React.useEffect(() => {
    (async () => {
      const data = await fetchJson(`/api/attributes`);
      const data_i18n = {};
      attributes.forEach((attribute) => {
        data_i18n[translate(attribute)] = data[attribute].map(
          (option: string) => translate(option)
        );
      });
      setOptions(data_i18n);
    })();
  }, []);

  return (
    <Stack spacing={1.5}>
      {Object.entries(options).map(([attribute, options]) => {
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
                {option}
              </li>
            )}
            options={options ?? []}
            onChange={change(attribute)}
            multiple
            renderInput={(params) => (
              <TextField {...params} label={attribute} />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
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
