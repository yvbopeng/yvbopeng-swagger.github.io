<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
defineOptions({
  name: 'IndexPage',
})

const name = ref('')

const router = useRouter()
router.push('/home')
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <button @click="go">
      Go
    </button>
  </div>
</template>