/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      ownerEmail
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      ownerEmail
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      ownerEmail
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
