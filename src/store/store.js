import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
        name: "Samsung s10",
        price: 668,
        camera: "12 megapixels",
        scherm: "6.1 inch",
        android: "9.0",
        schermType: "Amolade",
        resolutie: "1440x2560",
        stock: true,
        img: "https://mobiel-assets.imgix.net/product_images/images/26830/original/black_front_f43df086176c0858ba19c50df08f12aa4837ce16.jpeg?auto=compress%2Cformat&w=500&h=500&dpr=1&s=b3bd1bca0d63c8b1bbaff437f3f7555f",
        aantal: 0
      },
      {
        name: "Samsung s9",
        price: 443.99,
        camera: "12 megapixels",
        scherm: "6.2 inch",
        android: "8.0",
        schermType: "Super amolade",
        resolutie: "2960x1440",
        stock: false,
        img: "https://mobiel-assets.imgix.net/product_images/images/26546/original/Star-Product-Image(CMYK)_sm_g960_galaxys9_front_black_CMYK_757ef22b87be1ea4927a0261e7a045b8bed36f83.jpg?auto=compress%2Cformat&w=500&h=500&dpr=1&s=d92f463d7a631caebda8b9782c9f9b4a",
        aantal: 0
      },
      {
        name: "Samsung s8",
        price: 309.99,
        camera: "12 megapixels",
        scherm: "5.8 inch",
        android: "7.0",
        schermType: "Amolade",
        resolutie: "2960x1440",
        stock: true,
        img: "https://mobiel-assets.imgix.net/product_images/images/22928/original/SM_G950F_GalaxyS8_Front_MidnightBlack_(1)_d1d87983093fe2f53bbf8b455a7e11628e757bd8.jpg?auto=compress%2Cformat&w=500&h=500&dpr=1&s=1b8db2a384e4c6be98772ae24ac30c6b",
        aantal: 0
      },
      {
        name: "Samsung s7 edge",
        price: 217.99,
        camera: "12 megapixels",
        scherm: "5.5 inch",
        android: "6.0",
        schermType: "Super amolade",
        resolutie: "3040x1440",
        stock: true,
        img: "https://mobiel-assets.imgix.net/product_images/images/21259/original/galaxy_s7_black_front__2c6322bdb488671d2dd14a1fe9358cf9ba45a818.jpg?auto=compress%2Cformat&w=500&h=500&dpr=1&s=049cf07f4a4fef76bc74a7a25d5c3d50",
        aantal: 0
      }
    ],
    winkelwagen: [],
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      if (state.winkelwagen.length == 0) {
        state.winkelwagen.push(product);
        state.winkelwagen[0].aantal+=1;
      } else {
        for (let i = 0; i < state.winkelwagen.length; i++) {
          if (state.winkelwagen[i].name == product.name) {
            state.winkelwagen[i].aantal += 1;
            console.log(state.winkelwagen);
            return;
          } else if(i == (state.winkelwagen.length-1)){
            state.winkelwagen.push(product);
          }
        }

      }
      console.log(state.winkelwagen);

    }
  }
});
