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
import Typography from "@mui/material/Typography";
import GitHubForkRibbon from "react-github-fork-ribbon";

export default () => {
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [exos, setExos] = React.useState([]);

  return (
    <div>
      <GitHubForkRibbon
        href="https://github.com/fortierq/cpge-exos-app"
        color="green"
        position="right"
      >
        Fork me on GitHub
      </GitHubForkRibbon>
      <Typography variant="h4" align="center" mt={3}>
        Exercices d'informatique en CPGE
      </Typography>

      <Typography variant="subtitle1" align="center">
        MP2I/MPI, MPSI/MP option info et informatique commune
      </Typography>

      <Grid container mt={5}>
        <Grid md={0.33} xs={0}></Grid>

        <Grid md={3} xs={12}>
          <Stack spacing={2} mb={3}>
            <Selects setSelectedOptions={setSelectedOptions} />
            <div style={{ textAlign: "center" }}>
              <Button selectedOptions={selectedOptions} setExos={setExos} />
            </div>
          </Stack>
        </Grid>

        <Grid md={0.33} xs={0}></Grid>

        <Grid md={8} xs={12} justifyContent="center">
          <Exos exos={exos} />
        </Grid>

        <Grid md={0.33} xs={0}></Grid>
      </Grid>
    </div>
  );
};
