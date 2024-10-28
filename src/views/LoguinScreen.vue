<template>
  <ion-page>
    <div v-if="!loading" class="login-container">
      <img
        src="../../img/LOGOVERME.png"
        alt="Logo"
        class="logo"
        style="width: 300px"
      />
    </div>

    <div v-if="!loading" class="login-container">
      <ion-card class="login-form-card">
        <ion-card-content>
          <ion-item class="input-item">
            <ion-input placeholder="Username" type="email"></ion-input>
          </ion-item>
          <ion-item class="input-item">
            <ion-input placeholder="Password" type="password"></ion-input>
          </ion-item>

          <div class="remember-me">
            <ion-checkbox></ion-checkbox>
            <label>Lembrar-me</label>
            <a class="forgot-password">Esqueceu a senha?</a>
          </div>

          <ion-button expand="block" @click="login" class="login-button">
            Entrar
          </ion-button>

          <p class="create-account">
            Não tem uma conta? <a href="#">Inscrever-se</a>
          </p>

          <p class="social-login-title">Logar Com</p>
          <div class="logos-login">
            <img src="../../img/google.png" alt="" /> 
            <img src="../../img/facebook.png" alt="" />
            <img src="../../img/x.png" alt="" /> 
          </div>
        </ion-card-content>
      </ion-card>
    </div>

    <div v-if="loading" class="spinner-container">
      <ion-spinner name="crescent"></ion-spinner>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonItem,
  IonInput,
  IonButton,
  // IonIcon,
  IonCard,
  IonCardContent,
  IonSpinner,
  IonCheckbox,
} from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);

const login = () => {
  loading.value = true;
  setTimeout(() => {
    router.push("/tabs/tab1");
  }, 2000);
};
</script>

<style scoped>
.logos-login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
}

.logos-login img {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #1a1a40;
}

.login-form-card {
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: transparent;
  border-radius: 12px;
}

.input-item {
  margin: 10px;
  --placeholder-color: black;
  --padding-start: 15px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.ion-input {
  --placeholder-color: rgb(247, 247, 247);
}

.login-button {
  --ion-color-primary: #ff0000;
  color: rgb(0, 0, 0);
  border-radius: 25px;
  margin-top: 20px;
}

.remember-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.forgot-password {
  color: #ff0000;
  text-decoration: none;
  font-weight: bolder;
}

.create-account {
  text-align: center;
  margin-top: 15px;
}

a {
  background-color: transparent;
  color: #ff0000;
  font-weight: bolder;
  text-decoration: none;
}

.social-login-title {
  text-align: center;
  margin-top: 20px;
  color: #6c757d;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.social-icon {
  font-size: 30px;
  color: #6c757d;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
