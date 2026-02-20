import { useState, useEffect, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
import List from "./List";

const Main = () => {
  //custom hooks
  const { data, loading, error } = useFetch("https://dummyjson.com/users");
  const [fetchUsers, setFetchUsers] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(data);
    setFetchUsers(data);
  }, [data]);

  const handleSearch = useCallback(
    (search) => {
      //handle case
      const filterUser = userData.filter((user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
      setFetchUsers(filterUser);
    },
    [userData],
  );

  return (
    <div>
      <Search search={handleSearch} />
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      <List users={fetchUsers} />
    </div>
  );
};

export default Main;
