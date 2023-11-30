
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello!',
            source: "https://www.repstatic.it/content/localirep/img/rep-firenze/2022/11/23/133706325-4e37649c-e126-4b55-949d-b46761970ef5.jpg"
        }
    }
}).mount('#app')