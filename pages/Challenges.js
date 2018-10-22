var challenges = Vue.component('challenges', {
  template:
    `<v-container fluid>
  <v-layout column align-center>
    <v-card>
      <v-card-title>
        <h1>Potential Technical Challenges</h1>
      </v-card-title>
      <v-card-text>
        <h3>Usability</h3>
        <ul>
          <li>Ensuring the display functions effectivly on multiple screen sizes</li>
          <li>Ensuring the app is intuitive to navigate so the user is never confused about how to use it</li>
          <li>Keeping the data screen simple enough so it isn't cluttered but comprehensive enough so it call all be entered in the same place</li>
        </ul>
        <h3>Functionality</h3>
        <ul>
          <li>Saving the textual data: Current plan is to use an sqllite database but this needs futher evaluation</li>
          <li>Accessing the camera and saving the images in an easy and efficient way</li>
          <li>The app needs to run without noticable lag else it will result in a poor user experiance</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>`
})