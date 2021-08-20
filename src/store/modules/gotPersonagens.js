import axios from "axios";

const state = {
    characters: []
};

const getters = {
   allCharacters: state => state.characters,
};

const actions = {
    getGotCharacters({ commit }) {
        axios.get(
            "https://anapioficeandfire.com/api/characters?page=30&pageSize=35"
        ).then((response) => {
            const characters = response.data.map(char => {
                const id = char.url.split('/').pop();
                return {
                    id,
                    ... char
                };
            })
            commit('getGotCharacters', characters);
        });

    },

    addCharacter({ commit }, characters){
        characters.id = 1051

        commit('addCharacter', characters);
    },
    deleteCharacter({ commit }, id){
        commit('deleteCharacter', id);
    },
    updateCharacter({ commit }, updCharacter) {
        commit("updateUser", updCharacter);
    },

}

const mutations = {
    getGotCharacters: (state, data) => (state.characters = data),
    addCharacter: (state, data) =>   state.characters.push(data),
    deleteCharacter: (state, id) => {
        state.characters = state.characters.filter(u => u.id !== id)
    },
    updateCharacter: (state, data) => {
        const index = state.characters.findIndex(t => t.id === data.id)
        if (index !== -1) {
            state.characters.splice(index, 1, data);
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
};
