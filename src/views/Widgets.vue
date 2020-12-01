<template>
  <div class="container">
    <button type="button" class="button24" style="margin-top: 10px" 
    v-on:click="isOpen = !isOpen">
    {{ isOpen ? "Cкрыть курс валют" : "Открыть курс валют" }}</button>
    <table style="margin: 0 auto" v-bind:class="{ close: !isOpen }">
      <caption>
        Курс валют на сегодня :
        {{ new Intl.DateTimeFormat("ru-RU").format(timeFormat)}}
      </caption>
      <thead>
        <tr>
          <th scope="col">Покупка</th>
          <th scope="col">Валюта</th>
          <th scope="col">Продажа</th>
        </tr>
      </thead>
      <tbody v-for="price of currentCurrency" :key="price.id">
        <tr>
          <td>{{ Math.ceil(price.buy * 100) / 100 }}</td>
          <td>{{ price.ccy }}</td>
          <td>{{ Math.ceil(price.sale * 100) / 100 }}</td>
        </tr>
      </tbody>
    </table>

    <div style="display: flex; flex-wrap: wrap ; justify-content:center">
      <div class="card" v-for="post of allPosts" :key="post.id">
        <div class="card_title">
          <span class="title_text font_sf_text">{{ post.name }}</span>
          <span class="icon"><img :src="'http://openweathermap.org/img/w/' + post.weather[0].icon + '.png'" /></span>
        </div>
        <p>Дата : {{ new Intl.DateTimeFormat("ru-RU").format(timeFormat) }}</p>
        <p>Температура : {{ Math.round(post.main.temp / 274.15) }}&#8451;</p>
        <p>Ощущается как : {{ Math.round(post.main.feels_like / 274.15) }}&#8451;</p>
        <p>Давление: {{ Math.round(post.main.pressure * 0.75) }} мм.рт.ст</p>
        <p v-if="post.weather[0].description">Осадки : {{ post.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      timeFormat: Date.now(),
      isOpen: true,
    };
  },
  computed: mapGetters(["allPosts", "currentCurrency"]),
  async mounted() {
    this.$store.dispatch("fetchWeather");
    this.$store.dispatch("fetchCurrency");
 
  },
};
</script>
<style>
.card {
  float: left;
  min-width: 20%;
  border: 1px solid grey;
  margin: 20px;
  padding: 0;
  border-radius: 20px;
}
.card:hover {
  transform: scale(1.2);
  transition: all 0.5s ease-in;
}
.card_title {
  background-color: rgba(238, 255, 0, 0.8);
  height: 20%;
  text-align: center;
  vertical-align: center;
  border-radius: 20px 20px 0 0;
}
.title_text {
  font-size: 22px;
  line-height: 250%;
}
.icon {
  position: absolute;
}
.currency_block {
  margin: 0 auto;
  width: 400px;
  height: 200px;
  border: 1px solid black;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}

thead,
tfoot {
  background-color: rgba(238, 255, 0, 0.8);
  color: black;
}

tbody {
  background-color: #e4f0f5;
}

caption {
  padding: 10px;
  caption-side: top;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
  transform: translateX(0px);

  transition: 0.2s ease-in;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 10px 10px;
}

td {
  text-align: center;
}

table.close {
  position: absolute;
  left: 42%;
  transform: translateY(-600px);
}
</style>
