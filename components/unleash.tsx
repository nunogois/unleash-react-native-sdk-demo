import { FlagProvider, IConfig, useFlagsStatus } from '@unleash/unleash-react-native-sdk'
import type { PropsWithChildren } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const config: IConfig = {
  url: 'https://sandbox.getunleash.io/nuno/api/frontend',
  clientKey:
    'unleash-react-native-demo:development.c2f13edd19eb4abee4d11735d1d2187d7c1e1a3dd10c3567a7b804c6',
  refreshInterval: 5,
  appName: 'unleash-react-native-demo'
}

export const Unleash = ({ children }: PropsWithChildren) => {
  return (
    <FlagProvider config={config}>
      <FlagsReady>{children}</FlagsReady>
    </FlagProvider>
  )
}

const FlagsReady = ({ children }: PropsWithChildren) => {
  const { flagsReady, flagsError } = useFlagsStatus()

  if (flagsError) {
    return (
      <ThemedView style={styles.status}>
        <ThemedText accessibilityRole='alert'>
          Unable to load feature flags. Please try again later.
        </ThemedText>
      </ThemedView>
    )
  }

  if (!flagsReady) {
    return (
      <ThemedView style={styles.status}>
        <ActivityIndicator accessibilityLabel='Loading feature flags' />
      </ThemedView>
    )
  }

  return children
}

const styles = StyleSheet.create({
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  }
})
