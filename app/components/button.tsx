import Button from "@mui/material/Button";
import { fetchJson } from "../lib/utils";

export default ({ selectedOptions, setExos }) => {
  async function search() {
    const data = await fetchJson(`/api/search`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOptions),
    });

    setExos(
      await Promise.all(
        data.map(async ({ path }) => {
          return await fetchJson(`/api/exercise/${path.replace("/", "-")}`);
        })
      )
    );
  }

  return (
    <Button size="large" variant="contained" color="success" onClick={search}>
      CHERCHER
    </Button>
  );
};
