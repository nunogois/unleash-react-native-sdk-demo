import { useFlag } from '@unleash/unleash-react-native-sdk'
import { ThemedText } from './themed-text'

export const UnleashExample = () => {
  const enabled = useFlag('unleash-react-native-demo')

  return (
    <ThemedText>
      {enabled ? 'Feature is enabled!' : 'Feature is disabled!'}
    </ThemedText>
  )
}
