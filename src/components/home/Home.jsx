import './home.css'
import {Link} from "react-router-dom";
function Home(){
    const technologies = [
        {'name':'C', 'path':'c/basics' , 'icon':'c.svg' },
        {'name':'C++' , 'path':'cpp/basics' , 'icon':'cpp.svg' },
        {'name':'C#', 'path':'csharp/basics' , 'icon':'csharp.svg' },
        {'name':'Docker', 'path':'docker/basics' , 'icon':'docker.svg' },
        {'name':'Express.Js', 'path':'express/basics' , 'icon':'express.svg' },
        {'name':'Java', 'path':'java/basics' , 'icon':'java.svg' },
        {'name':'JavaScript', 'path':'javascript/basics' , 'icon':'javascript.svg' },
        {'name':'Node.Js', 'path':'node/basics' , 'icon':'node.svg' },
        {'name':'PHP', 'path':'php/basics' , 'icon':'php.svg' },
        {'name':'Python', 'path':'python/basics' , 'icon':'python.svg' },
        {'name':'React', 'path':'react/basics' , 'icon':'react.svg' },
        {'name':'SQL', 'path':'sql/basics' , 'icon':'sql.svg' },
        {'name':'MongoDB', 'path':'mongodb/basics' , 'icon':'mongodb.svg' }
    ];

    return (
        <section className={'home'}>
            <div className="hero">
                <div>
                    <h1 className={'home-title'}>Stay on Track</h1>
                    <p>Working with multiple technologies is great…but it can also be a real headache. Syntax can get mixed up, and it&#39;s easy to forget how to do certain things. That’s why these notes exist, to help everyone stay on track. After all, no one can remember everything!</p>
                    <div className={'cta-container'}>
                        <a href={'#cheatsheets'}>Getting started</a>
                        <a target='_blank' href={'https://github.com/EIC95/CheatSheet.git'}>Contribute</a>
                    </div>
                </div>
                <img src={'/assets/Coder.svg'} alt={'coder-illustration'} width={250}/>
            </div>
            <div>
                <h1 id={'cheatsheets'} className={'home-title'}>Cheat Sheets</h1>
                <div className={'cheatsheets-container'}>
                    {technologies.map((tech)=>{
                        return (<Link key={tech.name} to={tech.path}><img src={`/assets/${tech.icon}`} width={76} height={76} alt={'tech-icon'}/>{tech.name}</Link>)
                    })}
                </div>
            </div>
            <hr/>
            <footer>

                <p style={{marginBottom : 10}}>Inspired by <a href='https://www.javascriptcheatsheet.org/' target='_blank' className='underline'>javascriptcheatsheet</a></p>
                <p>Made with ❤️ by <a href='https://eic.codes' target='_blank' className='underline'>eic.codes</a></p>
            </footer>
        </section>
    )
}

export default Home;