import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getItemsAsync, deleteItemAsync, deleteItemsAsync} from "../redux/items/thunks";
import styles from '../styles/Inventory.module.css';
const Inventory = () => {
    const items = useSelector(state => state.items.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);


    const handleDelete = (item) => {
        dispatch(deleteItemAsync(item));
    };

    const handleDeleteAll = () => {
        dispatch(deleteItemsAsync());
    };

    return (
        <div>
            <ul  className={styles.inventory}>
                {[].concat(items).map((item, index) => (
                    <li key={index}  className={styles.inventoryItem}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} width="150" height="150" />
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleDelete(item)}>X</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    );
};

export default Inventory;