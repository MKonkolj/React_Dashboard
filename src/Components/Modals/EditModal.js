import { useEffect, useState, useContext } from "react"
import Loading from "../Loaders/Loading"
import { TableContext } from "../Table"

function EditModal({ editModalShow, setEditModalShow, id }) {
    // in parent:
    // {editModalShow && <div className="black-alpha fixed-center" onClick={() => setEditModalShow(false)}></div>}
    // <EditModal editModalShow={editModalShow} setEditModalShow={setEditModalShow} id={id} />
    // to callback:
    //onClick={() => {
    //     setEditModalShow(true)
    //     setId(data.id)
    //   }}

    const { url, setReRender } = useContext(TableContext);

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

    function handleUpdateUser(e) {
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
            setReRender(prevReRender => !prevReRender);
        }).catch (error => {
           console.log("errorčina na DELETE!\n" + error);
        })
    }

  return (
    <div className={editModalShow ? "edit-user-modal show" : "edit-user-modal"}>
        {isLoading && <Loading />}
        {user && (url.slice(22) == "users") && (
        <form onSubmit={(e) => handleUpdateUser(e)}>
            <p className="modal-title">{user.first_name + " " + user.last_name}</p>
            <img className="add-user-image" src={user.avatar.image_path} alt={"avatar for " + user.first_name + " " + user.last_name}/>
            <input className="modal-right-input" type="text" name="name" required value={user.first_name} placeholder="Name"
            onChange={(e) => setUser({...user, first_name: e.target.value})}/>
            <input className="modal-right-input" type="text" name="last_name" value={user.last_name} placeholder="Last name"
            onChange={(e) => setUser({...user, last_name: e.target.value})}/>
            <input className="modal-right-input" type="email" name="email" required value={user.email} placeholder="Email"
            onChange={(e) => setUser({...user, email: e.target.value})}/>
            <input className="modal-right-input" type="text" name="street" value={user.street} placeholder="Street"
            onChange={(e) => setUser({...user, street: e.target.value})}/>
            <input className="modal-right-input" type="text" name="city" value={user.city} placeholder="City"
            onChange={(e) => setUser({...user, city: e.target.value})}/>
            <input className="modal-right-input" type="text" name="country" value={user.country} placeholder="Country"
            onChange={(e) => setUser({...user, country: e.target.value})}/>
            <input className="modal-right-input" type="password" name="password" required value={user.password} placeholder="Password"
            onChange={(e) => setUser({...user, password: e.target.value})}/>
            <input className="modal-right-input" type="text" name="role" required value={user.role} placeholder="Role"
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
            <input className="modal-right-input" type="text" name="bankAccount" value={user.tekuci_racun} placeholder="Bank account"
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
        {user && (url.slice(22) == "clients") && (
            // CLIENT FORM
            <form onSubmit={handleUpdateUser}>
                <p className="modal-title">{user.client_name}</p>
                <img className="add-user-image" src="" alt="Add image"/>
                <input className="modal-right-input" type="text" name="client_name" required placeholder="Client name:"
                onChange={(e) => setUser({...user, client_name: e.target.value})}/>
                <input className="modal-right-input" type="email" name="email" required placeholder="Email:"
                onChange={(e) => setUser({...user, email: e.target.value})}/>
                <input className="modal-right-input" type="text" name="manager" placeholder="Manager:"
                onChange={(e) => setUser({...user, manager: e.target.value})}/>
                <input className="modal-right-input" type="number" name="manager_factor"
                onChange={(e) => setUser({...user, manager_factor: e.target.value})}/>
                <div className="modal-right-radio-input">
                    <p>Payment method:</p>
                    <div>
                        <input type="radio" name="paymentMethod" value="PayPal" checked={user.paymentMethod == "PayPal"}
                        onChange={(e) => setUser({...user, paymentMethod: e.target.value})}/>
                        <label htmlFor="PayPal">PayPal</label>
                    </div>
                    <div>
                        <input type="radio" name="paymentMethod" value="wireTransfer" checked={user.paymentMethod == "wireTransfer"}
                        onChange={(e) => setUser({...user, paymentMethod: e.target.value})}/>
                        <label htmlFor="wireTransfer">Wire transfer</label>
                    </div>
                    <div>
                        <input type="radio" name="paymentMethod" value="bitcoin" checked={user.paymentMethod == "bitcoin"}
                        onChange={(e) => setUser({...user, paymentMethod: e.target.value})}/>
                        <label htmlFor="bitcoin">Bitcoin</label>
                    </div>
                </div>
                <div className="add-user-modal-btns">
                    <button className="btn-clear"
                    onClick={(e) => {
                        e.preventDefault()
                        setEditModalShow(false)
                    }}>Cancel</button>
                    <button className="btn-primary" type="submit" >Add user</button>
                </div>
            </form>
        )}
    </div>
  )
}

export default EditModal