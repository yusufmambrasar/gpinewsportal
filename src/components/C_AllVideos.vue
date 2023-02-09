<template>
    <div v-if="settings.screenSize.type.islg">
        <v-row class="mb-5">

            <v-col cols="2">
                <!-- <Breadcrumbs /> -->
                <h4>Kategori</h4>
            </v-col>
            <v-col cols="10">
                <C_CategorySection />
            </v-col>
        </v-row>
        <v-row v-if="settings.screenSize.type.ismd || settings.screenSize.type.islg">
            <v-col md="4" v-for="{ item, i } in listData" :key="i">
                <v-flex xs12>
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                            <v-container fluid grid-list-lg>
                                <v-layout row>
                                    <LazyYoutube width="100%" src="https://www.youtube.com/watch?v=eN5Skim_7q4" />
                                    <div>
                                        <div class="subheading font-weight-medium mt-3 ml-3">
                                            Ibadah Minggu Raya
                                        </div>
                                        <h5 class="float-left font-weight-regular my-2">
                                            <v-chip class="ma-2" small outlined :color="settings.color">
                                                Ibadah
                                            </v-chip> 29 Jan 2023
                                        </h5>
                                    </div>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-col>
        </v-row>
        <div v-else>
            <v-col v-show="isShowVideo" v-for="{ item, i } in listData" :color="settings.color" :key="i">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                        <LazyYoutube width="100%" src="https://www.youtube.com/embed/nmMFYNMWQwU" />
                        <v-row>
                            <v-col md="6">
                                <v-chip class="mx-5 my-5 white--text" :outlined="settings.outlinedGeneralButton" small
                                    :color="settings.color" :to="'/informasi/kategori/natal'">
                                    Ibadah Raya
                                </v-chip>
                            </v-col>
                            <v-col md="6">
                                <v-card-subtitle class="float-right">
                                    29 Jan 2023
                                </v-card-subtitle>
                            </v-col>
                        </v-row>
                        <v-divider class="mx-5"></v-divider>
                        <v-card-title class="font-weight-regular">Ibadah Raya</v-card-title>
                    </v-card>
                </v-hover>
            </v-col>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { LazyYoutube } from 'vue-lazytube'
import C_CategorySection from '@/components/C_CategorySection.vue';
export default {
    name: "Video",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            result: "",
            isShowVideo: false,
            // youtubeURL: "https://www.youtube.com/watch?v=eN5Skim_7q4",
            listData: [
                {
                    ytlink: "nmMFYNMWQwU"
                },
                {
                    ytlink: "odAMktTGQp8"
                }, 
                {
                    ytlink: "3RXChLXh8Ww"
                },
                {
                    ytlink: "zVN2I5iq6GM"
                }, 
                {
                    ytlink: "29Lx6TZ-jSk"
                },
                {
                    ytlink: "Gb5hwWRvcaU"
                }
            ]
        }
    },
    mounted() {
        this.isShowVideo = this.listData.length > 0 ? true : false;
        this.loadURL();
    },
    methods: {
        loadURL() {

            const youtubeEmbedTemplate = 'https://www.youtube.com/embed/'
            const url = this.youtubeURL.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
            const YId = undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0]
            const topOfQueue = youtubeEmbedTemplate.concat(YId)
            this.result = topOfQueue
            this.youtubeURL = ''
        }
    },
    components: {
        LazyYoutube,
        C_CategorySection
    }
}
</script>

<style>
iframe {
    width: 100% !important;
    min-width: 300px;
}
</style>