<template>
  <div class="vue-showtask">
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

        <b-button
          v-on:click.prevent="updateTask()"
          block
          variant="outline-primary"
          >Güncelle</b-button
        >
        <b-button
          v-on:click.prevent="deleteTask()"
          block
          variant="outline-primary"
          >Sil</b-button
        >
        <b-button
          v-on:click.prevent="taskDone()"
          block
          variant="outline-primary"
          >Yapıldı</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "vue-showtask",
  data() {
    return {
      id: this.$route.params.id,
      task: {
        id: "",
        taskName: "",
        taskContent: "",
        isVisible: "",
      },
    };
  },
  methods: {
    updateTask: function () {
      this.$http
        .put("http://localhost:3000/updatetask", {
          _id: this.id,
          taskName: this.task.taskName,
          taskContent: this.task.taskContent,
        })
        .then((response) => {
          //Eğer bir status gelirse sadedce gecelek olan değer Error olacaktır diğer türlü doğrudan güncel obje gelecektir.
          if (response.data.Status) {
            alert("Güncelleme işlenmi şuan gerçekleştirilemedi");
          } else {
            alert("Güncelleme işlemi gerçekleşti.");
            //aldığın güncel objeyi hızlıca mevcut ile değiştir
            this.task = response.data;
          }
        })
        .catch((response) => {
          //networsel vs. gibi hatalar gelirse burasını çalıştır
          console.log(response.data);
          alert("Güncelleme işlenmi şuan gerçekleştirilemedi");
        });
    },
    deleteTask: function () {
      this.$http
        .delete("http://localhost:3000/deltask/" + this.id)
        .then((response) => {
          //Eğer silme işlemi sonucu ok ise veri silinmiştir
          if (response.data.Status == "Ok") {
            alert("Silme işlemi gerçekleşti. Ana sayfaya gönderiliyorsunuz");
            this.$router.push("/");
          } else {
            alert("Silme işlenmi şuan gerçekleştirilemedi");
          }
        })
        .catch((response) => {
          console.log(response.data);
          alert("Silme işlenmi şuan gerçekleştirilemedi");
        });
    },
    taskDone: function () {
      //Burada ise bir taskin yapılıp yapılmama durumu var. Eğer yapılırsa task isVisible paramtersi false'a çekilir ve index tarafta değil artık Whatidid'e gösterilir.
      this.$http
        .put("http://localhost:3000/isDone", {
          _id: this.id,
          isVisible: false,
        })
        .then((response) => {
          if (response.data.Status) {
            alert("Yapıldı işlenmi şuan gerçekleştirilemedi");
          } else {
            alert("Yapıldı işlemi gerçekleşti.");
            this.task = response.data;
          }
        })
        .catch((response) => {
          console.log(response.data);
          alert("Yapıldı işlenmi şuan gerçekleştirilemedi");
        });
    },
  },
  created() {
    //Obje create edildiğinde fakat ekrana basılmadığında hızlıca ilgili task id'ye istek atılır ve datalar input'lara basılır.
    this.$http
      .get("http://localhost:3000/task/" + this.id)
      .then((response) => {
        this.task = response.data;
      })
      .catch((response) => {
        alert(
          "Şuanda ekranları çizemiyoruz. Sayfa yenileniyiz ve tekrar deneyiniz." +
            response
        );
      });
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
