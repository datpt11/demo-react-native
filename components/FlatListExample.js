import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modalbox";
import { SwipeListView } from "react-native-swipe-list-view";
import { data } from "../data";

export default function FlatListExample() {
  const screenWidth = Dimensions.get("window").width;

  const [movies, setMovies] = useState(data);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const modalRef = useRef(null);

  const [valueState, setValueState] = useState({
    name: "",
    imageUrl: "",
  });

  const handleChangeName = (val) => {
    setValueState((valueState) => {
      return {
        ...valueState,
        name: val,
      };
    });
  };

  const handleChangeImage = (val) => {
    setValueState((valueState) => {
      return {
        ...valueState,
        imageUrl: val,
      };
    });
  };

  const handleDelete = (id) => () => {
    const moviesFilter = movies.filter((movie) => movie.id !== id);
    setMovies([...moviesFilter]);
  };

  const handleShowModalAdd = () => {
    setIsEdit(false);
    !!modalRef && !!modalRef.current && modalRef.current.open();
  };

  const handleEdit = (id) => () => {
    if (!!modalRef && !!modalRef.current) {
      modalRef.current.open();
      const movieEdit = movies.find((movie) => movie.id === id);
      setIsEdit(true);
      if (isEdit) {
        setValueState((valueState) => ({
          ...valueState,
          name: movieEdit.name,
          imageUrl: movieEdit.imageUrl,
        }));
      }
      setId(id);
    }
  };

  const handleAdd = () => {
    if (valueState.name.length > 5) {
      if (isEdit) {
        const newMovies = [...movies].map((movie) => {
          if (movie.id === id) {
            movie.name = valueState.name;
            movie.imageUrl = valueState.imageUrl;
          }
          return movie;
        });

        setMovies(newMovies);

        setIsEdit(false);
        setValueState({ name: "", imageUrl: "" });
        !!modalRef && !!modalRef.current && modalRef.current.close();
      } else {
        const lastMovie = movies.pop();
        const newMovie = { id: lastMovie.id + 1, ...valueState };
        setMovies((prevState) => {
          return [newMovie, ...prevState];
        });
        setValueState({ name: "", imageUrl: "" });
        !!modalRef && !!modalRef.current && modalRef.current.close();
      }
    } else {
      Alert.alert("Warning", "movie name must be longer 5 characters");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#ddd",
          width: screenWidth,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginVertical: 10,
          overflow: "hidden",
        }}
      >
        <Image
          style={{ width: 100, height: 50 }}
          source={{ uri: item.imageUrl }}
        />
        <View>
          <Text numberOfLines={1}>{item.name}</Text>
        </View>
      </View>
    );
  };

  const renderHiddenItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={handleEdit(item.id)}
          style={{
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            top: 0,
            right: 75,
            width: 75,
          }}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDelete(item.id)}
          style={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            top: 0,
            right: 0,
            width: 75,
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          position: "relative",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: screenWidth,
          backgroundColor: "yellow",
          marginTop: 10,
        }}
      >
        <TouchableHighlight onPress={handleShowModalAdd} underlayColor="tomato">
          <Text>Add movie</Text>
        </TouchableHighlight>
      </View>
      <SwipeListView
        rightOpenValue={-150}
        style={{ flex: 30 }}
        data={movies}
        disableRightSwipe
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
      />
      <Modal
        ref={modalRef}
        position="center"
        backdrop
        style={{
          justifyContent: "center",
          borderRadius: Platform.OS === "ios" ? 30 : 0,
          width: screenWidth - 80,
          height: 300,
          paddingHorizontal: 20,
          shadowRadius: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}>
          New movie
        </Text>
        <TextInput
          value={valueState.name}
          placeholder="Enter movie name"
          onChangeText={handleChangeName}
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            padding: 10,
          }}
        />
        <TextInput
          value={valueState.imageUrl}
          onChangeText={handleChangeImage}
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            padding: 10,
          }}
          placeholder="Enter movie image url"
        />
        <View style={{ backgroundColor: "orange", padding: 10, marginTop: 10 }}>
          <Button onPress={handleAdd} title="Save" color="white" />
        </View>
      </Modal>
    </>
  );
}
