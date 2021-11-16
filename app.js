const app = Vue.createApp({
  data() {
    return {
      name: "Irlan Navila",
      goals: [],
    };
  },

  methods: {
    handleUserInputGoals(ev) {
      if (ev.target.value !== "") {
        this.goals.push(ev.target.value);
      }
      localStorage.setItem("goals", JSON.stringify(this.goals));
      ev.target.value = "";
    },

    clearUserGoals() {
      if (this.goals !== []) {
        this.goals = [];
        localStorage.removeItem("goals");
      }
    },
  },

  mounted() {
    const data = localStorage.getItem("goals");
    this.goals = data ? JSON.parse(data) : [];
  },
});

app.mount("#user-goals");
