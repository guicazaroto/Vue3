import { reactive, toRefs } from 'vue'
import axios from 'axios'

const useHttpGet = endPoint => {

const state = reactive({
  data: null,
  loading: true,
  error: null
})

axios
  .get(endPoint)
  .then(res => (state.data = res.data))
  .catch(err => (state.error = err.response.data))
  .finally(() => (state.loading = false))

  return toRefs(state)

}

export default useHttpGet