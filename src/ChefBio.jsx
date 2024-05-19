
function ChefBio(props) {

    return(
        <div class="bio">
            <img src={props.chefImg} class="chefImg"></img>
            <h1>{props.chefName}</h1>
            <p>{props.chefAbout}</p>
        </div>

    );

}

export default ChefBio