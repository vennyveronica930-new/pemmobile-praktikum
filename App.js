
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    // Layar utama untuk menempatkan kartu di tengah
    <View style={styles.layar}>
      {/* Kartu profil mahasiswa */}
      <View style={styles.kartu}>
        {/* Foto profil berbentuk lingkaran */}
        ```jsx
        <Image
        source={require('./assets/fotovenny.png')}
        style={styles.foto}
        />
```

        {/* Identitas mahasiswa */}
        <Text style={styles.nama}>VENNY VERONICA</Text>
        <Text style={styles.nim}>NIM: 253303620002</Text>
        <Text style={styles.prodi}>Sistem Informasi</Text>

        {/* Lencana skill dan hobi */}
        <Text style={styles.judulSkill}>SKILL</Text>
        <View style={styles.tagContainer}>
          <Text style={[styles.tag, styles.tagBiru]}>
            JavaScript
          </Text>
          <Text style={[styles.tag, styles.tagUngu]}>
            Gaming
          </Text>
        </View>

        {/* Motto pribadi */}
        <Text style={styles.quote}>
          "Terus belajar dan jangan takut mencoba."
        </Text>

        {/* Tombol bonus */}
        <Pressable
          style={styles.tombol}
          onPress={() => {}}
        >
          <Text style={styles.teksTombol}>Hubungi Saya</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Seluruh gaya tampilan didefinisikan di sini
const styles = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  kartu: {
    backgroundColor: '#1e293b',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  foto: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#38bdf8',
    marginBottom: 18,
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: 6,
  },
  nim: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 4,
  },
  prodi: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 22,
  },
  judulSkill: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e2e8f0',
    marginBottom: 12,
    letterSpacing: 1,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    marginBottom: 20,
  },
  tag: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tagBiru: {
    backgroundColor: '#2563eb',
  },
  tagUngu: {
    backgroundColor: '#7c3aed',
  },
  tagHijau: {
    backgroundColor: '#059669',
  },
  quote: {
    color: '#cbd5e1',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 22,
  },
  tombol: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 14,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  teksTombol: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
