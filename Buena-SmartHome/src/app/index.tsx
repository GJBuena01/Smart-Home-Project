import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SmartHome</Text>
          <View style={styles.headerUnderline} />
        </View>

        <Text style={styles.dashboardTitle}>Dashboard</Text>

        <View style={styles.cardStack}>
          <View style={styles.tempcard}>
            <Text style={styles.cardText}>🌡️ Living Room</Text>
            <Text style={styles.cardTextRight}>26°C</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>💡 Light</Text>
            <Text style={styles.cardTextRight}>ON</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>❄️ AC</Text>
            <Text style={styles.cardTextRight}>24°C</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>🚪 Door</Text>
            <Text style={styles.cardTextRight}>LOCKED</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>📷 CCTV</Text>
            <Text style={styles.cardTextRight}>ACTIVE</Text>
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
    fontWeight: '700',
    lineHeight: 34,
  },
  headerUnderline: {
    height: 3,
    width: '100%',
    backgroundColor: '#53b7f1',
    marginTop: -2,
  },
  dashboardTitle: {
    color: '#e8e8e8',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 22,
  },
  cardStack: {
    gap: 20,
  },
  card: {
    height: 56,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#a6a6a6',
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tempcard: {
    height: 100,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#f1f1f1',
    fontSize: 17,
    fontWeight: '400',
  },
  cardTextRight: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: '900',
  },
});
