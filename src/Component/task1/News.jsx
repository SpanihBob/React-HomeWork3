import React from 'react';

function News(props) {
    const news = [
        {title: "title 1", news: "news 1", img: "https://avatars.mds.yandex.net/get-zen_doc/119173/pub_592f2b518e557dedf2436f5d_592f2bbcd7d0a6f53d9a3783/scale_1200"},
        {title: "title 2", news: "news 2", img: "https://im0-tub-ru.yandex.net/i?id=aed5da53890eb483e85f248612edea2f-l&n=13"},
        {title: "title 3", news: "news 3", img: "https://kartinkin.net/uploads/posts/2020-07/1593716081_39-p-foni-s-izhevskom-51.jpg"},
    ]
    const id = props.match.params.id.replace(/[^\d+]/i, '');
    
    return (
    <div>
            <div> 
                <h3>{news[id].title}</h3>
                <img src={news[id].img} alt="" />
                <p>{news[id].news}</p>
            </div>
    </div>
    );
    }
export default News;