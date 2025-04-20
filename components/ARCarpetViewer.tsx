import React, {useState} from 'react';
import {View, Platform, Text, TouchableOpacity, Image} from 'react-native';
import {ArViewerView} from 'react-native-ar-viewer';

const ARCarpetViewer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modelPath, setModelPath] = useState<string | null>(null);

  const handleImageSelection = (image: string) => {
    setSelectedImage(image);
    switch (image) {
      case '1.png':
        setModelPath(
          Platform.select({
            ios: require('../assets/models/carpet2.usdz'),
          }),
        );
        break;
      case '2.png':
        setModelPath(
          Platform.select({
            ios: require('carpet2.usdz'),
          }),
        );
        break;
      default:
        setModelPath(null);
        break;
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', marginTop: 20}}>AR Carpet Viewer</Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={() => handleImageSelection('1.png')}>
          <Image
            source={require('../assets/images/1.png')}
            style={{width: 100, height: 100, margin: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImageSelection('2.png')}>
          <Image
            source={require('../assets/images/1.png')}
            style={{width: 100, height: 100, margin: 10}}
          />
        </TouchableOpacity>
      </View>

      {modelPath && (
        <ArViewerView
          style={{flex: 1}}
          model={modelPath}
          lightEstimation={true}
          manageDepth={true}
          allowRotate={true}
          allowScale={true}
          allowTranslate={true}
          disableInstructions={false}
          disableInstantPlacement={false}
          onStarted={() => console.log('AR Started ' + modelPath)}
          onEnded={() => console.log('AR Ended')}
          onModelPlaced={() => console.log('Model Placed')}
          onModelRemoved={() => console.log('Model Removed')}
          planeOrientation="horizontal"
        />
      )}

      {/* Optional: Display selected image */}
      {selectedImage && (
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Selected Carpet: {selectedImage}
        </Text>
      )}
    </View>
  );
};

export default ARCarpetViewer;
