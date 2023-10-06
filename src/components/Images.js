import FbImageLibrary from 'react-fb-image-grid'


function Images(prop) {

    const { title, images } = prop

    return (<div>

        <p>{title}</p>
        <FbImageLibrary images={images} />
    </div>)
}

export default Images;