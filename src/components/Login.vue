<template>
<v-row>
    <v-card elevation="2"  class="card-login" v-if="visibleLogin">
      <v-card-title> Acesso ao sistema </v-card-title>
      <v-divider></v-divider>
      <div class="flex-container">
        <v-form class="login">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="CPF usuário"
                  placeholder="CPF usuário"
                  v-model="cpf"
                  v-mask="'###.###.###-##'"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Senha"
                  placeholder="Senha"
                  outlined
                ></v-text-field>
                <v-btn class="login" text color="warning"> Recuperar Senha </v-btn>
                <v-btn class="login" depressed color="success"  @click="visibleMenu = !visibleMenu, visibleLogin = !visibleLogin" > Confirmar </v-btn>
                <v-btn class="login" depressed color="primary" @click="cadastro(), this.visibleLogin = !visibleLogin"> Quero me cadastrar </v-btn> 
                             
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-card>
    <v-card elevation="2" class="card-login" v-if="visibleMenu">
    <v-card-title> Menu </v-card-title>
    <v-col>
     <v-btn depressed color="success" @click="visibleFinanciamento = !visibleFinanciamento, visibleMenu = !visibleMenu "> Financiamento </v-btn>
    </v-col>
    <v-col>
     <v-btn depressed color="success"> Cadastrar usuário </v-btn>
     </v-col>
    <v-col>
     <v-btn depressed color="success" @click="visibleRelatorio = !visibleRelatorio, visibleMenu = !visibleMenu"> Relatórios </v-btn>
     </v-col>
     <v-col>
     <v-btn depressed color="warning" @click="visibleLogin = !visibleLogin, visibleMenu = !visibleMenu"> Sair </v-btn>
     </v-col>
    </v-card>
    <v-card elevation="2" class="card-login" v-if="visibleRelatorio">
    <v-card-title> Relatórios </v-card-title>
    <v-col>
     <v-btn depressed color="success"> Lojas Cadastradas </v-btn>
     </v-col>
    <v-col>
     <v-btn depressed color="success"> Usuários Cadastrados </v-btn>
     </v-col>
     <v-col>
     <v-btn depressed color="warning" @click="visibleLogin = !visibleLogin, visibleMenu = !visibleMenu"> Voltar </v-btn>
     </v-col>
    </v-card>
    <v-card elevation="2" class="card-login" v-if="visibleFinanciamento">
       <v-card-title> Simular Financiamento </v-card-title>
        <v-col class="d-flex" cols="12" sm="12" >
       <v-text-field
                label="CPF"
                placeholder="CPF"
                v-model="cpf"
                v-mask="'###.###.###-##'"
                style="margin-right: 15px;"
                outlined
              ></v-text-field>
              <v-text-field
                label="Telefone Celular"
                placeholder="Telefone Celular"
                v-model="telefoneCelular"
                v-mask="'(##)#####-####'"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="12" sm="12" >
        <v-select
                  :items="financeiras"
                  label="Financeira"
                  outlined
                  style="margin-right: 15px;"
                ></v-select>                
        </v-col>
         <v-col class="d-flex" cols="12" sm="12" >
           <v-text-field
                label="Valor do Financiamento"
                placeholder="Valor do Financiamento"
                v-model.lazy="valorFinanciamento"
                v-money="money"
                outlined
                style="margin-right: 15px;">
           </v-text-field>
            <v-text-field
                label="Prestações"
                placeholder="Número de prestações"
                v-model="nPrestacoes"
                v-mask="'###'"
                outlined
                style="margin-right: 15px;">
           </v-text-field>
         </v-col> 
         <v-col>
           <v-btn depressed color="warning" style="margin-right: 15px;"> Cancelar </v-btn>
           <v-btn depressed color="success" @click="visibleRetornoFinanciamento = !visibleRetornoFinanciamento"> Simular </v-btn>
         </v-col>               
    </v-card>
    <v-card elevation="2" class="card-login" v-if="visibleRetornoFinanciamento">
       <v-card-title> Simulação do Financiamento </v-card-title>
        <v-col class="d-flex" cols="12" sm="12" >
       <v-text-field
                label="Valor Financiado"
                placeholder="Valor Financiado"
                v-model="valorFinanciado"
                style="margin-right: 15px;"
                disabled
                outlined
              ></v-text-field>
              <v-text-field
                label="Tarifa"
                placeholder="Tarifa"
                v-model="tarifa"
                outlined
                style="margin-right: 15px;"
                disabled
              ></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="12" sm="12" >
              <v-text-field
                label="IOF"
                placeholder="IOF"
                v-model="iof"
                outlined
                style="margin-right: 15px;"
                disabled
              ></v-text-field>
              <v-text-field
                label="Taxa Mensal"
                placeholder="Taxa Mensal"
                v-model="taxaMensal"
                outlined
                style="margin-right: 15px;"
                disabled
              ></v-text-field>
        </v-col>
        <v-col class="d-flex" cols="12" sm="12" >              
        </v-col>
         <v-col class="d-flex" cols="12" sm="12" >
           <v-text-field
                label="CET"
                placeholder="CET"
                v-model="cet"
                outlined
                style="margin-right: 15px;"
                disabled>                
           </v-text-field>
         </v-col> 
         <v-col>
           <v-btn depressed color="success" @click="visibleCadastroFinanciamento = !visibleCadastroFinanciamento, visibleFinanciamento = !visibleFinanciamento, visibleRetornoFinanciamento = !visibleRetornoFinanciamento "> Cadastrar financiamento </v-btn>
         </v-col>               
    </v-card>
    <v-card elevation="2" v-if="visibleCadastroFinanciamento">
      <v-card-title> Cadastrar Financiamento </v-card-title>
      <v-col class="d-flex" cols="12" sm="12" >
        <v-text-field
                label="Nome"
                placeholder="Nome"
                outlined
              ></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="12" >
       <v-text-field
                label="CPF"
                placeholder="CPF"
                v-model="cpf"
                v-mask="'###.###.###-##'"
                style="margin-right: 15px;"
                outlined
              ></v-text-field>
              <v-text-field
                label="Telefone Celular"
                placeholder="Telefone Celular"
                v-model="telefoneCelular"
                v-mask="'(##)#####-####'"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-text-field
                label="Financeira Selecionada"
                placeholder="Financeira"
                v-model="financeira"
                outlined
                disabled
                style="margin-right: 15px;"
              ></v-text-field>
              </v-col >
              <v-col class="d-flex" cols="12" sm="4" >
           <v-text-field
                label="Renda Mensal Bruta"
                placeholder="Renda Mensal Bruta"
                v-model.lazy="renda"
                v-money="money"
                outlined
                style="margin-right: 15px;">
           </v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" >
              <v-text-field
                label="CEP"
                placeholder="CEP"
                v-model="cep"
                v-mask="'#####-###'"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-btn color="success"> Buscar </v-btn>
              </v-col>
              
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="Logradouro"
                placeholder="Logradouro"
                outlined
              ></v-text-field>
              </v-col >
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="Número"
                placeholder="Número"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-text-field
                label="Complemento"
                placeholder="Complemento"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-text-field
                label="Bairro"
                placeholder="Bairro"
                outlined
              ></v-text-field>
              </v-col >
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="Cidade"
                placeholder="Cidade"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-select
                  :items="estados"
                  label="Estado"
                  outlined
                ></v-select>
                </v-col>
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="Telefone Celular"
                placeholder="Telefone Celular"
                v-model="telefoneCelular"
                v-mask="'(##)#####-####'"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-text-field
                label="Telefone Recado"
                placeholder="Telefone Recado"
                v-model="telefoneComercial"
                v-mask="'(##)####-####'"
                outlined
              ></v-text-field>
              </v-col>
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="E-mail"
                placeholder="E-mail"
                outlined
              ></v-text-field>
              </v-col>
            <v-col>
           <v-btn depressed color="warning" style="margin-right: 15px;"> voltar </v-btn>
           <v-btn depressed color="warning" style="margin-right: 15px;"> Cancelar </v-btn>
           <v-btn depressed color="success" > Confirmar </v-btn>
         </v-col> 

    </v-card>
  </v-row>

