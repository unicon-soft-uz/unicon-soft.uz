export default function DataForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const res = await fetch('/api/data', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <form
        className="flex flex-col gap-1 max-w-16 items-center"
        onSubmit={handleSubmit}
      >
        <input name="id" type="text" placeholder="1" />
        <input name="name" type="text" placeholder="Otabek" />
        <input name="photo" type="text" placeholder="foto link" />
        <input name="rol" type="text" placeholder="menejer" />
        <input name="skils" type="text" placeholder="ijro, buxgalteriya" />
        <input name="birthday" type="text" placeholder="02 dec 1996" />
        <button type="submit">Create Data</button>
      </form>
    </>
  );
}
