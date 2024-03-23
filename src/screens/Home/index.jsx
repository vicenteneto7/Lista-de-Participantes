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
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState("");

  const handleParticipantAdd = async () => {
    const search = () => participants.filter((participant) => participant == newParticipant);

    if (newParticipant == "") {
      return;
    }

    if (participants.includes(newParticipant)) {
      return Alert.alert("Atenção", "Nome da participante repetido!");
      
    }

    setParticipants([...participants, newParticipant]);
    setNewParticipant("");

    Keyboard.dismiss();
  };

  const handleParticipantRemove = (name) => {
    console.log(`você clicou no ${name}`);
  };

  useEffect(() => {
    const loadData = async () => {
      const participant = await AsyncStorage.getItem("participant");
      if (participant) {
        setTasks(JSON.parse(participant));
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      AsyncStorage.setItem("participants", JSON.stringify(participants));
    };
    saveData();
  }, [participants]);

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
          onChangeText={text => setNewParticipant(text)}
          value={newParticipant}
        />

        <TouchableOpacity
          onPress={() => handleParticipantAdd()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista.
          </Text>
        )}
      />
    </View>
  );
}
