import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { url } from "../lib/constants";

export default ({ exo }) => {
  const [value, setValue] = React.useState(0);

  const url_exo = (path_relative: string, cor: boolean) => {
    const filename = path_relative.substring(
      path_relative.lastIndexOf("/") + 1
    );
    let path = `${url}/${path_relative}/${filename}`;
    if (cor) {
      path += "_cor";
    }
    return `${path}.png`;
  };

  const changeTabs = (_, newValue: number) => {
    if (newValue === 2) {
      window.open(`${url}/${exo.path}`, "_blank", "noopener,noreferrer");
    } else {
      setValue(newValue);
    }
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={changeTabs}
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
          src={url_exo(exo.path, false)}
          alt={`Erreur : url invalide. Merci de soumettre une issue sur GitHub avec le nom de l'exercice.`}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img alt="Pas de corrigé" src={url_exo(exo.path, true)} />
      </TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
};
