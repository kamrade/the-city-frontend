import s from './Feed.module.css';
const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export const Feed = async () => {

  const res = await fetch(`${API_URL}/api/news?populate=preview`, {
    headers: {
      Authorization: `bearer ${API_TOKEN}`,
    }
  })

  const { data } = await res.json();

  console.log('data:', data);

  return (
    <div className={s.Feed}>
      Test
      <div>
        {data.map((item, i) => (
          <div key={i}>
            <img src={item.attributes.preview.data.attributes.url} alt="" style={{ width: '300px' }}/>
            <h3>{item.attributes.title}</h3>
            <p>{item.attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
