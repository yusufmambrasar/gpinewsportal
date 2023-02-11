 
<template class="my-1">
  <!-- <v-carousel next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left" cycle delimiter-icon="mdi-minus" -->
  <div>
    <v-carousel cycle :show-arrows="false" delimiter-icon="mdi-checkbox-blank-circle-outline" class="mb-15 rounded-lg"
      :height="imageSize">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`../assets/${item.img}`)">
        <v-row class="fill-height" align="center" justify="center">
          <v-col class="ml-15">
            <v-chip class="ma-2" close :color="settings.color" dark
              :to="'/informasi/kategori/' + item.slug">
              {{ item.category }}
            </v-chip>
            <br>
            <router-link :to="'/informasi/detail/' + item.slugTitle">
              <div class="text-h4 white--text float-left">
                {{ item.title }}
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>


</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Carausel",
  computed: {
    ...mapState(['settings'])
  },
  data() {
    return {
      cycle: true,
      imageSize: 500,
      model: null,
      items: [
      {
          category: "Sinode",
          slug: "sinode",
          title: "Sinode dilawang",
          slugTitle: 'Kantor-sinode-GPI-Jalan-Suci-lawang',
          img: 'profillawang.jpg',
        },

        {
          category: "Cabang",
          slug: "cabang",
          title: "Cabang GPI daerah jakarta timur, januari 2023",
          slugTitle: 'Cabang-gpi-daerah-jakarta-timur-januari-2023',
          img: 'ibadah.jpg',
        },

        {
          category: "Mision",
          slug: "mision",
          title: "Pemberitaan Firman Tuhan sebagai kabar Keselamatan kekal",
          slugTitle: 'misi',
          img: 'penginjilan.jpg',
        },
    
        {
          category: "Pelayanan",
          slug: "pelayanan",
          title: "Kegiatan Sekolah Minggu ",
          slugTitle: 'sekolah-minggu',
          img: 'sundayschool.jpg',
        },
        {
          category: "Traning",
          slug: "traning",
          title: "Program Belajar Hamba Tuhan",
          slugTitle: 'program-belajar-hamba-tuhan',
          img: 'belajar.jpg',
        },
      ],
    }
  },
  mounted() {
    if (this.$store.state.settings.screenSize.type.isxs) {
      this.imageSize = 400;
    }
  }
}
</script>