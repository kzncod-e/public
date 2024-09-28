/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import Card from "../components/Cards";
import Page from "../components/Pagination";
import axios from "axios";
import Vanila from "../components/assets/Vanilla@1x-1.0s-280px-250px.svg";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars

export default function Home() {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  const [totPage, setTotPage] = useState(0);
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://h8-phase2-gc.vercel.app";
  async function fetchPosts() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${baseUrl}/apis/pub/blog/posts?q=${search}&i=${categoryName}&limit=8&page=${currentPage}&sort=${sort}`
      );

      setTotPage(data.data.pagination.totalPage);
      setPost(data.data.query);
      setCurrentPage(data.data.pagination.currentPage);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function fetchCategory() {
    try {
      const { data } = await axios.get(`${baseUrl}/apis/pub/blog/categories`);
      // console.log(data);
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  //ketika pertama kali masuk
  useEffect(() => {
    fetchPosts();
    fetchCategory();
  }, []);

  //kalo suatu state berubah
  //akan mrender

  useEffect(() => {
    fetchPosts();
  }, [currentPage, categoryName, search, sort]);

  return (
    <>
      {loading ? (
        <div className="mt-32 flex justify-center items-center">
          <img src={Vanila} />
        </div>
      ) : (
        <div className="bg-base-300 h-screen">
          <Header
            setSearch={setSearch}
            setCategoryName={setCategoryName}
            category={category}
            setSort={setSort}
            sort={sort}
          />
          <div className="flex flex-wrap bg-base-300  gap-4 justify-center items-center h-fit pt-20">
            {posts.map((post) => {
              return <Card product={post} key={post.id} />;
            })}
          </div>

          {/* array from meretrun mapp callback yang mana argumen pertama adalah aray dan kedua adalah indexnya dan length adalah array like object yang di convert menjadi array yang undfined sehingga kita tidak membutuhkan elementnya length adalah property special yang gak bisa di ganti  yang akan menciptakan sebuah array berdasarkan angka yang kita passing*/}
          <div className="flex justify-center">
            {Array.from({ length: totPage }, (_, index) => (
              <Page key={index} setCurrentPage={setCurrentPage} index={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
