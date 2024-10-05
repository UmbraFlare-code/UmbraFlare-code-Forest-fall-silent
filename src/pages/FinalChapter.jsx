import { useState } from "react";
import FaceChapter from "../components/FaceChapter";
import PrevNextButton from "../components/PrevNextButton";

const limit = 0;

const urls = {
    prev: '/chapter-3',
    next: '/home'
}

const FinalChapter = ({}) => {
    const [slide, setSlide] = useState(0);

    return (
        <main>
            <FaceChapter 
                title={"Final Chapter"}
                description={"El amazononas, un lugar milenario."}
                img={'/chapter-1-wall.jpg'}
                alt={"Rio en el amazonas"}
            />
            <PrevNextButton slide={slide} setSlide={setSlide} limit={limit} urls={urls} />
        </main>
    )
}

export default FinalChapter;
