import { gql } from "@apollo/client";

export const getPassengerLists = gql`
  query MyQuery {
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
