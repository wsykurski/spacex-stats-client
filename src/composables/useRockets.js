import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import {getRockets} from "../graphQL/queries";

export default function () {
  const rockets = ref([])
  const { result, loading } = useQuery(getRockets)

  watch(loading, (value) => {
    if (value) return
    rockets.value = result.value.rockets
  })

  return {
    rockets,
    loading
  }
}

