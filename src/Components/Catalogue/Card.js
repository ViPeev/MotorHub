export default function Card({ _id }) {
  const href = `/details/${_id}`;

  return (
    <a href={href}>
        <img src="" alt="" />
      <div>
        <img src="" alt="" />
        <h6>VW GOLF</h6>
        <p>1.9 TDI</p>
        <p>Diesel</p>
        <p>300000 km</p>
      </div>
    </a>
  );
}
