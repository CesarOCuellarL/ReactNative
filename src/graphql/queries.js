/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      Name
      Description
      Estatus
      ISBN
      Categoria
      FechaPublicacion
      Profile {
        items {
          id
          Username
          Avatar_url
          createdAt
          updatedAt
          bookProfileId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        Estatus
        ISBN
        Categoria
        FechaPublicacion
        Profile {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      Username
      Avatar_url
      Book {
        id
        Name
        Description
        Estatus
        ISBN
        Categoria
        FechaPublicacion
        Profile {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      bookProfileId
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Username
        Avatar_url
        Book {
          id
          Name
          Description
          Estatus
          ISBN
          Categoria
          FechaPublicacion
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        bookProfileId
      }
      nextToken
    }
  }
`;
