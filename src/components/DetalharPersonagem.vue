<template>
  <b-row style="display: block;">
    <b-row style="display: block;">
      <h1 class="titles">{{personagem.name}}</h1>
    </b-row>
    <b-row>
      <b-col cols="3"><img alt="" style="height: 200px;" src="../assets/30-300349_new-member-new-user-icon-png.png"/></b-col>
      <b-col id="showingData">
        <div>
          <span class="titles"><strong>Name:</strong></span>
          <span class="results">{{personagem.name}}</span>
        </div>

        <div>
          <span  class="titles"><strong>Birthday:</strong></span>
          <span class="results">{{personagem.born}}</span>
        </div>

        <div>
          <span  class="titles"><strong>Etnicity:</strong></span>
          <span class="results">{{personagem.culture }}</span>
        </div>

        <div>
          <span  class="titles"><strong>Gender:</strong></span>
          <span class="results">{{personagem.gender }}</span>
        </div>
      </b-col>
    </b-row>
    <b-row><h2  class="titles">Edit your character</h2></b-row>
    <b-row>
      <b-form style="border: 1px yellow solid; width: 1500px" @submit="onSubmit">
        <b-form-group
            class="titles"
            label="Nome:"
            label-for="input-1"
            description="Nome completo do seu personagem"
        >
          <b-form-input
              id="input-2"
              v-model="personagem.name"
              required
              placeholder="Insira o nome completo do personagem"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="titles"
            label="Nascimento do personagem:"
            label-for="input-3"
            description="Ano em que seu personagem nasceu."
        >
          <b-form-input
              class="titles"
              v-model="personagem.born"
              type="date"
              required
              placeholder="Data de nasimento"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            class="titles"
            label="Etnia:"
            label-for="input-4"
            description="Qual lugar do mundo de Gelo e Fogo você vem."
        >
          <b-form-input
              class="titles"
              v-model="personagem.culture"
              type="text"
              required
              placeholder="Insira a etnia do personagem"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            class="titles"
            label="Sexo:"
            label-for="input-5"
            description="Qual o seu sexo?"
        >
          <b-form-input
              class="titles"
              v-model="personagem.gender"
              type="text"
              required
              placeholder="Insira o sexo do seu personagem"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="warning">Enviar</b-button>
      </b-form>
      <router-link :to="{name: 'PersonagensGot'}">
        <b-button variant="success">Voltar para a listagem</b-button>
      </router-link>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name : 'DetalharPersonagem',
  data(){
    return {
      id : this.$route.params.id,
      personagem : this.$route.params.personagem,
    }
  }, methods:{
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.personagem))
    },
  },
}
</script>

<style>


#showingData {
  border-radius: 15px;
  background: white;
  border: yellow 3px solid;
  padding-top: 30px;
}

.titles {
  color: yellow;
  padding-left: 10px;
}

.results {
  color: black;

}
</style>
