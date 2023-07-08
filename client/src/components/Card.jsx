import Avatar from "./Avatar"
import CardFrame from "./CardFrame"
import Description from "./Description"
import Host from "./Host"
import Rating from "./Rating"
import Space from "./Space"
import Stay from "./Stay"

const Card = ({rating,city,photo,superHost,beds,title,type}) => {
    return (
        <div className="card">
            <CardFrame>
                <Stay country={city} stay={12} />
                <Avatar src={photo} />
                <div className="info flex align-center space-between">
                    {superHost ? <Host superhost={'SUPER HOST'} /> :""}
                    <Space space={type} numBed={beds=== null ? "" : `${beds} bed`} />
                    <Rating rating={rating} />
                </div>
                <Description desc={title}/>
            </CardFrame>
        </div>
    )
}


export default Card
