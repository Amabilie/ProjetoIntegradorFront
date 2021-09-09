<template>
  <v-card elevation="2" class="area">
    <v-card-title> Acesso ao sistema </v-card-title>
    <div class="flex-container">
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
</template>

<script>
export default {};
</script>

<style >
.flex-container {
    display: flex;
    justify-content: center;
    justify-content: space-around;
}
.area {
  margin: 20px;
  width: 300px;
}
.cardLogin {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
}
</style>