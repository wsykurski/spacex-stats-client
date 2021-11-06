import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const query = gql`
    query getRockets {
        rockets {
            name
            description
            stages
        }
    }
`

export default function () {
  const rockets = ref([])
  const { result, loading } = useQuery(query)

  watch(loading, (value) => {
    if (value) return
    rockets.value = result.value.rockets
  })

  return {
    rockets,
    loading
  }
}

