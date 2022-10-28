import ListItem from "./ListItem";
import { getById, getPassengerLists } from "../config/typeDef";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";

const ListPassenger = (props) => {
  const { data: dataPass, error: errUserData } = useQuery(getPassengerLists);
  const [getData, { data: dataUserId, error: errUserDataId }] =
    useLazyQuery(getById);
  const [userId, setUserId] = useState(0);

  if (errUserData) {
    console.log(errUserData);
    return null;
  }

  if (errUserDataId) {
    console.log(errUserDataId);
    return null;
  }

  const handleDataId = (e) => {
    console.log(e);
    if (e.target) {
      setUserId(e.target.value);
    }
  };

  const handleGetData = () => {
    getData({
      variables: {
        id: userId,
      },
    });
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <input
          value={userId}
          onChange={handleDataId}
          style={{ marginRight: "5px" }}
        />
        <button onClick={handleGetData}>Get Data</button>
      </div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {dataUserId
          ? dataUserId?.users?.map((item) => (
              <ListItem
                key={item.id}
                data={item}
                hapusPengunjung={props.hapusPengunjung}
              />
            ))
          : dataPass?.users?.map((item) => (
              <ListItem
                key={item.id}
                data={item}
                hapusPengunjung={props.hapusPengunjung}
              />
            ))}
      </table>
    </div>
  );
};

export default ListPassenger;
