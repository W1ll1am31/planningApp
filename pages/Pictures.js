var pictures = Vue.component('pictures', {
  template: 
  `
  <v-container fluid>
  <h1>Pictures</h1>
  <v-layout>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex
            v-for="(image, key) in images"
            :key="key"
            xs4
            @click="viewImage(image)"
          >
            <v-card flat tile>
              <v-img
                :src="imageDir + image"
                height="150px"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-layout>
<v-dialog v-model="imagePopup">
<v-layout
v-touch="{
    left: () => nextImage(),
    right: () => previousImage()
  }"
  >
  <v-img v-if="selectedImage" :src="imageDir + images[currentImage]">
    <v-btn
      dark
      small
      top
      left
      fab
      @click="imagePopup = false"
    >
      <v-icon>close</v-icon>
    </v-btn>
  </v-img>
</v-layout>
</v-dialog>
</v-container>
  `,
  data: function() {
    return {
      imageDir: "./images/",
      imagePopup: false,
      selectedImage: null,
      images: ['2.png', '3.png', 'blah.png', 'lines.png'],
      currentImage: 0
    };
  },
  methods: {
    viewImage: function(image) {
      this.imagePopup = true;
      this.selectedImage = image;
      this.currentImage = this.images.indexOf(image);
    },
    nextImage: function() {
      if(this.currentImage == this.images.length-1) {
        this.currentImage = 0;
      } else {
        this.currentImage++
      }
    },
    previousImage: function() {
      if(this.currentImage == 0) {
        this.currentImage = this.images.length -1;
      } else {
        this.currentImage--;
      }
    }
  }
});