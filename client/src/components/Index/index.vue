<template>
  <div class="vue-index">
    <b-container>
      <b-row>
        <b-col
          cols="4"
          v-for="t in tasks"
          v-bind:key="t.id"
          v-show="t.isVisible"
        >
          <b-card
            v-bind:title="t.taskName"
            v-bind:img-src="generatePicture()"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{ t.taskContent }}</b-card-text>
            <router-link v-bind:to="'/showtask/' + t._id">
              <b-button variant="primary">Go somewhere</b-button>
            </router-link>
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
  methods: {
    //Her bir buton redirect işlemi için kendisne özgü bir id tutar. Burada ise ekrana basılan redirect button'ları bu func'i tetikleyerek redirect olarak task daha fazla görülür
    goDetails: function (id) {
      this.$router.push("/showtask/" + id);
    },
    //Her bir taska fotoğraf beslemesi yapılıypr bu işlemde random bir sayı üretlip hızlıca task'lara verilip böylece tasklara img-src verisi sağlanmış oluyor
    generatePicture: function () {
      var tmp =
        "https://picsum.photos/600/600/?image=" +
        Math.floor(Math.random() * 999);
      return tmp;
    },
  },

  created() {
    //Create işlemi sonras tüm datalar çekili fakat ekrana isVisible=true olanlar basılır
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
