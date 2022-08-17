import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { url } from "../lib/constants";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

export default ({ exos }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false);

  const [value, setValue] = React.useState(0);

  const changeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      {exos.map(
        (e: { name: string; path: string; exercise_subject: string }) => {
          console.log(e);
          const src = `${url}/${e.path}/${e.path.substring(
            e.path.lastIndexOf("/") + 1
          )}.png`;
          return (
            <Accordion
              disableGutters
              expanded={expanded === e.path}
              onChange={handleChange(e.path)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: "rgba(0, 0, 0, .025)",
                }}
              >
                {e.name}
                <Box sx={{ paddingX: 2 }} />
                <Chip
                  clickable
                  label="graphe"
                  variant="outlined"
                  size="small"
                  sx={{ color: "text.secondary" }}
                />
                <Box sx={{ paddingX: 0.5 }} />
                <Chip
                  clickable
                  label="liste"
                  variant="outlined"
                  size="small"
                  sx={{ color: "text.secondary" }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={changeTabs}
                      aria-label="basic tabs example"
                      sx={{
                        bgcolor: "rgba(0, 0, 0, .025)",
                      }}
                    >
                      <Tab label="Énoncé" />
                      <Tab label="Solution" />
                      <Tab label="LaTeX" />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <img src={src} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        }
      )}
    </div>
  );
};
