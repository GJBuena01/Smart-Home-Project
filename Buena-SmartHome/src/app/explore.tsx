import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const switchTrackColors = {
  false: '#2f2f2f',
  true: '#0ea5ff',
};

export default function ExploreScreen() {
  const [lightOn, setLightOn] = useState(true);
  const [acOn, setAcOn] = useState(true);
  const [doorLocked, setDoorLocked] = useState(true);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>SmartHome</Text>
                  <View style={styles.headerUnderline} />
                </View>
        
        <Text style={styles.title}>My Devices</Text>

        <View style={styles.cardStack}>
          <View style={styles.deviceCard}>
            <View>
              <Text style={styles.deviceName}>Light</Text>
              <Text style={styles.deviceDetail}>Living Room</Text>
            </View>
            <Switch
              value={lightOn}
              onValueChange={setLightOn}
              trackColor={switchTrackColors}
              thumbColor={lightOn ? '#ffffff' : '#d1d1d1'}
            />
          </View>

          <View style={[styles.deviceCard]}>
            <View>
              <Text style={styles.deviceName}>AC</Text>
              <Text style={styles.deviceDetail}>Bedroom</Text>
            </View>
            <Switch
              value={acOn}
              onValueChange={setAcOn}
              trackColor={switchTrackColors}
              thumbColor={acOn ? '#ffffff' : '#d1d1d1'}
            />
          </View>

          <View style={styles.deviceCard}>
            <View>
              <Text style={styles.deviceName}>Door</Text>
              <Text style={styles.deviceDetail}>Front Door</Text>
            </View>
            <Switch
              value={doorLocked}
              onValueChange={setDoorLocked}
              trackColor={switchTrackColors}
              thumbColor={doorLocked ? '#ffffff' : '#d1d1d1'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 24,
  },
  header: {
    alignSelf: 'flex-start',
  },
  headerText: {
    color: '#4d64fb',
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 34,
  },
  headerUnderline: {
    height: 3,
    width: '100%',
    backgroundColor: '#53b7f1',
    marginTop: -2,
  },
  title: {
    color: '#f2f2f2',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 25,
    marginTop: 60,
  },
  cardStack: {
    gap: 14,
  },
  deviceCard: {
    minHeight: 74,
    borderRadius: 10,
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deviceName: {
    color: '#f1f1f1',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 34,
  },
  deviceDetail: {
    color: '#f1f1f1',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
  },
});
