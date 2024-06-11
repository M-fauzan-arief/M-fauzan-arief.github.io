export const section = (props) => {
    const { children } = props;
    return <section className={`
            h-screen w-screen p-8 max-w-screen-2xl mx-auto
            flex flex-col items-start justify-center
            `}>{children}</section>;
};


export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <section>
                <h1>About</h1>
            </section>
            <section>
                <h1>Skill</h1>
            </section>
            <section>
                <h1>Project</h1>
            </section>
            <section>
                <h1>Contact</h1>
            </section>
        </div>
    );
};

export const AboutSection = () => {
    return(
    <section>
        <h1 className="text-6xl font-extrabold leading-snug">Hi, I'm
            <br />
            <span className="bg-white px-1 italic">Fauzan</span>
        </h1>

        <p className="text-2xl font-light mt-4">
            I'm a 3D model & AR/VR Developer Based In Surabaya

            <br />
            learn to create a 3D model
        </p>
        <button className={`bg-indigo-600 text-white py-4 px-8
        rounded-lg font-bold text-lg mt-16`}
        >
            Contact Me
        </button>
    </section >
    );  
};