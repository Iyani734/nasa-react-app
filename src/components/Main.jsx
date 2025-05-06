import { useState , useEffect} from "react";

export default function Main(props){
  const{ data }= props ;

  const [imageValue, setImage] = useState(null); // null to handle unset state

  useEffect(() => {
    if (data.media_type === "video") {
      setImage(false);
    } else if (data.media_type === "image") {
      setImage(true);
    } else {
      setImage(null);
    }
  }, [data.media_type]);
  return (
    // <div className="imgContainer">
    //   <img src={data.url} alt={data.title || "bg-img"} className="bgImage" />
      
    //   </div>
    <div>
    { imageValue ? (
      <img src={data.url} alt={data.title} className="bgImage" />
    ) : !imageValue ? (
      <div className="videoWrapper">
        <iframe
          src={data.url}
          title={data.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ) : (
      <p>Unsupported media type</p>
    )}
    </div>
  )
}