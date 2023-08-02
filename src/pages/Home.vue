<template>
  <div class="home">
    <div class="img-wrap">
      <img :src="img.url" v-for="img in imgList" :key="img.id" @click="goInfo(img)"/>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const imgList = reactive([])
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 5);
  return `${timestamp}-${randomStr}`;
}
const router = new useRouter()
const url = 'https://date.nager.at/Api/v3/AvailableCountries'
axios({
  url,
  method: 'get'
}).then(res => {
  res.data.forEach(v => {
    if(v.countryCode === 'SJ') {
      return
    }
    imgList.push({
      id: generateUniqueId(),
      info: v,
      url: `https://date.nager.at/images/circle-flags/flags/${v.countryCode.toLowerCase()}.svg`
    })
  })
})

function goInfo(img) {
  router.push('/showInfo?year=2023&countryCode=' + img.info.countryCode)
}
</script>
<style scoped>
img {
  width: 100px;
}
</style>