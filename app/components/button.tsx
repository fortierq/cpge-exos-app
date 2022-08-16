import Button from "@mui/material/Button";
import { fetch_json } from "../lib/utils";

export default ({ selectedOptions, setExos }) => {
  async function search() {
    const data = await fetch_json(`/api/search`, {
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
          return await fetch_json(`/api/exercise/${path.replace("/", "-")}`);
        })
      )
    );
  }

  return (
    <div className="has-text-centered">
      <Button variant="contained" color="success" onClick={search}>
        Chercher
      </Button>
    </div>
  );
};
