<template>
  <div class="card-container">
    <ion-card class="custom-card">
      <div class="card-content">
        <img
          class="card-image"
          alt="Silhouette of mountains"
          src="https://img.freepik.com/fotos-gratis/retrato-de-um-homem-bonito_23-2150770955.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid"
        />
        <div class="card-info">
          <div class="text-info">
            <ion-card-title style="color: #000">Diogo Silva</ion-card-title>
            <ion-card-subtitle>Membro ativo 20/05/27</ion-card-subtitle>
          </div>
        </div>
      </div>
    </ion-card>

    <ion-card class="treinos-card" @click="handleClick('Treinos')">
      <div class="card-content">
        <ion-card-title class="card-title">Treinos</ion-card-title>
      </div>
    </ion-card>

    <ion-card class="frequencia-card" @click="handleClick('Frequência')">
      <div class="card-content">
        <ion-card-title class="card-title">Frequência</ion-card-title>
      </div>
    </ion-card>

    <ion-card class="professores-card" @click="handleClick('Professores')">
      <div class="card-content">
        <ion-card-title class="card-title">Professores</ion-card-title>
      </div>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
const handleClick = (title: string) => {
  console.log(`${title} cards clicado`);
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.custom-card {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.card-image {
  padding: 10px;
  width: 35%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
}

.text-info {
  display: flex;
  flex-direction: column;
}

.menu-button {
  margin-left: auto;
}

.card-title {
  text-align: center;
  font-size: 24px;
  padding: 20px;
  margin: 0;
}

.treinos-card,
.frequencia-card,
.professores-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  text-align: center;
}
</style>
