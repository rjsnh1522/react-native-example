import { Stack } from 'expo-router/stack';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="login" options={{ headerShown: true }} />
        <Stack.Screen name="signup" options={{ headerShown: true }} />
      </Stack>
    
  );
}
