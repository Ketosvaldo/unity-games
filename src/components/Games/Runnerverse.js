import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './Game.css';
function Runnerverse() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "build/Runnerverse.loader.js",
        dataUrl: "build/Runnerverse.data",
        frameworkUrl: "build/Runnerverse.framework.js",
        codeUrl: "build/Runnerverse.wasm",
    });
    
    const loadingPercentage = Math.round(loadingProgression * 100);

    return (
        <div className="container">
            {
                isLoaded === false && (
                <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
                </div>
                )
            }
            <Unity className="unity" unityProvider={unityProvider}/>
        </div>
    );
}

export default Runnerverse;