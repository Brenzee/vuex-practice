<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault()
      this.addTodo(this.title)
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
$base-green: #41b883;

form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid $base-green;
  outline: none;
}

input[type="submit"] {
  flex: 2;
  background: $base-green;
  color: #fff;
  border: 1px $base-green solid;
  cursor: pointer;
}
</style>
