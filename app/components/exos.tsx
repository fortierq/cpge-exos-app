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

const url_exo = (path_relative: string, cor: boolean) => {
  const filename = path_relative.substring(path_relative.lastIndexOf("/") + 1);
  let path = `${url}/${path_relative}/${filename}`;
  if (cor) {
    path += "_cor";
  }
  return `${path}.png`;
};

export default ({ exos }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_, isExpanded: boolean) =>
    setExpanded(isExpanded ? panel : false);

  const [value, setValue] = React.useState(0);

  const changeTabs = (exo_path) => (_, newValue: number) => {
    if (newValue === 2) {
      window.open(`${url}/${exo_path}`, "_blank", "noopener,noreferrer");
    } else {
      setValue(newValue);
    }
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
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
          let url_exo_enonce = url_exo(e.path, false);
          return (
            <Accordion
              sx={{
                border: 1,
                "margin-bottom": "-1px",
                borderColor: "grey.500",
              }}
              disableGutters
              expanded={expanded === e.path}
              onChange={handleChange(e.path)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: "rgba(0, 0, 0, .02)",
                }}
              >
                {e.name}
                <Box sx={{ paddingX: 2 }} />
                <Chip
                  label="graphe"
                  variant="outlined"
                  size="small"
                  sx={{ color: "text.secondary" }}
                />
                <Box sx={{ paddingX: 0.5 }} />
                <Chip
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
                      onChange={changeTabs(e.path)}
                      sx={{
                        bgcolor: "rgba(0, 0, 0, .02)",
                      }}
                    >
                      <Tab label="Énoncé" disableRipple />
                      <Tab label="Corrigé" disableRipple />
                      <Tab label="GitHub" disableRipple />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <img
                      src={url_exo_enonce}
                      alt={`Erreur : url invalide. Merci de soumettre une issue sur GitHub avec le nom de l'exercice.`}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <img alt="Pas de corrigé" src={url_exo(e.path, true)} />
                  </TabPanel>
                  <TabPanel value={value} index={2}></TabPanel>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        }
      )}
    </div>
  );
};
