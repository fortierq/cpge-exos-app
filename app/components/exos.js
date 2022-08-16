import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { url } from "../lib/constants";

export default ({ exos }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <div>
      {exos.map(({ name, path }) => {
        const src = `${url}/${path}/${path.substring(
          path.lastIndexOf("/") + 1
        )}.png`;
        return (
          <Accordion expanded={expanded === path} onChange={handleChange(path)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "rgba(0, 0, 0, .02)",
              }}
            >
              {name}
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
