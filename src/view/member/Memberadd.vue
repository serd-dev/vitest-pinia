<template>
  <form class="mt-5">
    <v-text-field
      v-model="state.firstname"
      :error-messages="v$.firstname.$errors.map(e => e.$message)"
      :counter="10"
      label="FirstName"
      required
      @input="v$.firstname.$touch"
      @blur="v$.firstname.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.lastname"
      :error-messages="v$.lastname.$errors.map(e => e.$message)"
      :counter="10"
      label="LastName"
      required
      @input="v$.lastname.$touch"
      @blur="v$.lastname.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.gender"
      :error-messages="v$.gender.$errors.map(e => e.$message)"
      :counter="10"
      label="Gender"
      required
      @input="v$.gender.$touch"
      @blur="v$.gender.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.address"
      :error-messages="v$.address.$errors.map(e => e.$message)"
      :counter="10"
      label="Address"
      required
      @input="v$.address.$touch"
      @blur="v$.address.$touch"
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="addMember()"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
<script setup>
import { usememberStore } from '../../stores/memberStore';
  import {reactive,onMounted } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'
import{useRouter}from 'vue-router'
const memberStore = usememberStore()
const router = useRouter()
onMounted(async()=>{
  await memberStore.addMember()
  await memberStore.loadMember()
})

const addMember= async()=>{
  const dataMember ={
    firstname:state.firstname,
    lastname:state.lastname,
    gender:state.gender,
    address:state.address
  }
  // console.log(dataMember);
  await memberStore.addMember(dataMember)
  alert(' ບັນທຶກຂໍ້ມູນຮຽບຮ້ອຍ')
  router.push('/list')
}

  const initialState = {
    firstname: '',
    lastname: '',
    gender: '',
    address: '',
  }
  const state = reactive({
    ...initialState,
  })
  const rules = {
    firstname: { required },
    lastname: { required},
    gender: { required },
    address: { required }
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
</script>