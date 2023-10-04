
export const Card = (e) => {
  return (
    <div className="card">
        <img src={e.e.photo} alt="" />
        <div className="info">
            <p>{e.e.superHost ? <span>SUPER HOST</span>:''} {e.e.type} {e.e.beds ===null?'':('. '+e.e.beds+' beds')}</p>
            <div className="rating">
            <p className="material-symbols-outlined">stars</p>
            <p>{e.e.rating}</p>
            </div>
        </div>
        <p>{e.e.title}</p>
    </div>
  )
}
