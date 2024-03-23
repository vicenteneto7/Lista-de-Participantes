import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState('');

  const handleParticipantAdd = async () => {
    const search = () => participants.filter( participant => participant == newParticipant)

    if (newParticipant == ''){
      return
    }

    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da participante repetido!")
      return
    } 

    setParticipants([...participants, newParticipant])
    setNewParticipant('')

    Keyboard.dismiss()
  };

  const handleParticipantRemove = (name) => {
    console.log(`você clicou no ${name}`);
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 6 de abril de 2024.</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Adicione um participante"
          placeholderTextColor="#ffff"
          autoCorrect={true}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => handleParticipantAdd()} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name="Vicente"
            onRemove={() => handleParticipantRemove("")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista.
          </Text>
        )}
      >
        
      </FlatList>
    </View>
  );
}
