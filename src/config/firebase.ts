import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfb8OMmAEbmvEgirliwDoxPUYgDapYQuk",
  authDomain: "portfolio-dae28.firebaseapp.com",
  projectId: "portfolio-dae28",
  storageBucket: "portfolio-dae28.appspot.com",
  messagingSenderId: "208920908023",
  appId: "1:208920908023:web:73a970a5d4d37e64b243f2",
  measurementId: "G-TKG6EQS9M4",
};

const app = initializeApp(firebaseConfig);

import("firebase/app-check").then((a) => {
  a.initializeAppCheck(app, {
    provider: new a.ReCaptchaV3Provider(process.env.RECAPTCHA_SITE_KEY ?? ""),
    isTokenAutoRefreshEnabled: true,
  });
});

export const firestore = getFirestore(app);

export const analytics = import("firebase/analytics").then((a) => {
  if (!a.isSupported()) return;

  return a.getAnalytics(app);
});
