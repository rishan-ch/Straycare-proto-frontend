import axios from "axios";
import { useState } from "react"
export default function AddAnimal(){

    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [photo, setPhoto] = useState(null)

    async function handleSubmit(event){
        event.preventDefault();

        const formdata = new FormData();
        formdata.append('name',name)
        formdata.append('breed',breed)
        formdata.append('photo',photo)

        try{
            let res = await axios.post("http://localhost:8080/api/dog/add",formdata)

            if(res.status === 200){
                console.log("success")
            }else{
                console.log("fail "+res.status)
            }

        } catch(error){
            console.log(error)
        }

    }
    return(
            <div className="flex justify-center items-center section-min-height  ">
                <form action="" onSubmit={handleSubmit} className="text-2xl w-1/4 bg-slate-500 p-10 flex flex-col gap-10">
                    <div className="flex justify-between">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter dpg's name" onChange={e=> setName(e.target.value)}/>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" placeholder="Enter breed" onChange={e=> setBreed(e.target.value)}/>
                    </div>
                    <div className="flex justify-between text-xl">
                        <label htmlFor="photo">Photo</label>
                        <input type="file" placeholder="Enter your password" onChange={e=> setPhoto(e.target.files[0])}/>
                    </div>
                    <button type="submit">Add for adoption</button>
                </form>
            </div>
    )
}