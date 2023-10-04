import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [expensiveWatches, setdata] = useState([]);

    useEffect(() => {
        fetch('https://watchbackend.onrender.com/')
            .then((data) => data.json())
            .then((result) => setdata(result))
    }, []);

    return (
        <>
            {
                expensiveWatches.map((items) => {
                    const { _id, img, name, priceUSD, title, description } = items;
                    return (
                        <a href={_id} target='_blanck' key={_id} className='CartLink'>
                            <div className='MainCart'>
                                <div className='MainCartimg'>
                                    <img src={img} className='Main'></img>
                                </div>
                                <br />
                                <div>
                                    <h3>{title}</h3>
                                    <br />
                                    <p><b>$ {priceUSD.toLocaleString('en-US')}</b></p>
                                </div>

                            </div>
                        </a>
                    )
                })
            }
        </>
    );
}

export default Cart;
