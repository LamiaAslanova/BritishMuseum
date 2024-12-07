import React, { useContext } from 'react'
import MainContext from '../../../../context/context'
import { Link } from 'react-router-dom'

const HeadingMain = () => {

    const { searchQuery, handleSearchChange, filteredItems, dropdownVisible, clearSearch, detailPathSearch, searchContainerRef } = useContext(MainContext)

    return (
        <div className="search" ref={searchContainerRef}>
            <input type="text" placeholder='What are you looking for?' value={searchQuery} onChange={handleSearchChange} />
            <i id='search' class="fa-solid fa-magnifying-glass"></i>
            {searchQuery && (
                <button onClick={clearSearch} className="clear__search"><i class="fa-solid fa-xmark"></i></button>
            )}
            {dropdownVisible && (
                <div className="search-dropdown">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => {
                            return (
                                <Link to={detailPathSearch(item.category, item._id)} key={index} className="search-dropdown-item">
                                    <div className="search-dropdown-item__title">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="search-dropdown-item__image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="search-dropdown-item__icon">
                                        <i id='go-to' class="fa-solid fa-circle-chevron-right"></i>
                                    </div>
                                </Link>
                            )
                        })
                    ) : (
                        <div className="nothing">No results found</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default HeadingMain