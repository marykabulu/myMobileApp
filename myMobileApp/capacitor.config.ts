import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.marykabulu.mymobileapp',
  appName: 'My Mobile App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

