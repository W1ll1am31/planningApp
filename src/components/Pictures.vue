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
    <v-img v-if="selectedImage" :src="imageDir + selectedImage"></v-img>
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
        foo: {}
      }
    },
    mounted: function() {
      this.getImageList();
    },
    methods: {
      viewImage: function(image) {
        this.imagePopup = true;
        this.selectedImage = image;
        console.log("viewing " + image);
      },
      getImageList: function() {
        const con = require.context("../../static/img/", false, /\.png$/);

        con.keys().forEach(element => {
          this.images.push(element.split("/")[1])
        });
      }
    }
  }
</script>