import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {

  const handleParticipantAdd = () => {
    console.log('bico de pato')
  }


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

      <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>

    </View>
  );
}
