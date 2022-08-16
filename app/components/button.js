import Button from "@mui/material/Button";

export default ({ selectedOptions, setExos }) => {
  async function search() {
    const ans = await fetch(`/api/search`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOptions),
    });
    const data = await ans.json();

    setExos(
      await Promise.all(
        data.map(async (e) => {
          const path = e.path.replace("/", "-");
          const ans = await fetch(`/api/exercise/${path}`);
          return await ans.json();
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
