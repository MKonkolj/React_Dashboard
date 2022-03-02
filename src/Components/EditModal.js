import { useEffect, useState } from "react"
import Loading from "./Loading";

function EditModal({ editModalShow, setEditModalShow, url, id }) {

    //fetch selected user data
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState();
    
    useEffect (() => {
        fetch(url + "/" + id)
        .then (res => {
            if(!res.ok) {
                throw Error ("Response fetch error")
            } return res.json();
        }).then (data => {
            setUser(data)
            setIsLoading(false)
        }).catch (error => {
            console.log("errorčina na GET!\n" + error);
            setIsLoading(false);
            setError(error);
        })
    }, [editModalShow])

    function handleSaveUser(e) {
        e.preventDefault()
        // Add user to bd
        fetch(url + "/" + id, {
            method: "POST",
            headers: { 
                'Accept':'application/json',
                "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then (() => {
            console.log("user changes saved");
            setEditModalShow(false);
        }).catch (error => {
           console.log("errorčina na DELETE!\n" + error);
        })
    }

  return (
    <div className={editModalShow ? "edit-user-modal show" : "edit-user-modal"}>
        {isLoading && <Loading />}
        {user && (<form onSubmit={(e) => handleSaveUser(e)}>
            <p className="modal-title">{user.first_name + " " + user.last_name}</p>
            <img className="add-user-image" src={user.avatar.image_path} alt={"avatar for " + user.first_name + " " + user.last_name}/>
            <input className="modal-right-input" type="text" name="name" required value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value})}/>
            <input className="modal-right-input" type="text" name="last_name" value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value})}/>
            <input className="modal-right-input" type="email" name="email" required value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}/>
            <input className="modal-right-input" type="text" name="street" value={user.street}
            onChange={(e) => setUser({...user, street: e.target.value})}/>
            <input className="modal-right-input" type="text" name="city" value={user.city}
            onChange={(e) => setUser({...user, city: e.target.value})}/>
            <input className="modal-right-input" type="text" name="country" value={user.country}
            onChange={(e) => setUser({...user, country: e.target.value})}/>
            <input className="modal-right-input" type="password" name="password" required value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}/>
            <input className="modal-right-input" type="text" name="role" required value={user.role}
            onChange={(e) => setUser({...user, role: e.target.value})}/>
            <div className="modal-right-radio-input">
                <p>Status:</p>
                <div>
                    <input type="radio" name="status" value="Active" checked={user.status == "Active"}
                    onChange={(e) => setUser({...user, status: e.target.value})}/>
                    <label htmlFor="active">Active</label>
                </div>
                <div>
                    <input type="radio" name="status" value="Inactive" checked={user.status == "Inactive"}
                    onChange={(e) => setUser({...user, status: e.target.value})}/>
                    <label htmlFor="inactive">Inactive</label>
                </div>
            </div>
            <input className="modal-right-input" type="text" name="bankAccount" value={user.tekuci_racun}
            onChange={(e) => setUser({...user, tekuci_racun: e.target.value})}/>
            <div className="add-user-modal-btns">
                <button className="btn-clear"
                onClick={(e) => {
                    e.preventDefault()
                    setEditModalShow(false)
                }}>Cancel</button>
                <button className="btn-primary" type="submit">Save changes</button>
            </div>
        </form>)}
    </div>
  )
}

export default EditModal