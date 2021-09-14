

Vue.createApp({
  data() {
    return {
      player: {
        money: 2
      }



    }
  },
  computed: {
    tweetLink() {
      let tweetText = "";

      let tweetUrl = 'dem08656775.github.io/newnotidlegame';
      let tweetHashtag = '新しい非放置ゲーム';

      let attribute = 'https://twitter.com/intent/tweet?'
        + 'text=' + tweetText
        + '&url=' + tweetUrl
        + '&hashtags=' + tweetHashtag

      return attribute
    }
  },
  methods: {


  },

  mounted() {
    

  },
}).mount('#app');
