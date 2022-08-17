import * as React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
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
      console.log("change", selected);
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
      setOptions(data);
    })();
  }, []);

  return (
    <Stack spacing={1.5}>
      {attributes.map((attribute) => {
        return (
          <Autocomplete
            disableCloseOnSelect
            renderOption={(props, option: string, { selected }) => (
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
            filterOptions={createFilterOptions({
              matchFrom: "start",
              stringify: translate,
            })}
            autoHighlight={true}
            options={options[attribute] ?? []}
            onChange={change(attribute)}
            multiple
            renderInput={(params) => (
              <TextField {...params} label={translate(attribute)} />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option: string, index) => (
                <Chip label={translate(option)} {...getTagProps({ index })} />
              ))
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: string) => (
                  <Chip key={value} label={"aa"} />
                ))}
              </Box>
            )}
          ></Autocomplete>
        );
      })}
    </Stack>
  );
};
