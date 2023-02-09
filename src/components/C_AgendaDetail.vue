<template >
  <div>
    <v-row>
      <v-col md="10" offset-md="1">
        <v-img src="../assets/mision.jpg" class="white--text align-end rounded-lg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px" lazy-src="../assets/profilemefkajim.jpg">
          <v-card-title>
            <v-container>
              <h3 class="font-weight-medium"> <v-icon class="white--text"> mdi-bell </v-icon> 25 Des 2023 </h3>
            </v-container>
            <v-container>
              Sekolah Hamba Tuhan.
            </v-container>
          </v-card-title>
        </v-img>

        <v-card-actions>
          <v-chip outlined small :color="settings.color" to="/agenda">
            Program Traning 
          </v-chip>
          <span class="ml-5"> Des 2022</span>
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
        <!-- </v-card>  -->
      </v-col>
      <v-col md="10" offset-md="1">
        <!-- <v-img class="grey darken-4 rounded-lg" src="../assets/profilemefkajim.jpg"> </v-img> -->
        <div class="my-1">
          <p>Pengajaran dan Jalan Suci
            Jalan Suci percaya akan pengajaran yang sistematik, pengabungan kebebasan Roh dengan pelajaran yang dipelajari (jangan lupa tulisan – tulisan perkamen Timotius! (2Tim 4:13). Pola Perjanjian Baru ini dikerjakan dengan sangat baik dalam Alkitab, dan tak perduli begitu banyaknya jumlah tahun – tahun yang telah berlalu, kita menyaksikan tak ada masalah untuk mengubah sesuatu yang masih terus berlangsung.
          </p>
          <p>Metode pelatihan adalah:
            1.  Non-formal. Yesus tidak pernah menjadwalkan jam kelas atau menyusun kurikulum. Dia tinggal dan hidup bersama murid-murid-Nya. Mereka belajar pada saat bekerja  (selama 3 tahun dengan maksud  mendorong belajar  dimana pemahaman dan penerapan langsung  [yaitu "otoritas, kuasa"] dari apa yang mereka pelajari merupakan tujuan).
            2.  Persekutuan yang berbasis. Dalam pelatihan Yesus kepada murid-murid-Nya, pelatihan/training  tidak bisa dipisahkan dari persekutuan. Metode training adalah persekutuan (Persekutuan yang erat mengajarkan kita kerendahan hati dan bagaimana hidup untuk Kerajaan Allah, bukan ide-ide kita sendiri).
            3.  Belajar dengan cara melakukan. Yesus mendorong para murid-Nya segera terjun ke dalam pengalaman pelayanan. Kemudian ketika mereka mempunya waktu, mereka duduk dan berbicara tentang apa yang mereka alami. Teori tidak pernah terpisah dari praktek. Kehidupan Kekristenan dan pelayanan adalah sesuatu yang kita lakukan, mujizat dan semuanya, bukanlah sekedar catatan yang kita miliki.
            4.  Hidup dalam Roh. Pelayanan Yesus dilakukan di dalam kuasa dan bimbingan Roh Kudus. Ini tentu saja merupakan pelayanan yang supranatural. Dia berkata: "Aku tidak  berkata-kata  dari diri-Ku sendiri, tetapi dari Dia yang mengutus Aku. Pekerjaan yang Aku lakukan  bukan milik-Ku, tetapi  milik-Nya" Pada Hari Kenaikan-Nya Yesus berkata: "Tunggulah sampai kamu menerima kuasa dari tempat tinggi ... dan kamu akan menjadi saksi-Ku." Sebagai murid-Nya, kita perlu belajar untuk hidup dan melayani dalam Roh Kudus.
          </p>
          <p>Training ini bertujuan mempersiapkan orang untuk tipe pelayanan Perjanjian Baru. Kami mentraining Para rasul, nabi, penginjil, gembala, guru-guru, dll (Efesus 4:11-16, 1Korintus 12:28).</p>

            <v-img src="belajar.jpg" height="400" class="grey darken-4 rounded-lg my-10">
          </v-img>

          <p>Tujuan kami adalah untuk beradaptasi dan menerapkan prinsip-prinsip ini dalam setiap situasi budaya yang memungkinkan, berdasarkan teori bahwa cara Yesus ini sengaja dipilih dan tentu saja menjadi sangat efektif. Misi Jalan Suci telah menerapkan prinsip-prinsip ini dalam beberapa latar belakang lintas budaya yang sangat berbeda di Indonesia selama lebih dari 40 tahun dengan hasil yang luar biasa.</p>
          <p>Training ini bertujuan mempersiapkan orang untuk tipe pelayanan Perjanjian Baru. Kami mentraining Para rasul, nabi, penginjil, gembala, guru-guru, dll (Efesus 4:11-16, 1Korintus 12:28).
             Tak pernah terlintas dalam perhatian Allah bahwa pelayanan harus sepenuhnya berada di tangan beberapa pendeta profesional. Tubuh Kristus tidak terdiri dari satu anggota saja, tetapi banyak anggota (1Korintus 12:12-13). Tubuh Kristus  dibangun dan bertumbuh menjadi dewasa melalui kerja sama seluruh anggota (Efesus 4:11-16).
             Oleh karena itu, kami percaya bahwa kami perlu melatih  anggota gereja biasa (awam)  untuk fungsinya yang tepat dalam Tubuh Kristus. Para pelayan Perjanjian Baru akan dilatih dengan metode-metode Perjanjian Baru.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import OtherNews from '@/components/C_OtherNews.vue';
export default {
  name: "Video",
  computed: {
    ...mapState(['settings'])
  },
  data() {
    return {
      data: []
    }
  },
  components: {
    Breadcrumbs,
    OtherNews
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
            text: 'Agenda',
            disabled: false,
            href: '/agenda',
            color: "#42A5F5"
          },
          {
            text: 'Detail Agenda',
            disabled: true,
            href: 'breadcrumbs_link_2',
            color: "#BDBDBD"
          },
        ],

      }
      this.$store.dispatch('breadcrumData', datas);
      console.log(this.$route.params) // outputs 'yay'

    }
  },
  created() {
    this.setBreadcrumsData();
  }
}
</script> 