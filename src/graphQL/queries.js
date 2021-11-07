import gql from 'graphql-tag';

export const getRockets = gql`
    query getRockets {
        rockets {
            name
            description
            stages
            id
        }
    }
`

export const getRocket = gql`
    query getRocket($id: ID!) {
        rocket(id: $id) {
            name
            first_flight
            height {
                feet
                meters
            }
            first_stage {
                fuel_amount_tons
            }
            diameter {
                meters
            }
            description        }
    }
`

export const getLandpads = gql`
  query getLandpads {
      landpads {
          attempted_landings
          location {
              name
          }
          successful_landings
          
      }
  }
`