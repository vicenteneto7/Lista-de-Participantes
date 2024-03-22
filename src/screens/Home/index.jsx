import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 6 de abril de 2024.</Text>

      <TextInput
        placeholder="Adicione um participante"
        placeholderTextColor="#ffff"
        autoCorrect={true}
        style={styles.input}
      />
    </View>
  );
}
