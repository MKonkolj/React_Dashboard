import { useEffect, useState, useContext } from "react"
import Loading from "../Loaders/Loading"
import { AppContext } from "../../App"

function EditModal({ editModalShow, setEditModalShow, id }) {
    // in parent:
    // <EditModal editModalShow={editModalShow} setEditModalShow={setEditModalShow} id={id} />
    // to callback:
    //onClick={() => {
    //     setEditModalShow(true)
    //     setId(data.id)
    //   }}

    const { url, setReRender } = useContext(AppContext);

    //fetch selected user data
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();
    
    useEffect (() => {
        fetch(url + "/" + id)
        .then (res => {
            if(!res.ok) {
                throw Error ("Response fetch error")
            } return res.json();
        }).then (data => {
            setData(data)
            setIsLoading(false)
        }).catch (error => {
            console.log("errorčina na GET!\n" + error);
            setIsLoading(false);
            setError(error);
        })
    }, [editModalShow])

    function handleUpdateUser(e) {
        e.preventDefault()
        // Add user to db
        fetch(url + "/" + id, {
            method: "PUT",
            headers: {
                'Accept':'application/json',
                "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then (() => {
            console.log("user/client changes saved");
            setEditModalShow(false);
            setReRender(prevReRender => !prevReRender);
        }).catch (error => {
           console.log("errorčina na DELETE!\n" + error);
        })
    }

  return (
      <>
        {editModalShow && <div className="black-alpha fixed-center" onClick={() => setEditModalShow(false)}></div>}
        <div className={editModalShow ? "edit-user-modal show" : "edit-user-modal"}>
            {isLoading && <Loading />}
            {data && (url.slice(22) == "users") && (
            <form onSubmit={(e) => handleUpdateUser(e)}>
                <p className="modal-title">{data.first_name + " " + data.last_name}</p>
                <img className="add-user-image" src={"." + data.avatar.image_path} alt={"avatar for " + data.first_name + " " + data.last_name}/>
                <input className="modal-right-input" type="text" name="name" required value={data.first_name} placeholder="Name"
                onChange={(e) => setData({...data, first_name: e.target.value})}/>
                <input className="modal-right-input" type="text" name="last_name" value={data.last_name} placeholder="Last name"
                onChange={(e) => setData({...data, last_name: e.target.value})}/>
                <input className="modal-right-input" type="email" name="email" required value={data.email} placeholder="Email"
                onChange={(e) => setData({...data, email: e.target.value})}/>
                <input className="modal-right-input" type="text" name="street" value={data.street} placeholder="Street"
                onChange={(e) => setData({...data, street: e.target.value})}/>
                <input className="modal-right-input" type="text" name="city" value={data.city} placeholder="City"
                onChange={(e) => setData({...data, city: e.target.value})}/>
                <input className="modal-right-input" type="text" name="country" value={data.country} placeholder="Country"
                onChange={(e) => setData({...data, country: e.target.value})}/>
                <input className="modal-right-input" type="password" name="password" required value={data.password} placeholder="Password"
                onChange={(e) => setData({...data, password: e.target.value})}/>
                <input className="modal-right-input" type="text" name="role" required value={data.role} placeholder="Role"
                onChange={(e) => setData({...data, role: e.target.value})}/>
                <div className="modal-right-radio-input">
                    <p>Status:</p>
                    <div>
                        <label htmlFor="status-active">
                        <input type="radio" id="status-active" name="status" value="Active" checked={data.status == "Active"}
                        onChange={(e) => setData({...data, status: e.target.value})}/>
                        Active</label>
                    </div>
                    <div>
                        <label htmlFor="status-inactive">
                        <input type="radio" id="status-inactive" name="status" value="Inactive" checked={data.status == "Inactive"}
                        onChange={(e) => setData({...data, status: e.target.value})}/>
                        Inactive</label>
                    </div>
                </div>
                <input className="modal-right-input" type="text" name="bankAccount" value={data.tekuci_racun} placeholder="Bank account"
                onChange={(e) => setData({...data, tekuci_racun: e.target.value})}/>
                <div className="add-user-modal-btns">
                    <button className="btn-clear"
                    onClick={(e) => {
                        e.preventDefault()
                        setEditModalShow(false)
                    }}>Cancel</button>
                    <button className="btn-primary" type="submit">Save changes</button>
                </div>
            </form>)}
            {data && (url.slice(22) == "clients") && (
                // CLIENT FORM
                <form onSubmit={handleUpdateUser}>
                    <p className="modal-title">{data.client_name}</p>
                    <img className="add-user-image" src={data.avatar} alt="Add image"/>
                    <input className="modal-right-input" type="text" name="client_name" required placeholder="Client name:"
                    value={data.client_name}
                    onChange={(e) => setData({...data, client_name: e.target.value})}/>
                    <input className="modal-right-input" type="email" name="email" required placeholder="Email:"
                    value={data.email}
                    onChange={(e) => setData({...data, email: e.target.value})}/>
                    <input className="modal-right-input" type="text" name="manager" placeholder="Manager:"
                    value={data.manager}
                    onChange={(e) => setData({...data, manager: e.target.value})}/>
                    <input className="modal-right-input" type="number" name="manager_factor"
                    value={data.manager_factor}
                    onChange={(e) => setData({...data, manager_factor: e.target.value})}/>
                    <div className="modal-right-radio-input">
                        <p>Payment method:</p>
                        <div>
                            <label htmlFor="payment-paypal">
                            <input type="radio" id="payment-paypal" name="paymentMethod" value="PayPal" checked={data.paymentMethod == "PayPal"}
                            onChange={(e) => setData({...data, paymentMethod: e.target.value})}/>
                            PayPal</label>
                        </div>
                        <div>
                            <label htmlFor="payment-wire">
                            <input type="radio" id="payment-wire" name="paymentMethod" value="wireTransfer" checked={data.paymentMethod == "wireTransfer"}
                            onChange={(e) => setData({...data, paymentMethod: e.target.value})}/>
                            Wire transfer</label>
                        </div>
                        <div>
                            <label htmlFor="payment-bitcoin">
                            <input type="radio" id="payment-bitcoin" name="paymentMethod" value="bitcoin" checked={data.paymentMethod == "Bitcoin"}
                            onChange={(e) => setData({...data, paymentMethod: e.target.value})}/>
                            Bitcoin</label>
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
    </>
  )
}

export default EditModal