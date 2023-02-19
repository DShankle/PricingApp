import React, { useState, useEffect } from 'react';

const PriceItems = () => {
    const [items, setItems] = useState([]);
    const [sortType, setSortType] = useState('');
    const dataType = 1;

    useEffect(() => {
        const sortArray = type => {
            const types = {
                calories: 'calories',
                currentPrice: 'currentPrice',
            };
            fetch(`item/${dataType}`)
                .then((results) => {
                    return results.json();
                })
                .then(data => {
                    const sortProperty = types[type];
                    const sorted = data.sort((a, b) => a[sortProperty] > b[sortProperty] ? 1 : -1);
                    setItems(sorted);
                })
        }
        sortArray(sortType);
    }, [sortType]);

    const [open, setOpen] = React.useState(false);

    var calorieSort = false;

    function sortBy() {
        if (calorieSort === true) {
            setSortType('calories');
        }
        else {
            setSortType('currentPrice');
        }

    }

    const handleMenuOne = () => {
        calorieSort = true;
        sortBy();
    };

    const handleMenuTwo = () => {
        calorieSort = false;
        sortBy();
    };


const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };


    return (
        <div className="dropdown">
            {React.cloneElement(trigger, {
                onClick: handleOpen,
            })}
            {open ? (
                <ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menu-item">
                            {React.cloneElement(menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick();
                                    setOpen(false);
                                },
                            })}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

    return (
        <main>
            <Dropdown
                trigger={<button>Sort by:</button>}
                menu={[
                    <button onClick={handleMenuOne}>Calories</button>,
                    <button onClick={handleMenuTwo}>Price</button>,
                ]}
            />
            {
                items.map((item) =>
                <div className="price-cell">
                    <h3>{item.title}</h3>
                    <img src={item.imagePath} alt="burger" />
                </div>
            )
            }


        </main>
        )
}
export default PriceItems;