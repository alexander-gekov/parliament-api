<template>
    <div>
        <div v-for="meeting in meetings" :key="meeting.name">
            <h2>{{meeting.date}}</h2>
            <p>{{Id}}</p>
            <div v-for="file in meeting.files" :key="file.id">
                <video :src="file.file" controls width="350"></video>
<!--                <vue-core-video-player src="{{file.file}}" controls width="350"></vue-core-video-player>-->
            </div>
        </div>
        <div class="mx-auto p-2 my-2 fixed-bottom">
            <button @click.prevent="getPreviousMeeting" class="btn btn-primary mr-3">Previous Meeting</button>
            <button @click.prevent="getNextMeeting" class="btn btn-dark">Next Meeting</button>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'HelloWorld',
        computed: {
            Id: function () {
                return this.id;
            }
        },
        mounted() {
            this.getMeeting();
        },
        data() {
            return {
                id: '1272',
                meetings: [],
            };
        },
        methods: {
            getMeeting() {
                axios.get('http://localhost:3000/meetings?q=' + this.Id)
                    .then((response) => {
                        this.meetings = response.data;
                        console.log(response.data);
                    })
                    .catch()
            },
            getNextMeeting() {
                this.id++;
                axios.get('http://localhost:3000/meetings?q=' + this.Id)
                    .then((response) => {
                        this.meetings = response.data;
                        if(response.data[0].files==undefined){
                            this.getNextMeeting();
                        }
                        console.log(response.data);
                    })
                    .catch()
            },
            getPreviousMeeting() {
                this.id--;
                axios.get('http://localhost:3000/meetings?q=' + this.Id)
                    .then((response) => {
                        this.meetings = response.data;
                        if(response.data[0].files==undefined){
                            this.getPreviousMeeting();
                        }
                        console.log(response.data);
                    })
                    .catch()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
