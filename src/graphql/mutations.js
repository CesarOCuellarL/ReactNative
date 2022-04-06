/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
