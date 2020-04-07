<template>
  <div class="vue-addtask">
    <b-container>
      <b-row>
        <label>Task Name</label>
        <b-form-input
          v-model="task.taskName"
          placeholder="Enter your task name"
        ></b-form-input>

        <label>Task Content</label>
        <b-form-textarea
          v-model="task.taskContent"
          id="textarea-rows"
          placeholder="Enter your task content"
          rows="8"
        ></b-form-textarea>

        <b-button v-on:click.prevent="sendTask" block variant="outline-primary"
          >Kaydet</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "vue-addtask",
  data() {
    return {
      msg: "Add Task",
      task: {
        taskName: "",
        taskContent: "",
      },
    };
  },
  methods: {
    //Eklenecek task girilir ve gönderilir.
    sendTask: function () {
      this.$http
        .post("http://localhost:3000/addtask", {
          taskName: this.task.taskName,
          taskContent: this.task.taskContent,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label,
button {
  margin-top: 2%;
}
</style>
