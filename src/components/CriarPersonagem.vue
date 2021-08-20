<template>
  <b-row style="display:block; padding:24px;">
    <h1 style="color: yellow;padding-left: 300px;">Create your character</h1>
    <b-row>
      <b-form style="margin-left: 400px;
}" inline-block>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-input-group prepend="Nome" class="mb-4 mr-sm-4 mb-sm-0">
        <b-form-input
            id="inline-form-input-name"
            class="mb-4 mr-sm-4 mb-sm-0"
            placeholder="Insert a name"
            v-model="name"
        ></b-form-input>
        </b-input-group>

        <b-input-group style="padding-top: 20px" prepend="Sexo" class="mb-4 mr-sm-4 mb-sm-0">
          <b-form-input id="inline-form-input-gender"
                        v-model="gender"
                        placeholder="Insert the character gender"></b-form-input>
        </b-input-group>

        <b-input-group style="padding-top: 20px" prepend="Etnia" class="mb-4 mr-sm-4 mb-sm-0">
          <b-form-input id="inline-form-input-culture"
                        v-model="culture"
                        placeholder="Insert the character etinicity"></b-form-input>
        </b-input-group>

        <b-input-group style="margin-top: 20px" prepend="Nascimento" class="mb-4 mr-sm-4 mb-sm-0">
        <b-form-datepicker id="datepicker" v-model="born" class="mb-2"></b-form-datepicker>
        </b-input-group>
        <b-button style="margin-top: 20px" variant="warning" @click="createCharacter()">Save</b-button>
      </b-form>
    </b-row>
  </b-row>
</template>

<script>

import { mapActions } from "vuex";
export default {
  name : 'CriarPersonagem',
  data(){
    return { name : "",
      gender: "",
      culture: "",
      born: "",
    }
  },
  methods:{
    ...mapActions(["addCharacter"]),
    createCharacter(){
      let character = {
        "name": this.name,
        "gender": this.gender,
        "born": this.born,
        "culture": this.culture
      }
      this.addCharacter(character)
      alert('Adicionado!')
    }
  }
}
</script>

<style>

</style>
