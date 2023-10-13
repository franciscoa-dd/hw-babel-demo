import { useEffect, useDeferredValue, useState } from "react";
import Input from "../components/Input/Input";
import List from "../components/List/List";
import Pagination from "../components/Pagination/Pagination";
import Header from "../components/Header/Header";

function Home() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const deferredSearch = useDeferredValue(search);
  useEffect(() => {
    const url = deferredSearch
      ? `https://rickandmortyapi.com/api/character/?page=${page}&name=${deferredSearch}`
      : `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, deferredSearch]);

  function handleChangePage(isPrev) {
    setPage((prevPage) => prevPage + (isPrev ? -1 : 1));
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Header />
      <Input value={search} onChange={handleChangeSearch} label="Search" />
      <List items={data.results || []} search={search} />
      <Pagination
        page={page}
        totalPages={data.info?.pages}
        onChange={handleChangePage}
      />
    </>
  );
}

export default Home;
