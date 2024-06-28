import { useState, useEffect} from 'react'

import { FBXLoader } from 'three-stdlib'

const useFbxloader = (modelUrl, animationUrl) => {
    const [model, setModel] = useState(null);
    const [animations, setAnimations] = useState([]);
  
    useEffect(() => {
      const loader = new FBXLoader();
  
      // Load the model
      loader.load(modelUrl, (object) => {
        setModel(object);
      });
  
      // Load the animations
      if (animationUrl) {
        loader.load(animationUrl, (object) => {
          setAnimations(object.animations);
        });
      }
    }, [modelUrl, animationUrl]);
  
    return { model, animations };
  };
  
  export default useFbxloader;