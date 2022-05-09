<template>
  <section>
    <h1>{{pageData}}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="goTo(user)">{{user.name}} ({{user.email}}) {{user.id}}</a>
       </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'UsersPage',
  // async asyncData({store,error}){
  //   try{
  //     await store.dispatch('users/fetchUsers');
  //     return {}
  //   }
  //   catch(e){
  //     throw e;
  //   }
  // },
  async fetch({store}){
    if(store.getters['users/users'].length === 0){
       await store.dispatch('users/fetchUsers');
       return
    }
  },
  data:()=>({
    pageData:'Users page'
  }),
  computed:{
    users(){
      return this.$store.getters['users/users']
    }
  },
  methods:{
    goTo(user){
      console.log(user.id);
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>