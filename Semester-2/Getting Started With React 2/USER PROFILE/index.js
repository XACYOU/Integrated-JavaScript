const UserProfile=({name,avatar_url,title,skillsets})=>{
    return (
        <div className="container">
        <div className="left">

            <div className="top_left">
                <h1> {name} </h1>
                <button> Follow </button>
            </div>

            <p className="title"> {title} </p>

            <div className="skills_box">
                {skillsets.map((ele,index)=>{
                    return (
                    <div className="ind_skill">
                        <img src={ele.icon}/>
                        <p> {ele.skillName} </p>      
                    </div>
                    )
                })}
            </div>

        </div>
        <div className="right">
            <img src={avatar_url} />
        </div>
        </div>
    )
}


let skillSets_arr=[
    {icon:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",skillName:"React JS"},
    {icon:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png",
    skillName:"Node JS"},
    {icon:"https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
    skillName:"Javascript"},
    {icon:"https://cdn3.iconfinder.com/data/icons/file-extension-11/512/sql-file-extension-format-digital-512.png",
    skillName:"SQL"},
    {icon:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
    skillName:"Python"},
    {icon:"https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png",
    skillName:"Mongo DB"},
    {icon:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    skillName:"React Native"},
    {icon:"https://cdn4.iconfinder.com/data/icons/tabler-vol-2/24/brand-react-native-64.png",
    skillName:"React Hooks"},
];

let img_url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Element=()=>{
    return (
        <div className="cont">
            <UserProfile name="Saurabh Negi" avatar_url={img_url} title="Software Engineer" skillsets={skillSets_arr} />
        </div>
    );
};


const rootElement=document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(<Element />)
