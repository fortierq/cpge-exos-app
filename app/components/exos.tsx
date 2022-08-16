import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { url } from "../lib/constants";

export default ({ exos }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false);

  return (
    <div>
      {exos.map((e: { name: string; path: string }) => {
        const src = `${url}/${e.path}/${e.path.substring(
          e.path.lastIndexOf("/") + 1
        )}.png`;
        return (
          <Accordion
            expanded={expanded === e.path}
            onChange={handleChange(e.path)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "rgba(0, 0, 0, .02)",
              }}
            >
              {e.name}
            </AccordionSummary>
            <AccordionDetails>
              <img src={src} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
