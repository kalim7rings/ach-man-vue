import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    stateProductType : 'LOANS',
    stateMessages : '',
    title: 'My Custom Title',
    links: [
        'http://google.com',
        'http://coursetro.com',
        'http://youtube.com'
    ]
};

const getters = {
    /*productType (state){
        return state.storeProductType;
    },*/
    countLinks: state => {
        return state.links.length
    }
};

const mutations = {
    SET_PRODUCT_TYPE(state, payload){
        state.stateProductType = payload;
    },
    SET_HEADER_MASSAGE(state, payload){
        console.log("payload22: " + payload);
        state.stateMessages = payload;
    },
    updateProductTypeState : function (state, payload) {
        return state.storeProductType = payload;
    },
    ADD_LINK: (state, link) => {
        state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
        state.links.splice(link, 1)
    },
    /*REMOVE_ALL : (state) => {
        state.links = [];
    }*/
    REMOVE_ALL: (state) => {
        state.links = []
    }
};


const actions = {
    removeLink: (context, link) => {
        context.commit('REMOVE_LINK', link)
    },
    /*removeAll({commit}){
          return new Promise((resolve, reject) => {

              setTimeout(function () {
                  commit('REMOVE_ALL');
                  resolve();
              }, 1500);

          })
    },*/
    removeAll ({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('REMOVE_ALL')
                resolve()
            }, 1500)
        })
    }
};

const store = new Vuex.Store({
    state,
    //strict: debug,
    actions,
    mutations,
    getters,
});

export default store;
