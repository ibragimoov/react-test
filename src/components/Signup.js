
export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitting!');
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert('Submitting!');
    }}
    >
      <input />
      <button type="submit">Send</button>
    </form>
  );
}
