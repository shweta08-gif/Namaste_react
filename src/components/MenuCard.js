const MenuCard = (props) => {
    
    return <div className="menu-card">
    <h5>{props.name}</h5>
    <div>{props.price}</div>
    <div className="menu-description">{props.description}</div>
    </div>
}

export default MenuCard