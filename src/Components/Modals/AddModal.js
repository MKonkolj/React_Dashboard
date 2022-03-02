
import { useState, useContext } from "react"
import { AppContext } from "../../App"

function AddModal({ addModalShow, setAddModalShow }) {
    // in parent:
    // {addModalShow && <div className="black-alpha fixed-center" onClick={() => setAddModalShow(false)}></div>}
    // <AddModal addModalShow={addModalShow} setAddModalShow={setAddModalShow} />
    // to callback:
    // onClick={() => setAddModalShow(true)}

    const { url, reRender, setReRender } = useContext(AppContext);

    const avatar = {
        image_path: "./images/profile-images/ben-parker.jpg",
        image_alt: "Profile image of Lorem Ipsum",
    }

    const clientAvatar = "https://media.istockphoto.com/photos/smart-home-symbol-picture-id1314037715?k=20&m=1314037715&s=612x612&w=0&h=hDYBWJEgIP66xyqwKPw9UbHLg6g1WhcKENjLgRQbs1s="

    const [newUser, setNewUser] = useState({
        avatar: avatar,
        first_name: "",
        last_name: "",
        email: "",
        street: "",
        city: "",
        country: "",
        password: "",
        role: "",
        status: "Active",
        tekuci_racun: ""
    })

    const [newClient, setNewClient] = useState({
        avatar: clientAvatar,
        client_name: "",
        email: "",
        manager: "",
        manager_factor: 1,
        paymentMethod: "PayPal"
    })
    
    function handleAddUser(e) {
        e.preventDefault()

        // Add user to bd
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        }).then (() => {
            console.log("new user added");
            setAddModalShow(false);
            setReRender(prevReRender => !prevReRender)
        })
    }

    function handleAddClient(e) {
        e.preventDefault()

        // Add user to bd
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newClient)
        }).then (() => {
            console.log("new client added");
            setAddModalShow(false);
        })
    }

  return (
        <div className={addModalShow ? "add-user-modal show" : "add-user-modal"}>
            {(url.slice(22) == "users") ? (
                // USER FORM
                <form onSubmit={handleAddUser}>
                    <p className="modal-title">{(newUser.first_name !== "") ? (newUser.first_name + " " + newUser.last_name) : "New User"}</p>
                    <img className="add-user-image" src="" alt="Add image"/>

                    <input className="modal-right-input" type="text" name="name" required placeholder="Name"
                    onChange={(e) => setNewUser({...newUser, first_name: e.target.value})}/>

                    <input className="modal-right-input" type="text" name="last_name" placeholder="Last name"
                    onChange={(e) => setNewUser({...newUser, last_name: e.target.value})}/>

                    <input className="modal-right-input" type="email" name="email" required placeholder="Email"
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>

                    <input className="modal-right-input" type="text" name="street" placeholder="Street"
                    onChange={(e) => setNewUser({...newUser, street: e.target.value})}/>

                    <input className="modal-right-input" type="text" name="city" placeholder="City"
                    onChange={(e) => setNewUser({...newUser, city: e.target.value})}/>

                    <input className="modal-right-input" type="text" name="country" placeholder="Country"
                    onChange={(e) => setNewUser({...newUser, country: e.target.value})}/>

                    <input className="modal-right-input" type="password" name="password" required placeholder="Password"
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>

                    <input className="modal-right-input" type="text" name="role" required placeholder="Role"
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}/>

                    <div className="modal-right-radio-input">
                        <p>Status:</p>
                        <div>
                            <input type="radio" name="status" value="Active" checked={newUser.status == "Active"}
                            onChange={(e) => setNewUser({...newUser, status: e.target.value})}/>
                            <label htmlFor="active">Active</label>
                        </div>
                        <div>
                            <input type="radio" name="status" value="Inactive" checked={newUser.status == "Inactive"}
                            onChange={(e) => setNewUser({...newUser, status: e.target.value})}/>
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                    </div>
                    <input className="modal-right-input" type="text" name="bankAccount" placeholder="Bank account"
                    onChange={(e) => setNewUser({...newUser, tekuci_racun: e.target.value})}/>
                    <div className="add-user-modal-btns">
                        <button className="btn-clear"
                        onClick={(e) => {
                            e.preventDefault()
                            setAddModalShow(false)
                        }}>Cancel</button>
                        <button className="btn-primary" type="submit" >Add user</button>
                    </div>
                </form>
            ) : (
                // CLIENT FORM
                <form onSubmit={handleAddClient}>
                    <p className="modal-title">{(newClient.client_name !== "") ? newClient.client_name : "New Client"}</p>
                    <img className="add-user-image" src="" alt="Add image"/>
                    <input className="modal-right-input" type="text"
                    onChange={(e) => setNewClient({...newClient, client_name: e.target.value})} name="name" required placeholder="Client name:"/>
                    <input className="modal-right-input" type="email" 
                    onChange={(e) => setNewClient({...newClient, email: e.target.value})} name="email" required placeholder="Email:"/>
                    <input className="modal-right-input" type="text" 
                    onChange={(e) => setNewClient({...newClient, manager: e.target.value})} name="manager" placeholder="Manager:"/>
                    <input className="modal-right-input" type="number" 
                    onChange={(e) => setNewClient({...newClient, manager_factor: e.target.value})} name="manager_factor" />
                    <div className="modal-right-radio-input">
                        <p>Payment method:</p>
                        <div>
                            <input type="radio" name="payment" value="PayPal" checked={newClient.paymentMethod == "PayPal"}
                            onChange={(e) => setNewClient({...newClient, paymentMethod: e.target.value})}/>
                            <label htmlFor="PayPal">PayPal</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" value="wireTransfer" checked={newClient.paymentMethod == "wireTransfer"}
                            onChange={(e) => setNewClient({...newClient, paymentMethod: e.target.value})}/>
                            <label htmlFor="wireTransfer">Wire transfer</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" value="bitcoin" checked={newClient.paymentMethod == "bitcoin"}
                            onChange={(e) => setNewClient({...newClient, paymentMethod: e.target.value})}/>
                            <label htmlFor="bitcoin">Bitcoin</label>
                        </div>
                    </div>
                    <div className="add-user-modal-btns">
                        <button className="btn-clear"
                        onClick={(e) => {
                            e.preventDefault()
                            setAddModalShow(false)
                        }}>Cancel</button>
                        <button className="btn-primary" type="submit" >Add user</button>
                    </div>
                </form>
            )}
        </div>
  )
}

export default AddModal