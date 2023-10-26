export default function VendorName({ names, id }){
    let name = names.filter((item) => item.id == id)
    return (
        <>
            {null && name[0].title}
        </>
    )
}