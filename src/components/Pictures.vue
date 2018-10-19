<template>
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
      <v-btn
        dark
        top
        left
        small
        fab
        @click="previousImage()"
      >
        <v-icon>arrow_left</v-icon>
      </v-btn>
      <v-btn
        dark
        top
        small
        fab
        @click="nextImage()"
      >
        <v-icon>arrow_right</v-icon>
      </v-btn>
    </v-img>
  </v-dialog>
  </v-container>
</template>

<script>
module.exports = {
  data: function() {
    return {
      imageDir: "/static/img/",
      imagePopup: false,
      selectedImage: null,
      images: [],
      currentImage: 0
    };
  },
  mounted: function() {
    this.getImageList();
  },
  methods: {
    viewImage: function(image) {
      this.imagePopup = true;
      this.selectedImage = image;
      this.currentImage = this.images.indexOf(image);
      console.log("viewing " + image);
    },
    getImageList: function() {
      const con = require.context("../../static/img/", false, /\.png$/);

      con.keys().forEach(element => {
        this.images.push(element.split("/")[1]);
      });
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
};
</script>