</template>

<script>
export default {
  props: {
    cadastro: Function,
    visibleLoginProp: []
  },
  data() {
      return {
        cpf:"",
        visibleLogin: true,
        visibleMenu: false,
        visibleFinanciamento: false,
        visibleRetornoFinanciamento: false,
        visibleCadastroFinanciamento: false,
        visibleRelatorio: false,
        telefoneCelular: "",
        valorFinanciamento: "",
        nPrestacoes: "",
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: false
        },
        financeiras: ['Sicred', 'Losango', 'Creditas', 'BCredi'],
        valorFinanciado: "R$ 25.000,00",
        tarifa: "R$ 30,00",
        iof: "R$ 3,52",
        taxaMensal: "R$ 10,00",
        cet: "R$ 35.123,20",
        financeira: "Sicred",
        cep: "",
        estados: ['Acre',
                'Alagoas',
                'Amapá',
                'Amazonas',
                'Bahia',
                'Ceará',
                'Espírito Santo',
                'Goiás',
                'Maranhão',
                'Mato Grosso',
                'Mato Grosso do Sul',
                'Minas Gerais',
                'Pará',
                'Paraíba',
                'Paraná',
                'Pernambuco',
                'Piauí',
                'Rio de Janeiro',
                'Rio Grando do Norte',
                'Rio Grande do Sul',
                'Roraima',
                'Santa Catarina',
                'São Paulo',
                'Sergipe',
                'Tocantis',
                'Distrito Federal'],
                renda: "",
      }
    },
  watch: {
    visibleLoginProp() {
    this.visibleLogin = false
    this.visibleMenu = false
  },  methods: {
    abreMenu: function() {
    this.visibleLogin = false
    this.visibleMenu = true
    }
  }
  
}


};
</script>

<style >
.card-login {
  justify-items: center;
  max-width: 450px; 
  margin: 20px auto;
}

.login {
  flex-direction: column;
  margin: 10px;
}


/* .area {
  margin: 20px;
  width: 900px;
} */
/* .cardLogin {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
} */
</style>