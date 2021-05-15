import React, {useRef, useEffect} from 'react';
import {links} from './data';


const Links = (props) => {

    const linksRef = useRef(null);
    const linksContainerRef = useRef(null);

    useEffect(()=>{
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if(props.show){
            linksContainerRef.current.style.height = `${linkHeight}px`
        }else{
            linksContainerRef.current.style.height = '0px'
        }
        console.log(props);
    },[props])

    return(
        <div className='nav-links' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
                {links.map((link) => {
                    const{url, text, id} = link;
                    return(
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

};

export default Links;