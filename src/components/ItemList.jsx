
const ItemList = ({array}) =>{
    return (
        <>
        <ul>
            {
                array.map((element,index) =>{
                   return <li key={index}>{element}</li>
                })
            }
        </ul>
        </>
    )
}
export default ItemList