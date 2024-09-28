import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Vanilla from "../components/assets/Vanilla@1x-1.0s-280px-250px.svg";

export default function Detail({ url }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  async function fetchPost() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}/apis/pub/blog/posts/${id}`);
      //   console.log(data);
      //   console.log(id);

      setPost(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);
  return (
    <>
      {loading ? (
        <div className="mt-32 flex justify-center items-center">
          <img src={Vanilla} />
        </div>
      ) : (
        <div className="bg-base-300 min-h-screen flex items-center justify-center">
          <div className="bg-white h-[60%]   rounded-lg  max-w-[65%] shadow-2xl shadow-blue-800  flex">
            {/* Left Section: Image and Product Info */}
            <div className="p-5 flex flex-col gap-5  ">
              <div className="text-left">
                <h2 className="text-md font-bold text-black">
                  {post?.User?.username}
                </h2>
                <p className="text-gray-600 font-semibold">{post.title}</p>
              </div>
              <div>
                <img
                  className="w-full h-72"
                  src={post.imgUrl}
                  alt="Product Image"
                />
              </div>
            </div>
            {/* Right Section: Description and Reviews */}
            <div className="p-5 flex flex-col  justify-center w-3/5">
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-700 uppercase mb-2">
                  {post?.Category?.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post?.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
