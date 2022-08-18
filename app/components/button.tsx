import Button from "@mui/material/Button";
import { fetchJson } from "../lib/utils";

export default ({ selectedOptions, setExos }) => {
  async function search() {
    setExos(
      await fetchJson(`/api/search`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedOptions),
      })
    );
  }

  return (
    <Button size="large" variant="contained" color="success" onClick={search}>
      CHERCHER
    </Button>
  );
};
