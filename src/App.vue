<template>
    <div>
        <!--<LoginView
            brand-primary="#0047cc"
            brand-logo-url="https://flext.ilooklike.me/img/logo.977a915d.svg"
            brand-logo-height="32"
            title-text="Flext Operative App"
            sub-title-text="A proxy interface between the apps and the FSB apis. The middleware is responsible for caching and storing API results and features a google dialogflow."
            text-dark-color="#042C5C"
            text-light-color="#77869E"
            :error-message="errorMessage"
            background-image="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            :on-click-fn="login"></LoginView>-->
        <Card :options="getCardOptions()"></Card>
        <br />
        <Tabs :data="tabData" :active.sync="activeTab" type="angled" :limit="9"></Tabs>
        <br />
        <br />
        <br />
        <Tabs :data="tabData" :active.sync="activeTab" type="simple" :limit="9"></Tabs>
        <br />
        <br />
        <br />
        <Tabs :data="tabData" :active.sync="activeTab" type="stacked" :limit="9"></Tabs>
    </div>
</template>

<script>
import Card from '@/components/Card';
import Tabs from '@/components/Tabs';
import LoginView from '@/views/login/variation-1/Component';
import Axios from 'axios';
export default {
    name: 'App',
    components: {
        LoginView,
        Card,
        Tabs
    },
    data() {
        return {
            errorMessage: null,
            tabData: [{
                'name': 'Job Details'
            }, {
                'name': 'Project Details'
            },{
                'name': 'Alpba Details'
            },{
                'name': 'Beta Details'
            },{
                'name': 'Htyy Details'
            }],
            activeTab: 0
        };
    },
    methods: {
        async login() {
            try {
                let result = await Axios.post('http://localhost:5379/admin/login', {
                    username: username,
                    password: password
                });
                if (result.status == 200) {
                    let destination;
                    destination = './admin/index.html';
                    this.$cookies.set('token', 'LOGGED_IN');
                    location.href = destination;
                } else {
                    this.errorMessage = 'Error';
                }
            } catch (err) {
                this.errorMessage = err.response.data.message;
            }
        },
        getCardOptions() {
            return {
                avatarOptions: {
                    text: 'Hello'
                }
            };
        }
    },
    computed: {}
};
</script>

<style lang="scss" scoped></style>
