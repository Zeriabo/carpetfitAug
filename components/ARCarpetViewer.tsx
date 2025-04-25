import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import {ArViewerView} from 'react-native-ar-viewer';

const ARCarpetViewer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modelPath, setModelPath] = useState<string | null>(null);

  const handleImageSelection = (imageName: string) => {
    setSelectedImage(imageName);

    // Set model path based on platform model="carpet2.usdz"
    const modelFile = Platform.OS === 'android' ? 'dice.usdz' : 'dice.usdz';

    setModelPath(modelFile);
    console.log('Model path set:', modelFile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AR Carpet Viewer</Text>

      {/* Image Selection */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImageSelection('1.png')}>
          <Image
            source={require('../assets/images/1.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImageSelection('2.png')}>
          <Image
            source={require('../assets/images/1.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      {/* AR Viewer */}
      {modelPath && (
        <ArViewerView
          style={styles.arView}
          model={modelPath}
          lightEstimation
          manageDepth
          allowRotate
          allowScale
          allowTranslate
          disableInstructions={false}
          disableInstantPlacement={false}
          onStarted={() => console.log('AR Started with model:', modelPath)}
          onEnded={() => console.log('AR Ended')}
          onModelPlaced={() => console.log('Model Placed')}
          onModelRemoved={() => console.log('Model Removed')}
          planeOrientation="horizontal"
        />
      )}

      {/* Display selected image info */}
      {selectedImage && (
        <Text style={styles.selectedText}>
          Selected Carpet: {selectedImage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  arView: {
    flex: 1,
  },
  selectedText: {
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
});

export default ARCarpetViewer;
