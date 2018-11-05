<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Justas Pupelis</h1>
        <p>Software engineer</p>
      </v-flex>
      <v-flex xs12>
        <v-layout row justify-center>
            <v-flex xs1 v-for="icon in icons" :key="icon.name" class="mx-3">
              <v-btn flat icon :href="icon.url" :target="icon.target">
                <v-icon>{{ icon.name }}</v-icon>
              </v-btn>
            </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    icons: [{ name: 'mdi-linkedin-box', url: 'https://lt.linkedin.com/in/justas-pupelis-76797545', target: '_blank' },
      { name: 'mdi-github-box', url: 'https://github.com/Pupis', target: '_blank' },
      { name: 'mdi-facebook-box', url: 'https://www.facebook.com/pupelis', target: '_blank' },
      { name: 'mdi-instagram', url: 'https://www.instagram.com/pupelis/', target: '_blank' },
    ],
  }),
};
</script>

