<template>
    <span>Member</span>
<v-btn  class="add-member" prepend-icon="$plus"  @click="$router.push('/add')" variant="outlined" color="green-darken-3">
    add
</v-btn>
    <v-data-table
      :headers="headers"
      :items="members"
      item-key="id"
      :loading="loading"
      :show-select="true"
      dense
      class="custom-table" 
    >
    <template v-slot:item[action]="{ item }">
      <v-icon @click="editItem(item)">edit</v-icon>
      <v-icon @click="deleteItem(item)">delete</v-icon>
    </template>
</v-data-table>
  </template>

  <script setup>
  import { usememberStore } from "../../stores/memberStore";
  import { ref, onMounted } from "vue";
  
  const headers = [
    { title: "First Name", align: "center", key: "firstname"},
    { title: "Last Name", align: "center", key: "lastname" },
    { title: "Gender", align: "center", key: "gender" },
    { title: "Address", align: "center", key: "address" },
  ];
  
  const members = ref([]); // เก็บข้อมูลสมาชิกที่ดึงมาจาก API
  const loading = ref(true); // สถานะการโหลดข้อมูล
  
  const loadMembers = async () => {
    const memberStore = usememberStore();
    loading.value = true;
    await memberStore.loadMember();
    members.value = memberStore.member;
    loading.value = false;
  };
  const editItem = (item) => {
  // การแก้ไขสมาชิก
  console.log("Edit item:", item);
};

const deleteItem = (item) => {
  // การลบสมาชิก
  console.log("Delete item:", item);
};
  onMounted(loadMembers);
  </script>



  <style scoped>
  *{
    margin:1rem 0rem 0rem 2rem;
  }
  .custom-table {
    font-size: 18px; /* ปรับขนาดตัวอักษรของตาราง */
    border-radius: 3px; /* ปรับขนาดของมุมของตาราง */
    width: 80%;
    border: solid 1px rgb(166, 166, 166);
    margin: 1rem;
    height: 650px;
    /* text-align: left; */
  }
  .add-member{
    margin-left:72rem;
  }
  </style>
  