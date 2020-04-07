<template>
  <div class="vue-index">
    <b-container>
      <b-row>
        <b-col
          cols="4"
          v-for="t in tasks"
          v-bind:key="t.id"
          v-show="!t.isVisible"
        >
          <b-card
            v-bind:title="t.taskName"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            v-rainbow
          >
            <b-card-text>{{ t.taskContent }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "vue-index",
  data() {
    return {
      msg: "Index",
      tasks: {},
    };
  },
  directives: {
    // background color'ın değişmesi için custom directive kullandım
    rainbow: {
      bind: function (el) {
        el.style.backgroundColor = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  created() {
    //tüm taskları getir fakat ekrana basarken isVisible false olanları basd
    this.$http
      .get("http://localhost:3000/taskall")
      .then((response) => {
        this.tasks = response.data;
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
<style scoped></style>
