<template>
    <div v-if="settings.screenSize.type.islg">
        <v-row class="mb-5">

            <v-col cols="2">
                <h4>Kategori</h4>
            </v-col>
            <v-col cols="10">
                <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
            </v-col>
        </v-row>
        <v-row>
            <v-col md="4" v-for="items in infoData">
                <v-flex xs12>
                    <router-link :to="'/informasi/detail/' + items.slugTitle" class="text-decoration-none">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-img :height="settings.defaultImageSmallContentHeight"
                                            :src="require(`../assets/${items.source}`)" :alt="items.title"
                                            :lazy-src="require(`../assets/${items.source}`)"
                                            class="grey darken-4 rounded-lg"
                                            :width="settings.defaultitemsSmallContentWidth">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="grey lighten-5">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>

                                        <div>
                                            <div class="subheading font-weight-medium mt-3 ml-3">
                                                {{ items.title }}
                                            </div>
                                            <h5 class="float-left font-weight-regular my-2">
                                                <v-chip class="ma-2" small outlined :color="settings.color">
                                                    {{ items.category }}
                                                </v-chip> {{ items.date }}
                                            </h5>
                                        </div>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-hover>
                    </router-link>
                </v-flex>
            </v-col>
            <v-col md="12" v-show="isShowNews == false">
                <v-alert color="blue-grey" dense outlined icon="mdi-information-outline">
                    Sementara belum ada data
                </v-alert>
            </v-col>

        </v-row>
    </div>
    <div v-else>
        <div v-if="!settings.screenSize.type.islg">
            <v-navigation-drawer v-model="drawer" fixed left class="rounded-r-lg">
                <v-row class="my-1 mx-1">
                    <v-col md="10">
                        <span>Kategori</span>
                    </v-col>
                    <v-col md="2" class="text-right">
                        <v-btn icon @click.stop="drawer = false" :color="settings.color">
                            <v-icon>
                                mdi-close
                            </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
            </v-navigation-drawer>
        </div>
        <v-btn text @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
            <span class="text-h7 mx-2">Kategori</span>
        </v-btn>
        <span class="text-h7 mx-2 text-right grey--text text-uppercase">{{ selectedCategory.title }}</span>
        <SearchingModal @searchData="getCategoryBySlug" />
        <v-col cols="12">
            <v-row>
                <v-col md="4" v-show="isShowNews" v-for="item in infoData">
                    <v-flex xs12>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                                <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-flex xs5>

                                                <v-img src="../assets/lahai5.jpeg" width="300"
                                                    :height="settings.defaultImageSmallContentHeight"
                                                    class="rounded-lg">
                                                </v-img>
                                            </v-flex>
                                            <v-flex xs7>
                                                <div>
                                                    <div class="subheading font-weight-medium">
                                                        {{ item.title }}
                                                    </div>
                                                    <h5 class="float-left font-weight-regular my-2">
                                                        <v-chip class="ma-2" small outlined :color="settings.color">
                                                            {{ item.category }}
                                                        </v-chip> {{ item.date }}
                                                    </h5>
                                                </div>
                                            </v-flex>
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
            <v-alert color="blue-grey" icon="mdi-information-outline" dense>
                Sementara belum ada informasi
            </v-alert>
        </v-col>

    </div>
</template>

<script>
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';
import C_Parallax from '@/components/C_Parallax.vue';
import SearchingModal from '@/components/C_SearchingModal.vue';
import { defineComponent } from "vue";

