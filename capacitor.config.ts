import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.msc.driver',
  appName: 'app-driver-management-system',
  // bundledWebRuntime: false,
  webDir: 'www',
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
