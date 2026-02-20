import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
import List from "./List";

const Main = () => {
  //custom hooks
  const { data, loading, error } = useFetch("https://dummyjson.com/users");
  const [fetchUsers, setFetchUsers] = useState([]);
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(data);
    setFetchUsers(data);
  }, [data]);

  const handleSearch = (search) => {
    //handle case
    const filterUser = fetchUsers.filter((data) =>
      `${data.firstName} ${data.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
    setFetchUsers(filterUser);
  };

  return (
    <div>
      <Search search={handleSearch} />
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      <List users={fetchUsers ? fetchUsers : userData} />
    </div>
  );
};

export default Main;
