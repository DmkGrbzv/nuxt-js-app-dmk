<template>
  <h1>
    <!-- {{user.id}} -->
    {{user.name}}
    <hr />
    {{user.email}}
  </h1>
</template>
<script>
export default {
  validate({params}){
    return /^\d+$/.test(params.id);
  },
async asyncData({ store , params }) {
  try{
    const user = await store.dispatch('users/fetchUserById',params.id)
    return { user }
  }
  catch(e){
    throw e;
  }
}

}
</script>