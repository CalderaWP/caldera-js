import React, {useEffect,useRef,useState} from 'react';

/**
 * Based on https://github.com/palmerhq/the-platform/blob/master/src/Stylesheet.tsx
 */

function load({ href, media = 'all',id }) {
    return new Promise((resolve, reject) => {
        if( null === document.getElementById(id) ){
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.id = id;
            link.media = media;
            link.onload = resolve;
            link.onerror = reject;
            document.body.appendChild(link);
        }else{
            resolve();
        }

    });
}


export const WithStylesheet = ({Component,href,media,Loading}) => {
    const loaded = useRef(false);
    const [loading,setLoading] = useState(false);
    useEffect( () => {
       if( ! loaded.current && ! loading){
           setLoading(true);
           load({href,media}).then( () => {
           loaded.current=true;
              setLoading(false);
           });
       }
    },[loaded,loading,setLoading,href,media]);
    if( ! loaded.current ){
        return <Loading/>
    }
    return  <Component/>

};

