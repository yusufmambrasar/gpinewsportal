<template>
    <v-container>
        <v-row class="my-5">
            <v-col md="6">
                <h3 class="font-weight-regular">
                    <v-icon>
                        mdi-newspaper-variant-multiple
                    </v-icon>
                    Informasi
                </h3>
            </v-col>
            <v-col md="6">
                <v-btn v-show="isShowNews" small text :color="settings.color" class="white-text float-right"
                    to="/informasi">
                    Semua <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col md="4" v-show="isShowNews" v-for="item in listData">
                        <v-flex xs12>
                            <v-hover v-slot="{ hover }" open-delay="200">
                                <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                                    <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                        <v-container fluid grid-list-lg>
                                            <v-layout row>
                                                <v-img :src="require(`../assets/${item.img}`)"
                                                    :height="settings.defaultImageSmallContentHeight"
                                                    class="rounded-lg">
                                                </v-img>
                                                <div class="mt-2">
                                                    <div class="subheading font-weight-medium">
                                                        {{ item.title }}
                                                    </div>
                                                    <h5 class="float-left font-weight-regular my-2">
                                                        <v-chip class="ma-2" small outlined :color="settings.color">
                                                            {{ item.category }}
                                                        </v-chip> {{ item.date }}
                                                    </h5>
                                                </div>
                                            </v-layout>
                                        </v-container>
                                    </v-card>
                                </router-link>
                            </v-hover>
                        </v-flex>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="12" v-show="isShowNews == false">
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada informasi
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "News",
    computed: {
        ...mapState(['settings'])
    },
    data: () => ({
        isShowNews: false,
        listData: [
            {
                id: "23453",
                category: "Mision",
                slugCategory: "Penginjilan",
                slugTitle: "Program Penginjilan",
                title: "Penginjilan di tempat baru",
                date: "5 Menit yang lalu",
                img: "penginjilan.jpg"
            },
            {
                id: "2366",
                category: "Ibadah",
                slugCategory: "Ibadah Natal 2022",
                slugTitle: "ibadah-natal-2022",
                title: "Ibadah Natal 2022 di lawang",
                date: "8 jam yang lalu",
                img: "natal.jpg"
            },
            {
                id: "2553",
                category: "Pelayanan",
                slugCategory: "Pelayanan Diakonia",
                slugTitle: "Pelayanan Diakonia kepada sesama",
                title: "Pelayanan Diakonia kepada sesama 20 Sep 2022",
                date: "25 Sep 2022",
                img: "pelayanandiakonia.jpg"
            },
            {
                id: "23499",
                category: "Traning",
                slugCategory: "Sekolah Hamba Tuhan",
                slugTitle: "Traning Hamba Hamba Tuhan, dimulai 1978",
                title: "Traning Hamba Hamba Tuhan, dimulai 1978",
                date: "25 Sep 2022",
                img: "belajar.jpg"
            },
            {
                id: "2888",
                category: "Cabang",
                slugCategory: "cabang cabang GPI Jalan Suci di seluruh nusantara",
                slugTitle: "cabang cabang GPI Jalan Suci di seluruh nusantara",
                title: "cabang cabang GPI Jalan Suci",
                date: "25 Sep 2022",
                img: "indonesia.jpg"
            },
            {
                id: "2345",
                category: "Sinode",
                slugCategory: "Peresmian Gedung Sinode",
                slugTitle: "Peresmian Gereja Pekabaran Injil Jalan Suci pusat",
                title: "Peresmian Gereja Pekabaran Injil Jalan Suci pusat di lawang",
                date: "25 Sep 2022",
                img: "sinode.jpg"
            }
        ]
    }),
    mounted() {
        this.isShowNews = this.listData.length > 0 ? true : false;
    }
}
</script> 