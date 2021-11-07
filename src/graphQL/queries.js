import gql from 'graphql-tag';

export const getRockets = gql`
    query getRockets {
        rockets {
            name
            description
            stages
        }
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