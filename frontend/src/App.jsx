import React, { useEffect, useRef, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import './reset.css'
import './App.css'
import axios from 'axios'

const App = () => {
  const routes = createBrowserRouter(ROUTES)

  const [exhibitions, setExhibitions] = useState([])
  const [events, setEvents] = useState([])
  const [collections, setCollections] = useState([])
  const [shop, setShop] = useState([])
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [shopCartItems, setShopCartItems] = useState(localStorage.getItem('shopCartItems') ? JSON.parse(localStorage.getItem('shopCartItems')) : [])
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sort, setSort] = useState(null)
  const [search, setSearch] = useState('')
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0)
  const searchContainerRef = useRef(null)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.all([
          axios.get('http://localhost:8080/exhibitions'),
          axios.get('http://localhost:8080/events'),
          axios.get('http://localhost:8080/collections'),
          axios.get('http://localhost:8080/shop')
        ])

        const [response1, response2, response3, response4] = responses
        setExhibitions(response1.data)
        setEvents(response2.data)
        setCollections(response3.data)
        setShop(response4.data)
        // console.log(responses)
      }
      catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const getDetailPath = (category, id) => {
    return category === 'Special' ? `/exhibition-details/${id}` : `/free-exhibition-details/${id}`
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems)),

      localStorage.setItem('shopCartItems', JSON.stringify(shopCartItems))
  }, [cartItems, shopCartItems])

  const addToCart = (item) => {
    const target = cartItems.find(x => x.item._id === item._id)
    if (!target) {
      let newCartItem = {
        item: item,
        count: 1,
        totalPrice: item.price
      }
      setCartItems([...cartItems, newCartItem])
    }
  }

  const addToShopCart = (item) => {
    const target = shopCartItems.find(x => x.item._id === item._id);
    if (target) {
      target.count += item.quantity;
      target.totalPrice += item.price * item.quantity;
      setShopCartItems([...shopCartItems]);
    } else {
      let newShopCartItem = {
        item: item,
        count: item.quantity,
        totalPrice: item.price * item.quantity
      };
      setShopCartItems([...shopCartItems, newShopCartItem]);
    }
  }

  const increaseCart = (item) => {
    const target = cartItems.find(x => x.item._id === item._id)
    target.count += 1
    target.totalPrice += item.price
    setCartItems([...cartItems])
  }

  const increaseShopCart = (item) => {
    const target = shopCartItems.find(x => x.item._id === item._id)
    target.count += 1
    target.totalPrice += item.price
    setShopCartItems([...shopCartItems])
  }

  const decreaseCart = (item) => {
    const target = cartItems.find(x => x.item._id === item._id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice -= item.price
      setCartItems([...cartItems])
    }
  }

  const decreaseShopCart = (item) => {
    const target = shopCartItems.find(x => x.item._id === item._id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice -= item.price
      setShopCartItems([...shopCartItems])
    }
  }

  const removeFromCart = (item) => {
    setCartItems([...cartItems.filter(x => x.item._id !== item._id)])
  }

  const removeFromShopCart = (item) => {
    setShopCartItems([...shopCartItems.filter(x => x.item._id !== item._id)])
  }

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const handleSortChange = (event) => {
    const value = event.target.value;
    if (value === "low-to-high") {
      setSort({ field: 'price', asc: true });
    } else if (value === "high-to-low") {
      setSort({ field: 'price', asc: false });
    } else if (value === "a-z") {
      setSort({ field: 'title', asc: true });
    } else if (value === "z-a") {
      setSort({ field: 'title', asc: false });
    } else {
      setSort(null);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(e.target.value !== '');
  };

  const filteredItems =
    exhibitions.filter((exhibition) =>
      exhibition.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      .concat(
        events.filter((event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

  const clearSearch = () => {
    handleSearchChange({ target: { value: '' } });
  }

  const detailPathSearch = (category, id) => {
    return category === 'Special' ? `/exhibition-details/${id}` : (category === 'Free' ? `/free-exhibition-details/${id}` : `/event-details/${id}`)
  }

  const clickOutsideClear = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      handleSearchChange({ target: { value: '' } })
    }
  }

  useEffect(() => {

    document.addEventListener('mousedown', clickOutsideClear)
    return () => {
      document.removeEventListener('mousedown', clickOutsideClear)
    }
  }, [handleSearchChange])

  useEffect(() => {
    if (dropdownVisible) {
      const dropdown = document.querySelector('.search-dropdown')
      if (dropdown) {
        setDropdownHeight(dropdown.offsetHeight)
      }
    } else {
      setDropdownHeight(0)
    }
  }, [dropdownVisible, filteredItems])

  const contextData = { exhibitions, setExhibitions, events, setEvents, collections, setCollections, shop, setShop, getDetailPath, cartItems, setCartItems, addToCart, isDropdownVisible, setDropdownVisible, dropdownRef, buttonRef, toggleDropdown, closeDropdown, handleClickOutside, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, handleClickShowPassword, handleClickShowConfirmPassword, increaseCart, decreaseCart, removeFromCart, shopCartItems, setShopCartItems, addToShopCart, increaseShopCart, decreaseShopCart, removeFromShopCart, shuffleArray, sort, setSort, handleSortChange, search, setSearch, searchQuery, setSearchQuery, handleSearchChange, dropdownVisible, setIsDropdownVisible, filteredItems, clearSearch, detailPathSearch, dropdownHeight, setDropdownHeight, searchContainerRef, clickOutsideClear }

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App