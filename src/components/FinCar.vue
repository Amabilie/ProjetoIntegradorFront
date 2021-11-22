<template>
  <body>
    <div class="Flex-container">
      <div>
        <Login :cadastro="cadastro" :visibleLoginProp="visibleLoginProp" />
      </div>
      <div>
        <CadastroLoja :visibleCadastroLojaProp="visibleCadastroLojaProp" />
      </div>
    </div>
  </body>
</template>


<script>
import CadastroLoja from "./CadastroLoja.vue";
import Login from "./Login.vue"

export default {
  components: {
    CadastroLoja,
    Login,
  },
  data() {
    return {
      visibleCadastroLojaProp: false,
      visibleLoginProp: true,
    }
  },
 watch: {
   visibleLoginProp() {
     this.visibleCadastroLoja = true 
     this.visibleLoginProp = false
    }
  },
  methods: {
    cadastro() {
      this.visibleCadastroLojaProp = true
      this.visibleLoginProp = false
      this.visibleMenu = false
    },
    abreMenu() {
      this.visibleMenu = true
    }
  },
}
</script>

<style >
body {
  margin: 20px;
  height: calc(100% - 40px);
}
/* div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  } */

.flex-container {
  display: flex;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  height: calc(100% - 40px);
}
body {
  display: grid;
  flex-direction: row;
}
</style>