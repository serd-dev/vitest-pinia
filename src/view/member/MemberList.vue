<template>
  <span>Member</span>
  <v-btn class="add-member" prepend-icon="$plus" @click="$router.push('/add')" variant="outlined" color="green darken-3">
    add
  </v-btn>
  <v-data-table
    :headers="headers"
    :items="memberStore.member"
    item-key="id"
    :loading="loading"
    class="custom-table"
    header-color="primary" 
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.firstname }}</td>
        <td>{{ item.lastname }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.address }}</td>
        <td>
          <v-icon @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon @click="deleltemember(item.id)">mdi-delete</v-icon>
        </td>
      </tr>
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
  { title: "del", align: "center", key: "del" },
];
const memberStore = usememberStore();

const loading = ref(true); // สถานะการโหลดข้อมูล
onMounted(async()=>{
  await memberStore.loadMember()
  loading.value = true;

  loading.value = false;
})
// const loadMembers = async () => {

//   await memberStore.loadMember();
 
// };

const editItem =(item) => {

  // ให้แสดงโต้ตอบหรือหน้าแก้ไขข้อมูลสมาชิกที่นี่
  console.log("Edit item:", item);
};

const deleltemember =async (id) => {
  // ให้ลบข้อมูลสมาชิกที่นี่
  try {
    await memberStore.removeMember(id)
    await memberStore.loadMember()
    // console.log(memberStore.member);
    alert("ລົບຂໍ້ມູນແລ້ວ")
  } catch (error) {
    console.log('error',error);
  }
  // console.log("Delete item:",id);
};

</script>

<style scoped>
* {
  margin: 1rem 0rem 0rem 2rem;
}
.custom-table {
  font-size: 18px;
  border-radius: 3px;
  width: 80%;
  border: solid 1px rgb(166, 166, 166);
  margin: 1rem;
  height: 650px;
  /* background: red; */
}
.add-member {
  margin-left: 72rem;
}
</style>
