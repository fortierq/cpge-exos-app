import * as React from "react";
import Chip from "@mui/material/Chip";
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
            multiple
            autoHighlight
            filterOptions={createFilterOptions({
              matchFrom: "start",
              stringify: translate,
            })}
            options={options[attribute] ?? []}
            onChange={(_, selected: string[]) => {
              setSelectedOptions((options: Record<string, string[]>) => {
                options[attribute] = selected;
                return options;
              });
            }}
            renderInput={(params) => (
              <TextField {...params} label={translate(attribute)} />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option: string, index) => (
                <Chip label={translate(option)} {...getTagProps({ index })} />
              ))
            }
            key={attribute}
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
          ></Autocomplete>
        );
      })}
    </Stack>
  );
};
