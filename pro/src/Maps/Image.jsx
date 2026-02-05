import myImage from './image.png'
function Image(){

    const imageStyle = {
    width: '300px',
    height: '300px',

    }
    return(
        <>
        <div className="NukeTown">
        <img src={myImage} style={imageStyle}/>
        </div>
        </>
    );
}
export default Image