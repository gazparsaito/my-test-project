<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon
            aria-hidden="true"
            :icon="radioOutline"
            class="pulsate-icon"
          />
          <ion-label></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="cartOutline" />
          <ion-label></ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  cartOutline,
  ellipse,
  homeOutline,
  menuOutline,
  radio,
  radioOutline,
  square,
  triangle,
} from "ionicons/icons";
</script>
<style scoped>
.pulsate-icon {
  animation: pulsate 1.5s infinite;
}

@keyframes pulsate {
  0% {
    color: orange;
    transform: scale(1);
  }
  50% {
    color: rgba(255, 165, 0, 0.5);
    transform: scale(1.1);
  }
  100% {
    color: orange;
    transform: scale(1);
  }
}
</style>
