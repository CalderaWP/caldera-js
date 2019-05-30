import React, {Fragment, useEffect, useRef, useState} from 'react';

/**
 * Add a stylesheet to header
 *
 * Based on https://github.com/palmerhq/the-platform/blob/master/src/Stylesheet.tsx
 */
function addStyleSheetToDom({ href, media = 'all',id }) {
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

/**
 * HOC to load a component after appending a stylesheet to DOM
 *
 * @param children
 * @param href
 * @param media
 * @param Loading
 * @returns {*}
 * @constructor
 */
export const WithStylesheet = ({children,href,media,Loading}) => {
    const loaded = useRef(false);
    const id = useRef(`caldera-loaded-style-${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}`);
    const [loading,setLoading] = useState(false);
    useEffect( () => {
       if( ! loaded.current && ! loading){
           setLoading(true);
           addStyleSheetToDom({href,media,id}).then( () => {
           loaded.current=true;
              setLoading(false);
           });
       }
    },[loaded,loading,setLoading,href,media]);
    if( ! loaded.current ){
        return <Loading/>
    }
    return  <Fragment>
        {children}
    </Fragment>

};

