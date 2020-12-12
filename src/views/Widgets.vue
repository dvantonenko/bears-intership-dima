<template>
  <div class="container">
    <router-link class="back" to="/">Назад на главную</router-link>
    <button
      type="button"
      class="button24"
      style="margin-top: 10px"
      v-on:click="isOpen = !isOpen"
    >
      {{ isOpen ? "Cкрыть курс валют" : "Открыть курс валют" }}
    </button>
    <table class="table_widget" v-bind:class="{ close: !isOpen }">
      <caption class="caption_widget">
        Курс валют на сегодня :
        {{
          new Intl.DateTimeFormat("ru-RU").format(timeFormat)
        }}
      </caption>
      <thead class="thead_widget">
        <tr>
          <th scope="col" class="th_widget">Покупка</th>
          <th scope="col" class="th_widget">Валюта</th>
          <th scope="col" class="th_widget">Продажа</th>
        </tr>
      </thead>
      <tbody class="tbody_widget" v-for="price of currentCurrency" :key="price.id">
        <tr>
          <td class="td_widget">{{ Math.ceil(price.buy * 100) / 100 }}</td>
          <td class="td_widget">{{ price.ccy }}</td>
          <td class="td_widget">{{ Math.ceil(price.sale * 100) / 100 }}</td>
        </tr>
      </tbody>
    </table>

    <div style="display: flex; flex-wrap: wrap; justify-content: center">
      <div class="card_widget" v-for="post of allPosts" :key="post.id">
        <div class="card_title">
          <span class="title_text_widget font_sf_text">{{ post.name }}</span>
          <span class="icon_widget"
            ><img
              :src="'http://openweathermap.org/img/w/' + post.weather[0].icon + '.png'"
          /></span>
        </div>
        <p>Дата : {{ new Intl.DateTimeFormat("ru-RU").format(timeFormat) }}</p>
        <p>Температура : {{ Math.round(post.main.temp / 274.15) }}&#8451;</p>
        <p>Ощущается как : {{ Math.round(post.main.feels_like / 274.15) }}&#8451;</p>
        <p>Давление: {{ Math.round(post.main.pressure * 0.75) }} мм.рт.ст</p>
        <p v-if="post.weather[0].description">
          Осадки : {{ post.weather[0].description }}
        </p>
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
    await this.$store.dispatch("fetchWeather");
    await this.$store.dispatch("fetchCurrency");
  },
};
</script>

<style>
.card_widget {
  float: left;
  min-width: 20%;
  border: 1px solid grey;
  margin: 20px;
  padding: 0;
  border-radius: 20px;
  transition: all 0.5s ease-in;
}
.card_widget:hover {
  transform: scale(1.2);
}
.card_title {
  background-color: rgba(238, 255, 0, 0.8);
  height: 20%;
  text-align: center;
  vertical-align: center;
  border-radius: 20px 20px 0 0;
}

.title_text_widget {
  font-size: 22px;
  line-height: 250%;
}

.icon_widget {
  position: absolute;
}

.thead_widget {
  background-color: rgba(238, 255, 0, 0.8);
  color: black;
}

.tbody_widget {
  background-color: #e4f0f5;
}

.caption_widget {
  padding: 10px;
  caption-side: top;
}

.table_widget {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
  transform: translateX(0px);
  transition: 0.2s ease-in;
  margin: 0 auto;
}

.td_widget,
.th_widget {
  border: 1px solid rgb(190, 190, 190);
  padding: 10px 10px;
}

.td_widget {
  text-align: center;
}

.table_widget.close {
  position: absolute;
  left: 42%;
  transform: translateY(-600px);
}

.back {
  position: absolute;
  top: 140px;
  left: 20px;
}
</style>
