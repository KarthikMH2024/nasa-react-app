export default function SideBar(props) {
  const { handleToggleModel, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="SideBarContents">
        <h2>{data?.title}</h2>
        <div>
          <p className="descriptionTitle">{data?.date}</p>
          <p className="descriptionContainer">{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
