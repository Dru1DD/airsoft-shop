import React, { FC, useState } from 'react'

export const PostLoaderPage: FC = () => {
    const [ title, setTitle ] = useState<string>('')
    const [ vendorCode, setVendorCode ] = useState<string>('')
    const [ price, setPrice ] = useState<string>('')
    const [ manufactor, setManufactor ] = useState<string>('')
    const [ model, setModel ] = useState<string>("")
    const [ availability, setAvailability ] = useState<boolean>(true)
    const [ discription, setDiscription ] = useState<string>('')
    const [ images, setImages ] = useState<any>(null)

    const submitHandler = () => {

    }
    // const sendFile = async (e: any) => {
    //     const data = new FormData()

    //     data.append('image', e.target.files[0])
        
    //     await axios.post('http://localhost:5000/upload', data, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             "Accept": "application/json",
    //             "type": "formData"
    //         }
    //     })
    //             .then(res => console.log(res))
    // }
    return (
        <div className="post-loader">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor={'titleInput'}>Название товара</label>
                    <input
                        type={'text'} 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        id={'titleInput'}
                        placeholder={"Название товара"}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'vendorInput'}>Артикул</label>
                    <input
                        type={'text'} 
                        value={vendorCode}
                        onChange={e => setVendorCode(e.target.value)}
                        id={'vendorInput'}
                        placeholder={"Артикул"}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'priceInput'}>Цена</label>
                    <input
                        type={'number'} 
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        id={'priceInput'}
                        placeholder={"Цена товара"}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'manufactorInput'}>Производитель</label>
                    <input 
                        type="string"
                        value={manufactor}
                        onChange={e => setManufactor(e.target.value)}
                        id={'manufactorinput'}
                        placeholder={"Производитель товара"}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'modelInput'}>Модель товара</label>
                    <input 
                        type={"string"}
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        id={'modelInput'}
                        placeholder={"Модель товара"}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'avaliableInput'}>Есть в наличии?</label>
                    <input 
                        type={"checkbox"}
                        checked={availability}
                        onChange={e => setAvailability(!availability)}
                        id={'avaliableInput'}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'discriptionInput'}>Описание товара</label>
                    <textarea 
                        value={discription}
                        id={'discriptionInput'}
                        onChange={e => setDiscription(e.target.value)}
                        placeholder={'Описание товара'}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={'filesInput'}>Загрузите фотографии товара</label>
                    <input type="file" onChange={e => setImages(e.target.files)}/>
                </div>

                <button onClick={submitHandler}>Submit</button>
            </form>
            <br />
            <hr />
            <h2>{`
                Title: ${title}, 
                vendorCode: ${vendorCode}, 
                price: ${price},
                manufactor: ${manufactor},
                model: ${model},
                availability: ${availability},
                discription: ${discription},
                images: ${images}`
            }</h2>
        </div>
    )
}