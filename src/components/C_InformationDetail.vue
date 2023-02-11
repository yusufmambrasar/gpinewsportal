<template >
  <v-row>
    <v-col md="10" offset-md="1">
      <v-img :src="require(`../assets/${rows.source}`)" :alt="rows.title"
        :lazy-src="require(`../assets/${rows.source}`)" class="white--text align-end rounded-lg"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5">
            </v-progress-circular>
          </v-row>
        </template>
        <v-card-title>
          {{ rows.title }}
        </v-card-title>
      </v-img>


      <v-card-actions>
        <v-chip outlined small :color="settings.color" :to="`/informasi/kategori/natal`">
          {{ rows.category }}
        </v-chip>
        <span class="ml-5">{{ rows.date }}</span>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-cards-heart-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-col>
    <v-col md="10" offset-md="1">
      <div class="my-1">
        <p v-text="rows.content"></p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Video",
  computed: {
    ...mapState(['settings'])
  },
  data() {
    return {
      rows: [
        {
          id: "23453",
          category: "Misi",
          slugCategory: "misi",
          slugTitle: "misi",
          title: "Penginjilan di tempat baru, 2021",
          date: "5 Menit yang lalu",
          source: "penginjilan.jpg",
          content: "Sample Content Misi"
        },
        {
          id: "2366",
          category: "Ibadah",
          slugCategory: "ibadah",
          slugTitle: "ibadah-natal",
          title: "Ibadah Natal, jakarta timur 2022",
          date: "8 jam yang lalu",
          source: "natal.jpg",
          content: "Sample Content Ibadah Natal"
        }
      ]
    }
  },
  components: {
  },
  methods: {
    setData() {
      console.log(this.$route.params.id);
      this.rows = this.rows.filter(val => val.slugTitle == this.$route.params.id).map(e => { return e })[0];

    }
  },
  created() {
    this.setData();
  }
}
</script> 