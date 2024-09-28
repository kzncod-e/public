export default function Page({ setCurrentPage, index }) {
  return (
    <>
      <button
        className="join-item btn "
        onClick={() => setCurrentPage(index + 1)}>
        {index + 1}
      </button>
    </>
  );
}
