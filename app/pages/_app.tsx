import * as React from "react";
import "../css/style.css";
import Button from "../components/button";
import Selects from "../components/selects";
import Exos from "../components/exos";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "@mui/material/AppBar";

export default () => {
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [exos, setExos] = React.useState([]);

  return (
    <div>
      {/* <AppBar sx={{ bgcolor: "black" }} position="static"> */}
      <h1>Exercices d'informatique</h1>
      {/* </AppBar> */}
      <br />
      <Grid container spacing={2}>
        <Grid md={4} xs={12}>
          <Stack spacing={2}>
            <Selects setSelectedOptions={setSelectedOptions} />
            <div style={{ textAlign: "center" }}>
              <Button selectedOptions={selectedOptions} setExos={setExos} />
            </div>
          </Stack>
        </Grid>

        <Grid md={8} xs={12}>
          <Exos exos={exos} />
        </Grid>
      </Grid>
    </div>
  );
};
