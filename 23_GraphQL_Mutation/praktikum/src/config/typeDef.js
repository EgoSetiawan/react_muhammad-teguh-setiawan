import { gql } from "@apollo/client";

export const getPassengerLists = gql`
  query getAll {
    users {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

export const getById = gql`
  query getId($id: Int) {
    users(where: { id: { _eq: $id } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

export const deletePassenger = gql`
  mutation DeletePass($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
      nama
      umur
    }
  }
`;

export const addPassenger = gql`
  mutation addPass($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
        jenisKelamin
        nama
        umur
      }
    }
  }
`;
export const updatePassenger = gql`
  mutation MutationUpdate(
    $id: Int
    $nama: String
    $umur: Int
    $jenisKelamin: String
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }
    ) {
      returning {
        id
        nama
        umur
        jenisKelamin
      }
    }
  }
`;
