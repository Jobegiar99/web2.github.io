const app = Vue.createApp({
    data() {
        return{
            name: "Jobegiar",
            hobbies:["compose music","play the piano","sing",
                                "develop projects related to game AI",
                                "exercise","read"],
            showHobbies: true,
            message: "Welcome to my super page",
            showPlaces: true,
            secondName: "Not Jobegiar",
            places:["Irland","Japan","United Kingdom","Colombia"],
            secondMessage:" HOLAAA "
        }
    }
  }).mount("#app")
