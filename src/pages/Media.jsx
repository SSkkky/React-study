import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import json from '../data.json';
import Item from '../component/Item';

import { motion } from 'framer-motion';

function Media(props) {
    const locate = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(function () {
        setData(json[locate.state])
    }, [locate.state]);

    return (
        <div className="container">
            <Link to="../"> ← </Link>
            <h2>{locate.state}</h2>
            <ul>
                {
                    data.map((obj, k) => {
                        return <motion.div
                            className='motion-div'
                            custom={k}
                            initial={{ x: '100%', opacity: '0' }} //초기값
                            animate={{ x: '0%', opacity: '1' }}
                            transition={{
                                type: "spring",
                                damping: 2,
                                duration: 1,
                                delay: k * 0.2,
                                repeat: Infinity

                            }}
                        >
                            <Item key={obj.name} el={obj} type={[locate.state]} />
                        </motion.div>
                    })
                }
            </ul>
        </div >
    );
}

export default Media;