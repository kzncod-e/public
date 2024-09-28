/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

export default function Header({
  setSearch,
  setCategoryName,
  category,
  setSort,
  sort,
}) {
  return (
    <>
      <div className="w-full flex items-center justify-evenly gap-7 mt-5 bg-base-100 h-14 text-lg">
        <div className="flex justify-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {category.map((el) => {
                return (
                  <li key={el.id} onClick={() => setCategoryName(el?.name)}>
                    <button>{el?.name}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <form action="" method="get">
            <input
              type="text"
              className="bg-white bg-opacity-10 py-[0.30rem] px-[0.32rem] pl-4 rounded-[1.1rem]"
              placeholder="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="flex flex-end">
          <button
            className="btn btn-ghost "
            onClick={() => {
              sort === "ASC" ? setSort("DESC") : setSort("ASC");
            }}>
            Sort
          </button>
        </div>
      </div>
    </>
  );
}
