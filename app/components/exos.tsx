import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Exo from "./exo";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

export default ({ exos }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_, isExpanded: boolean) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <div>
      {exos.map((exo: { name: string; path: string; exercise_subject }) => {
        console.log("exo", exo);
        return (
          <Accordion
            sx={{
              border: 1,
              "margin-bottom": "-1px",
              borderColor: "grey.500",
            }}
            disableGutters
            expanded={expanded === exo.path}
            onChange={handleChange(exo.path)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                bgcolor: "rgba(0, 0, 0, .02)",
              }}
            >
              {exo.name}
              <Box sx={{ paddingX: 2 }} />
              {exo.exercise_subject.map(({ subject_name }) => (
                <Chip
                  label={subject_name}
                  variant="outlined"
                  size="small"
                  sx={{ color: "text.secondary" }}
                />
              ))}
            </AccordionSummary>
            <AccordionDetails>
              <Exo exo={exo} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
