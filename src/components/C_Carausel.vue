 
<template class="my-1">
  <!-- <v-carousel next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left" cycle delimiter-icon="mdi-minus" -->
  <div>
    <v-carousel cycle :show-arrows="false" delimiter-icon="mdi-checkbox-blank-circle-outline" class="mb-15 rounded-lg"
      :height="imageSize">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`../assets/${item.img}`)">
        <v-row class="fill-height" align="center" justify="center">
          <v-col class="ml-15">
            <v-chip class="ma-2" close :color="settings.color" small text-color="white"
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
          category: "Ibadah",
          slug: "Ibadah Syukuran Persemian Gereja dan Kantor Sinode dilawang",
          title: "Ibadah Syukuran Persemian Gereja dan Kantor Sinode dilawang",
          slugTitle: 'kunjungan ketua GPI Jalan Suci',
          img: 'profillawang.jpg',
        },

        {
          category: "Mision",
          slug: "Pekabaran Injil",
          title: "Program Pekabaran Injil 25 Desember 2022",
          slugTitle: 'Penginjilan',
          img: 'penginjilan.jpg',
        },
    
        {
          category: "Pelayanan",
          slug: "Sekolah Minggu",
          title: "Kegiatan Sekolah Minggu gabungan di lawang 2 jan 2023 ",
          slugTitle: 'Sekolah Minggu',
          img: 'sundayschool.jpg',
        },
        {
          category: "Sekolah Hamba Tuhan",
          slug: "Traning Hamba Tuhan",
          title: "Belajar",
          slugTitle: 'traning lawang 2019',
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