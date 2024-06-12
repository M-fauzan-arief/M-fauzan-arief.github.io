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
            <AboutSection />
            <SkillSection />
            <section>
                <h1>Project</h1>
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

const AboutSection = () => {
    return (
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

const skills = [
    {
        tittle: "3D Modeling",
        level: "100",
    },
    {
        tittle: "Unity Programming",
        level: "80",
    },
    {
        tittle: "AR/VR Development",
        level: "80",
    },
];

const languages = [
    {
        tittle: "English",
        level: "80",
    },
    {
        tittle: "Indonesia",
        level: "100",
    },
];

const SkillSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Skills</h2>
            <div className="mt-8 space-y-4">
                {skills.map((skill, index) => (
                    <div className="w-64" key={index}>
                        <h3 className="text-xl font-bold text-gray-800">{skill.tittle}</h3>
                        <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                            <div
                                className="h-full bg-indigo-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-5xl font-bold">Languages</h2>
                <div className="mt-8 space-y-4">
                    {languages.map((language, index) => (
                        <div className="w-64" key={index}>
                            <h3 className="text-xl font-bold text-gray-800">{language.tittle}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div
                                    className="h-full bg-indigo-500 rounded-full"
                                    style={{ width: `${language.level}%` }}
                                />
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
