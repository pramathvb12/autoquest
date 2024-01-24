import request, { gql } from "graphql-request"

export const getCarList = async() =>{
    const query = gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          image {
            url
          }
          carBrand
          carType
          year
        }
      }
    `

    const res = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clrnqqpcx120t01wdn681zjbp/master',query)
    return res;
}

export const getStoreLocation = async()=>{
  const query = gql`
  query storeLocation {
    stroreLocations {
      address
    }
  }
  
  `
  const res = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clrnqqpcx120t01wdn681zjbp/master',query)
  return res;
}