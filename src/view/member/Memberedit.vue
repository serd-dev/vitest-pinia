<script setup>
import {usememberStore}from '../../stores/memberStore'
import{reactive,ref,onMounted}from 'vue'
import {useRoute,useRouter}from 'vue-router'
const router = useRouter()
const memberid = ref(-1);
const route = useRoute()
const memberStore = usememberStore()
onMounted(async()=>{
await memberStore.loadMember(route.params.id)
memberid.value = parseInt(route.params.id)
})



const editmember = async (selectmember)=>{
    try {
        const bodyData = {
            firstname:selectmember.firstname,
            lastname:selectmember.lastname,
            gender:selectmember.gender,
            address:selectmember.address
        };
        await memberStore.editmember(bodyData,memberid.value)
        alert('ແກ້ໄຂສຳເລັດ')
        router.push('/list')
    } catch (error) {
        console.log('error',error);
    }
}
</script>
<template>
<form class="mt-5">
    <v-text-field
      v-model="memberStore.selectmember.firstname"
      :counter="10"
      label="FirstName"
    ></v-text-field>

    <v-text-field
      v-model="memberStore.selectmember.lastname"
      :counter="10"
      label="LastName"
    ></v-text-field>

    <v-text-field
      v-model="memberStore.selectmember.gender"
      :counter="10"
      label="Gender"
    ></v-text-field>

    <v-text-field
      v-model="memberStore.selectmember.address"
      :counter="10"
      label="Address"
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="editmember(memberStore.selectmember)"
    >
      Update
    </v-btn>
    <v-btn @click="$router.push('/list')">
      back
    </v-btn>
  </form>
</template>