var userStories = Vue.component('user-stories', {
  template: 
  `
<v-container fluid>
  <v-layout column align-center>
    <h1>User Stories</h1>
    <v-card>
      <v-card-title><h3>New User setting up the app and adding income and an expense</h3></v-card-title>
      <v-card-text>
        <h4>Background</h4>
        This user has had problems managing their finances and needed a way to keep track of what they're spending each month 
        in respect to their income.
        At this point they don't have any subscriptions so will just use this app to manage expenses.
      </v-card-text>
      <v-card-text>
        <h4>How they interact with the app</h4>
        When they first launch the app there will be no data about them. All the graphs and tables will be empty.
        The first thing they will do is enter their current balance. Each incoming or outgoing payment will effect this.
        Next they add information about their income. They will do this by navigating to the "Add income" page 
        and entering in their information. This includes a name for this income, an amount, the frequency (monthly or weekly) and a date paid.
        From here onwards they can add information about each payment they make. This will change their balance and be reflected in the graphs and tables.
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title><h3>Existing user adding a new subscription</h3></v-card-title>
      <v-card-text>
        <h4>Background</h4>
        This user has been using the app to track their finances for some time now.
        They recently took out a new repeat payment and need to update the app to reflect this.
      </v-card-text>
      <v-card-text>
        <h4>How they interact with the app</h4>
        When they open the app they'll see the main page with the graph and current balance. They'll navigate to the add repeat payment page to add the details.
        These include the name of the payment, the amount, the frequency and when the payment will be made.
        From then onwards on the date specified the money will be taken away from their balance and a transaction logged.
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title><h3>Existing user adding a payment with attached receipt</h3></v-card-title>
      <v-card-text>
        <h4>Background</h4>
        This user has been using the app to record payments from a work card so they can claim the expenses.
        As part of the expense claim they need a photo of the receipt
      </v-card-text>
      <v-card-text>
        <h4>How they interact with the app</h4>
        When they open the app they'll see the main page with the graph and current balance. They'll navigate to the add new expense page.
        Here they'll fill in all the details including name, amount, date, and category. They'll also attach a photo of the receipt which will be saved with the transaction
        When they need to view the expense and receipt again they navigate to the detailed page, tap on the relevant transaction and will be presented with the receipt
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>
  `
})