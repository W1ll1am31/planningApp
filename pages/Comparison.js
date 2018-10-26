var comparison = Vue.component('comparison', {
  template: 
  `
<v-container fluid>
<v-layout column align-center>
<h1>Comparison with existing apps</h1>
<v-card>
  <v-card-title><h3>Mint</h3></v-card-title>
  <v-card-text>
    I will be comparing my idea for an app with <a href="https://www.mint.com/">Mint</a>.
    Mint is a sophisticated finance tracker which is used by millions worldwide
    Below are a list of features and which app implements them (Mine, Mine or Both)
  </v-card-text>
  <v-data-table
    :headers="headers"
    :items="features"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.app }}</td>
    </template>
  </v-data-table>
</v-card>
</v-layout>
</v-container>
  `,
  data: function() {
    return {
      headers: [
        {
          text: 'Application Feature',
          align: 'left',
          value: 'name'
        },
        { text: 'What app can do it?', value: 'app' }
      ],
      features: [
        {
          value: false,
          name: 'Notification of upcoming bills',
          app: "Mint",
        },
        {
          value: false,
          name: 'Tracking incoming money',
          app: "Both",
        },
        {
          value: false,
          name: 'Store receipt pictures/details',
          app: "Mine",
        },
        {
          value: false,
          name: 'Budgeting functionality',
          app: "Both",
        },
        {
          value: false,
          name: 'Links to bank account',
          app: "Mint",
        },
        {
          value: false,
          name: 'Calculate credit score',
          app: "Mint",
        },
        {
          value: false,
          name: 'Weekly or monthly budget',
          app: "Mine",
        }
      ]
    }
  }
})