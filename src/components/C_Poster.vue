 
<template class="mt-1">
    <div class="mb-15">
        <v-slide-group v-model="model" active-class="success" center-active :show-arrows="(settings.screenSize.type.islg)" next-icon="mdi-chevron-right"
            prev-icon="mdi-chevron-left">
            <v-slide-item v-for="item in items" v-slot="{ active, toggle }">
                <v-card class="ma-4">
                    <v-row class="fill-height" align="center" justify="center" @click="toggle">
                        <v-scale-transition>
                            <v-img :src="item.src" height="250" width="280" class="rounded-lg">
                            </v-img>
                        </v-scale-transition>
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "Poster",
    data() {
        return {
            model: "", 
            items: [
                {
                    category: "MISI",
                    title: "Pemberitaan Injil ditempat baru",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    category: "IBADAH",
                    title: "ibadah natal 2022 jakarta timur",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    category: "PELAYANAN",
                    title: "Pelayanan Diakonis, mendokan umat yang sakit",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    category: "TRANING",
                    title: "Program pembelajaran hamba hamba Tuhan yg telah do mulai tahun 1978",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                }, {
                    category: "SINODE",
                    title: "Peresmian kantor dan gedung gereja sinode lawang",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    category: "CABANG GEREJA",
                    title: "Peresmian kantor dan gedung gereja cabang papua, jayawijaya",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    category: "API MENYALA",
                    title: "Majalah Api Menyala dikeluarkan oleh sinode",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    category: "RAKORNAS",
                    title: "Rakornas dilakukan setiap tahun bulan agustus",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
                {
                    category: "BICA",
                    title: "Bible Camp di lakukan setiap tahun bulan agustus",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
    computed: {
    ...mapState(['settings']) 
  
  }
}
</script>