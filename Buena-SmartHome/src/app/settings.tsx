import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';

const switchTrackColors = {
  false: '#2f2f2f',
  true: '#0ea5ff',
};

export default function SettingsScreen() {
  const [notificationOn, setNotificationOn] = useState(true);
  const [notificationSoundOn, setNotificationSoundOn] = useState(true);
  const [vibrationOn, setVibrationOn] = useState(true);
  const [temperatureUnit, setTemperatureUnit] = useState<'C' | 'F'>('C');

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Settings</Text>

          <View style={styles.settingsList}>
            <View style={styles.row}>
              <Text style={styles.label}>Notification</Text>
              <Switch
                value={notificationOn}
                onValueChange={setNotificationOn}
                trackColor={switchTrackColors}
                thumbColor={notificationOn ? '#ffffff' : '#d1d1d1'}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Notification Sound</Text>
              <Switch
                value={notificationSoundOn}
                onValueChange={setNotificationSoundOn}
                trackColor={switchTrackColors}
                thumbColor={notificationSoundOn ? '#ffffff' : '#d1d1d1'}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Vibration</Text>
              <Switch
                value={vibrationOn}
                onValueChange={setVibrationOn}
                trackColor={switchTrackColors}
                thumbColor={vibrationOn ? '#ffffff' : '#d1d1d1'}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Temperature Unit</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Temperature unit"
                accessibilityHint="Switches between Celsius and Fahrenheit"
                onPress={() => setTemperatureUnit((unit) => (unit === 'C' ? 'F' : 'C'))}
                style={({ pressed }) => [styles.unitButton, pressed && styles.pressed]}
              >
                <Text style={styles.value}>{`°${temperatureUnit}`}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 58,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 32,
    fontWeight: '400',
    marginBottom: 56,
  },
  settingsList: {
    gap: 0,
  },
  row: {
    alignItems: 'center',
    borderBottomColor: '#d7d7d7',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 54,
  },
  label: {
    color: '#dedede',
    fontSize: 20,
    fontWeight: '400',
  },
  unitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    minWidth: 56,
  },
  value: {
    color: '#dedede',
    fontSize: 20,
  },
  pressed: {
    opacity: 0.65,
  },
});