import { mapState } from "vuex";
export default defineComponent({
    data: () => ({
        selectedItem: 0,
        isShowNews: false,
        items: [
            { text: 'Mision', icon: 'mdi-clock', total: 5, slug: "Mision" },
            { text: 'Ibadah', icon: 'mdi-account', total: 10, slug: "Ibadah" },
            { text: 'Pelayanan', icon: 'mdi-flag', total: 10, slug: "Pelayanan" },
            { text: 'Traning', icon: 'mdi-flag', total: 12, slug: "Traning" },
            { text: 'Sinode', icon: 'mdi-flag', total: 3, slug: "Sinode" },
            { text: 'Cabang', icon: 'mdi-flag', total: 7, slug: "Cabang" },
        ],
        listData: [
            {
                id: "23453",
                category: "Mision",
                slugCategory: "Penginjilan",
                slugTitle: "Penginjilan",
                title: "Penginjilan di tempat baru, 2021",
                date: "5 Menit yang lalu",
                source: "penginjilan.jpg"
            },
            {
                id: "2366",
                category: "Ibadah",
                slugCategory: "Ibadah Natal",
                slugTitle: "Ibadah Natal",
                title: "Ibadah Natal, jakarta timur 2022",
                date: "8 jam yang lalu",
                source: "natal.jpg"
            },
            {
                id: "2553",
                category: "Pelayanan",
                slugCategory: "Pelayanan Diakonia",
                slugTitle: "Pelayanan Diakonia - kepada sesama saling mendoakan",
                title: "Pelayanan Diakonia-mendoakan yang sakit",
                date: "5 Feb 2023",
                source: "pelayanandiakonia.jpg"
            },
            {
                id: "23499",
                category: "Traning",
                slugCategory: "Traning Hamba Hamba Tuhan",
                slugTitle: "Traning Hamba Hamba Tuhan",
                title: "Traning Hamba Hamba Tuhan yang telah di mulai sejak 1978 oleh Ps.Stube",
                date: "25 Sep 2022",
                source: "belajar.jpg"
            },
            {
                id: "2888",
                category: "Sinode",
                slugCategory: "Peresmian Kantor dan Gereja di lawang",
                slugTitle: "Peresmian Kantor dan Gereja di Lawang",
                title: "Peresmian Kantor dan Gereja di Lawang dan sebagai pusat Gereja GPI JS ",
                date: "25 Sep 2006",
                source: "sinode.jpg"
            },
            {
                id: "2345",
                category: "Cabang",
                slugCategory: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                slugTitle: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                title: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                date: "10 Sep 2022",
                source: "peresmian.jpeg"
            }

        ],
        datafiltering: [],
        isCategoryClicked: false,
        drawer: false,
        selectedCategory: {
            title: "",
            slug: ""
        }
    }),
    components: {
        Breadcrumbs,
        C_CategorySection,
        C_Parallax,
        SearchingModal
    },
    computed: {
        ...mapState(['settings']),
        infoData() {
            if (!this.isCategoryClicked) {
                this.datafiltering = this.listData;
            }
            return this.datafiltering;
        }
    },
    mounted() {
        this.isShowNews = this.items.length > 0 ? true : false;
    },
    methods: {
        setBreadcrumsData() {
            const datas = {

                type: "informasi",
                items: [
                    {
                        text: 'Beranda',
                        disabled: false,
                        href: '/',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Informasi',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        color: "#BDBDBD"
                    },
                ],

            }
            this.$store.dispatch('breadcrumData', datas);
        },
        getCategoryBySlug(event) {
            var filteredList = [];
            if (typeof event === 'string') {
                filteredList = this.listData
                    .filter(
                        ({ title }) => [title]
                            .some(value => value.toLowerCase().includes(event.toLowerCase()))
                    );
                this.isCategoryClicked = true;
                this.selectedCategory.title = "";
                this.selectedCategory.slug = "";
            } else {
                if (event != null) {
                    this.selectedCategory.title = event.text;
                    this.selectedCategory.slug = event.slug;
                    if (event.slug === this.$store.state.settings.allCategory) {
                        filteredList = this.listData;
                    } else {
                        filteredList = this.listData.filter((e) => e.slugCategory === event.slug).map((e) => { return e });
                    }
                    this.isCategoryClicked = true;

                }
            }

            if (filteredList.length == 0) {
                this.isShowNews = false;
            } else {
                this.isShowNews = true;
            }
            this.datafiltering = filteredList;
        },
    }
});
</script>