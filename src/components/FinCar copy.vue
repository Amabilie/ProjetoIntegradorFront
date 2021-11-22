<template>
<body>

    <v-card elevation="2" class="area">
      <v-card-title> Acesso ao sistema </v-card-title>
      <div class="login">
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="CPF usuário"
                  placeholder="CPF usuário"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Senha"
                  placeholder="Senha"
                  outlined
                ></v-text-field>
                <v-btn text color="warning"> Recuperar Senha </v-btn>
                <v-btn depressed color="success"> Login </v-btn>
                <div class="cardLogin">
                  <v-btn depressed color="primary"> Quero me cadastrar </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-card>
    <div class="CadastroLoja">
      <CadastroLoja />
    </div>

</body>
</template>


<script>
import CadastroLoja from "./CadastroLoja.vue";

export default {
  components: {
    CadastroLoja,
  },
};
</script>

<style >

html,
body {
  margin: 20px;
  height: calc(100% - 40px);
}
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  display: grid;
  grid-template-columns: 50% 50%;
}
/* .login {
  display: flex;
  justify-content: center;
  justify-content: space-around;
}
.area {
  margin: 20px;
  width: 900px;
}
.cardLogin {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
} */
</style>