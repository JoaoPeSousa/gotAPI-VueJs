<template>
  <div id="gotList">
    <b-row id="backgroundCards">
      <CriarPersonagem/>

      <img src="../assets/white-walker-5739181_1280.jpg" alt="">
      <b-row class="list">
        <h1 style="padding-left: 200px;; color: yellow">Personagens de Game of Thrones</h1>
        <b-form-input type="text" id="text-search" v-model="search"
                      placeholder="Buscar por personagem"
                      v-on:keyup.enter="buscar"
        ></b-form-input>

        <b-card-group id="man" style="padding-left: 177px;" deck>

          <b-card
              v-for="character in result || allCharacters "
              :key="character.id"
              style="min-width: 14rem; max-width: 14rem;"
              border-variant="warning"
              :header="character.name? character.name : 'Desconhecido'"
              header-bg-variant="warning"
              header-text-variant="white"
              align="center">
            <router-link tag="p"
                         :to="{ name: 'DetalharPersonagem', params: { id: character.id, personagem : character } }">
              <b-card-text><strong>Etnia:</strong> {{ character.culture ? character.culture : 'Etnia desconhecida' }}
              </b-card-text>
              <b-card-text><strong>Sexo:</strong> {{ character.gender }}</b-card-text>
            </router-link>
            <b-card-text><b-icon-trash2-fill @click="deleteCharacter(character.id)"></b-icon-trash2-fill>
            </b-card-text>
          </b-card>

        </b-card-group>
      </b-row>
    </b-row>
  </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";
import CriarPersonagem from "@/components/CriarPersonagem";

export default {
  name: "PersonagensGot",
  components: {
    CriarPersonagem
  },
  data() {
    return {
      search: "",
      result: null
    }
  },
  computed: mapGetters(["allCharacters"]),
  methods: {
    ...mapActions(["getGotCharacters", "deleteCharacter"]),
    buscar: function () {
      this.result = this.allCharacters.filter(x => x.name.includes(this.search))
      if (this.result.length == 0) {
        this.result = this.allCharacters
      }
    }
  },
  created() {
    this.getGotCharacters();
  }
}
</script>

<style>
#man:hover {
  padding-top: 20px;
}

body {
  background: black;
}


#backgroundCards {
  background: black;
}

.card {
  margin: 20px;
}

p:hover {
  cursor: pointer;
}

.list {
  margin: 20px;
}
</style>
