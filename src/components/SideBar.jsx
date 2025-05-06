export  default function SideBar(props){
  const {  handleToggleModal , data } = props;
return (
  <div className="sidebar">
    <div onClick={handleToggleModal} className="bgOverlay"></div>
    <div className="sibebarContents">
    <h2>{data?.title}</h2>
    <div className="descriptionContainer">
      <p className="descriptionTitle">
        { data?.date}
      </p>
      <p>
      {data?.explanation}
      </p>
    </div>
    <button onClick={handleToggleModal} className="closeBtn">
    <i className="fa-solid fa-arrow-right"></i>
    </button>
    </div>
  </div>
)

}
