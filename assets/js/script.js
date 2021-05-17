// Descrizione: Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
  el: "#app",
  data: {
    // array nel quale fare il push delle mail
    arrayMail: [],
    // salvo in endpoint l'url
    endpoint: "https://flynn.boolean.careers/exercises/api/random/mail",
  },
  mounted() {
    // option 1

    // ciclo for
    // for (let i = 0; i < 10; i++) {
    //   axios
    //     .get(this.endpoint)
    //     .then((risp) => {
    //       this.arrayMail.push(risp.data.response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // console.log(this.arrayMail);

    // option 2 fucntion

    // richiamo l'endpoint
    this.callApi(this.endpoint);
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then((risp) => {
          this.arrayMail.push(risp.data.response);
          if (this.arrayMail.length < 10) {
            this.callApi(url);
          }
        })
        .catch((error) => {
          console.log(error);
        });
       console.log(this.arrayMail);
    },
    // option 3: funzione con ciclo while
    callApi2(url) {
      let i = 0;
      while(i < 10){
        axios
          .get(url)
          .then((risp) => {
            this.arrayMail.push(risp.data.response);
          })
          .catch((error) => {
            console.log(error);
          });
          i++
      }
    },
  },
});
