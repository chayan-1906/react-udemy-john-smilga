import React, {useState} from 'react'

export const Tour = ({tour, removeTour}) => {
    const {id, name, image, price, info} = tour

    const [readMore, setReadMore] = useState(false);

    return (
        <article className='single-tour'>
            <img src={image} alt={name}/>
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p style={{
                    'fontSize': '1rem',
                    'textTransform': 'none',
                    'fontWeight': 'normal',
                    'letterSpacing': 'normal',
                    'lineHeight': '1.3rem',
                    'textAlign': 'justify'
                }}>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less!' : 'read more'}
                    </button>
                </p>
                <button className='delete-btn' onClick={() => removeTour(id)}>not interested
                </button>
            </footer>
        </article>
    )
}
