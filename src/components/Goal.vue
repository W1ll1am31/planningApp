<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title><h1>Goals of the app</h1></v-card-title>
          <v-card-text>
            <h3>Main goals</h3>
            <ul>
              <li>The main goal of this application is to allow users to track their incoming and outgoing expenses</li>
              <li>This won't interface with any banking system but will instead rely on user input</li>
              <li>The user of the app will be able to store details of purchases along with receipts if they need to (for any kind of expense claims)</li>
              <li>They will also be able to input details on monthly subscriptions</li>
              <li>There will be a main dashboard which will show the their current <q>balance</q> and it's status (loss or gain)</li>
            </ul>
            <h3>Stretch Goals</h3>
            <ul>
              <li>Users will be able to set a weekly or monthly budget and get warned when they are approaching it</li>
              <li>Users will be able to receive suggestions about their spending. These will be able to be saved or dismissed</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>