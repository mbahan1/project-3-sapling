import "./styles.css";
import saplingFlower from '../../assets/saplingFlower.png'

export default function AppDescription() {
    return (
       
        <div className="appDescriptionComponent">
            <div className="manifestation">
                <h3 className="manifestHeader">manifest<br></br> </h3>
                <h4 className="prounounce"> ma-nuh-fest | verb</h4>
                <hr></hr>
                <p>think it<br></br> believe it<br></br> write it down <br></br> ask the universe for it <br></br> make it happen</p>

            </div>

            <div className="howTo">

            <img className="saplingFlower" src={saplingFlower} alt =""/>
            <h4 className="bottomText">Use Sapling for<br></br>  your daily mainifestation, <br></br> give others kudos, <br></br> and send positive vibrations into the world around you</h4>
            <h3 className="energy">Everything is <em>energy</em> and that's all there is to it</h3>


            </div>
        </div>

        


     
    )
}