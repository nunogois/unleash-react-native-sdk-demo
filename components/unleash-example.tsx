import { useFlag, useVariant } from '@unleash/unleash-react-native-sdk'
import { View } from 'react-native'
import { ThemedText } from './themed-text'

export const UnleashExample = () => {
  const enabled = useFlag('unleash-react-native-demo')
  const variant = useVariant('unleash-react-native-demo')

  console.log(variant)

  return (
    <View style={{ gap: 4, marginBottom: 20 }}>
      <ThemedText>
        Feature:{' '}
        <ThemedText
          type='defaultSemiBold'
          style={{ color: enabled ? '#22c55e' : '#ef4444' }}
        >
          {enabled ? 'Enabled' : 'Disabled'}
        </ThemedText>
      </ThemedText>
      {variant.enabled && (
        <ThemedText>
          Variant:{' '}
          <ThemedText type='defaultSemiBold'>{variant.name}</ThemedText>
        </ThemedText>
      )}
    </View>
  )
}
