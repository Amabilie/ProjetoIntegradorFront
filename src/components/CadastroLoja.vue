<template>
  <v-card elevation="2" class="area" v-if="visibleCadastroLoja">
    <v-card-title> Cadastro de Loja </v-card-title>
    <v-divider></v-divider>
      <v-form>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="CNPJ"
                placeholder="CNPJ"
                v-model="cnpj"
                v-mask="'##.###.###/####-##'"
                style="margin-right: 15px;"
                required
                outlined
              ></v-text-field>
              <v-text-field
                label="Razão Social"
                placeholder="Razão Social"
                outlined
              ></v-text-field>
              </v-col >
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
                <v-select
                  :items="bancos"
                  label="Banco"
                  outlined
                  style="margin-right: 15px;"
                ></v-select>
                <v-text-field
                label="Número da Agência"
                placeholder="Número da Agência"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
                <v-text-field
                label="Número da Conta Corrente"
                placeholder="Número da Conta Corrente"
                outlined
              ></v-text-field>
              </v-col >
              <v-col
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-text-field
                label="CEP"
                placeholder="CEP"
                v-model="cep"
                v-mask="'#####-###'"
                outlined
                style="margin-right: 15px;"
              ></v-text-field>
              <v-btn color="success"> Buscar </v-btn>
              </v-col >
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
                label="CPF Responsável"
                placeholder="CPF Responsável"
                v-model="cpf"
                v-mask="'###.###.###-##'"
                style="margin-right: 15px;"
                outlined
              ></v-text-field>
              <v-text-field
                label="Nome do Responsável"
                placeholder="Nome do Responsável"
                outlined
              ></v-text-field>
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
                label="Telefone Comercial"
                placeholder="Telefone Comercial"
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
              <v-col
                class="d-flex"
                cols="12"
                sm="12"
              >
              <v-text-field
                label="Senha"
                placeholder="Senha"
                style="margin-right: 15px;"
                outlined
              ></v-text-field>
              <v-text-field
                label="Re-digite sua senha"
                placeholder="Re-digite sua senha"
                outlined
              ></v-text-field>
              </v-col>
                            
              <v-btn text color="warning" style="margin-right: 15px;" @click="cancelar"> Cancelar  </v-btn>
              <v-btn depressed color="success" @click="prosseguir"> Confirmar </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
  </v-card>
  
</template>

<script>
export default {
    props: ['visibleCadastroLojaProp'],
  data() {
    return {
      cnpj:"",
      cpf:"",
      cep:"",
      telefoneComercial:"",
      telefoneCelular:"",
      visibleCadastroLoja: false,
      bancos: ['104 - Caixa Econômica Federal', 
                '237 - Banco Bradesco S.A.',
                '341 - Banco Itaú S.A.',
                '399 - HSBC Bank Brasil S.A. – Banco Múltiplo',
                '422 - Banco Safra S.A.',
                '453 - Banco Rural S.A.',
                '633 - Banco Rendimento S.A.',
                '746 - Banco Modal S.A.',
                '477 - Citibank N.A.',
                '062 - Hipercard Banco Múltiplo S.A.',
                '409 - UNIBANCO – União de Bancos Brasileiros S.A.',
                '230 - Unicard Banco Múltiplo S.A.',
                '001 - Banco do Brasil S.A.',
                '033 - Banco Santander (Brasil) S.A.'],
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
                'Distrito Federal']

    }
  },
  watch: {
    visibleCadastroLojaProp() {
    this.visibleCadastroLoja = true
    }
  },
methods: {
    cancelar() {
        this.visibleCadastroLoja = false
        this.$emit('visibleLoginProp')
    },
    prosseguir() {
      this.visibleCadastroLoja = true
    }
  
}
};
</script>

<style >
 .flex-container {
  grid-column-gap: 10px;
} 

.area {
  margin: 20px auto;
  width: 900px;
  grid-column-gap: 10px;    
  align-items: center;
} 
/* .cardLogin {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
} */
</style>