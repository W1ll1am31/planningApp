<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      clipped
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-tile>
          <v-btn
            icon
            light
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>
        </v-list-tile>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
          @click="onLinkClicked(item)"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter);

  export default {
    data () {
      return {
        cordova: Vue.cordova,
        drawer: false,
        items: [{
          icon: 'home',
          title: 'Home',
          link: '/'
        },
        {
          icon: 'golf_course',
          title: 'Goals',
          link: 'goal'
        },
        {
          icon: 'comment',
          title: 'Reviews',
          link: 'reviews'
        },
        {
          icon: 'call_split',
          title: 'Comparison',
          link: 'comparison'
        },
        {
          icon: 'memory',
          title: 'Technical Challenges',
          link: 'challenges'
        },
        {
          icon: 'photo_library',
          title: 'Pictures',
          link: 'pictures'
        }],
        miniVariant: false,
        title: 'Planning Application'
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      },
      onLinkClicked: function(item) {
        let link = item.link;
        this.drawer = false;
        this.$router.push(link);
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
