import React, { useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  getPassengerLists,
  deletePassenger,
  addPassenger,
  getById,
  updatePassenger,
} from "../config/typeDef";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import UpdatePassenger from "./UpdatePassenger";
import Header from "./Header";

const Home = () => {
  const { data: dataPass, error: errUserData } = useQuery(getPassengerLists);
  const [getData, { data: dataUserId, error: errUserDataId }] =
    useLazyQuery(getById);
  const [CreatePassangers, { error: errorCreatePassangers }] = useMutation(
    addPassenger,
    { refetchQueries: [getPassengerLists] }
  );

  const [updatePass, { error: errorUpdate }] = useMutation(updatePassenger, {
    refetchQueries: [getPassengerLists],
  });

  const [deletePass, { error: errorDeletePassangers }] = useMutation(
    deletePassenger,
    { refetchQueries: [getPassengerLists] }
  );

  const hapusPengunjung = (id) => {
    deletePass({
      variables: {
        id: id,
      },
    });
  };

  const [edit, setEdit] = useState({
    id: "",
    nama: "",
    umur: "",
    jenisKelamin: "",
  });
  const onClickEdit = (dataChoice) => {
    setEdit(dataChoice);
  };
  const editPengunjung = (toUpdateData) => {
    updatePass({ variables: toUpdateData });
  };
  const tambahPengunjung = (newUser) => {
    CreatePassangers({
      variables: {
        objects: newUser,
      },
    });
  };

  if (errUserData) {
    console.log(errUserData);
    return null;
  } else if (errorCreatePassangers) {
    console.log(errorCreatePassangers);
    return null;
  } else if (errorDeletePassangers) {
    console.log(errorCreatePassangers);
    return null;
  } else if (errorUpdate) {
    console.log(errorCreatePassangers);
    return null;
  }

  return (
    <div>
      <Header />
      <ListPassenger
        data={dataPass}
        dataId={dataUserId}
        getdataId={getData}
        hapusPengunjung={hapusPengunjung}
        onClickEdit={onClickEdit}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      <UpdatePassenger edit={edit} editPengunjung={editPengunjung} />
    </div>
  );
};

export default Home;
