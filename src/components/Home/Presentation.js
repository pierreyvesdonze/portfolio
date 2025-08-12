import PresentationItemLeft from "./PresentationItemLeft";
import PresentationItemRight from "./PresentationItemRight.js";

const Presentation = () => {
    return (
        <>
            <div style={{ display: 'flex' }} id="presentation">
                <PresentationItemLeft bgColor={'#000000f7'} />
                <PresentationItemRight bgColor={'#000000f1'} />
            </div>
        </>
    )
}

export default Presentation;