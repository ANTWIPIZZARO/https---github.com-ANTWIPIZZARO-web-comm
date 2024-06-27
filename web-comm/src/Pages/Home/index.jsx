import axios from "axios";
import { useQuery } from "react-query";

const ROOT = "http://localhost:8080";
async function getProducts() {
  const response = await axios.get(`${ROOT}/products`);
  console.log(response.data);
  return response.data;
}

function Home() {
  const { data, isLoading, error } = useQuery("products", getProducts);
  if (isLoading) {
      return (
      <div className="flex items-center justify-center h-64 w-64 mx-auto mt-40 border">
        <div className="loader"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-red-600 flex items-center justify-center h-64 w-64 mx-auto mt-40 border">
        {error.message}
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full mt-40">
      {data?.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
