import workshop from "../../../images/workshop.jpg"
import gondol from "../../../images/gondol.jpg"
import skies from "../../../images/skies.jpg"
import rock from "../../../images/rock.jpg"






const Populerpost = ()=>{
    return(

        <div className="card">
            <h2 className="populer">Populer Posts</h2>

            <div className="post">
            <ul>
            <li>
              { <img className="lis" src={workshop} alt="wordshop" /> }
              <span className="pa">Lorem</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li>
              { <img className="lis" src={gondol} alt="gondol" /> }
              <span className="pa">Ipsum</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
            <li>
              { <img className="lis" src={skies} alt="skies" /> }
              <span className="pa">Dorum</span>
              <br />
              <span>Ultricies congue</span>
            </li>
            <li>
              {<img className="lis" src={rock} alt="rock" /> }
              <span className="pa">Mingsum</span>
              <br />
              <span>Lorem ipsum dipsum</span>
            </li>
          </ul>
        
      </div>
        </div>

    )
}
export default Populerpost;