import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Exo from "./exo";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { translate } from "../lib/constants";
import Stack from "@mui/material/Stack";
import { Typography } from "../node_modules/@mui/material/index";

export default ({ exos }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_, isExpanded: boolean) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <div>
      {exos.map((exo: { name: string; path: string; exercise_subject }) => {
        return (
          <Accordion
            sx={{
              border: 1,
              borderColor: "grey.500",
            }}
            disableGutters
            expanded={expanded === exo.path}
            onChange={handleChange(exo.path)}
            key={exo.path}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                bgcolor: "rgba(0, 0, 0, .02)",
              }}
            >
              <Typography>{exo.name}</Typography>
              <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
                {exo.exercise_subject.map(({ subject_name }) => (
                  <Chip
                    label={translate(subject_name)}
                    variant="outlined"
                    size="small"
                    sx={{ color: "text.secondary" }}
                    key={`${exo.path}_${subject_name}`}
                  />
                ))}
              </Stack>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                p: 0,
              }}
            >
              <Exo exo={exo} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
