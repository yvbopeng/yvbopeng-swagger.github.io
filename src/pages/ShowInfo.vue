<template>
  <div class="list">
      <div class="list-item" v-for="item in dayList" :key="item.id">
        <div class="item-left">{{ item.localName }}</div>
        <div class="item-right">{{  item.name }}</div>
      </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const dayList = reactive([])
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 5);
  return `${timestamp}-${randomStr}`;
}
const router = new useRouter()
const route = new useRoute()
const url = `https://date.nager.at/Api/v2/PublicHolidays/${route.query.year}/${route.query.countryCode}`
axios({
  url,
  method: 'get'
}).then(res => {
  res.data.forEach(v => {
    dayList.push({
      id: generateUniqueId(),
      ...v
    })
  })
})
</script>
<style scoped>
.list-item {
  display: flex;
  padding-top: 20px;
}
.item-left {
  width: 50%;
  text-align: center;
}
.item-right {
  width: 50%;
  text-align: center;
}
</style>