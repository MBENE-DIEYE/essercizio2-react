
const ItemList = ({array}) =>{
    return (
        <>
        <ul>
            {
                array.map((element,index) =>{
                    <li key={index}>{element}</li>
                })
            }
        </ul>
        </>
    )
}
export default ItemList