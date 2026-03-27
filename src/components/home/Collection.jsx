import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/collection.scss';

const Collection = () => {
    const navigate = useNavigate();

    const collectionData = [
        { id: 1, title: 'collection1', img: '/img/per1.png', path: '/Collection1' },
        { id: 2, title: 'collection2', img: '/img/per2.png', path: '/Collection2' },
        { id: 3, title: 'collection3', img: '/img/per3.png', path: '/Collection3' },
    ];

    return (
        <section className='collection'>
            <h2 className='collection-title'>collection</h2>
            
            <div className='collection-list'>
                {collectionData.map((item) => (
                    <div key={item.id} className='collection-item'>
                        <div className='img-box'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h3 className='item-name'>{item.title}</h3>
                        <button 
                            className='watch-btn' 
                            onClick={() => navigate(item.path)}
                        >
                            watch product →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collection;